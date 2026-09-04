#!/usr/bin/env node
// check-images.mjs — WU0.3 CI gate: every md image reference must resolve.
//
// Reference forms scanned (per md file):
//   ![alt](target ...)        markdown image (first whitespace token = target)
//   <img src="...">           inline HTML
// Resolution (design D1 / R13):
//   /assets/<rest>  -> <assetsRoot>/<rest>          (mirrored 1:1 by import)
//   relative        -> relative to the md file's dir (co-located files, R13)
//   other absolute  -> reported separately, NOT failing (out of assets scope)
// Skipped: http(s):, //, data:, mailto:; anchors/queries stripped; code fences ignored.
//
// Exit contract: 0 = all resolvable refs exist; 1 = at least one missing ref;
//                2 = usage/environment error.
//
// Usage: node check-images.mjs <docsDir> <assetsRoot>

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, join, dirname, posix } from 'node:path';

const [argDocs, argAssets] = process.argv.slice(2);
if (!argDocs || !argAssets) {
  console.error('Usage: node check-images.mjs <docsDir> <assetsRoot>');
  process.exit(2);
}
const docsDir = resolve(argDocs);
const assetsRoot = resolve(argAssets);
if (!existsSync(docsDir)) {
  console.error(`docsDir does not exist: ${docsDir}`);
  process.exit(2);
}

function walk(dir, out) {
  for (const name of readdirSync(dir).sort()) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

function extractRefs(text) {
  const refs = [];
  let inFence = false;
  for (const line of text.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    for (const m of line.matchAll(/!\[[^\]]*\]\(\s*([^)\s]+)/g)) refs.push(m[1]);
    for (const m of line.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) refs.push(m[1]);
  }
  return refs;
}

const files = walk(docsDir, []);
const stats = { files: files.length, refs: 0, assetsRefs: 0, relativeRefs: 0, external: 0, otherAbsolute: 0 };
const missing = [];
const otherAbsolute = [];
const perFile = {};

for (const file of files) {
  const rel = file.slice(docsDir.length + 1);
  for (const raw of extractRefs(readFileSync(file, 'utf8'))) {
    const target = raw.split('#')[0].split('?')[0];
    stats.refs++;
    if (!target) continue;
    if (/^(https?:)?\/\//.test(target) || target.startsWith('data:') || target.startsWith('mailto:')) {
      stats.external++;
      continue;
    }
    let abs;
    if (target.startsWith('/assets/')) {
      stats.assetsRefs++;
      abs = join(assetsRoot, target.slice('/assets/'.length));
    } else if (target.startsWith('/')) {
      stats.otherAbsolute++;
      otherAbsolute.push({ file: rel, target });
      continue;
    } else {
      stats.relativeRefs++;
      abs = join(dirname(file), target);
    }
    if (!existsSync(abs)) missing.push({ file: rel, target });
    perFile[rel] = (perFile[rel] || 0) + 1;
  }
}

const sortedMissing = missing.sort((a, b) => (a.file + a.target).localeCompare(b.file + b.target));
console.log(`files scanned:        ${stats.files}`);
console.log(`image refs total:     ${stats.refs}`);
console.log(`  /assets/ refs:      ${stats.assetsRefs}`);
console.log(`  relative refs:      ${stats.relativeRefs}`);
console.log(`  external (skipped): ${stats.external}`);
console.log(`  other absolute:     ${stats.otherAbsolute} (reported, not failing)`);
const bp = perFile['docs/master-data/business-partner.md'];
if (bp) console.log(`acceptance sample:    business-partner.md refs = ${bp}`);
if (otherAbsolute.length) {
  console.log('other absolute refs (sample):');
  for (const o of otherAbsolute.slice(0, 10)) console.log(`  ${o.file} -> ${o.target}`);
}
if (sortedMissing.length) {
  console.error(`MISSING TARGETS (${sortedMissing.length}):`);
  for (const m of sortedMissing.slice(0, 50)) console.error(`  ${m.file} -> ${m.target}`);
  if (sortedMissing.length > 50) console.error(`  ... and ${sortedMissing.length - 50} more`);
  process.exit(1);
}
console.log('check-images: PASS (0 missing targets)');
