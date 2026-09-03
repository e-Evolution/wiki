#!/usr/bin/env node
// gen-navigation.mjs — WU0.2: parse erpcya/docs src/.vuepress/sidebar.ts and emit
// docmd navigation.json for the current version (docs/ root).
//
// Transform (per spec C10 / design D1):
//   - group {text, prefix, children} -> {title, path: prefix, children} (clickable landing)
//   - leaf link with trailing slash  -> directory-index path (no trailing slash)
//   - activeMatch                    -> dropped (VuePress-only)
//   - icons: vuepress-theme-hope uses Iconify names; docmd uses Lucide kebab-case (C8).
//     Mapped to the closest Lucide equivalent where one exists; otherwise dropped
//     (icons are decorative; a wrong name would render a broken glyph).
//
// Post-condition: every emitted nav path resolves in the imported tree
// (docs/<path>.md or docs/<path>/index.md, "/" -> docs/index.md); exits 1 on broken paths.
//
// Usage: node gen-navigation.mjs <sourceRepoRoot|sidebar.ts> <targetDocsDir> [outNavPath]

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const ICON_MAP = {
  'id-card-clip': 'id-card',
  'list-check': 'list-checks',
  'house-laptop': 'laptop',
  'file-export': 'file-output',
  'layer-group': 'layers',
  'people-group': 'users',
  'people-carry-box': 'package',
  'file-zipper': 'archive',
  'group-arrows-rotate': 'refresh-cw',
};
const ICON_IDENTITY = new Set([
  'user', 'newspaper', 'rocket', 'box', 'microchip', 'book', 'bookmark',
  'fingerprint', 'sliders', 'thumbtack', 'users', 'download',
]);

function mapIcon(name) {
  if (!name) return undefined;
  if (ICON_MAP[name]) return ICON_MAP[name];
  if (ICON_IDENTITY.has(name)) return name;
  return undefined;
}

function loadSidebarArray(sidebarPath) {
  const src = readFileSync(sidebarPath, 'utf8');
  const m = src.match(/sidebar\(\s*(\[[\s\S]*\])\s*\)/);
  if (!m) throw new Error(`sidebar([...]) array literal not found in ${sidebarPath}`);
  // The literal is plain JS object syntax (the .ts wrapper is stripped by the match).
  return new Function(`return ${m[1]}`)();
}

function joinPath(base, child) {
  if (child.startsWith('/')) return child;
  return (base.endsWith('/') ? base : base + '/') + child;
}

// docmd paths have no trailing slash; "/" is the site root.
function toNavPath(p) {
  const s = p.replace(/\/+$/, '');
  return s === '' ? '/' : s;
}

function toDocmdItems(arr, prefix, out) {
  for (const item of arr) {
    if (typeof item === 'string') {
      if (item === '/') {
        out.push({ title: 'Inicio', path: '/' });
        continue;
      }
      // String leaf: resolves against the current group prefix (VuePress rule).
      const path = toNavPath(joinPath(prefix, item));
      const raw = item.replace(/\/+$/, '').split('/').pop();
      const title = /^[a-z]/.test(raw) ? raw[0].toUpperCase() + raw.slice(1) : raw;
      out.push({ title, path });
      continue;
    }
    if (item.children) {
      // A child group: with a prefix it also gets a clickable landing path;
      // without one it is a heading-only group (children resolve under the
      // parent prefix) and gets no path (docmd auto-filters broken links).
      const curPrefix = item.prefix !== undefined ? joinPath(prefix, item.prefix) : prefix;
      const group = { title: item.text, children: [] };
      if (item.prefix !== undefined) group.path = toNavPath(curPrefix);
      const icon = mapIcon(item.icon);
      if (icon) group.icon = icon;
      toDocmdItems(item.children || [], curPrefix, group.children);
      out.push(group);
    } else if (item.link !== undefined) {
      const leaf = { title: item.text, path: toNavPath(item.link) };
      const icon = mapIcon(item.icon);
      if (icon) leaf.icon = icon;
      out.push(leaf);
    } else {
      throw new Error(`sidebar item without prefix/link: ${JSON.stringify(item)}`);
    }
  }
}

function resolves(docsDir, p) {
  if (p === '/') return existsSync(`${docsDir}/index.md`);
  const d = `${docsDir}${p}`;
  return existsSync(`${d}.md`) || existsSync(`${d}/index.md`);
}

function walkPaths(items, acc) {
  for (const it of items) {
    if (it.path) acc.push(it.path); // heading-only groups carry no path
    if (it.children) walkPaths(it.children, acc);
  }
  return acc;
}

const [argInput, argDocs, argOut] = process.argv.slice(2);
if (!argInput || !argDocs) {
  console.error('Usage: node gen-navigation.mjs <sourceRepoRoot|sidebar.ts> <targetDocsDir> [outNavPath]');
  process.exit(2);
}
const input = resolve(argInput);
const sidebarPath = existsSync(`${input}/src/.vuepress/sidebar.ts`)
  ? `${input}/src/.vuepress/sidebar.ts`
  : input;
const docsDir = resolve(argDocs);
const outPath = resolve(argOut || `${docsDir}/navigation.json`);

const nav = [];
toDocmdItems(loadSidebarArray(sidebarPath), '/', nav);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, `${JSON.stringify(nav, null, 2)}\n`);

// Post-condition: 0 broken nav paths against the imported tree.
const paths = walkPaths(nav, []);
const broken = paths.filter((p) => !resolves(docsDir, p));
console.log(`nav items written: ${outPath}`);
console.log(`nav paths resolved: ${paths.length - broken.length}/${paths.length}`);
if (broken.length) {
  console.error(`BROKEN PATHS:\n${broken.join('\n')}`);
  process.exit(1);
}
console.log('resolver: 0 broken paths');
