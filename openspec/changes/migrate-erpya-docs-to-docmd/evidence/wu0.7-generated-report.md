# WU0.7 Generated Outputs — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU0.7 generated nav version-trees redirects", token `sha256:4c04aefe…`
- All outputs generated in-repo from the committed WU0.5/WU0.6 tree by the WU0.2 scripts (regenerable in one command each).

## 1. docs/navigation.json (gen-navigation.mjs)

- 84 items, 69 path-bearing; **resolver: 69/69 → 0 broken paths** against the in-repo tree.
- 15 prefix-less subgroups emitted as heading-only groups (no path); Iconify→Lucide mapping (9 mapped, 12 identity, 0 dropped).

## 2. Version trees (gen-version-trees.mjs) — 7 trees, 774 files

Per-version census vs the source line (spec acceptance: counts vs source, not line diffs):

| tree | updates files | source line | top-level (index + nav) |
|---|---|---|---|
| docs-rs4x | 111 | downloads/updates/rs-4.x: 111 | 2 |
| docs-rs3x | 111 | rs-3.x: 111 | 2 |
| docs-rs2x | 111 | rs-2.x: 111 | 2 |
| docs-rs1x | 65 | rs-1.x: 65 | 2 |
| docs-adm394 | 334 | adempiere-3.9.4: 334 | 2 |
| docs-tes | 4 | adempiere-T.E.S: 4 | 2 |
| docs-devices | 24 | devices: 24 | 2 |

D2 `versions` block emitted on stdout matches the committed `docmd.config.json` verbatim (8 entries, sanitized ids, `position: sidebar`).

## 3. Redirects (gen-redirects.mjs — evolved this PR for R10)

- **Coverage manifest: 1,284 URLs — all identity** (per module: root 1, about 87, community 3, docs 344, downloads 844, product 5).
- **Config map: 0 non-identity entries** → `docmd.config.json` `redirects` regenerated from `redirects-map.json` = `{}`.
- This is the D5 cutover checklist: every old source URL is accounted for, and the zero-entry map **proves the cutover needs no redirects** (new canonical URL = old URL, trailing slash preserved — WU0.3/WU0.4 findings).
- Script evolution (R10, from 0.9.4 dist source): old array-of-{from,to} format is silently ineffective in 0.9.4; the working config surface is a `{from: to}` map of static meta-refresh pages where an identity entry would **overwrite the real page**. The script now emits (a) the full coverage manifest and (b) only non-identity entries into the config map. Expected-empty by design; the resolver (not the config) is the guarantee.

## Review surface (generated data — manifest/census-reviewed, not line-by-line)

- `docs/navigation.json` (generated)
- `docs-rs4x/ … docs-devices/` (774 files = updates copies + landings + navs)
- `redirects-manifest.md` (1,284 rows) + `redirects-map.json` (empty object)
- `docmd.config.json` — `redirects` section regenerated (rest untouched)
- `scripts/migrate/gen-redirects.mjs` — R10 evolution (hand-authored delta)

## Verdict

**PASS** — nav 0 broken, 7/7 trees exact vs source, coverage 1,284/1,284 with a zero-entry config map.
