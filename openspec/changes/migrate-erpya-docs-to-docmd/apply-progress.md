# Apply Progress — migrate-erpya-docs-to-docmd

Artifact store: openspec (repo-local). Delivery: stacked-to-main, remote e-Evolution/wiki.

## WU0.1 import tooling — DRY-RUN COMPLETE

- Scripts delivered: `scripts/migrate/import-tree.sh`, `scripts/migrate/strip-frontmatter.mjs`
  - Subagent `sdd-apply` wrote both (timed out at 1200s/18 turns before evidence); orchestrator completed inline.
  - `strip-frontmatter.mjs` body-index bug found by orchestrator review, patched, fixture-verified.
- Dry-run: **all green** — 1,284 md + 5,287 assets imported, source manifest untouched (6,688 files), idempotence byte-identical, strip 1,279 sticky / 1,064 icon / 1,282 title / 0 assertion failures. Full report: `evidence/wu0.1-dryrun-report.md`.
- New finding **R13**: 90 co-located non-md files in `docs/` (14 relative-only refs, 75 duplicates, 1 dead orphan) → WU0.8 smoke-test gate, bounded fallback ≤14 ref rewrites.
- Ledger: attempt 2 of 2 (post maintainer-approved reset), token `sha256:e7a09dc4…`.
- Status: commit + PR pending (this work unit's PR #1 of the stacked chain).

## WU0.2 generator tooling — DRY-RUN COMPLETE

- Scripts delivered: `scripts/migrate/gen-navigation.mjs`, `gen-version-trees.mjs`, `gen-redirects.mjs` (outputs land in WU0.7).
- Dry-run: **all green** — nav 84 items / 69 path-bearing / resolver 69/69 (0 broken); 7 version trees built and resolved (D2 block emitted verbatim); redirect map exactly 1,284 entries with correct per-module counts. Full report: `evidence/wu0.2-generator-report.md`.
- 3 generator bugs caught by the dry-run post-conditions and fixed pre-commit (string-leaf drop, /index slice width, heading-group resolver).
- Ledger: objective "WU0.2 generator tooling", token `sha256:96ed4259…`.

## WU0.3 CI tooling — DRY-RUN COMPLETE (both gates green)

- Scripts delivered: `scripts/ci/ci-validate.mjs` (MCP stdio → validate_docs; existence-based asset classification; committed baseline for pre-existing defects; R9 degraded build-scan mode), `scripts/ci/check-images.mjs` (5,672 refs, 0 missing; business-partner.md 309-ref sample).
- Key findings (full report: `evidence/wu0.3-ci-report.md`):
  1. **docmd canonical URLs keep trailing slash = identical to VuePress** → D5 redirect map is an IDENTITY map (WU0.7: emit canonical `to`).
  2. **OQ2 closed: full build = 1,284 pages in 7.4 s** → R2 mitigation unnecessary.
  3. validate_docs resolves /assets/ against docs source dir (4,907 mirror-strict flags; build + HTTP 200 prove runtime correct).
  4. Broken-link census: 43 README targets (rename-caused → 60-link rewrite verified in WU0.5) + 13 pre-existing (baseline) + 0 missing /assets/ images.
  5. R13 resolved early: docmd resolves co-located non-md (no move/rewrite needed).
  6. Config note: `description` is not a docmd top-level property (WU0.4 schema check).
- Ledger: objective "WU0.3 CI tooling", token `sha256:0ebd6cb2…`.

## WU0.5 content-fix list (from WU0.3 evidence)

1. Rewrite 60 `](…README.md)` links → directory-index form (verified).
2. Backslash → slash fix in `group-of-business-partners.md` (1 char).
3. Commit 13-entry `broken-links-baseline.json` (provenance: wu0.3-ci-report.md).

## WU0.4 config & workflows — COMPLETO (2 objetivos ledger: config zero-drift post-reset + lockfile 1,367 líneas bajo objetivo propio). PR #4.

- Delivered: `package.json` (exact pin 0.9.4, bin `docmd`), `docmd.config.json` (url subpath D8, versions verbatim D2, plugins D9; `redirects: {}` until WU0.7), `.github/workflows/docs.yml` (design §2.5 + bootstrap guards: gate needs docs/index.md, deploy needs assets/img), `build-benchmark.yml` (workflow_dispatch timed build → job summary), `.gitignore` += site/ node_modules/.
- Verified with exact repo bytes: npm ci → 0.9.4; 8-version build 2,051 pages 9.1 s; sitemap subpath prefix OK (C6); llms.txt + 9 MB search index; version URLs 200 (/, /rs4x/updates/, /adm394/). Full report: `evidence/wu0.4-config-report.md`.
- **R10 CLOSED from 0.9.4 dist source**: `redirects` is a MAP {from: to} emitted as meta-refresh pages; identity entries OVERWRITE real pages → cutover needs ZERO config redirects (D1 identity + canonical trailing-slash URLs). WU0.7: gen-redirects.mjs updated to emit coverage manifest + non-identity-only config map (expected empty).
- Ledger: objective "WU0.4 config and workflows" (token sha256:07225090…, hand-authored ≤400); lockfile (1,367 lines generated) under separate objective "WU0.4 lockfile (generated)" — rescope only narrows, so separate budget; same stacked PR.

## WU0.5 BULK content — COMPLETO (census-reviewed). PR #5.
- `docs/` commitado: 1,374 files (1,284 md + 90 no-md R13); 114,123 líneas; per-module EXACT vs spec (1/87/5/344/3/844); strip 1,279/1,064/1,282/0 failures; source manifest idéntico (6,688 files).
- Fixes WU0.3 aplicados: 60 README links rewrite + 1 backslash + baseline 13 entradas (scripts/ci/broken-links-baseline.json).
- Gates in-repo: check-images PASS (0 missing, sample 309); ci-validate PASS (mirror-strict 4,907 / real 13 / baseline 13 / new 0).
- Report: `evidence/wu0.5-census-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU0.6 BULK assets — COMPLETO (census-reviewed). PR #6.
- `assets/` commitado: 5,287 files, 371 MB (img 5,249 + files 19 + icon 15 + site 4); muestra byte-identity 200/200 vs fuente (seed 20260903); 0 refs editados.
- FIX .gitignore: `site/` → `/site/` (anchored) — la entrada de WU0.4 ignoraba `assets/site/` por cualquier nivel (detectado por el inventario del ledger).
- R11 (371 MB): commit plano por diseño; LFS/CDN post-cutover.
- Report: `evidence/wu0.6-census-report.md`.
- Ledger learning: `--intended-untracked` cap = 32 paths → bulk se resuelve PRE-STAGEANDO antes del acquire (staged = parte del candidate, no untracked).

## Pending work units (DAG order)

## WU0.7 generated outputs — COMPLETO (manifest/census-reviewed). PR #7.
- docs/navigation.json: 69/69 paths, 0 broken. 7 version trees: 774 files, per-version counts EXACT vs source. Redirects: 1,284 URLs coverage, **1,284 identity / 0 config-map entries** → `redirects: {}` (cero redirects en cutover, probado).
- gen-redirects.mjs evolucionado (R10): manifest de cobertura + config map solo no-identidad (formateo array viejo era inefectivo en 0.9.4; el map emite meta-refresh e identidad sobreescribe páginas).
- Report: `evidence/wu0.7-generated-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU0.8 vue-demo + primer build limpio + gates — COMPLETO (gate Phase 0). PR #8.
- vue-demo adaptado (D7): 3 contenedores → headings + listado de código + blockquote de paridad + screenshot del sitio fuente (assets/img/docs/vue-demo/screenshot.png, única adición documentada al mirror). 0 residuos `::: vue-demo`; 2 `::: tip` intactos.
- Primer build in-repo: exit 0, 2,051 páginas 11.6s, 0 errores, 1 warning conocido (normaliser). Gates: ci-validate PASS (new 0) + check-images PASS (0 missing). R10 verificado (redirects {} parseado). R12 verificado (2,051 index.html incl. 7 landings). Smoke URLs: 200/301 (paridad VuePress).
- **R13 DEFECTO capturado por el smoke test**: co-located no se copian al build → 404 en deploy. Mitigación de diseño → WU0.8a. Report: `evidence/wu0.8-build-gates-report.md`.

## WU0.8a R13 fix (co-located al mirror) — COMPLETO. PR #9.
- 90 archivos co-located movidos `docs/<M>` → `assets/<M>` (path-preserving; navigation.json excluido). 13 refs reescritas a /assets/ canónicas (12 PNG mm + 1 PDF aduanas). 77 archivos nunca referenciados movidos también (completitud del mirror).
- Post-fix: docs/ = 100% md (1,284 + navigation.json); assets/ = 5,378 (5,287 + 90 + screenshot). check-images PASS (0 relative, 0 missing). ci-validate PASS (new 0). Clean rebuild exit 0 (2,051p 6.9s). Curl: 200 en PNGs/PDF/páginas.
- Incidente documentado: rmtree erróneo en el script de reubicación borró el destino recién movido; recuperado sin pérdidas vía `git restore --worktree` (archivos intactos en index).
- Report: `evidence/wu0.8a-r13-fix-report.md`. **PHASE 0 COMPLETA (WU0.1–WU0.8 + WU0.8a, PR #1–#9).**

## WU1.1 measurements record — COMPLETO. PR #10.
- `measurements.md` creado con los 2 decision slots: OQ1 (dotted-ids: config del experimento design §6, evidencia build/URL/switcher, adopt-or-fallback) y OQ2 (benchmark: runner C7, pilot commit, tiempo, budget 20 min, go/adjust + ladder de mitigación C7). Slots pendientes de WU1.3/WU1.4.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
| WU1.2 | Pilot verification slice (14 páginas) | WU1.1 |
| WU2.1–WU2.7 | Phase 2 rollout (business-partner.md gate FIRST, module slices, final census) | WU1.5 |
| WU3.1–WU3.4 | Phase 3 cutover (CNAME + url, 20-URL crawl, prod AI verify, decommission) | WU2.7 |
