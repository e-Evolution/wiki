#!/usr/bin/env node
// strip-frontmatter.mjs — drop `sticky` and `icon` top-level frontmatter keys
// from every *.md under DOCS_DIR. No external dependencies.
//
// Usage: node strip-frontmatter.mjs <DOCS_DIR> [REPORT_PATH]
//
// Contract (design D4 / spec content-migration):
//   - Only leading YAML frontmatter blocks (`---` ... `---`) are parsed with a
//     small built-in line parser; `title`, `author`, and any other key are kept.
//   - Files without frontmatter are left byte-identical (untouched).
//   - Per-file assertion: body bytes (everything after the closing `---`
//     line) must be byte-identical before and after the edit; a mismatch
//     exits non-zero naming the file.
//   - Emits a report (stdout, plus REPORT_PATH when given) with totals.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('usage: node strip-frontmatter.mjs <DOCS_DIR> [REPORT_PATH]');
  process.exit(2);
}
const DOCS_DIR = args[0];
const REPORT_PATH = args[1];
const DROP_KEYS = new Set(['sticky', 'icon']);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (entry.endsWith('.md')) out.push(p);
  }
  return out;
}

// Locate the frontmatter extent: returns { fmEnd, bodyStart } where fmEnd is
// the index of the closing '---' line, or null when no frontmatter exists.
function frontmatterExtent(lines) {
  if (lines.length < 2 || lines[0].trim() !== '---') return null;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') return { fmEnd: i, bodyStart: i + 1 };
  }
  return null; // opening fence without close → treat as no frontmatter
}

// Returns { lines: pruned frontmatter lines, dropped: Set of top-level keys }
// A top-level key starts at column 0 (`key:` or `key: value`); every
// following indented/blank line belongs to that key's block.
function pruneFrontmatter(fmLines) {
  const out = [];
  const dropped = new Set();
  let current = null;
  for (const line of fmLines) {
    if (/^[A-Za-z0-9_-]+\s*:/.test(line) || line === '') {
      const key = line.match(/^([A-Za-z0-9_-]+)\s*:/);
      current = key ? key[1] : null;
    }
    if (current === null) { out.push(line); continue; }
    if (DROP_KEYS.has(current)) { dropped.add(current); continue; }
    out.push(line);
  }
  return { lines: out, dropped };
}

const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');

const files = walk(DOCS_DIR).sort();
const stats = {
  total: 0, withFrontmatter: 0, stickyRemoved: 0, iconRemoved: 0,
  titleRetained: 0, assertionFailures: 0, modified: 0,
};
const failures = [];

for (const file of files) {
  stats.total++;
  const original = readFileSync(file);
  const lines = original.toString('utf8').split('\n');
  const ext = frontmatterExtent(lines);
  if (!ext) continue; // no frontmatter → leave byte-identical
  stats.withFrontmatter++;

  const { lines: pruned, dropped } = pruneFrontmatter(lines.slice(1, ext.fmEnd));
  if (dropped.has('sticky')) stats.stickyRemoved++;
  if (dropped.has('icon')) stats.iconRemoved++;
  if (pruned.some((l) => /^title\s*:/.test(l))) stats.titleRetained++;
  if (dropped.size === 0) continue; // nothing to change

  const bodyBefore = lines.slice(ext.bodyStart).join('\n');
  const newLines = ['---', ...pruned, '---', ...lines.slice(ext.bodyStart)];
  const updated = Buffer.from(newLines.join('\n'), 'utf8');
  // In the NEW array the body starts after '---' + pruned + the closing '---'.
  const bodyStartInNew = pruned.length + 2;
  const bodyAfter = updated.toString('utf8').split('\n').slice(bodyStartInNew).join('\n');

  if (sha256(Buffer.from(bodyBefore, 'utf8')) !== sha256(Buffer.from(bodyAfter, 'utf8'))
    || bodyBefore.split('\n').length !== bodyAfter.split('\n').length) {
    stats.assertionFailures++;
    failures.push(file);
    continue;
  }
  writeFileSync(file, updated);
  stats.modified++;
}

const lines = [
  '# Frontmatter strip report',
  `docs_dir: ${DOCS_DIR}`,
  `total_md_processed: ${stats.total}`,
  `files_with_frontmatter: ${stats.withFrontmatter}`,
  `files_with_sticky_removed: ${stats.stickyRemoved}`,
  `files_with_icon_removed: ${stats.iconRemoved}`,
  `files_retaining_title: ${stats.titleRetained}`,
  `files_modified: ${stats.modified}`,
  `assertion_failures: ${stats.assertionFailures}`,
  ...(failures.length ? ['failed_files:', ...failures.map((f) => `  - ${relative(DOCS_DIR, f)}`)] : []),
];
const report = lines.join('\n') + '\n';
console.log(report);
if (REPORT_PATH) writeFileSync(REPORT_PATH, report);

if (stats.assertionFailures > 0) process.exit(1);
