#!/usr/bin/env node
// gen-version-trees.mjs — WU0.2: build the 7 non-current docmd version trees (design D2/D3).
//
// Per D3: each non-current version carries its source downloads/updates/<line> tree
// under docs-<id>/updates/, plus a landing docs-<id>/index.md and a minimal
// docs-<id>/navigation.json. The current version (rs5x) keeps the full corpus at
// the docs/ root and gets no separate tree.
//
// Dirs are ALWAYS sanitized (rs4x, rs3x, ...); dotted ids (OQ1) would be a
// config-only swap of the "id" values, never a content move.
//
// Post-condition: /updates and every nav child resolve inside each version tree;
// exits 1 on broken paths. Emits the D2 `versions` block on stdout.
//
// Usage: node gen-version-trees.mjs <targetRootWithDocs>

import { cpSync, writeFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';

const VERSIONS = [
  { id: 'rs4x', label: 'RS 4.x', line: 'downloads/updates/rs-4.x' },
  { id: 'rs3x', label: 'RS 3.x', line: 'downloads/updates/rs-3.x' },
  { id: 'rs2x', label: 'RS 2.x', line: 'downloads/updates/rs-2.x' },
  { id: 'rs1x', label: 'RS 1.x', line: 'downloads/updates/rs-1.x' },
  { id: 'adm394', label: 'ADempiere 3.9.4', line: 'downloads/updates/adempiere-3.9.4' },
  { id: 'tes', label: 'T.E.S', line: 'downloads/updates/adempiere-T.E.S' },
  { id: 'devices', label: 'Devices', line: 'downloads/updates/devices' },
];

const CURRENT = { id: 'rs5x', dir: 'docs', label: 'RS 5.x (current)' };

const root = resolve(process.argv[2] || '.');
const docsDir = join(root, 'docs');
if (!existsSync(docsDir)) {
  console.error(`docs/ not found under ${root} — run import-tree.sh first`);
  process.exit(2);
}

let allGood = true;
for (const v of VERSIONS) {
  const src = join(docsDir, v.line);
  if (!existsSync(src)) {
    console.error(`MISSING source line for ${v.id}: ${src}`);
    allGood = false;
    continue;
  }
  const dest = join(root, `docs-${v.id}`);
  rmSync(join(dest, 'updates'), { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  cpSync(src, join(dest, 'updates'), { recursive: true });

  // Minimal per-version navigation: landing + /updates with its top entries.
  const children = readdirSync(join(dest, 'updates'))
    .filter((n) => n !== 'index.md')
    .sort()
    .map((n) => ({ title: n.replace(/\.md$/, ''), path: `/updates/${n.replace(/\.md$/, '')}` }));
  const nav = [{ title: 'Actualizaciones', path: '/updates', children }];
  writeFileSync(join(dest, 'navigation.json'), `${JSON.stringify(nav, null, 2)}\n`);
  writeFileSync(join(dest, 'index.md'), [
    `---`,
    `title: "${v.label}"`,
    `---`,
    ``,
    `# ${v.label}`,
    ``,
    `Versión de documentación **${v.label}** de ERpya.`,
    ``,
    `- [Notas de actualización](/updates/)`,
    ``,
    `Para la documentación completa (RS 5.x) use la versión actual.`,
    ``,
  ].join('\n'));

  // Resolver: /updates + every child must resolve inside this version tree.
  const paths = ['/updates', ...children.map((c) => c.path)];
  const broken = paths.filter((p) => {
    const d = join(dest, p.replace(/^\//, ''));
    return !existsSync(`${d}.md`) && !existsSync(`${d}/index.md`);
  });
  if (broken.length) {
    console.error(`[${v.id}] BROKEN: ${broken.join(', ')}`);
    allGood = false;
  } else {
    console.log(`[${v.id}] tree ok: ${paths.length} paths resolved (docs-${v.id}/)`);
  }
}

console.log('\nD2 versions block:');
const block = {
  current: CURRENT.id,
  position: 'sidebar',
  all: [
    { id: CURRENT.id, dir: CURRENT.dir, label: CURRENT.label },
    ...VERSIONS.map((v) => ({ id: v.id, dir: `docs-${v.id}`, label: v.label })),
  ],
};
console.log(JSON.stringify(block, null, 2));
process.exit(allGood ? 0 : 1);
