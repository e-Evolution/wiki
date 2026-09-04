#!/usr/bin/env node
// gen-redirects.mjs — WU0.2: single source of the cutover redirect map (design D5).
// Judgment Day fix (F1/F5, 2026-09-04): also generates the old-sitemap .html
// URL-form class (1,085 redirects) from the committed oracle list.
//
// Convention (D1): every source (VuePress 2) URL is its path plus a trailing
// slash; the docmd URL is the same path without the slash. Directory-index
// forms (pages imported from README.md) follow the same rule at their dir.
// One entry per md file in the imported docs/ tree.
//
// URL convention (verified WU0.3/WU0.4, 0.9.4): docmd canonical URLs KEEP the
// trailing slash (301 -> 200), exactly like the old VuePress 2 URLs. Therefore:
//   from (old URL)  = path + trailing slash
//   to   (new URL)  = SAME path + trailing slash (canonical identity)
//
// R10 (closed from 0.9.4 dist source): config `redirects` is a MAP
// {from: to} emitted as static meta-refresh pages, and an entry whose `from`
// equals a built page path OVERWRITES that page. So:
//   <root>/redirects-manifest.md — cutover checklist (D5): old-sitemap census,
//     URL-form contract, identity vs non-identity classes, config-map count,
//     known accepted edge (F2), post-deploy verification table.
//   <root>/redirects-map.json    — the config map: ONLY non-identity entries
//     (from !== to): the 1,085 old .html leaf URLs + the 1 trailing-slash
//     %20-form entry. Also spliced into docmd.config.json `redirects` (that
//     field only; the rest of the file is preserved byte-for-byte).
//
// Oracle (F1): scripts/migrate/old-sitemap-urls.txt — the 1,284 old-sitemap
// URLs committed for reproducible offline generation (fetched 2026-09-04 from
// docs.erpya.com/sitemap.xml, URL host docs-md.erpya.com, paths kept
// byte-exact). For every oracle URL ending in .html:
//   from = exact old path with %20 decoded to a raw space (docmd writes
//          `from` as a literal filesystem path; the pre-existing entry
//          already uses a raw-space key)
//   to   = the page's canonical built URL: the script's docmd
//          slugifySegment modeling on the decoded path, .html stripped first
// round-1 v2 (2026-09-04): the EMITTED map `to` is the path RELATIVE to the
// from-location (base-independent: the same stub bytes work at the /wiki/
// subpath host and at a future custom-domain root — no regeneration at
// flip). The absolute canonical built URL stays the generator-side
// assertion target.
//
// Usage: node gen-redirects.mjs <targetDocsDir> <rootOut> [expectedMdCount=1284]

import { writeFileSync, readFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { resolve, join, posix } from 'node:path';

const [argDocs, argRoot, argExpected] = process.argv.slice(2);
if (!argDocs || !argRoot) {
  console.error('Usage: node gen-redirects.mjs <targetDocsDir> <rootOut> [expectedMdCount]');
  process.exit(2);
}
const docsDir = resolve(argDocs);
const root = resolve(argRoot);
const expected = Number(argExpected || 1284);
const oraclePath = join(root, 'scripts/migrate/old-sitemap-urls.txt');
const cfgPath = join(root, 'docmd.config.json');

// Oracle provenance (fixed constants: the manifest must be reproducible
// offline from the committed oracle file).
const ORACLE_FETCHED = '2026-09-04';
// Re-measured 2026-09-04 on the live old site (docs.erpya.com — the sitemap
// host docs-md.erpya.com is NXDOMAIN), parallel curl, no redirect following:
// 199/199 old trailing-slash URLs returned 200.
const OLD_SLASH_REMEASURED_200 = 199;

function fail(msg) {
  console.error(`ASSERT FAILED: ${msg}`);
  process.exit(1);
}

function walk(dir, out) {
  for (const name of readdirSync(dir).sort()) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

// docmd slugifies each route/output segment (dist engine/generator.js
// slugifyOutputPath + utils/auto-router.js slugifySegment): spaces -> '-',
// other unsafe URL chars -> '-', collapse '---', trim leading/trailing '-'.
// 'from' keeps the exact OLD source URL (legacy site served it verbatim);
// 'to' is the docmd BUILT URL, which may differ only where a filename needs
// slugification.
function slugifySegment(seg) {
  return (
    seg
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9\-_.~]/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/^-+|-+$/g, '') || seg
  );
}
function slugifyPath(p) {
  return p.split('/').map(slugifySegment).join('/');
}

// round-1 v2: emitted `to` is RELATIVE to the from-location (the same scheme
// docmd uses for its own relative page links). Base = the from-location's
// directory (the from itself when it is already a directory URL). This is
// base-independent: the identical stub file resolves at the subpath host and
// at a future domain root without regeneration.
function relativeTarget(from, toAbs) {
  const base = from.endsWith('/') ? from : posix.join(posix.dirname(from), '/');
  const rel = posix.relative(base, toAbs);
  if (rel === '' || rel.startsWith('/')) fail(`relative target failed for ${from} -> ${toAbs}`);
  const out = rel.endsWith('/') ? rel : `${rel}/`;
  if (posix.join(base, out) !== toAbs) fail(`relative target ${out} does not resolve to ${toAbs} from ${from}`);
  return out;
}

// ---- docs tree walk (unchanged): one entry per md file ----
const entries = [];
for (const file of walk(docsDir, [])) {
  const rel = file.slice(docsDir.length + 1).slice(0, -3); // strip ./ and .md
  let from;
  let to;
  if (rel.endsWith('/index') || rel === 'index') {
    const dirPath = rel === 'index' ? '' : rel.slice(0, -6); // strip '/index'
    const slugDir = slugifyPath(dirPath);
    from = dirPath === '' ? '/' : `/${dirPath}/`;
    to = slugDir === '' ? '/' : `/${slugDir}/`;
  } else {
    from = `/${rel}/`;
    to = `/${slugifyPath(rel)}/`;
  }
  entries.push({ from, to });
}

entries.sort((a, b) => (a.from < b.from ? -1 : a.from > b.from ? 1 : 0));
if (entries.length !== expected) {
  fail(`docs tree: expected ${expected} entries, produced ${entries.length}`);
}

// ---- oracle: old sitemap URL list (F1) ----
const oracle = readFileSync(oraclePath, 'utf8').split('\n').filter((l) => l.length > 0);
const oracleHtml = oracle.filter((l) => l.endsWith('.html'));
const oracleSlash = oracle.filter((l) => l.endsWith('/'));
if (oracle.length !== 1284) fail(`oracle total ${oracle.length} != 1284`);
if (oracleHtml.length !== 1085) fail(`oracle .html count ${oracleHtml.length} != 1085`);
if (oracleSlash.length !== 199) fail(`oracle trailing-slash count ${oracleSlash.length} != 199`);
if (oracle.filter((l) => l.includes('%20')).length !== 1) fail('oracle must contain exactly one %20 line');
for (const l of oracle) {
  if (!/^\/[A-Za-z0-9\-._~%\/]*$/.test(l)) fail(`oracle path shape unexpected: ${l}`);
  if (l.replace(/%20/g, '').includes('%')) fail(`oracle percent-encoding other than %20: ${l}`);
}

// .html class (F1): from = exact old path with %20 decoded to a raw space;
// to = the page's canonical built URL (slugifySegment modeling, .html
// stripped first).
const builtUrls = new Set(entries.map((e) => e.to));
const htmlEntries = oracleHtml.map((line) => {
  const from = line.replace(/%20/g, ' ');
  const stem = decodeURIComponent(from.slice(1, -'.html'.length)); // strip / and .html
  let to;
  if (stem === 'index' || stem.endsWith('/index')) {
    const dir = stem === 'index' ? '' : stem.slice(0, -'/index'.length);
    to = dir === '' ? '/' : `/${slugifyPath(dir)}/`;
  } else {
    to = `/${slugifyPath(stem)}/`;
  }
  if (!builtUrls.has(to)) fail(`.html redirect ${from} -> ${to} is not a built page URL`);
  return { from, to };
});

// Config map = walk non-identity entries (the trailing-slash %20 form) +
// the .html class. Identity entries are never emitted (R10: they would
// overwrite real pages).
const walkNonIdentity = entries.filter((e) => e.from !== e.to);
if (walkNonIdentity.length !== 1) {
  fail(`walk non-identity count ${walkNonIdentity.length} != 1 (expected the trailing-slash %20 entry)`);
}
const configEntries = [...walkNonIdentity, ...htmlEntries].map((e) => ({
  ...e,
  toOut: relativeTarget(e.from, e.to), // round-1 v2: relative, base-independent
}));
if (configEntries.length !== 1086) {
  fail(`config entries ${configEntries.length} != 1086 (1085 .html + 1 trailing-slash %20)`);
}

// Assertions before writing: from uniqueness (raw + after normalization —
// no two from values may normalize to the same path), to shape, and no from
// colliding with a built page path.
const normSeen = new Map();
for (const e of configEntries) {
  const norm = decodeURIComponent(e.from);
  if (normSeen.has(norm)) fail(`duplicate from after normalization: ${normSeen.get(norm)} == ${e.from}`);
  normSeen.set(norm, e.from);
}
for (const e of configEntries) {
  if (e.to !== '/' && !/^\/.+\/$/.test(e.to)) fail(`bad to shape for ${e.from}: ${e.to}`);
  if (e.toOut.startsWith('/') || !e.toOut.endsWith('/')) fail(`bad relative to shape for ${e.from}: ${e.toOut}`);
  if (builtUrls.has(e.from)) fail(`from ${e.from} is a built page path (entry would overwrite the page)`);
}

const configMap = {};
for (const e of [...configEntries].sort((a, b) => (a.from < b.from ? -1 : a.from > b.from ? 1 : 0))) {
  configMap[e.from] = e.toOut;
}

// ---- outputs ----
mkdirSync(root, { recursive: true });
writeFileSync(join(root, 'redirects-map.json'), `${JSON.stringify(configMap, null, 2)}\n`);

// docmd.config.json: replace ONLY the "redirects" field — string-aware brace
// scan from the key's opening '{'; every other byte is preserved.
const cfgRaw = readFileSync(cfgPath, 'utf8');
const keyMatch = /"redirects"\s*:\s*\{/.exec(cfgRaw);
if (!keyMatch) fail('"redirects" field not found in docmd.config.json');
const start = keyMatch.index + keyMatch[0].length - 1; // opening '{'
let depth = 0;
let end = -1;
let inStr = false;
let esc = false;
for (let i = start; i < cfgRaw.length; i++) {
  const c = cfgRaw[i];
  if (inStr) {
    if (esc) esc = false;
    else if (c === '\\') esc = true;
    else if (c === '"') inStr = false;
  } else if (c === '"') inStr = true;
  else if (c === '{') depth += 1;
  else if (c === '}' && --depth === 0) {
    end = i;
    break;
  }
}
if (end === -1) fail('unbalanced braces in docmd.config.json "redirects" value');
const fieldBody = Object.keys(configMap)
  .map((k) => `    ${JSON.stringify(k)}: ${JSON.stringify(configMap[k])}`)
  .join(',\n');
const newValue = fieldBody === '' ? '{}' : `{\n${fieldBody}\n  }`;
const cfgNext = `${cfgRaw.slice(0, start)}${newValue}${cfgRaw.slice(end + 1)}`;
const cfgParsed = JSON.parse(cfgNext); // must stay valid JSON
if (
  Object.keys(cfgParsed.redirects || {}).length !== configEntries.length ||
  Object.keys(configMap).some((k) => (cfgParsed.redirects || {})[k] !== configMap[k])
) {
  fail('docmd.config.json "redirects" field mismatch after splice');
}
writeFileSync(cfgPath, cfgNext);

// ---- cutover manifest (D5 checklist, corrected F5 semantics) ----
const perModule = {};
for (const l of oracle) {
  const top = l.split('/')[1] || '(root)';
  if (!perModule[top]) perModule[top] = { html: 0, slash: 0 };
  if (l.endsWith('.html')) perModule[top].html += 1;
  else perModule[top].slash += 1;
}
const perModuleRows = Object.entries(perModule)
  .sort(([a], [b]) => (a < b ? -1 : 1))
  .map(([k, v]) => `| ${k} | ${v.html} | ${v.slash} |`)
  .join('\n');

const sampleRows = [
  ...[...configEntries.filter((e) => e.from.endsWith('.html'))]
    .sort((a, b) => (a.from < b.from ? -1 : 1))
    .slice(0, 5),
  configEntries.find((e) => e.from.endsWith(' intercompany-process.html')),
  configEntries.find((e) => e.from === walkNonIdentity[0].from),
].map((e) => `| \`${e.from}\` | \`${e.toOut}\` |`).join('\n');

const manifest = [
  `# Redirects cutover manifest`,
  ``,
  `D5 cutover checklist for the VuePress 2 → docmd migration. Generated by`,
  `\`scripts/migrate/gen-redirects.mjs\` from (1) the imported \`docs/\` tree and`,
  `(2) the committed old-sitemap oracle \`scripts/migrate/old-sitemap-urls.txt\`.`,
  `Regenerate with \`node scripts/migrate/gen-redirects.mjs docs . 1284\` (re-runs`,
  `all assertions; offline-reproducible from the oracle file).`,
  ``,
  `## Old sitemap census`,
  ``,
  `Source: \`scripts/migrate/old-sitemap-urls.txt\` — 1,284 URLs, fetched ${ORACLE_FETCHED}`,
  `from \`docs.erpya.com/sitemap.xml\` (URL host \`docs-md.erpya.com\`, now NXDOMAIN;`,
  `the live old site is \`docs.erpya.com\`). Paths kept byte-exact (percent-encoding`,
  `as-is; exactly 1 line contains \`%20\`).`,
  ``,
  `| URL form | Count |`,
  `|---|---|`,
  `| \`.html\` leaf URLs | 1,085 |`,
  `| trailing-slash URLs | 199 |`,
  `| **total** | **1,284** |`,
  ``,
  `Per top module (\`.html\` / trailing-slash):`,
  ``,
  `| module | .html | trailing-slash |`,
  `|---|---|---|`,
  perModuleRows,
  ``,
  `## URL-form contract (measured)`,
  ``,
  `| URL form | Old site (VuePress 2) | New site (docmd 0.9.4) |`,
  `|---|---|---|`,
  `| \`.html\` leaf | 200 (served) | 404 as-is → meta-refresh stub → canonical 200 (this map) |`,
  `| trailing-slash (directory-index pages) | 200 (served) | 200 at the same URL (identity) |`,
  `| trailing-slash (leaf pages) | 404 (never served; absent from old sitemap) | 200 (canonical) |`,
  `| no-slash | 200 (leaf); 301 → slash (dir-index) | 301 → trailing-slash 200 |`,
  `| redirect stub \`to\` (this map) | — | RELATIVE path from the from-location (e.g. \`code-of-conduct/\`, \`../intercompany-process/\`) |`,
  ``,
  `Stub targets are base-independent: the same stub bytes resolve at the current`,
  `subpath host (\`https://e-evolution.github.io/wiki/...\`) and at a future custom`,
  `domain root — no regeneration at flip time.`,
  ``,
  `> **round-1 v2**: original absolute-target defect (404 targets at subpath) corrected to relative targets.`,
  ``,
  `## Identity (exact-URL): the 199 trailing-slash URLs`,
  ``,
  `The 199 old trailing-slash URLs are served at the SAME URL (200) on the new`,
  `site — no config entry is needed for any of them (a config entry whose`,
  `\`from\` equals a built page path would overwrite the real page — R10).`,
  ``,
  `Re-measured ${ORACLE_FETCHED} on the live old site (\`docs.erpya.com\`, parallel`,
  `curl, no redirect following): **${OLD_SLASH_REMEASURED_200}/199 returned 200** — the`,
  `entire trailing-slash class was actually served. Leaf trailing-slash forms`,
  `that are NOT in the old sitemap (e.g. \`/community/code-of-conduct/\`) 404 on`,
  `the old site — they were never served URLs, so no continuity is owed for them.`,
  ``,
  `## Non-identity: the 1,085 \`.html\` leaf URLs (F1)`,
  ``,
  `The old site served every leaf page at its \`.html\` URL; the new site serves`,
  `pages only at trailing-slash URLs, so as-is \`.html\` URLs 404 on the new site`,
  `and need redirects. The config map carries one meta-refresh entry per URL`,
  `(1,085 entries):`,
  ``,
  `- \`from\` = the exact old path, \`%20\` decoded to a raw space (docmd writes`,
  `  \`from\` as a literal filesystem path; the pre-existing entry already uses a`,
  `  raw-space key).`,
  `- \`to\` = the path RELATIVE to the from-location, resolving to the page's`,
  `  canonical built URL (identity trailing-slash form for 1,084 pages;`,
  `  slugified form for the %20 page) — base-independent (subpath + future`,
  `  custom-domain root, no regeneration at flip).`,
  `- Delivery (measured on the built tree): the \`.html\` stubs are flat HTML`,
  `  files served DIRECTLY at the old URL (200, 1 hop) — meta-refresh /`,
  `  \`window.location.replace\` → canonical 200. Only the trailing-slash`,
  `  %20 form is a directory stub, so it gets one extra Pages directory 301`,
  `  (2 hops).`,
  ``,
  `The %20 page carries 2 entries total:`,
  ``,
  `| old URL (served form) | map key (\`from\`) | \`to\` (relative to from) |`,
  `|---|---|---|`,
  `| \`/docs/other-process/intercompany-process/%20intercompany-process.html\` | \`…/ intercompany-process.html\` | \`intercompany-process/\` |`,
  `| \`/docs/other-process/intercompany-process/%20intercompany-process/\` | \`…/ intercompany-process/\` | \`../intercompany-process/\` |`,
  ``,
  `## Config map`,
  ``,
  `**1,086 entries** (1,085 \`.html\` + 1 trailing-slash %20 form) — written to`,
  `\`docmd.config.json\` \`redirects\` (that field only) and \`redirects-map.json\`.`,
  ``,
  `Every \`from\` is unique, every \`to\` (relative to its from-location) resolves to`,
  `a built trailing-slash page URL, and no \`from\` collides with a built page path`,
  `(asserted by the generator before writing). Note: a non-zero config map is`,
  `EXPECTED here — the \`.html\` class is genuinely non-identity (F5 correction of`,
  `the earlier "identity 1283 / zero config map" reading).`,
  ``,
  `## Known accepted edge (F2)`,
  ``,
  `The %20 page's NO-SLASH form (\`/docs/other-process/intercompany-process/%20intercompany-process\`)`,
  `301s with a raw space in the \`Location\` header — GitHub Pages directory`,
  `canonicalization over the literal-space redirect directory. RFC 3986-invalid,`,
  `but browsers self-repair it. Exactly 1 URL; the \`.html\` and trailing-slash`,
  `forms of that page both resolve to 200 via their redirect stubs. Accepted as-is.`,
  ``,
  `## Sample (first 5 .html + %20 pair)`,
  ``,
  `| from (map key) | to (relative) |`,
  `|---|---|`,
  sampleRows,
  ``,
  `## Post-deploy verification (owner fills after DNS flip)`,
  ``,
  `| # | Check | Expected | Result |`,
  `|---|---|---|---|`,
  `| 1 | Sample old \`.html\` URL, e.g. \`GET /community/code-of-conduct.html\` | 200 stub (flat file) → canonical \`/community/code-of-conduct/\` 200 | PENDING |`,
  `| 2 | 10 random \`.html\` URLs from \`scripts/migrate/old-sitemap-urls.txt\` | 200 on the final canonical URL (via stub) | PENDING |`,
  `| 3 | Trailing-slash identity sample, e.g. \`GET /about/\` | 200 at the same URL (no redirect) | PENDING |`,
  `| 4 | No-slash form, e.g. \`GET /community/code-of-conduct\` | 301 → 200 | PENDING |`,
  `| 5 | %20 page \`.html\` form | 200 stub (flat file) → canonical 200 | PENDING |`,
  `| 6 | %20 page trailing-slash form | 301 (directory canonicalization) → stub 200 → canonical 200 | PENDING |`,
  `| 7 | \`site/sitemap.xml\` \`<loc>\` count and \`llms.txt\` URL count | 2,051 each (redirect stubs are not pages) | PENDING |`,
  ``,
].join('\n');
writeFileSync(join(root, 'redirects-manifest.md'), manifest);

console.log(`coverage manifest: 1,284 old URLs (1,085 .html + 199 trailing-slash) -> ${join(root, 'redirects-manifest.md')}`);
console.log(`config map: ${configEntries.length} entries (1,085 .html + 1 trailing-slash %20) -> ${join(root, 'redirects-map.json')}`);
console.log(`docmd.config.json: "redirects" field replaced (${configEntries.length} entries, rest byte-preserved)`);
