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
## WU1.2 pilot verification slice — COMPLETO. PR #11.
- 14 páginas piloto (basic-rules 9 + master-data 4 + index): build exit 0 (2,051p), 200 en las 14 URLs.
- Ctrl+K REAL en navegador: término piloto-único "authenticator" (contenencia index-verificada: solo 2 páginas piloto) → resultados → click → navegación a /docs/basic-rules/login-2fa/.
- **DEFECTO ENCONTRADO Y FIXEADO (config 1 línea)**: `versions.position: "sidebar"` NO es valor válido en 0.9.4 (layout.ejs solo renderiza con 'sidebar-top'|'sidebar-bottom' — verificado desde dist source; el switcher no renderizaba en ninguna parte). Fix: → "sidebar-top" (desviación de D2 registrada, intención de D2 cumplida). Switcher: 8 items en sidebar, Latest badge, round-trip /rs4x/ verificado.
- Gate CI: workflow no dispara en PR apilado (base ≠ main) — evidencia equivalente: la secuencia exacta de docs.yml corrida local, todo PASS (new 0 / 0 missing).
- Report: `evidence/wu1.2-pilot-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU1.3 OQ1 dotted-id experiment — COMPLETO (DECISIÓN: ADOPT). PR #12.
- Experimento design §6 (2 versiones, ids dotted, dirs sanitized): build exit 0 (1,396p), URLs dotted 200 (incl. anidado rs-35.x/rs-35.4), switcher round-trip verificado en ambas direcciones.
- **DECISIÓN: ADOPT dotted ids** (slot OQ1 de measurements.md completado). Config final 8-versiones: rs-5.x…rs-1.x + ad-3.9.4 dotted; tes/devices sin forma dotted (ids sanitized). Post-adopción: build exit 0 (2,051p), 200 en las 7 raíces de versión, switcher 8 items con hrefs dotted.
- Sin cambios de contenido (dirs sanitized, D2); per-version navs usan rutas relativas al root de versión (sin ids) → sin regenerar. Redirect map WU0.7 inafectado (URLs de versión son nuevas, no existen en el sitio viejo).
- Report: `evidence/wu1.3-oq1-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU1.4 OQ2 build-time benchmark — COMPLETO (DECISIÓN: GO). PR #13.
- Pipeline completo sobre el pilot commit c515b35 (secuencia exacta de build-benchmark.yml): clone cold 10.8s + npm ci 1.2s + build 8.4s (2,051p) = **20.4s total (0.34 min)**.
- Restricción documentada: workflow_dispatch solo resuelve workflows en la rama por defecto; build-benchmark.yml llega a main con la cadena de PRs pendiente de review. Medición equivalente corrida sobre el commit piloto.
- **DECISIÓN: GO** (≪ 20 min; ladder C7 documentada y sin disparar). Slot OQ2 de measurements.md completado. Report: `evidence/wu1.4-oq2-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU1.5 pilot AI verification — COMPLETO. PR #14.
- llms endpoints: llms.txt (238KB) / llms.json (430KB, 2,051 pages) / llms-full.txt (5.4MB) en la raíz del sitio; URLs absolutas canónicas https://e-evolution.github.io/wiki/…; 13 páginas piloto muestreadas presentes.
- Opt-out demo: `llms: false` en login-2fa → ausente de llms.txt/json (2,050 pages), sibling presente; **revertido** (exclusión = decisión editorial del owner).
- MCP smoke: 6/6 tools (search_docs, list_docs, read_doc, get_config, validate_docs, get_llms_context) vía stdio JSON-RPC 0.9.4; calls en vivo get_config + search_docs("authenticator" → login-2fa.md:11).
- **PHASE 1 COMPLETA (WU1.1–WU1.5, PR #10–#14)**: OQ1=ADOPT dotted ids, OQ2=GO (20.4s), defecto switcher fixado. Report: `evidence/wu1.5-ai-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU2.1 R4 gate (business-partner 309 imgs) — COMPLETO (DECISIÓN: PASS). PR #15.
- Build exit 0 (2,051p 8.4s, delta cero vs baseline Phase 0). HTML 407KB; 310 img = 309 PNG locales (0 missing en output) + 1 gravatar externo. Página 200, 5/5 imágenes sampleadas 200. Peso 19.99MB = paridad con sitio viejo (no lazy-load, C3).
- **DECISIÓN R4: PASS** — sin defecto; split = scope change owner-reviewed (registrado como optimización editorial post-cutover). 0 líneas de fuente.
- Report: `evidence/wu2.1-r4-gate-report.md`.

## WU2.2 slice home + about — COMPLETO. PR #16.
- 88 URLs (root index + 87 about): 0 missing en build output, **88/88 en 200**.
- Gates: ci-validate PASS (new 0) + check-images PASS (0 missing).
- News posts (2) estáticos: 0 markers de blog (pagination/related/rss/comentarios); render como páginas normales (h2/imgs/texto verificados). 0 líneas de fuente.
- Report: `evidence/wu2.2-slice-home-about-report.md`.

## WU2.5 slice community — COMPLETO. PR #19 (base wu2.2 per DAG).
- 3 md → 3 URLs, 3/3 200, 0 excepciones. (typo `duties-and-rigths` preservado por parity).
- Gates: ci-validate PASS (new 0) + check-images PASS (0 missing); extract de logs archivado.
- Report: `evidence/wu2.5-slice-community-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU2.3 slice product — COMPLETO. PR #17.
- 5 md → 5 URLs: 0 missing en build, **5/5 en 200** (incl. source-code adaptado en WU0.8/D7).
- Gates: ci-validate PASS (new 0) + check-images PASS (0 missing). 0 líneas de fuente.
- Report: `evidence/wu2.3-slice-product-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
| WU2.4 | slice docs core (344 md) | WU2.2 |
| WU2.5 | slice community (3 md) | WU2.2 |
| WU2.6 | slice downloads BULK (844 md) + version trees | WU2.3, WU2.4, WU2.5 |
| WU2.7 | final census + switcher 8 versions | WU2.6 |
| WU3.1–WU3.4 | Phase 3 cutover (CNAME + url, 20-URL crawl, prod AI verify, decommission) | WU2.7 |
