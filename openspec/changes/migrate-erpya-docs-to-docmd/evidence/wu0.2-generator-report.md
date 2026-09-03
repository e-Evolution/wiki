# WU0.2 Generator-Tooling Dry-Run Report

- Date: 2026-09-03
- Executor: orchestrator (inline; local subagent model stalls on this workload)
- Scratch target: `/tmp/docmd-wu01-dryrun` (WU0.1 dry-run tree: imported + frontmatter-stripped)
- Source: `/tmp/erpcya-docs` (read-only clone of erpcya/docs)
- Ledger: objective "WU0.2 generator tooling", token `sha256:96ed4259…`

## Scripts delivered (outputs land in WU0.7, not this PR)

### gen-navigation.mjs
- Parses `src/.vuepress/sidebar.ts` by evaluating the `sidebar([...])` array literal (no manual retranscription; TS wrapper stripped by match).
- Transform per spec C10 / D1: groups → `{title, path, children}` with clickable landing for prefixed groups; **prefix-less subgroups become heading-only groups (no path)** — 15 of them (VuePress semantics: children resolve under the parent prefix); leaf links and string leaves → paths without trailing slash; `activeMatch` dropped.
- Icons: Iconify → Lucide kebab-case mapping (C8): 9 mapped (`id-card-clip→id-card`, `list-check→list-checks`, `house-laptop→laptop`, `file-export→file-output`, `layer-group→layers`, `people-group→users`, `people-carry-box→package`, `file-zipper→archive`, `group-arrows-rotate→refresh-cw`), 12 identity, 0 dropped (every icon in the sidebar has a Lucide equivalent).
- **Result: 84 nav items (6 top-level incl. root), 69 path-bearing items, resolver 69/69 → 0 broken paths.**

### gen-version-trees.mjs
- Builds the 7 non-current trees per D2/D3 (`docs-<id>/updates/` = copy of `downloads/updates/<line>/` + landing `index.md` + per-version `navigation.json`).
- Per-tree resolver (landing + every nav child):

| id | paths resolved | tree size |
|---|---|---|
| rs4x | 11 | 464K |
| rs3x | 11 | 452K |
| rs2x | 11 | 452K |
| rs1x | 7 | 272K |
| adm394 | 5 | 1.3M |
| tes | 2 | 24K |
| devices | 3 | 104K |

- D2 `versions` block emitted on stdout (current `rs5x` @ `docs`, sanitized ids, `position: sidebar`) — matches design D2 verbatim.
- Re-run over existing trees: idempotent (rm + re-copy).

### gen-redirects.mjs
- Walks the imported `docs/` tree; one entry per md file (D5). Convention D1: source URL = path + trailing slash, target = path without slash.
- **Result: exactly 1,284 entries** (asserted): `(root)` 1, `about` 87, `community` 3, `docs` 344, `downloads` 844, `product` 5.
- Outputs `redirects.json` (canonical `{"redirects":[{from,to}]}`, sorted) + `redirects-manifest.md` (totals, per-module, 10-entry sample).
- R10 note recorded: the exact docmd config property is smoke-verified against installed 0.9.4 in WU0.8.

## Bugs caught by the dry-run (all in the generators, fixed before commit)

1. String leaves (actual pages such as `"login"`, `"services/"`) were dropped by the root-`"/"`-only string branch — caught by the resolver (12/27 resolved).
2. `/index` strip used `slice(0,-7)` for a 6-char suffix, corrupting module landing `from` URLs (`/abou/`) — caught by the per-module count review.
3. Heading-only groups (no `path`) were passed to the resolver as `undefined` — caught by the resolver (empty broken entries).

All three post-conditions (resolver, count assertion, per-tree resolver) fired exactly as designed.

## Verdict

**PASS** — generators production-ready for WU0.7 (generated-and-committed outputs). Nav parity, version trees, and redirect map all reproduce from the imported tree with 0 broken paths and exact expected counts.
