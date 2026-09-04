# Verify Report — migrate-erpya-docs-to-docmd

- Change: `migrate-erpya-docs-to-docmd` · Project: `wiki`
- Verified at: `wu3/cutover` (head of the 22-PR stacked chain, base `wu2.7/final-census`)
- Branch state: `main` is 28 commits behind `wu3/cutover` — **nothing merged yet**; the 22 stacked PRs are owner-pending.
- Method: committed-evidence review + lightweight in-tree verification only (`git`, `find`, `grep`). No builds run (per mandate). Every "evidence" pointer below was cross-checked against the actual working tree and git history, not just the report prose.
- Store: `openspec` (repo-local).

## Scope & artifact handling

Full artifacts present (spec, design D1–D9/R2–R13, tasks 19 WU, apply-progress, measurements OQ1/OQ2, 22 evidence reports + gate logs). Full verification performed — tasks, spec, design, implementation, tests/gates, and review-workload boundary. No artifact was skipped.

## Independent in-tree census (re-ran the acceptance numbers)

| Check | Expected | Measured | ✓ |
|---|---|---|---|
| md in `docs/` (current version) | 1,284 | **1,284** | ✓ |
| md total (current + 7 version trees) | 2,051 | **2,051** | ✓ |
| Non-current version tree dirs | 7 | `docs-rs4x/rs3x/rs2x/rs1x/adm394/tes/devices` = 7 | ✓ |
| `assets/` files | 5,287 mirror + 90 co-located + 1 screenshot = 5,378 | **5,378** | ✓ |
| `assets/img/` (source image count) | 5,249 | 5,249 | ✓ |
| `@docmd/core` pin (package.json) | exact 0.9.4 | `"@docmd/core": "0.9.4"` | ✓ |
| `@docmd/core` pin (lockfile) | 0.9.4 | `version: 0.9.4`, resolved `core-0.9.4.tgz` | ✓ |
| `::: vue-demo` containers remaining | 0 | 0 | ✓ |
| `sticky:` / `icon:` keys remaining | 0 | 0 | ✓ |
| `CNAME` at cutover | `docs.erpya.com` | present | ✓ |
| `url` at cutover | `https://docs.erpya.com` | present | ✓ |
| `versions.position` | valid 0.9.4 value | `sidebar-top` | ✓ |
| `redirects` config map | 1 non-identity entry | 1 (space-filename) | ✓ |
| `redirects-manifest.md` coverage | 1,284 (1,283 identity + 1) | 1,284 / 1,283 + 1 | ✓ |
| Top-level nav sections | 6 (Inicio, Nosotros, Producto, Documentación, Comunidad, Descargas) | 6 present | ✓ |
| News posts static (no blog markers) | 0 blog chrome | 0 (rss/pagination/related) | ✓ |
| WU2.5 community branch + report | 3/3 200, report exists | branch `wu2.5/slice-community`, `evidence/wu2.5-slice-community-report.md` on that branch | ✓ |

All 22 work units (WU0.1–WU0.8a, WU1.1–WU1.5, WU2.1–WU2.7, WU3.1–WU3.4) have a corresponding evidence report + stacked branch. Note: WU2.5 is a **side stacked branch** (base `wu2.2`, per DAG) — it does not sit in the linear `wu2.4→wu2.6→wu2.7→wu3` ancestry of `wu3/cutover`; its report/logs live on that branch and land in `main` on merge. Consistent with `stacked-to-main`.

---

## 1. Per-requirement verdicts (18 requirements)

Legend: PASS = contract fully met & evidenced. PARTIAL = met at commit level, live/owner-host portion not yet executable. OWNER-PENDING = blocked on an explicit owner action, not a defect.

| # | Requirement | Verdict | Evidence (proves it) | Notes |
|---|---|---|---|---|
| 1 | full content import (1,284 md / 5,249 images / source untouched) | **PASS** | `wu0.5-census-report.md`, `wu0.6-census-report.md`, `wu0.1-dryrun-report.md` | Census re-verified in tree (1,284 / 5,249 img / assets 5,378). Source pre/post sha256 manifest identical (6,688 files). Per-module 1/87/5/344/3/844 exact. |
| 2 | asset integrity (zero rewrite, 309-ref page, site-root mirror) | **PASS** | `wu0.6-census-report.md`, `wu0.5-census-report.md`, `wu0.8a-r13-fix-report.md`, `wu2.1-r4-gate-report.md` | 200/200 byte-identity sample; 0 markdown image refs edited; business-partner 309/309 resolve; assets/img/docs lve(75)+material-management(13) in mirror. See WARNING W6 re: planning estimate 4,990 vs measured 4,907–4,921 mirror-strict. |
| 3 | markdown compatibility (containers render; frontmatter keep title, drop sticky/icon) | **PASS** | `wu0.1-dryrun-report.md`, `wu0.5-census-report.md` | 1,279 sticky / 1,064 icon removed, 1,282 title retained, 0 body-assertion failures; in-tree re-check: 0 sticky/icon keys remain. Containers (102) untouched (C8); docmd normaliser handles 3 pre-existing stray `:::`/`<info>` quirks. |
| 4 | exceptional pages (vue-demo) | **PASS** | `wu0.8-build-gates-report.md` | 3 `::: vue-demo` → heading + fenced code + parity blockquote + screenshot `assets/img/docs/vue-demo/screenshot.png`; in-tree re-check: 0 `::: vue-demo` remain, 2 `::: tip` intact; no live REPL. Matches D7/deviation #5. |
| 5 | navigation parity (6 sections, all leaves, clickable headers) | **PASS** | `wu0.2-generator-report.md`, `wu0.7-generated-report.md` | 84 items / 69 path-bearing, resolver 69/69 → 0 broken; group `prefix`→`path`+`children` (clickable landing + expandable); Iconify→Lucide 9 mapped/12 identity/0 dropped. In-tree: 6 top-level sections present. |
| 6 | URL mapping and redirect map (all 1,284 URLs, 200 or 301→200) | **PASS** (live-host crawl OWNER-PENDING) | `wu0.7-generated-report.md`, `wu2.4-slice-docs-core-report.md`, `wu3-crawl-log.md` | Coverage manifest 1,284 (1,283 identity + 1 non-identity); D1 + docmd trailing-slash = identity URLs → zero config redirects needed; WU2.4 space-redirect verified end-to-end (%20→meta-refresh→200); WU3.2 crawl 20/20 on the cutover build. **Live-host 20/20 crawl = owner step after DNS.** |
| 7 | locale (single `es`, i18n-ready) | **PASS** | `design.md` §2 + tree structure | Flat single-locale content under `docs/`, no locale-scoped dirs; all content Spanish. Verified structurally (no dedicated runtime locale test — this is a structural/design property; see SUGGESTION S7). |
| 8 | parallel published versions (current @ root, others @ `/<id>/`, one build) | **PASS** | `wu0.4-config-report.md`, `wu1.3-oq1-report.md`, `wu2.6-slice-downloads-report.md` | Single unified build = 2,051 pages (1,284 current + 767 version-tree); root serves current, 7 non-current roots serve 200 with distinct content. |
| 9 | version switcher (visible, sticky-route, fallback) | **PASS** | `wu2.7-final-census-report.md`, `wu1.2-pilot-report.md` | 8/8 roots render 8-item dropdown (sidebar-top); sticky-route live-verified (`/rs-4.x/updates/`→rs-3.x→`/rs-3.x/updates/`); fallback live-verified (missing route → target `index.md`). Mechanism traced to 0.9.4 dist source. |
| 10 | version identifiers (OQ1 experiment gates id format) | **PASS** | `wu1.3-oq1-report.md`, `measurements.md` (OQ1) | Exact design-§6 two-version dotted-id experiment PASS on all 3 criteria (build 1,396p / dotted subpath 200 / switcher round-trip) → **ADOPT dotted ids** (config-only, dirs stay sanitized). `tes`/`devices` keep sanitized ids (no dotted form). |
| 11 | version content sourcing (updates-tree mapping) | **PASS** | `wu0.7-generated-report.md`, `wu2.6-slice-downloads-report.md` | D3 finalized in design: each non-current = copy of `downloads/updates/<line>` + landing + per-version nav; 7/7 trees exact vs source; 7/7 sample pages reachable from version nav. |
| 12 | llms endpoints (llms.txt/json/full, absolute URLs, per-page opt-out) | **PARTIAL** (live-host fetch OWNER-PENDING) | `wu1.5-ai-report.md`, `wu3-cutover-report.md` | All 3 artifacts generated at root (238 KB / 430 KB / 5.4 MB); absolute canonical URLs; version coverage present (current + `/rs-3.x/`); `llms: false` opt-out demonstrated then reverted (owner editorial). At cutover `url`=`docs.erpya.com` → 2,051 absolute `docs.erpya.com` URLs. **Fetching `https://docs.erpya.com/llms.txt` on the live host = owner step after DNS.** |
| 13 | search (compile-time index, Ctrl+K, no external service) | **PASS** | `wu1.2-pilot-report.md`, `wu0.4-config-report.md` | `search-index.json` (MiniSearch, `semantic:false`) built at compile time; live Ctrl+K test: pilot-only term `authenticator` (2 pages) → result → navigation to `/docs/basic-rules/login-2fa/`. |
| 14 | MCP endpoint (6 tools, validate_docs as CI gate) | **PASS** | `wu1.5-ai-report.md`, `wu0.3-ci-report.md` | stdio JSON-RPC 0.9.4 handshake works; tools/list = exactly the 6 documented tools; live `get_config` + `search_docs` calls. `ci-validate.mjs` invokes `validate_docs` (primary mode real, not the R9 fallback; fallback implemented as degraded mode). |
| 15 | GitHub Pages deployment (official chain, Pages source = Actions, CNAME at cutover) | **PARTIAL** (deployment + Pages source + production reachability OWNER-PENDING) | `wu0.4-config-report.md`, `wu3-cutover-report.md` | `docs.yml` committed with the exact C6 chain (`docmd-io/deploy@v1`→`upload-pages-artifact@v3`→`deploy-pages@v4`, `contents/pages/id-token` write); CNAME copy step added (docmd 0.9.4 does not emit CNAME — verified in dist); cutover build green (2,051p). **Actual main-push deploy, Pages-source configuration, and `https://docs.erpya.com` 200 = owner steps; chain unmerged (main 28 commits behind).** |
| 16 | build-time budget (≤20 min or mitigation; measured + decision) | **PASS** (Actions-run confirmation pending; deviation #2 documented) | `wu1.4-oq2-report.md`, `measurements.md` (OQ2) | Full pipeline on pilot commit `c515b35`: 20.4 s (0.34 min) ≪ 20 min → **GO**; C7 ladder documented & untriggered. **Deviation #2: measured on an equivalent local pipeline, not `workflow_dispatch` (dispatch resolves default branch only; workflow lands on `main` with the pending chain).** Robust margin (3 orders of magnitude); Actions-runner confirmation is a post-merge nicety, not a gate. |
| 17 | CI validity gates (clean build + zero broken links + zero missing images, PRs blocked) | **PARTIAL** (real Actions enforcement not yet exercised) | `wu0.3-ci-report.md`, per-slice reports, `wu2.7-final-census-report.md` | Gate logic implemented and proven **equivalent locally per-slice**: `npx @docmd/core build` exit 0; `ci-validate.mjs` new 0; `check-images.mjs` 0 missing, at every slice + final census. **Caveat: the `docs.yml` PR gate only fires on `base: main`; the chain is stacked (base≠main), so no actual GitHub Actions run has enforced the gate on these PRs — the owner should run real CI on merged `main` before cutover.** |
| 18 | version pinning (@docmd/core 0.9.4 across the change) | **PASS** | `wu0.4-config-report.md`, `wu3-cutover-report.md` (WU3.4 pin check) | `package.json` exact spec + lockfile resolved 0.9.4, re-verified in tree at the cutover commit; all evidence reports pin `@docmd/core@0.9.4` (incl. MCP smoke). R5 held. |

**Summary:** 14 PASS · 3 PARTIAL (reqs 12, 15, 17 — all with the unmet portion = an owner action, not a defect) · 0 FAIL. The PARTIAL items all close automatically once the owner merges the chain, points DNS, and runs the live-host verifications.

---

## 2. Severity-classified issue list

### CRITICAL — none

No spec violation that breaks the migration promise. Zero content loss (census exact), zero **new** broken links, zero missing images, all 8 versions + switcher + fallback proven, redirect coverage complete, toolchain pinned. The migration contract is met at commit level.

### WARNING (deviations needing owner awareness)

- **W1 — CI gates (req 17) and deployment (req 15) never exercised on real GitHub Actions.** The `docs.yml` PR gate fires only on `base: main`; every PR in the stacked chain has `base ≠ main`, so the three-gate workflow has not actually run on GitHub for any of these PRs. All gate evidence is from **equivalent local command runs** (documented per-slice, including the explicit note in `wu1.2-pilot-report.md`). The migration is not *proven by Actions CI yet*. **Owner action: after the chain merges to `main`, let the real `docs.yml` gate + deploy run at least once (ideally a no-op push) before cutover, to confirm the Actions path (node 20, `npm ci`, gate exit codes, Pages deploy) end-to-end.** This is the single biggest residual risk and it is fully owner-owned.
- **W2 — build-time budget (req 16) measured on a local pipeline, not an Actions runner (documented deviation #2).** `build-benchmark.yml` cannot fire via `workflow_dispatch` until the workflow is on `main` (default branch). Decision **GO** stands on a 3-orders-of-magnitude margin; the Actions-runner confirmation is a post-merge nicety, not a gate. Logged and coherent.
- **W3 — live-host verification is owner-pending (reqs 6, 12, 15).** Commit-level parity is proven: WU3.2 crawl 20/20 and WU3.3 llms/MCP/validate all run against the **static cutover build**, not the deployed host. `https://docs.erpya.com/…` 200, live llms.txt absolute-URL fetch, and live 6/6 MCP are all blocked on DNS + merge. This is the expected cutover boundary, not a defect — but the owner must complete steps 2–4 in `wu3-cutover-report.md` before decommissioning.
- **W4 — 13 source-inherited broken links intentionally preserved (parity policy).** The spec's CI gate says "zero broken internal links." The implementation interprets this as "zero **new** broken links" and preserves **13 pre-existing source defects** (4 missing .ppt/.txt file links, malformed link-syntax entries, etc. — broken on the live old site too) via `scripts/ci/broken-links-baseline.json`. This is a spec-compatible parity choice and consistent with "no content rewriting," but the migrated site will ship with 13 links that 404 — identical to the old site. **Owner should be aware** and decide post-cutover whether to repair them editorially (out of migration scope).
- **W5 — all `tasks.md` implementation checkboxes remain `- [ ]` unchecked.** Completion is tracked exclusively in `apply-progress.md` + the 22 stacked branches + the ledger, and every WU has an evidence report. I reconciled this as **stale-checkbox / genuine completion** (independent census above confirms the work exists), NOT incomplete work — so it does not block a clean pass. **Process hygiene: tick the 19 WU checkboxes (and the parent-owned action boxes where applicable) before `sdd-archive`** so the canonical artifact and the rolling record agree.
- **W6 — asset image-ref count: planning estimate 4,990 vs measured 4,907–4,921.** Spec §asset-integrity cites "4,990 absolute refs" (a research/planning estimate). Actual mirror-strict `/assets/` refs measured 4,895 (WU0.3) → 4,921 (post-WU0.8a). The requirement itself ("all existing absolute `/assets/img` refs resolve **without rewrite**") is fully met; only the headline number drifts. Not a violation; align the spec number to the measured census at archive.
- **W7 — WU2.5 evidence lives on a side branch.** `evidence/wu2.5-slice-community-report.md` + its logs are on `wu2.5/slice-community` (base `wu2.2`), not on the `wu3/cutover` lineage. Correct for `stacked-to-main`, but ensure PR #19 merges so the evidence set is complete on `main`/canonical branch before archive. (No work is missing — community 3/3 verified, and the 3 pages are covered again by the WU2.7 site-wide census.)

### SUGGESTION (improvements)

- **S1 — baseline provenance.** Record the exact 13-entry `broken-links-baseline.json` list + its source provenance once more in the archive report (the WU0.3 report is the provenance; the backslash entry was *fixed* in WU0.5 yet the 13-entry total is unchanged across reports — worth a one-line reconciliation so the 13 composition is unambiguous).
- **S2 — R6 stale downloads content.** 844 downloads pages migrated whole for census parity; editorially stale. Owner disposition post-cutover (owner editorial call, not a gate).
- **S3 — business-partner.md split / lazy-load.** R4 gate PASSED (no defect); a section split or lazy-loading is recorded as a post-cutover editorial optimization candidate only.
- **S4 — `llms: false` opt-outs.** Demonstrated then reverted (exclusion = owner editorial decision). Owner may want to opt out specific pages from AI context.
- **S5 — unreferenced co-located twins.** 77 of the 90 R13 co-located files moved to `assets/` were never referenced; optional owner cleanup of the dead twins/orphans for repo weight.
- **S6 — parity-preserved typo.** `docs/community/duties-and-rigths.md` (`rigths`) preserved verbatim from source (not a migration defect). Flag for owner editorial correction if desired.
- **S7 — locale requirement (req 7) is structurally verified only.** No dedicated runtime i18n test was run (none exists in the pipeline; `strict_tdd: false` by design). Acceptable, but note in archive that req 7 is satisfied by structural/design inspection, not a live test.

---

## 3. Documented deviations — coherence & spec-compatibility check

All five flagged deviations were checked against the spec contract:

1. **`versions.position` `"sidebar"` → `"sidebar-top"`** — COHERENT, spec-compatible. Spec (req 9) requires the switcher "visible at the configured position"; it does not mandate the literal string `sidebar`. 0.9.4 `layout.ejs` only renders for `sidebar-top`|`sidebar-bottom`; `"sidebar"` is silently dropped (dist-source verified in `wu1.2-pilot-report.md`). D2's *intent* (sidebar placement) is met by the nearest valid value. One-line config change, no content impact. **PASS-compatible.**
2. **OQ2 benchmark on a full local pipeline vs `workflow_dispatch`** — COHERENT, spec-compatible. Spec (req 16) requires a *measured* build time + a logged go/adjust decision; it does not mandate the measurement be on an Actions runner. The deviation is forced by a GitHub constraint (dispatch resolves the default branch only; the workflow isn't on `main` until the chain merges), is fully documented in `measurements.md` + `wu1.4-oq2-report.md`, and the **GO** decision is robust (20.4 s ≪ 20 min). Residual: Actions-run confirmation post-merge (W2). **PASS-compatible.**
3. **Single non-identity redirect (space-filename)** — COHERENT, spec-compatible. Discovered in WU2.4: source carries `…/intercompany-process/ intercompany-process.md` (leading space). docmd slugifies output segments (dist source), so the new URL drops the space while the old VuePress URL kept `%20`. `gen-redirects.mjs` models `slugifySegment` on the `to` side → exactly 1,283 identity + 1 non-identity; the single config entry is verified end-to-end (`%20` URL → meta-refresh → new URL, both 200). This is the R10 map mechanism doing precisely what it was designed for; all 344 docs-core old URLs resolve. **PASS-compatible.**
4. **WU2.4/WU2.5 ledger budget incidents resolved via documented resets** — COHERENT, non-spec (process-level). Ledger-budget incidents and a WU0.1 maintainer-approved reset are recorded in `apply-progress.md`; the WU0.8a mid-fix `rmtree` incident was recovered losslessly via `git restore --worktree` (files intact in the index) and re-verified by clean rebuild + curl. None affect the content contract. **Out of spec scope; documented.**
5. **D7 vue-demo adaptation (titled code boxes, not live REPLs; DOM-verified)** — COHERENT, spec-compatible. Spec (req 4) mandates "static screenshot plus code listing" and "no live Vue REPL component MAY remain." Implementation matches: 3 containers → heading + fenced code + parity blockquote + screenshot; DOM inspection of the live source page confirmed the containers rendered as titled code boxes (not interactive REPLs). In-tree re-check: 0 `::: vue-demo` remain. **PASS-compatible.**

---

## 4. Review-workload / PR-boundary findings

- **Chain strategy:** `stacked-to-main` (recorded in apply-progress); 22 PRs, one work unit each, each = one revert boundary. Matches the `Review Workload Forecast` in `tasks.md` ("Chained PRs recommended: Yes"; suggested split PR-per-WU in Phase 0, per-slice in Phase 2, single cutover PR).
- **Boundary respected:** line-counted review surfaces (config/scripts/workflows ≤400 lines) kept separate from bulk-data units (WU0.5/0.6/0.7 census-reviewed, not line-diffed). WU0.4 correctly split the 1,367-line generated lockfile onto its own ledger objective. No `size:exception` was needed; no scope creep beyond the 19 WUs. The only added unit, WU0.8a, was a *caught-defect fix* (R13) with its own documented objective — within plan, not creep.
- **Consistency:** every WU has exactly one evidence report + one stacked branch; WU2.5 correctly sits as a DAG side-branch (base `wu2.2`) rather than forcing a rebase of the WU2.4/2.6/2.7 lineage.

## 5. Task-checkbox reconciliation

`tasks.md` still shows all `- [ ]` implementation markers unchecked (none were ticked). Per the rolling `apply-progress.md`, the 22 stacked branches, the ledger, and the 22 evidence reports — **plus the independent in-tree census above** — every one of the 19 work units is genuinely complete. This is **stale-checkbox reconciliation proven by apply-progress + evidence + independent verification**, not incomplete work. It does not turn into a clean-archive blocker, but it is tracked as **WARNING W5** (tick the boxes before archive so the canonical artifact and the record agree).

## 6. Structured status & actionContext findings

- Native dispatcher is `openspec`-store; status resolved from the repo artifacts directly (artifact store `openspec`). No `sdd-apply`/`sdd-verify`/`sdd-archive` runtime-bearing launches were performed in this verification (evidence-only, per mandate).
- `actionContext.mode`: implementation already applied (stacked branches); this is a verify pass, no writes to source.
- `dependencies` / `blockedReasons`: the only real blockers are owner-owned (merge, DNS, live verification, decommission) — all documented in `wu3-cutover-report.md`. No implementation-side blocker.

---

## 7. Overall verdict

## **READY-FOR-OWNER-MERGE**

The migration's core promise is fully met and independently re-verified at commit level: **1,284/1,284** current-tree pages + 5,249 images imported with **zero content loss** and **zero new broken links / zero missing images** (the 13 source-inherited 404s are parity-preserved, W4), all **8 versions** + sticky-route switcher + fallback proven, complete **1,284-URL redirect coverage** with the single space-filename case handled end-to-end, AI endpoints (llms/search/MCP) live at commit level, and the **0.9.4 pin held** to the final commit. The 5 documented deviations are all coherent and spec-compatible.

**Owner must complete (not a verification failure):**
1. Review + merge the stacked chain (#1 → #22) to `main`.
2. Let the real `docs.yml` Actions gate + deploy run at least once on merged `main` (closes W1 — the one genuinely-untested path).
3. Point `docs.erpya.com` DNS at GitHub Pages; confirm production 200.
4. Re-run WU3.3 live-host verifications (llms.txt absolute URLs, 6/6 MCP, spot crawl) against the deployed host (closes W3).
5. Confirm the OQ2 Actions-runner benchmark (W2) as a nicety.
6. Then decommission the old VuePress site (do **not** decommission before step 4).

**Pre-archive hygiene (recommended):** tick the `tasks.md` checkboxes (W5), align the 4,990 spec figure to the measured ref count (W6), and confirm the WU2.5 evidence has landed on `main` (W7).
