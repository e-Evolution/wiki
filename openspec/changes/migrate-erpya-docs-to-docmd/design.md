# Design — migrate-erpya-docs-to-docmd

- Project: `wiki` · Change: `migrate-erpya-docs-to-docmd`
- Phase: sdd-design · Artifact store: `openspec`
- Inputs: `proposal.md`, `spec.md` (18 requirements), `research.md` (claims C1–C10), `explore.md`, `openspec/config.yaml`
- Date: 2026-09-02

---

## 1. Context & goals

Migrate the complete ERP documentation corpus (1,284 markdown pages, 5,249 images, ≈370 MB) from `erpcya/docs` (VuePress 2.0.0-beta.68 + theme-hope) into **this repo** on docmd pinned to `@docmd/core@0.9.4`, publishing in four phases (scaffold → pilot → rollout → cutover) with docmd native versioning active from the pilot and GitHub Pages as production. This design fixes the exact target layout, config shapes, import pipeline, redirect strategy, and CI gates that the spec's 18 requirements demand; it references (does not re-prove) research claims C1–C10.

Constraints carried from `config.yaml` `product_constraints`:

1. Phased migration: pilot with 1–2 representative modules, then rollout by module, then cutover.
2. Migrated site materializes in THIS repo; original `erpcya/docs` stays untouched (read-only import).
3. Production deployment: GitHub Pages via the docmd official GitHub Action.
4. Parallel version publishing required: docmd versioning active from the pilot.
5. Content locale: `es` single, i18n-ready structure.
6. Plugins enabled from the pilot: search, llms, mcp.

Additional hard rules from config: no git commits made outside the apply phase; verification is a reproducible production build + link/image validity (no unit tests, `strict_tdd: false`); content is Spanish, all generated artifacts/config are English.

---

## 2. Target repository layout (docmd 0.9.4)

```
wiki/                                     ← this repo (the new site home)
├── docmd.config.json                     ← single config: url, versions, plugins, redirects
├── package.json                          ← "@docmd/core": "0.9.4" (exact pin, D2/R5)
├── package-lock.json                     ← committed; `npm ci` in CI
├── CNAME                                 ← added at cutover only (docs.erpya.com, D8)
├── .github/workflows/
│   ├── docs.yml                          ← PR validity gate + main deploy (D6)
│   └── build-benchmark.yml               ← workflow_dispatch full-scope timed build (OQ2, D6)
├── scripts/                              ← one-shot, idempotent, committed tooling (D4/D5)
│   ├── migrate/
│   │   ├── import-tree.sh                ← source clone → docs/ + assets/ (step 2–3 of §4)
│   │   ├── strip-frontmatter.mjs         ← drop sticky/icon (step 4)
│   │   ├── gen-navigation.mjs            ← sidebar.ts enSidebar → navigation.json (step 5)
│   │   ├── gen-version-trees.mjs         ← downloads/updates/<line> → docs-<id>/ (step 6)
│   │   └── gen-redirects.mjs             ← 1,284 source URLs → redirects config (step 10)
│   └── ci/
│       ├── ci-validate.mjs               ← MCP validate_docs over stdio, exit 1 on broken links (D6)
│       └── check-images.mjs              ← every md image ref must exist in assets/ (D6)
├── assets/                               ← = source src/.vuepress/public/assets/ (C1/C2)
│   ├── img/                              ← 5,249 files, ~369 MB, byte-identical, zero rewrites
│   ├── files/                            ← ~440 KB download-link files (from source assets/files)
│   └── site/                             ← logo.svg, logo.png, favicon.ico, background.jpg (OQ6)
├── docs/                                 ← CURRENT version (rs-5.x), full corpus
│   ├── index.md                          ← renamed from src/README.md (site home → /)
│   ├── navigation.json                   ← generated from sidebar.ts enSidebar (D: §2 config)
│   ├── about/                            ← Nosotros (87 md, incl. 2 static news posts)
│   ├── product/                          ← Producto (5 md)
│   ├── docs/                             ← Documentación (344 md) — intentional duplication (D1)
│   ├── community/                        ← Comunidad (3 md)
│   └── downloads/                        ← Descargas (844 md): docker/, binary/, updates/<line>/
├── docs-rs4x/                            ← non-current version (D2/D3)
│   ├── index.md                          ← version landing page = switcher fallback target
│   ├── navigation.json                   ← per-version nav (updates section only)
│   └── updates/                          ← copy of source downloads/updates/rs-4.x/ content
├── docs-rs3x/ … docs-rs2x/ … docs-rs1x/  ← same shape (rs-3.x … rs-1.x)
├── docs-adm394/                          ← same shape (adempiere-3.9.4)
├── docs-tes/                             ← same shape (T.E.S)
└── docs-devices/                         ← same shape (devices)
```

### 2.1 Directory → URL model and source-path decision

docmd maps content-dir-relative paths to URLs: `docs/index.md → /`, `docs/guides/setup.md → /guides/setup`, `docs/foo/index.md → /foo/` (C10, C4). Non-current versions build into `/<id>/` in the same unified build (C4), so `docs-rs3x/updates/foo.md → /rs3x/updates/foo`.

**Source paths are preserved as-is** (D1). Mapping of the six source modules:

| Source (erpcya/docs) | docmd location | New URL space | Source permalink |
|---|---|---|---|
| `src/README.md` | `docs/index.md` | `/` | `/` |
| `src/about/…` | `docs/about/…` | `/about/…` | `/about/…` |
| `src/product/…` | `docs/product/…` | `/product/…` | `/product/…` |
| `src/docs/…` | `docs/docs/…` | `/docs/…` | `/docs/…` |
| `src/community/…` | `docs/community/…` | `/community/…` | `/community/…` |
| `src/downloads/…` | `docs/downloads/…` | `/downloads/…` | `/downloads/…` |

Because source permalinks already equal the docmd paths they would map to (source `src/docs/basic-rules/login.md` was served at `/docs/basic-rules/login/`), **every new path is the old path minus the trailing slash**. The redirect map therefore degenerates into: (a) identity-with-slash entries for every page URL's directory-index form, and (b) directory-index forms of section roots. That is the entire diff — the cheapest possible redirect map, which is the justification for keeping the awkward `docs/docs/` duplication rather than restructuring to `docs/nosotros/` etc. (Rejected alternative: rename source modules to pretty Spanish slugs — it would make all 1,284 redirect targets non-identity, multiply content-diff risk during rollout, and buy no functional benefit; URL prettiness is not a stated goal.)

One mechanical path normalization accompanies import: every `README.md` used as a page (source root home + any directory-index READMEs) is **renamed to `index.md`**. This changes file names only, never content, and never changes URLs (a `README.md` page was already its directory's index URL, which `index.md` reproduces exactly).

### 2.2 Assets (OQ6 default)

Exact move: `src/.vuepress/public/assets/` → root `assets/` (5,249 files under `img/` plus `files/`), byte-identical, so all 4,990 absolute `/assets/img/...` refs resolve unchanged (C1/C2). The 4 public-root files (`logo.svg`, `logo.png`, `favicon.ico`, `background.jpg`) move to `assets/site/` and their ~4 config references are updated in `docmd.config.json` (this is the only permitted path-level asset change per the asset-integrity requirement).

### 2.3 Version trees (OQ5 recommended default)

Per the C4 convention (current in `docs/`, non-current in `docs-<id>/` dirs):

- **`current` (`docs/`) carries the WHOLE migrated corpus** — all six modules, all 1,284 pages, unchanged. It is the reading experience for the newest GA line (rs-5.x) and keeps the full-census page count trivially verifiable.
- **Each non-current release line carries its update notes**: `docs-<id>/updates/` is a **copy** of the content inside source `downloads/updates/<line>/`. Current's `docs/downloads/updates/<line>/` tree also stays in place (downloads module is migrated whole); the duplication is deliberate — current keeps every page for import census parity, versions expose the line's notes where the switcher takes readers.
- Each version dir gets a minimal landing `index.md` (the switcher's fallback target for routes that don't exist in that version) and its own `navigation.json` (C4 allows per-version nav).
- **A fuller per-version manual copy (versioned copies of the core manual per release) is future work**: the source repo contains no per-release doc trees, so there is no source data for it. The spec's version-content-sourcing requirement is satisfied by the updates-tree mapping; revisiting it needs new content, not a config change.

### 2.4 Config file placement

- **`docmd.config.json` at repo root**: `url`, `versions`, plugins, redirects. Single source of build truth (C6: `url` prefix handling; C4: versions).
- **`navigation.json` in `docs/`** for the current version, and in each `docs-<id>/` for non-current versions — i.e., per-version navigation files, NOT a global `navigation` array in the root config. Justification: this is the documented VitePress-migration convention (S11) and docmd's cascade is language > version > global (C10), so version-local `navigation.json` files are the native, cascade-respecting place for nav; it keeps each non-current version's small nav self-contained and makes the per-version file a one-command script output (§2 scripts). The root config carries no global nav, avoiding two competing nav definitions.

### 2.5 Workflows

`.github/workflows/docs.yml` shape (D6):

```yaml
on:
  pull_request: { branches: [main] }
  push: { branches: [main] }   # deploy job gated to main
jobs:
  gate:          # runs on PR (and main)
    steps: checkout → node 20 → npm ci (lockfile pins 0.9.4)
           → npx @docmd/core build            # fail on any build error
           → node scripts/ci/ci-validate.mjs  # MCP validate_docs: fail on broken links
           → node scripts/ci/check-images.mjs # fail on any image ref missing from assets/
  deploy:        # main only, needs: gate
    permissions: { contents: write, pages: write, id-token: write }
    steps: checkout → docmd-io/deploy@v1
           → actions/upload-pages-artifact@v3  (path: deploy action's site-dir output)
           → actions/deploy-pages@v4           # C6, exact action chain
```

`.github/workflows/build-benchmark.yml`: `workflow_dispatch` only — same install/build steps, but the build step is timed (start/end timestamps emitted to the job summary) to produce the OQ2 measurement without touching PR gating.

---

## 3. Key decisions

### D1 — Source-path preservation (no restructure)

- **Decision:** keep source paths verbatim: `docs/about/`, `docs/product/`, `docs/docs/`, `docs/community/`, `docs/downloads/`, home at `docs/index.md` (renamed from `src/README.md`); all directory-index `README.md` files renamed to `index.md`.
- **Rationale:** new URL space becomes old URL space minus trailing slash → the 1,284-entry redirect map is ~99% identity entries, minimizing redirect diff and content-diff risk across the whole migration (spec "URL mapping and redirect map"); the import is a pure copy, so per-page content-diff verification reduces to frontmatter-only deltas.
- **Alternatives rejected:** (a) restructure to Spanish slugs (`docs/nosotros/…`) — non-identity redirects for every page, high diff risk, no functional gain; (b) restructure keeping English slugs but flattening `docs/docs/` — still non-identity for 344 pages of the core manual, the most link-dense module.

### D2 — Version model concrete config

- **Decision:** `docmd.config.json` `versions` block (sanitized ids, C5-safe):

```json
"versions": {
  "current": "rs5x",
  "position": "sidebar",
  "all": [
    { "id": "rs5x",   "dir": "docs",        "label": "RS 5.x (current)" },
    { "id": "rs4x",   "dir": "docs-rs4x",   "label": "RS 4.x" },
    { "id": "rs3x",   "dir": "docs-rs3x",   "label": "RS 3.x" },
    { "id": "rs2x",   "dir": "docs-rs2x",   "label": "RS 2.x" },
    { "id": "rs1x",   "dir": "docs-rs1x",   "label": "RS 1.x" },
    { "id": "adm394", "dir": "docs-adm394", "label": "ADempiere 3.9.4" },
    { "id": "tes",    "dir": "docs-tes",    "label": "T.E.S" },
    { "id": "devices","dir": "docs-devices","label": "Devices" }
  ]
}
```

- **Rationale:** C4's config shape (`current`, `position`, `all[{id, dir, label}]`); sanitized alphanumeric ids are the documented-safe charset (C5). Dir names are **always sanitized** regardless of id choice, so the OQ1 outcome (dotted ids) is a **config-only change** — edit `id` values, no content move, since non-current URLs derive from `id` while content lives in `dir`.
- **Alternatives rejected:** dotted ids as the default (`rs-5.x`) — unverified charset (C5, OQ1); adopting them pre-experiment risks breaking build/URL/switcher behavior discovered late, after content has landed.

### D3 — Version content mapping (OQ5)

- **Decision:** current (`docs/`) = full corpus (1,284 pages); each non-current version = copy of its `downloads/updates/<line>` tree under `docs-<id>/updates/` + landing `index.md` + per-version `navigation.json`.
- **Rationale:** the source has no per-release manual trees — update notes are the only per-release content that exists. This satisfies the version-content-sourcing requirement with existing data, is script-generable (§4 step 6), and is the native C4 fit. A fuller per-version manual copy is explicitly future work (no source data).
- **Alternatives rejected:** (a) put all 844 update pages only under `downloads/updates/` in current with no version trees — fails the versioning requirements (no distinct content under `/<id>/`); (b) trim stale release lines (R6) — fails the full-content-import requirement (all 1,284 pages) and is the owner's later editorial call, not a design gate.

### D4 — Import strategy: one-shot copy + scripted frontmatter strip, no markdown rewrites

- **Decision:** one-shot import via committed scripts in `scripts/migrate/`: read-only clone of `erpcya/docs` → `cp -R` of the six content modules into `docs/` + `README.md → index.md` renames → asset move (§2.2) → frontmatter strip (drop `sticky`, `icon`; keep `title`, `author`). **No markdown body is ever rewritten** (containers render out of the box, C8). Scripts are idempotent (re-running produces a no-op diff) and committed so the import is reviewable and replayable; content is imported ONCE in Phase 0 and never regenerated by CI.
- **Rationale:** asset-integrity requirement demands zero edits to the 4,990 image refs; a copy + field-strip pipeline is the only strategy that makes "imported content byte-identical except frontmatter delta" provable via diff.
- **Alternatives rejected:** (a) streaming transform through a markdown parser — re-serialization risk on 1,284 files (byte churn, un-provable equivalence); (b) CI-regenerated import — couples deploys to source-repo availability and hides content changes in a generated blob.

### D5 — Redirect map generation

- **Decision:** `scripts/migrate/gen-redirects.mjs` is the single source of the map. Inputs: (1) the imported `docs/` tree (each md file → its docmd URL), (2) the source URL convention (same path + trailing slash, directory-index forms for pages that were `README.md`). Output: one entry per source URL (1,284 pages → page entries; directory-index forms → index pages) covering **all 1,284 source URLs including directory-index forms**, written as docmd redirects config. The generated file is **committed for review** (it is reviewable data, not a build artifact) and regenerated by the script whenever the tree changes.
- **Rationale:** a generated, committed map is both the spec artifact ("redirect map … for all 1,284 source URLs") and the cutover checklist; because of D1 the map is nearly identity, making line-by-line review feasible.
- **Alternatives rejected:** hand-written map (error-prone at 1,284+ entries); runtime 404-catchall rewrite (defeats the "200 or 301" guarantee and hides missing entries).

### D6 — CI gates + deployment + build-time measurement

- **Decision:** PR gate = (1) clean `npx @docmd/core build`, (2) `scripts/ci/ci-validate.mjs` invoking the MCP server (`npx @docmd/core mcp`, stdio) via minimal JSON-RPC to call `validate_docs` and exiting 1 on any broken internal link, (3) `scripts/ci/check-images.mjs` scanning every md image ref and asserting the target file exists under `assets/`. Deploy on `main` = the exact C6 chain `docmd-io/deploy@v1 → upload-pages-artifact@v3 → deploy-pages@v4` with `contents/pages/id-token` write; Pages source set to GitHub Actions. OQ2 instrumentation: `build-benchmark.yml` (workflow_dispatch) runs the full-scope build with start/end timestamps on the timed step; the measured value is recorded in this change record (`openspec/changes/migrate-erpya-docs-to-docmd/measurements.md`) with an explicit go/adjust decision, and cited in a benchmark job summary comment.
- **Rationale:** the three gates map 1:1 onto the CI-validity-gates requirement (clean build / zero broken links / zero missing images) with `validate_docs` as the documented link linter (C9); the benchmark workflow isolates the one-off OQ2 measurement from PR gating so the 20-minute PR budget is never consumed by a benchmark build.
- **Alternatives rejected:** relying on build warnings alone for link/image checks (warnings are non-fatal by default and non-normative); a separate link-checker dependency (duplicates `validate_docs` and adds a version to pin).

### D7 — vue-demo adaptation (1 file, OQ3 default)

- **Decision:** the single `vue-demo` page is adapted in place: the 3 `::: vue-demo` containers (which docmd does not render, C8) are replaced with (a) a static screenshot at `assets/img/docs/vue-demo/screenshot.png` (captured from the live source page before import completes — the source site is still up), and (b) the original demo code in a standard fenced code block with a short note that the live Vue REPL is not available on the new platform.
- **Rationale:** OQ3 recommended default (keep content, drop live repl); keeps the page in the 1,284 census; zero new dependencies.
- **Alternatives rejected:** dropping the page (loses unique content, breaks its old URL); a static SPA-like embed (re-introduces a runtime dependency docmd's content model doesn't support).

### D8 — `url` property and cutover hostname (R8)

- **Decision:** Phases 0–2: `url: "https://<owner>.github.io/wiki"` (repo Pages subpath; docmd extracts the `/wiki` prefix and applies it to asset refs and nav links, C6). At cutover (Phase 3): add `CNAME` (`docs.erpya.com`) to the content root **and** set `url: "https://docs.erpya.com"`, making `docs.erpya.com` the canonical host; llms.txt absolute URLs (C9) follow `url` automatically, so no llms config change is needed at cutover.
- **Rationale:** the source config's `docs-md.erpya.com` mismatch (R8) is fixed by never copying that value; absolute llms URLs must be canonical from day one of Phase 1 verification.
- **Alternatives rejected:** setting `docs.erpya.com` in `url` before Cutover (build/dev links would point at a host whose DNS still serves the old VuePress site); per-environment url overrides (docmd's subpath logic is `url`-driven, so one value per deployment identity is the documented model).

### D9 — Plugin set

- **Decision:** search (`@docmd/plugin-search`) on with **`semantic: false`** initially (MiniSearch keyword index, C9; the 118 MB multilingual embedding model is a later, explicit owner decision — it would also worsen the R2 build/clone budget); llms (`@docmd/plugin-llms`) on with `url` set (D8), per-page `llms: false` opt-out available via frontmatter; mcp: no build config — `npx @docmd/core mcp` is a stdio server (C9), documented in a repo workflow doc (`docs/ai-mcp-usage.md`) for agent tooling, and consumed in CI by `scripts/ci/ci-validate.mjs` (D6).
- **Rationale:** all three are on-by-default plugins (C9), so "live from the pilot" is satisfied with minimal config; semantic search is the one feature with a real cost (model size) and no spec requirement — it stays an opt-in follow-up.
- **Alternatives rejected:** enabling `semantic: true` in the pilot (bloats build/clone with a 118 MB model before the R2 budget is even measured); a hosted MCP endpoint (out of scope; stdio is the documented mode).

---

## 4. Data flow — Phase 0 import pipeline

Numbered, idempotent steps; steps 1–9 run once in Phase 0 (apply phase commits each as reviewable work units):

1. **Source clone (read-only).** `git clone --depth 1 https://github.com/erpcya/docs <scratch>/erpcya-docs` into a scratch dir outside this repo. No write-back, no push, ever. Pre-state recorded (file count/hash manifest) for the "source repo untouched" verification.
2. **Tree copy.** `scripts/migrate/import-tree.sh` copies the six content roots into `docs/` (`README.md` → `index.md`; every directory-index `README.md` → `index.md`) preserving relative paths (D1); copies `src/.vuepress/public/assets/` → `assets/`; copies the 4 public-root files → `assets/site/` (D4, §2.2). Verifies counts: 1,284 md files, 5,249+4 image/asset files.
3. **Frontmatter strip.** `scripts/migrate/strip-frontmatter.mjs` rewrites frontmatter of every md file: drop `sticky`, `icon`; keep `title` (1,282 files), `author` (4 files); assert resulting frontmatter parses and that body bytes are unchanged (line count + body hash check per file).
4. **vue-demo adaptation.** Manual, one file (D7): replace 3 `::: vue-demo` containers with screenshot (`assets/img/docs/vue-demo/screenshot.png`) + fenced code listing.
5. **Navigation generation.** `scripts/migrate/gen-navigation.mjs` parses `src/.vuepress/sidebar.ts` (`enSidebar`, canonical) and emits `docs/navigation.json`. Transform (C10, 1:1 shape): a theme-hope group `{ title, prefix, children }` → `{ title, path: prefix, children: […] }` (clickable landing + expandable children — the category-header requirement); a leaf `{ title, link }` → `{ title, path: prefix + link }`; leaves ending in `/` are directory-index pages → path without trailing slash, resolving to that directory's `index.md`. Post-condition: every nav `path` resolves to an existing md file (zero broken sidebar links).
6. **Version trees.** `scripts/migrate/gen-version-trees.mjs` writes, for each of the 7 non-current lines: `docs-<id>/updates/` = copy of source `downloads/updates/<line>/` content; a landing `docs-<id>/index.md` (fallback target); `docs-<id>/navigation.json` (landing + updates group). Emits the §2.4 config `versions` block values (D2/D3).
7. **Config.** Write `docmd.config.json`: pinned toolchain, `url` (D8 Phase 0–2 value), `versions` (D2), plugins search/llms (D9), redirects (from step 10, regenerated before commit).
8. **First build.** `npm ci` + `npx @docmd/core build` must complete clean (0 errors, 0 warnings treated as reviewable output).
9. **Validity checks.** `node scripts/ci/ci-validate.mjs` (MCP `validate_docs`) + `node scripts/ci/check-images.mjs`; both green.
10. **Redirect-map generation.** `scripts/migrate/gen-redirects.mjs` walks the imported tree, emits one entry per source URL (1,284 pages + directory-index forms; D5), writes the redirects config, and a manifest `redirects-manifest.md` (counts + sample) for review. Re-run step 7/commit so config and map land in the same review.

Phase 1 then adds the OQ1 2-version experiment build and the OQ2 benchmark run against this Phase 0 commit; no further import steps exist (content is imported once).

---

## 5. Requirements traceability

| # | Spec requirement (name) | Satisfied by |
|---|---|---|
| 1 | full content import | §2 layout (all 6 modules in `docs/`), §4 steps 1–2 (read-only clone, count verification 1,284 md / 5,249 images); D4 (source never written) |
| 2 | asset integrity | §2.2 (`public/assets/` → root `assets/`, zero rewrites — C1/C2); D4 (only permitted path change: 4 public-root files → `assets/site/`); §4 step 9 (image check); §3 D6 gate (3) |
| 3 | markdown compatibility | D4 (containers untouched, C8); §4 step 3 (frontmatter: keep `title`, drop `sticky`/`icon`, keep `author`) |
| 4 | exceptional pages (vue-demo) | D7 (screenshot + code, no live REPL) |
| 5 | navigation parity | §2.4 + §4 step 5 (6 sections, enSidebar 1:1 transform; group `prefix` → `path`+`children` = clickable landing + expandable children, C10) |
| 6 | URL mapping and redirect map | D1 (new paths = old paths minus slash); D5 (§4 step 10: map over all 1,284 URLs incl. directory-index forms, generated + committed); §2.5 deploy (map active at cutover) |
| 7 | locale (single `es`, i18n-ready) | §2 layout: flat single-locale content under `docs/` with no locale-scoped dirs — a second locale can be added via docmd i18n/cascading conventions without moving existing pages (C10 cascade); all content already Spanish |
| 8 | parallel published versions | D2 (exact `versions` block: `current` at root, 7 non-current under `/<id>/`), one unified build (C4); §2.3 content per version |
| 9 | version switcher | D2 (`position: "sidebar"`); C4 sticky-route behavior is engine-native; §2.3 per-version `index.md` is the documented fallback target for missing relative routes |
| 10 | version identifiers | D2 (sanitized ids + friendly labels as default); §6 OQ1 experiment mechanics (dotted ids adopted only if the 2-version pilot proves them; adoption is config-only) |
| 11 | version content sourcing | D3 (updates-tree mapping finalized here, per OQ5 recommended default; spec's "design MUST finalize" satisfied) |
| 12 | llms endpoints | D9 (llms plugin on) + D8 (`url` set → absolute URLs, canonical host, R8 fixed); per-page `llms: false` available via frontmatter (C9) |
| 13 | search | D9 (MiniSearch keyword index on, build-time, client-side, Ctrl+K — C9; semantic explicitly off initially) |
| 14 | MCP endpoint | D9 (stdio server, 6 tools, C9) + D6 (`ci-validate.mjs` invokes `validate_docs` in CI, failing on broken links) |
| 15 | GitHub Pages deployment | §2.5 + D6 (exact C6 action chain, Pages source = GitHub Actions) + D8 (`url` subpath now; `CNAME` + url swap at cutover, documented in Phase 3 gate) |
| 16 | build-time budget | D6 (`build-benchmark.yml` timed full-scope build on the Phase 0/pilot commit; measured value + go/adjust recorded in `measurements.md`) |
| 17 | CI validity gates | D6 (three gates: clean build, `validate_docs`, image check; PR-scoped in `docs.yml`) |
| 18 | version pinning | §2 root `package.json` pin `"0.9.4"` + committed `package-lock.json`; CI uses `npm ci`; no upgrade until after cutover (R5) |

All 18 requirements are covered by this design; no spec amendment is required.

---

## 6. Risks & open items

- **R2 — build-time budget (measurement gate, OQ2).** Carried as a gate, not an assumption: `build-benchmark.yml` on the Phase 0 commit produces the number; decision recorded go/adjust in `measurements.md`. Ladder if over 20 min (C7): Actions caching (`node_modules`/build cache) → slim first import (defer/trim unused `downloads` history — needs owner sign-off since it fights requirement 1) → self-hosted/paid runner.
- **R4 — 309-image page (validation gate).** `master-data/business-partner.md` is the FIRST rollout work unit; measure its build + rendered size. No lazy-load documented (C3); fallback: split the page into section sub-pages (content-level change, owner-reviewed).
- **OQ1 experiment mechanics (exact).** Phase 1 pilot builds two versions: `current` + one non-current, both declared with **dotted** ids, e.g. `{ "current": "rs-5.x", "all": [ { "id": "rs-5.x", "dir": "docs", … }, { "id": "rs-3.x", "dir": "docs-rs3x", "label": "RS 3.x" } ] }` (dir names stay sanitized). Pass = build green + `/rs-3.x/…` URLs serve + switcher round-trips. Fail (or any ambiguity) = revert to the D2 sanitized config (config-only, no content move). One experiment, one decision, recorded in `measurements.md`.
- **R9 (new) — MCP-from-CI uncertainty.** `validate_docs` over stdio is documented (C9) but driving it from a shell script requires minimal JSON-RPC handling in `ci-validate.mjs`; if the 0.9.4 stdio handshake proves awkward, the fallback gate is build-output link-warning scanning (still blocking) — the requirement stays met either way.
- **R10 (new) — redirects config surface unverified.** Research fixes that redirects exist as docmd config (C6/C10) but not the exact property/file name in 0.9.4. Phase 0 smoke build verifies it against the installed version; `gen-redirects.mjs`'s output format is its only implementation surface.
- **R11 (new) — repo weight ≈370 MB of images.** Clone time counts inside the R2 budget; LFS/CDN explicitly deferred (post-cutover optimization, not a migration gate).
- **R12 (new) — `README.md` vs `index.md` acceptance.** docmd's index-page filename is assumed `index.md` (VitePress convention, S11); Phase 0 first build verifies; if docmd natively honors `README.md`, the renames can be dropped without any URL change.
- **R6 carried:** 844 downloads pages migrated whole (import parity wins over staleness); trimming is an owner editorial decision after cutover, not a design gate.

---

## 7. Phase gates (apply-ready evidence checklist)

**Phase 0 — Scaffold**
- [ ] Import census: `docs/` contains exactly 1,284 md files; `assets/` contains exactly 5,249 source asset files + 4 moved public-root files; source clone pre/post hash manifests identical (source untouched).
- [ ] Frontmatter report: 0 files with `sticky`/`icon`; 1,282 retain `title`; body-byte-unchanged assertion output.
- [ ] `docs/navigation.json` committed; nav-path resolver report: 0 broken nav paths vs tree.
- [ ] First `npx @docmd/core build` log: exit 0, zero errors; warnings list attached to the PR.
- [ ] `ci-validate.mjs` output: `validate_docs` green; `check-images.mjs` output: 0 missing refs.
- [ ] Redirects config + `redirects-manifest.md` committed; manifest total = all 1,284 source URLs incl. directory-index forms.
- [ ] Deploy workflow green on a staging branch; Pages source set to GitHub Actions.

**Phase 1 — Pilot**
- [ ] 14 pilot pages (basic-rules 9 + master-data 4) build clean.
- [ ] Search: Ctrl+K finds a pilot-only term; result navigates.
- [ ] `llms.txt` / `llms-full.txt` / `llms.json` present at site root with absolute URLs listing sampled pilot pages; `llms: false` opt-out demonstrated on one page.
- [ ] OQ1: 2-version dotted-id experiment result recorded (adopt / fallback) in `measurements.md`, with build + URL + switcher evidence.
- [ ] OQ2: `build-benchmark.yml` full-scope run on the pilot commit; measured build time + go/adjust decision recorded in `measurements.md`.
- [ ] `validate_docs` green in CI on the pilot PR.

**Phase 2 — Rollout**
- [ ] First work unit = `master-data/business-partner.md`: build log + rendered-output evidence (309 images resolve; page size/build delta recorded); R4 gate closed with pass/split decision.
- [ ] Per module slice (in nav order): clean build + `validate_docs` + `check-images` green per PR.
- [ ] `downloads/updates` (844) landed; all 7 version trees generated and nav-linked.
- [ ] Final census: 1,284 pages in current tree; version switcher verified across ≥2 versions (sticky-route + fallback page).
- [ ] Zero broken internal links, zero missing images site-wide (CI logs archived in change record).

**Phase 3 — Cutover**
- [ ] `CNAME` (docs.erpya.com) + `url` swap merged and deployed (D8).
- [ ] Crawl sample: 20 old URLs (page + directory-index + `downloads/` forms) → each 200 or 301→200; crawl log recorded.
- [ ] `llms.txt` at production host lists sampled pages from current and ≥1 non-current version; per-version coverage check.
- [ ] MCP: all 6 tools reachable against the production site; `validate_docs` green at cutover commit.
- [ ] erpcya/docs archived/annotated read-only (owner-run; no modification); decommission notes for docs.erpya.com DNS/301 recorded.
- [ ] `@docmd/core` still resolves to exactly 0.9.4 at the final commit (pin check, R5).

---

**next_recommended: `sdd-tasks`**
