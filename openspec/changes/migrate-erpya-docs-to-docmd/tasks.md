# Tasks — migrate-erpya-docs-to-docmd

- Project: `wiki` · Change: `migrate-erpya-docs-to-docmd`
- Phase: sdd-tasks · Artifact store: `openspec`
- Inputs: `spec.md` (18 requirements), `design.md` (D1–D9, pipeline §4, gates §7), `openspec/config.yaml`
- Delivery: `delivery_strategy: ask-on-risk` (default) · `chain_strategy: NOT YET CHOSEN` (owner picks at apply time)
- Review model: scripts/config/workflows = **line-counted** review surface (≤400 lines/PR). Content/assets/version-tree/redirect data = **bulk-data** units reviewed by census checks (counts, byte-identity of bodies, frontmatter delta report, manifest + sample) — never line-by-line.

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | Phase 0: ~760 line-counted (~160+~300+~150+~120+~30) plus ~1,284 md + 5,253 asset files as bulk data. Phase 1: ~40. Phase 2: ~20–60 per slice (fixes only). Phase 3: ~10. |
| 400-line budget risk | Phase 0 High if bundled, Low per WU when chained. Phase 1 Low. Phase 2 Low (Medium only if R4 forces the page split). Phase 3 Low. Overall: Medium. |
| Chained PRs recommended | Yes (Phase 0 splits into WU0.1–WU0.8 as separate PRs) |
| Suggested split | Phase 0: PR per WU (0.1 → 0.2 ∥ 0.3 ∥ 0.4 → 0.5 → 0.6 → 0.7 → 0.8). Phase 1: 1–2 PRs (WU1.1–1.3, then WU1.4–1.5). Phase 2: 1 PR per slice WU2.1–WU2.7. Phase 3: 1 PR (WU3.1–3.4, cutover). |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending (owner picks `stacked-to-main` vs `feature-branch-chain` at apply time) |

```text
Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: Medium
```

Decision needed before apply — two open owner inputs: (1) `chain_strategy` is unchosen; (2) the Phase 1 OQ2 benchmark outcome may trigger the R2 build-budget mitigation ladder (caching → slim import → self-hosted runner), which is an owner call.

---

## 0. Summary & dependency DAG

Four phases, 19 work units. Every content byte is imported exactly ONCE in Phase 0 (design D4); Phases 1–2 are verification + bounded fixes, never re-imports. Each work unit has a start condition, a finish condition, its verification evidence (design §7 gates), and a rollback boundary (each unit = one PR / one revert).

```text
Phase 0 (Scaffold)                      Phase 1 (Pilot)               Phase 2 (Rollout)              Phase 3 (Cutover)
─────────────────────                   ───────────────               ───────────────                ───────────────
WU0.1 import tooling ─┬─► WU0.5 BULK md ─┐
WU0.2 gen tooling  ───┼─► WU0.6 BULK img ─┼─► WU0.7 generated ─► WU0.8 vue-demo ─► WU1.1 measurements
WU0.3 CI tooling ────┤      (independent)─┤     + version trees    first build +
WU0.4 config/wf ─────┘                    └─────── (both bulk) ────  gates green      WU1.2 pilot verify
                                                             WU1.3 OQ1 experiment ─► WU2.1 R4 gate
                                                             WU1.4 OQ2 benchmark ──► WU2.2 home+about
                                                             WU1.5 AI verification ─► WU2.3 product
                                                                                     WU2.4 docs core
                                                                                     WU2.5 community
                                                                                     WU2.6 downloads (844 bulk)
                                                                                     WU2.7 final census ─► WU3.1 CNAME+url
                                                                                                        WU3.2 redirect crawl
                                                                                                        WU3.3 prod AI verify
                                                                                                        WU3.4 decommission
```

---

## Phase 0 — Scaffold

Review-surface PRs: WU0.1, WU0.2, WU0.3, WU0.4, WU0.8. Bulk-data units (census-reviewed, flagged): WU0.5, WU0.6, WU0.7.

### WU0.1 — Import tooling (line-counted, ~160 lines)

Depends on: — · Rollback: revert PR (no content landed yet).

- [ ] Create `scripts/migrate/import-tree.sh`: read-only `git clone --depth 1` of `erpcya/docs` into scratch outside this repo; pre-import hash manifest of the source; `cp -R` of the six content roots into `docs/` with `README.md → index.md` renames (root home + directory indexes, D1); copy `src/.vuepress/public/assets/` → `assets/`; copy the 4 public-root files → `assets/site/` (OQ6); post-import count assertions: exactly 1,284 md files and 5,249+4 asset files; idempotent (re-run = no-op diff). <!-- sdd-owner: implementation -->
- [ ] Create `scripts/migrate/strip-frontmatter.mjs`: drop the `sticky` and `icon` fields, keep `title` and `author` in all md frontmatter; per-file body-byte-unchanged assertion (line count + body hash); emit frontmatter delta report (0 files with `sticky` or `icon`; 1,282 retain `title`). <!-- sdd-owner: implementation -->

Finish: both scripts pass a dry run against a scratch clone; reports attached to PR. (Design §7: frontmatter report + source-untouched manifest.)

### WU0.2 — Generator tooling (line-counted, ~300 lines)

Depends on: — (independent of WU0.1; outputs land in WU0.7) · Rollback: revert PR.

- [ ] Create `scripts/migrate/gen-navigation.mjs`: parse `src/.vuepress/sidebar.ts` `enSidebar` → emit `docs/navigation.json`; transform per C10 (group `{title, prefix, children}` → `{title, path: prefix, children: [...]}` = clickable landing + expandable children; leaf links with a trailing slash → directory-index path); post-condition: nav-path resolver reports 0 broken paths vs the imported tree. <!-- sdd-owner: implementation -->
- [ ] Create `scripts/migrate/gen-version-trees.mjs`: for each of the 7 non-current lines emit `docs-<id>/updates/` copy of source `downloads/updates/<line>/`, landing `docs-<id>/index.md` (switcher fallback), `docs-<id>/navigation.json`; emit the D2 `versions` block values. <!-- sdd-owner: implementation -->
- [ ] Create `scripts/migrate/gen-redirects.mjs`: walk the imported tree → one entry per source URL (1,284 pages + directory-index forms, D5) in docmd redirects config format (R10: smoke-verify exact config property against installed 0.9.4); also emit `redirects-manifest.md` (total count + sample) for review. <!-- sdd-owner: implementation -->

Finish: each script runnable; resolver/manifest outputs attached to PR.

### WU0.3 — CI tooling (line-counted, ~150 lines)

Depends on: — · Rollback: revert PR.

- [ ] Create `scripts/ci/ci-validate.mjs`: drive `npx @docmd/core mcp` (stdio) with minimal JSON-RPC to call `validate_docs`; exit 1 on any broken internal link; document the R9 fallback (build-output link-warning scan, still blocking) and implement it as the script's degraded mode if the stdio handshake proves awkward on 0.9.4. <!-- sdd-owner: implementation -->
- [ ] Create `scripts/ci/check-images.mjs`: scan every md image reference; assert each target exists under `assets/`; exit 1 on any missing ref (spec: `master-data/business-partner.md`'s 309 refs is the acceptance sample). <!-- sdd-owner: implementation -->

Finish: both scripts run locally against a partial tree; exit-code contract documented in the PR description.

### WU0.4 — Config & workflow (line-counted, ~120 lines; lockfile is generated)

Depends on: — · Rollback: revert PR.

- [ ] Add `package.json` pinning `"@docmd/core": "0.9.4"` (exact, R5) and commit the generated `package-lock.json` (review as generated, not line-by-line). <!-- sdd-owner: implementation -->
- [ ] Write `docmd.config.json`: `url: "https://<owner>.github.io/wiki"` (D8 Phase 0–2 value), `versions` block exactly per D2 (sanitized ids `rs5x/rs4x/rs3x/rs2x/rs1x/adm394/tes/devices`, `position: "sidebar"`), plugins search (`semantic: false`) + llms (D9), redirects placeholder to be regenerated by WU0.7. <!-- sdd-owner: implementation -->
- [ ] Add `.github/workflows/docs.yml` per design §2.5 (PR gate: `npm ci` → `npx @docmd/core build` → `ci-validate.mjs` → `check-images.mjs`; main-only deploy: `docmd-io/deploy@v1` → `upload-pages-artifact@v3` → `deploy-pages@v4`, `contents/pages/id-token` write) and `.github/workflows/build-benchmark.yml` (workflow_dispatch, timed build, job-summary timestamps). <!-- sdd-owner: implementation -->
- [ ] Add `.gitignore` entries for `site/` build output (and any scratch dirs). <!-- sdd-owner: implementation -->

Finish: `npm ci` resolves exactly 0.9.4; both workflows pass Actions lint (visible in PR).

### WU0.5 — BULK DATA: content import (census-reviewed, 1,284 md files — NOT line-by-line)

Depends on: WU0.1 (and WU0.2 for the index-rename convention only if needed) · Rollback: revert PR; `rm -rf docs/` state restored by revert.

- [ ] Run `import-tree.sh` + `strip-frontmatter.mjs` once; commit the resulting `docs/` tree. <!-- sdd-owner: implementation -->
- [ ] Attach census evidence to the PR (review is by these checks, not file diffs): 1,284 md files in `docs/`; per-module counts match source (home 1, about 87, product 5, docs 344, community 3, downloads 844); body-byte-unchanged assertion output; frontmatter delta report (0 files with `sticky` or `icon`, 1,282 retain `title`); source clone pre/post hash manifests identical (spec: source repo untouched). <!-- sdd-owner: implementation -->

### WU0.6 — BULK DATA: assets import (census-reviewed, 5,249 + 4 files, ~370 MB — NOT line-by-line)

Depends on: WU0.1 · Rollback: revert PR.

- [ ] Commit `assets/` (source `public/assets/` tree: `img/` 5,249 files + `files/`) and `assets/site/` (the 4 moved public-root files). <!-- sdd-owner: implementation -->
- [ ] Attach census evidence: file counts (5,249 + 4); sampled byte-identity check (hash manifest) against the source clone; zero markdown image references edited (single root-relative pattern `assets/img/...`, 4,990 absolute refs — verified by the strip script's body-hash assertion from WU0.5 plus a ref-pattern scan). <!-- sdd-owner: implementation -->

### WU0.7 — Generated: navigation, version trees, redirects (generated-and-committed; manifest-reviewed + bulk copies census-reviewed)

Depends on: WU0.2, WU0.5, WU0.6 · Rollback: revert PR (all outputs are regenerable by WU0.2 scripts).

- [ ] Run `gen-navigation.mjs` → commit `docs/navigation.json`; attach nav-path resolver report (0 broken paths). <!-- sdd-owner: implementation -->
- [ ] Run `gen-version-trees.mjs` → commit the 7 `docs-<id>/` trees (BULK: the 844-page `downloads/updates` content appears again as copies — census by per-version counts vs source, not line diffs). <!-- sdd-owner: implementation -->
- [ ] Run `gen-redirects.mjs` → commit the redirects config + `redirects-manifest.md` (1,284 lines of generated data — review by manifest total + 10-entry sample; flag in PR as generated data). <!-- sdd-owner: implementation -->
- [ ] Regenerate `docmd.config.json` redirects section from the generated map (same PR, D5 step 10). <!-- sdd-owner: implementation -->

### WU0.8 — vue-demo adaptation + first clean build + gates (line-counted, ~30 lines manual)

Depends on: WU0.3, WU0.4, WU0.5, WU0.6, WU0.7 (Phase 0 completion gate) · Rollback: revert PR.

- [ ] Adapt the single `vue-demo` page (D7): capture `assets/img/docs/vue-demo/screenshot.png` from the live source site; replace the 3 `::: vue-demo` containers with the static screenshot + fenced code listing + note that the live Vue REPL is unavailable; no live REPL component remains in the tree. <!-- sdd-owner: implementation -->
- [ ] Run `npm ci` + `npx @docmd/core build`: exit 0, zero errors; attach warnings list to the PR (design §7 Phase 0). <!-- sdd-owner: implementation -->
- [ ] Run `ci-validate.mjs` (validate_docs green) + `check-images.mjs` (0 missing refs, incl. the 309-ref page); verify R10 (redirects config property accepted by 0.9.4 build) and R12 (`index.md` honored) from the build log. <!-- sdd-owner: implementation -->
- [ ] Push a staging branch: `docs.yml` gate green on it; set Pages site source to GitHub Actions (owner action, recorded in PR). <!-- sdd-owner: implementation -->

---

## Phase 1 — Pilot

Note on pilot scope (stated explicitly): the full site is already imported and building in Phase 0, so the pilot is a **verification slice, not a content slice** — enable + verify search/llms/mcp/versions on 14 representative pages (`docs/docs/basic-rules/` 9 + `master-data/` 4 + site index) against the already-imported tree. This satisfies the config phase rule "pilot slice must have search, llms, mcp, and versioning active before rollout" without a second content import (D4: content is imported once).

### WU1.1 — Measurements record (line-counted, ~30 lines)

Depends on: WU0.8 · Rollback: revert PR.

- [ ] Create `openspec/changes/migrate-erpya-docs-to-docmd/measurements.md` with two explicit decision slots: **OQ1** (dotted-id experiment: config used, build/URL/switcher evidence, adopt-or-fallback decision) and **OQ2** (benchmark: runner, measured time, 20-min budget, go/adjust decision + named mitigation if adjusting). <!-- sdd-owner: implementation -->

### WU1.2 — Pilot verification slice (line-counted, ~10 lines if any config touch; mostly evidence)

Depends on: WU1.1 · Rollback: revert PR.

- [ ] Verify the 14 pilot pages build clean and render (basic-rules 9 + master-data 4 + index); Ctrl+K search returns a pilot-only term and navigates to the page; version switcher renders at `position: "sidebar"`. <!-- sdd-owner: implementation -->
- [ ] Confirm `validate_docs` green in CI on the pilot PR (docs.yml gate log attached). <!-- sdd-owner: implementation -->

### WU1.3 — OQ1 two-version dotted-id experiment (line-counted, ~10 lines config-only)

Depends on: WU1.2 · Rollback: config-only revert to D2 sanitized block (no content move, D2).

- [ ] Apply the exact experiment config from design §6: `{ "current": "rs-5.x", "all": [ { "id": "rs-5.x", "dir": "docs", … }, { "id": "rs-3.x", "dir": "docs-rs3x", "label": "RS 3.x" } ] }` (dir names stay sanitized); build + serve + exercise switcher. <!-- sdd-owner: implementation -->
- [ ] Record the result in `measurements.md` (OQ1 slot): pass (build green + the dotted-id version subpath URLs serve + switcher round-trips) → keep dotted ids; fail/ambiguous → revert to D2 sanitized config. One experiment, one decision. <!-- sdd-owner: implementation -->

### WU1.4 — OQ2 build-time benchmark (evidence, ~0 lines)

Depends on: WU1.3 · Rollback: none (measurement only); mitigation chosen later per owner.

- [ ] Trigger `build-benchmark.yml` (workflow_dispatch) full-scope build on the pilot commit; record measured time in `measurements.md` (OQ2 slot) with explicit go (≤20 min) or adjust (name the C7 ladder step: Actions caching → slim first import → self-hosted/paid runner) decision. If adjust: STOP for owner confirmation before selecting a mitigation (decision needed before apply). <!-- sdd-owner: implementation -->

### WU1.5 — Pilot AI verification (evidence, ~5 lines if a demo page needs `llms: false`)

Depends on: WU1.2, WU1.3 · Rollback: revert PR.

- [ ] Fetch `llms.txt` / `llms-full.txt` / `llms.json` at the site root: absolute URLs (canonical `url`), sampled pilot pages listed; demonstrate per-page `llms: false` opt-out on one pilot page (page absent from `llms.txt`). <!-- sdd-owner: implementation -->
- [ ] MCP smoke: all 6 tools (`search_docs`, `list_docs`, `read_doc`, `get_config`, `validate_docs`, `get_llms_context`) reachable via `npx @docmd/core mcp` stdio; record tool list in the PR. <!-- sdd-owner: implementation -->

---

## Phase 2 — Rollout

Content already exists in-tree from Phase 0; every rollout unit is **verification + per-slice fixes** (frontmatter edge cases, container exceptions, broken links/images found by the gates), never a re-import. Nav order: home → Nosotros → Producto → Documentación → Comunidad → Descargas.

### WU2.1 — R4 gate: `master-data/business-partner.md` FIRST (line-counted, ~0–20 lines)

Depends on: WU1.5 · Rollback: revert PR.

- [ ] Build the slice and record rendered-output evidence for the 309-image page (build log delta vs Phase 0 baseline; rendered page size; all 309 refs resolve). <!-- sdd-owner: implementation -->
- [ ] Close the R4 gate with an explicit pass/split decision in the PR: pass → continue; split → owner-reviewed content-level split into section sub-pages (flag as scope change; new redirect entries for the split pages via `gen-redirects.mjs` re-run). <!-- sdd-owner: implementation -->

### WU2.2 — Slice: home + about/Nosotros (87 md incl. 2 static news posts)

Depends on: WU2.1 · Per-slice gate: clean build + `validate_docs` + `check-images` green.

- [ ] Verify slice; fix any frontmatter/container/link/image exceptions surfaced by the gates (2 news posts must render as static pages, no blog behavior). <!-- sdd-owner: implementation -->

### WU2.3 — Slice: product/Producto (5 md)

Depends on: WU2.2 · Per-slice gate as WU2.2.

- [ ] Verify slice; apply gate-surfaced fixes. <!-- sdd-owner: implementation -->

### WU2.4 — Slice: docs core manual (344 md, incl. the 9 basic-rules + 4 master-data pages already pilot-verified)

Depends on: WU2.2 · Per-slice gate as WU2.2.

- [ ] Verify the remaining core-manual pages (pilot-verified pages: evidence already in Phase 1, re-cite not re-verify); apply gate-surfaced fixes; this is the most link-dense module — attach the validate_docs pass log to the PR. <!-- sdd-owner: implementation -->

### WU2.5 — Slice: community/Comunidad (3 md)

Depends on: WU2.2 · Per-slice gate as WU2.2.

- [ ] Verify slice; apply gate-surfaced fixes. <!-- sdd-owner: implementation -->

### WU2.6 — Slice: downloads (844 md — BULK verification unit, census-reviewed) + version-tree nav check

Depends on: WU2.3, WU2.4, WU2.5 · Per-slice gate: clean build + `validate_docs` + `check-images`; census counts, not line diffs.

- [ ] Verify the downloads module by census: 844 pages present and buildable; `check-images` green; all 7 `docs-<id>/updates/` trees confirmed in the build output and reachable from their version navigation. <!-- sdd-owner: implementation -->

### WU2.7 — Final census + version switcher verification (evidence, ~0 lines)

Depends on: WU2.6 · Rollback: n/a (verification).

- [ ] Final census: exactly 1,284 pages in the current tree; zero broken internal links and zero missing images site-wide (CI logs archived to the change record). <!-- sdd-owner: implementation -->
- [ ] Verify the version switcher across all 8 versions: sticky-route preserves relative path; missing relative route lands on the target version's fallback `index.md`. <!-- sdd-owner: implementation -->

---

## Phase 3 — Cutover

Single PR (WU3.1–WU3.4), line-counted surface ~10 lines; the rest is production verification evidence. Rollback: revert the CNAME+url commit (subpath URL resumes serving) + owner DNS rollback.

### WU3.1 — CNAME + url swap (D8)

- [ ] Add `CNAME` (`docs.erpya.com`) at the content root and set `url: "https://docs.erpya.com"` in `docmd.config.json`; build + deploy; confirm the site resolves at the production host (owner runs DNS; record in PR). <!-- sdd-owner: implementation -->

### WU3.2 — Redirect crawl sample

- [ ] Crawl 20 old `docs.erpya.com` URLs spanning page, directory-index, and `downloads/` forms; each must return 200 at the new path or 301 → 200; commit the crawl log to the change record. <!-- sdd-owner: implementation -->

### WU3.3 — Production AI verification

- [ ] `llms.txt` at the production host lists sampled pages from the current version AND ≥1 non-current version (absolute `docs.erpya.com` URLs); MCP: all 6 tools reachable against the production site; `validate_docs` green at the cutover commit. <!-- sdd-owner: implementation -->

### WU3.4 — Decommission + pin check

- [ ] Owner archives/annotates `erpcya/docs` as read-only (no modification); record decommission notes for docs.erpya.com DNS/301 handling in the change record. <!-- sdd-owner: implementation -->
- [ ] Pin check: `@docmd/core` resolves to exactly `0.9.4` at the final commit (R5). <!-- sdd-owner: implementation -->

---

## Parent-owned actions (post-apply, grouped)

- [ ] Bounded review of each WU PR before merge; Phase 0 PRs reviewed as line-counted units, WU0.5/0.6/0.7 as census/manifest units (no file-diff review of bulk data). <!-- sdd-owner: parent -->
- [ ] Owner decision at apply start: `chain_strategy` (`stacked-to-main` vs `feature-branch-chain`) per the unchosen delivery input. <!-- sdd-owner: parent -->
- [ ] Owner decision on OQ2 adjust path if the benchmark exceeds 20 min (C7 ladder selection). <!-- sdd-owner: parent -->
- [ ] Owner decision if the R4 gate fails (page split is a content-level scope change). <!-- sdd-owner: parent -->
- [ ] Lifecycle gates: run sdd-verify after Phase 2 WU2.7; sdd-archive only after Phase 3 completes and verify passes. <!-- sdd-owner: parent -->
