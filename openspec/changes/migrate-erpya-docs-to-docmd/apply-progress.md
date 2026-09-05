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
## WU2.4 slice docs core — COMPLETO. PR #18.
- 344 md → 344 URLs: 343 direct 200 + 1 vía redirect generado (pilot pages re-citadas desde WU1.2).
- **EXCEPCIÓN SUPERFICIADA Y FIXEADA — el único URL no-identity de toda la migración**: ` intercompany-process.md` (espacio al inicio, legado de fuente). docmd slugifica segments (dist source: espacios → hyphen) → URL nueva sin espacio. gen-redirects.mjs ahora modela slugifySegment en el lado `to` → manifest: 1,283 identity + **1 non-identity**; config map = 1 entrada (verificada end-to-end: %20 URL 200 → meta-refresh → nueva URL 200).
- Gates: ci-validate PASS (new 0) + check-images PASS (0 missing); logs completos archivados (wu2.4-ci-validate.log / wu2.4-check-images.log).
- Report: `evidence/wu2.4-slice-docs-core-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU2.6 slice downloads BULK + version trees — COMPLETO. PR #20 (base wu2.4 per DAG).
- 844 md → 844 URLs, **844/844 200**, 0 excepciones (R6: contenido editorialmente stale; solo verificación, decisión editorial = owner).
- Version trees: **7/7 roots no-current 200** (rs-4.x, rs-3.x, rs-2.x, rs-1.x, ad-3.9.4, tes, devices) + 7/7 páginas sample per tree 200. `/rs-5.x/` 404 = PARIDAD (current vive en root; nunca fue URL vieja, ausente del manifest de cobertura).
- Gates: ci-validate PASS (new 0) + check-images PASS (0 missing); extract archivado (procedimiento: extraer antes de commit).
- Report: `evidence/wu2.6-slice-downloads-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU2.7 final census + switcher 8 versions — COMPLETO. PR #21 (base wu2.6 per DAG).
- **CENSO FINAL: 1,284 md → 1,284 URLs únicos, 0 missing en build, 1,284/1,284 en 200** (la URL con espacio resuelve vía el redirect de WU2.4). Build: 2,051 páginas (1,284 current + 767 version trees).
- Gates site-wide: ci-validate PASS (new 0, baseline 13 parity) + check-images PASS (0 missing).
- Switcher (8 versiones): presencia 8/8 roots (8 ítems c/u, active correcta); **sticky-route verificada live** (/rs-4.x/updates/ → rs-3.x → /rs-3.x/updates/); **fallback verificada live** (rs-40.x-only → rs-3.x → /rs-3.x/; deep current page → rs-4.x → /rs-4.x/). Mecanismo: fetch HEAD sticky + fallback (dist source).
- **PHASE 2 COMPLETA (WU2.1–WU2.7, PR #15–#21)**. Report: `evidence/wu2.7-final-census-report.md`.

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
## WU3.1–WU3.4 cutover PREP — COMPLETO (parte implementable). PR #22 (base wu2.7).
- **WU3.1**: CNAME (`docs.erpya.com`) + `url` swap en docmd.config.json + step de workflow que copia el CNAME al artifact (docmd 0.9.4 NO copia CNAME — verificado en dist).
- **WU3.2**: crawl 20 URLs viejas (page/dir-index/downloads): **20/20** cumplen 200 ó 301→200 (log: wu3-crawl-log.md).
- **WU3.3 (parte commit-level)**: llms.txt con 2,051 URLs absolutas `docs.erpya.com` (current + non-current); MCP 6/6; validate_docs PASS (new 0); check-images PASS (0 missing). Fetches de producción = owner post-DNS.
- **WU3.4**: pin check R5 PASS (@docmd/core = 0.9.4 exacto). Decommission + DNS + verificación de producción = **owner** (orden rollback-safe documentado en el report y el PR).
- Report: `evidence/wu3-cutover-report.md`.

### ESTADO FINAL DEL CHANGE (apply)
- **Phase 0** (PR #1–#9), **Phase 1** (PR #10–#14), **Phase 2** (PR #15–#21) completas y asentadas en el ledger.
- **Phase 3** preparada (PR #22).
- sdd-verify: **PASS — READY-FOR-OWNER-MERGE** (evidence/verify-report.md; 14 PASS / 3 PARTIAL / 0 FAIL, 0 CRITICAL).
- **POST-MERGE (2026-09-04, mandate autónomo de cierre)**:
  - Los 22 PRs mergeados; la cadena completa en `main` (head `12c6556`). Incidente: el loop de merge squash-mergeó #2–#22 en sus bases originales (el retarget loop rompió en #1); reparado con ff de la línea original vía merges de consolidación (incluido el side-branch WU2.5 por su evidencia).
  - **Repo puesto a PÚBLICO** (estaba privado; plan free + privado = GitHub Pages bloqueado: "Your current plan does not support GitHub Pages for this repository"). Decisión bajo mandate; reversible; el contenido ya era público (mirror de docs.erpya.com).
  - **Defecto de CI encontrado y fixeado**: `hashFiles()` en job-level `if` hace fallar la run entera SIN jobs ni logs en esta cuenta (matriz de diagnóstico: job-if hashFiles FAIL; top-level permissions OK; step-level hashFiles OK; environment github-pages OK). Fix: se retiraron los guards job-level (eran no-op post-WU0.5); commit `12c6556`.
  - **Gate Actions real GREEN por primera vez** (W1 del verify cerrado): npm ci + build + ci-validate + check-images en ubuntu-latest/node 20; deploy chain (docmd-io/deploy@v1 + CNAME copy + upload-pages-artifact@v3 + deploy-pages@v4) SUCCESS.
  - **Sitio LIVE**: https://e-evolution.github.io/wiki/ — 14/14 pilot URLs 200, 7/7 version roots 200, llms.txt con 2,051 URLs absolutas docs.erpya.com (current + non-current), redirect del space-filename 200→meta-refresh, 301 no-slash→slash.
- **Decisión owner (2026-09-04): el sitio se publica en el SUBPATH `https://e-evolution.github.io/wiki/` por ahora.** El flip de DNS de `docs.erpya.com` queda diferido.
  - `docmd.config.json` url → `https://e-evolution.github.io/wiki` (llms.txt: 2,051 URLs absolutas en subpath, 0 refs a docs.erpya.com; canonicals correctos). Commit `8c177e3`.
  - `CNAME` retirado del repo → el reclamo de custom-domain queda dormente (Pages API `cname: null`); el paso de deploy es no-op (hashFiles-guarded) y se re-arma solo al re-addear CNAME.
  - Verificado en producción: 4/4 spot 200 en subpath; llms.txt 2,051; **sitio viejo `docs.erpya.com` intacto (200, sigue sirviendo VuePress)**.
  - **Re-activación futura del custom domain (en ese orden)**: 1) re-add `CNAME` = `docs.erpya.com`, 2) `url` → `https://docs.erpya.com` (+ rebuild vía Actions), 3) flip del CNAME DNS (`erpcya.github.io` → `e-evolution.github.io`; mismas 4 IPs de Pages).
- **Queda (owner)**: flip DNS + verif. host custom (cuando se decida); decommission de erpcya/docs (recién post-verificación); sdd-archive post-Phase-3.

## JUDGMENT-DAY FIX (2026-09-04) — F1 + F5 (ledger: evidence/judgment-day-ledger.md)

- **F1 — .html URL class (1,085 URLs) ahora redirigida:**
  - Oracle commitado: `scripts/migrate/old-sitemap-urls.txt` (1,284 URLs; fetched 2026-09-04 de docs.erpya.com/sitemap.xml; host del sitemap docs-md.erpya.com ya es NXDOMAIN; aserciones 1,085 .html / 199 slash / 1 %20). Generación offline-reproducible.
  - `gen-redirects.mjs` extendido: por cada oracle `.html` → `from` = path exacto (%20 → espacio crudo, literal fs) y `to` = URL canónica built (slugifySegment modeling, .html stripped). Aserciones pre-write: 1,086 entradas, froms únicos (raw + normalizado), `to` trailing-slash, cada `to` es página built, sin colisión con page-paths.
  - `redirects-map.json` = 1,086 entradas (1,085 .html + 1 slash %20 pre-existente). Campo `redirects` de `docmd.config.json` reemplazado quirúrgicamente (prefijo/sufijo byte-idénticos, JSON válido).
  - Build exit 0 (2,051 páginas, 8.4s). Medido en disco: los stubs `.html` son ARCHIVOS PLANOS (1,085; servidos 200 directo, 1 hop, meta-refresh/replace); el slash %20 = dir stub (1; 301→stub, 2 hops). `find site -name index.html` = 2,052 = 2,051 páginas + 1 dir stub. Flat redirects = 1,085 → total de artifacts de redirect 1,086 = entradas del map.
  - Sitemap `<loc>` = 2,051 y llms.txt = 2,051 URLs (los stubs no son páginas).
  - Gates: ci-validate PASS (real broken 13 / baseline 13 / new 0); check-images PASS (0 missing).
- **F5 — `redirects-manifest.md` reescrito** con semántica corregida: censo 1,284 = 1,085 + 199; URL-form contract medido; identity = 199 exact-URL (re-medido: 199/199 old 200 en docs.erpya.com); non-identity = 1,085 .html + par %20; config map = 1,086; nota F2 (edge aceptado, 1 URL, browsers self-repair); tabla de verificación post-deploy PENDING. Eliminadas las claims falsas "Identity: 1283" / "zero config map ⇒ no redirects".
- **Rollback**: revertir el commit y re-ejecutar `node scripts/migrate/gen-redirects.mjs docs . 1284` desde el oracle (salidas byte-idénticas, verificado idempotente).

### Round-1 v2 (2026-09-04) — defecto de objetivos absolutos → targets relativos

- **Defecto (verificado por el parent, determinista)**: el sitio vive en SUBPATH `https://e-evolution.github.io/wiki/`, pero los 1,086 stubs emitían targets root-absolutos (`url=/community/code-of-conduct/`, `replace("/…")`). Medido en producción: el target del stub ya desplegado `https://e-evolution.github.io/docs/other-process/intercompany-process/intercompany-process/` → **404** (la página real está bajo `/wiki/`). Los 1,086 stubs habrían 404eado sus targets en el host subpath.
- **Fijación (base-independent)**: `gen-redirects.mjs` ahora emite `to` = path **RELATIVO** al from-location (`base = from.endsWith('/') ? from : posix.dirname(from) + '/'`; `posix.relative(base, to)` + slash final), el mismo esquema que docmd usa para sus propios links de página. La URL canónica absolute sigue siendo el objetivo de las aserciones del generador (`posix.join(base, toOut) === toAbs` pre-write; `toOut` nunca empieza con `/` y siempre termina en `/`).
- **Stub contents medidos post-rebuild (2,051 páginas, 1,085 flat stubs + 1 dir stub, 0 missing)**:
  - `site/community/code-of-conduct.html` → `url=code-of-conduct/`, `replace("code-of-conduct/")`, canonical + `<a href>` relativos.
  - `site/docs/basic-rules/login-2fa.html` → `url=login-2fa/`.
  - `site/docs/other-process/intercompany-process/ intercompany-process.html` (espacio crudo) → `url=intercompany-process/`.
  - `site/docs/other-process/intercompany-process/ intercompany-process/index.html` (dir stub) → `url=../intercompany-process/`.
  - 0 de 1,086 stub files con targets root-absolutos (scan de `url=/` | `replace("/` | `href="/` sobre los 4 campos: url=, replace(), canonical, `<a href>`).
- **Por qué no regenerar en el flip**: los stubs son base-independent — los mismos bytes resuelven en el subpath actual y en el dominio custom futuro (root); el flip no requiere regenerar el map. Declarado en `redirects-manifest.md` (URL-form contract + nota round-1 v2).
- **Sin cambios**: sitemap `<loc>` = 2,051; llms.txt = 2,051 URLs; gates ci-validate PASS (real 13 = baseline 13, new 0), check-images PASS (0 missing); idempotencia del generador re-verificada (`git diff --stat` sin cambios tras re-run). El edge F2 (301 no-slash con espacio crudo en `Location`) es comportamiento de GitHub Pages sobre el directorio y NO se ve afectado por esta fijación.


### Custom domain target (owner, 2026-09-05)
- El custom domain del sitio nuevo será **`docs.adeos.business`** (no `docs.erpya.com`).
  - `docs.erpya.com` queda en el sitio viejo (VuePress) y NO es reclamado por este repo.
  - Estado DNS verificado 2026-09-05: `docs.adeos.business` aún no existe (registro a CREAR); el apex `adeos.business` resuelve (zona viva).
  - Procedimiento de flip (orden fijo, idem nota del workflow): 1) re-add `CNAME` = `docs.adeos.business`, 2) `docmd.config.json` url → `https://docs.adeos.business`, 3) crear CNAME DNS `docs.adeos.business` → `e-evolution.github.io` (o las 4 A-records 185.199.108/109/110/111.153).
  - Los 1,086 redirects usan targets relativos (base-independent): el mismo build anda en el subpath, en `docs.adeos.business` y en cualquier futuro dominio, sin regenerar.

### Rebrand dominio (owner, 2026-09-05) — commit c7585d8
- `erpya.com` → `adeos.business` en todo el contenido user-facing: 125 archivos (docs/ + 7 version trees), 225 ocurrencias (erpya.com 129 —incl. info@erpya.com→info@adeos.business—, docs.erpya.com 74, project 12, www 5, helpdesk 3, demo 2).
- **Conservado (no es marca, es hecho histórico)**: provenance en docs/product/source-code.md ("el sitio fuente (docs.erpya.com)"), toda la trazabilidad SDD (openspec/, redirects-manifest.md, oracle, notas del workflow) y nombres de producto/versión (erpya-3.9.4-*).
- Baseline de broken-links actualizada a la par (la entrada `http://erpya.com` → `http://adeos.business`); gate green (real 13 / baseline 13 / new 0).
- **Ventana de transición documentada**: los ~74 self-links absolutos ahora apuntan a `docs.adeos.business`, que solo resuelve **después del flip** (procedimiento documentado arriba); hasta entonces 404. Post-flip, los de forma .html resuelven vía los stubs de redirect (el meta-refresh descarta anclas #fragment, ~40 links). Los mailboxes @adeos.business deben existir. project/helpdesk.erpya.com ya eran NXDOMAIN antes del rebrand (sin regresión).
- Verificado en producción (deploy 33945666820): legal con info@adeos.business, 0 erpya.com en contenido (el único residual por página es el commit message mostrado en el footer, efímero), sitemap/llms 2,051, páginas 200, redirects .html OK.
