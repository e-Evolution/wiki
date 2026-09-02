# Spec — migrate-erpya-docs-to-docmd

- Project: `wiki` · Change: `migrate-erpya-docs-to-docmd`
- Phase: sdd-spec · Artifact store: `openspec`
- Inputs: `proposal.md` (required), `research.md` (claims C1–C10), `explore.md` (source census)
- Keywords `MUST` / `SHALL` / `SHOULD` / `MAY` per RFC 2119.
- All domain specs below are **new domains** (no canonical `openspec/specs/<domain>/spec.md` exists); they are written in full and will be copied into `openspec/specs/<domain>/spec.md` at archive.

---

# content-migration

## Purpose

Import the complete ERP documentation corpus from `erpcya/docs` (VuePress + theme-hope) into this repo and make it buildable by docmd 0.9.4 with zero loss of existing image references and no per-page content rewriting beyond the small, documented migration deltas (frontmatter stripping, `vue-demo` adaptation).

## Requirements

### Requirement: full content import

The system MUST import all **1,284** source markdown pages and all **5,249** source images (~370 MB) into this repo's docmd source tree, and MUST leave the source repository `erpcya/docs` completely unmodified (read-only import; the source repo is later archived/annotated read-only, never edited).

#### Scenario: per-module presence after Phase 0 import

- GIVEN the Phase 0 import has completed and the docmd source tree is in this repo
- WHEN a page is sampled from each top-level source module (root home, `about/` → Nosotros, `product/` → Producto, `docs/` → Documentación, `community/` → Comunidad, `downloads/` → Descargas)
- THEN the page exists in the docmd source tree with its content intact, and the total markdown page count in this repo equals the 1,284 source pages
- AND the imported image count equals the 5,249 source image files

#### Scenario: source repo untouched

- GIVEN the import process has run to completion
- WHEN the working copy of `erpcya/docs` is diffed against its pre-import state
- THEN zero files are added, modified, or removed in `erpcya/docs`

### Requirement: asset integrity

All existing absolute `/assets/img/...` image references (4,990 absolute refs, one pattern) MUST resolve after import **without any markdown rewrite** (research C1/C2: the source `public/assets/` tree is imported as the docmd root `assets/`, which docmd mirrors 1:1 to the site root). The few `public/`-root files (`logo.svg`, `logo.png`, `favicon.ico`, `background.jpg`) MUST be moved under `assets/` with their ~4 config references updated (OQ6 default); this is the only permitted path-level asset change.

#### Scenario: heaviest image page resolves without rewrite

- GIVEN `master-data/business-partner.md` (309 `/assets/img/...` references) has been imported with its markdown byte-for-byte unchanged (frontmatter delta excepted)
- WHEN the production build runs its image-validity check
- THEN all 309 references resolve against the root `assets/` directory, and zero image references in the imported content were edited

#### Scenario: site-root asset mirror

- GIVEN the imported root `assets/` directory is the source `src/.vuepress/public/assets/` tree
- WHEN the build completes
- THEN `assets/` contents are mirrored 1:1 to the site-root `assets/` output, including `assets/img/docs/...` paths referenced by `lve/` (75) and `material-management/` (13) pages

### Requirement: markdown compatibility

Source container syntax MUST render through docmd's out-of-the-box migration aliases (`::: note`, `::: info`, `::: tip`, `::: warning` — 102 containers in the census: note 50, info 42, tip 5, warning 5) with **no content edits** (research C8). Frontmatter MUST keep `title` (present in 1,282 files) and MUST drop the VuePress-only fields `sticky` (1,279 files) and `icon` (1,064 files); `author` (4 files) MAY be kept or dropped without content impact.

#### Scenario: container page renders both callouts

- GIVEN a migrated page that contains at least one `::: note` and at least one `::: info` container
- WHEN the site is built and the page is rendered
- THEN both callouts render correctly and the page contains zero unknown/unclosed container directives

#### Scenario: frontmatter migration

- GIVEN the 1,282 files whose source frontmatter contains `title`, `sticky: true`, or `icon`
- WHEN the migration is applied
- THEN each file retains its `title`, has no `sticky` or `icon` key, and the resulting frontmatter parses cleanly in docmd

### Requirement: exceptional pages (vue-demo)

The single `vue-demo` page (1 file, 3 `vue-demo` containers, `@vue/repl`-dependent) MUST be adapted to a static screenshot plus code listing per proposal OQ3 default; no live Vue REPL component MAY remain in the migrated tree.

#### Scenario: adapted page builds clean

- GIVEN the `vue-demo` page has been adapted to static screenshot + code
- WHEN the production build runs
- THEN the page builds with zero unknown-directive or container errors and its content (screenshot + code) is present in the rendered output

---

# site-structure

## Purpose

Reproduce the source site's navigation and URL space in docmd: every top section and sidebar leaf reachable, old `docs.erpya.com` URLs mappable to new paths, and the single-locale (`es`) content organized in an i18n-ready structure.

## Requirements

### Requirement: navigation parity

The docmd navigation (config `navigation` or `navigation.json` generated from `sidebar.ts`) MUST reproduce all **6 top-level sections** (home, Nosotros, Producto, Documentación, Comunidad, Descargas) and every sidebar leaf of the source canonical `enSidebar` (research C10: 1:1 shape mapping — groups → children → pages). A category header that carries a landing page plus children MUST keep the source behavior: clickable header (landing) **and** expandable children.

#### Scenario: every sidebar leaf has a navigation entry and a resolvable page

- GIVEN the source `sidebar.ts` leaf inventory (all leaves across the 6 sections, including directory-index leaves ending in `/`)
- WHEN the generated navigation is compared against that inventory
- THEN every leaf has a matching navigation entry, and the path of every entry resolves to an existing page in the docmd source tree (zero broken sidebar links)

#### Scenario: clickable category header

- GIVEN a source category header with both a landing page and children (the theme-hope `prefix` pattern)
- WHEN the reader clicks the header title in the migrated site
- THEN the landing page opens, and expanding the header still reveals all children

### Requirement: URL mapping and redirect map

The docmd directory→URL mapping MUST yield paths equivalent to the source permalink structure (e.g. source `/docs/basic-rules/login/` → docmd path for `basic-rules/login`). A redirect map from old `https://docs.erpya.com/...` URLs to new paths MUST be produced for **all 1,284** source URLs, including directory-index forms, and MUST be encoded as docmd redirects config (C6/C10) so every old URL returns 200 or 301→new path at cutover.

#### Scenario: redirect map completeness

- GIVEN the complete list of 1,284 source permalinks (page paths plus directory-index forms)
- WHEN the redirect map is generated
- THEN every source URL appears in the map with a target path that resolves to an existing new-site page or 301 target, and no source URL is missing or unmapped

#### Scenario: sampled old URLs resolve

- GIVEN the site is deployed and the redirect map is active
- WHEN a sample of 20 old `docs.erpya.com` URLs (spanning page, directory-index, and `downloads/` forms) is crawled
- THEN each returns HTTP 200 at the new path or a 301 whose target returns 200

### Requirement: locale (single `es`, i18n-ready)

The site MUST ship with a single locale `es`. The content and directory structure MUST remain i18n-ready per docmd conventions (locale-ready layout/cascading, research C10) such that adding a second locale later requires no restructure of the migrated content.

#### Scenario: locale-ready structure

- GIVEN the migrated single-locale site
- WHEN the structure is inspected against docmd's i18n/cascading conventions
- THEN the content layout admits a second locale without moving or rewriting existing pages, and the site builds and serves with `es` content only

---

# versioning

## Purpose

Publish ERP release lines as parallel docmd versions using the native versioning engine (research C4): the current release line at the site root, each other release line under `/<id>/`, in one unified build, with a sticky-route switcher.

## Requirements

### Requirement: parallel published versions

docmd's native `versions` engine MUST publish the current release line (recommended: `rs-5.x`, newest GA) at the site root and each other release line under `/<id>/` subfolders, all from a single config and a single unified build (C4). Per-version `navigation.json` is allowed.

#### Scenario: current and non-current served in one build

- GIVEN the config declares `current` plus at least one non-current version
- WHEN one production build runs
- THEN the root serves the current version's content and `/<id>/` serves the non-current version's distinct content, with no second build step

### Requirement: version switcher

A version switcher MUST be visible at the configured position, and switching MUST preserve the reader's relative route (sticky-route, C4). When the relative route does not exist in the target version, the reader MUST land on the target version's fallback page.

#### Scenario: sticky-route switch

- GIVEN a reader is on a page of the current version
- WHEN the reader switches to a non-current version via the switcher
- THEN the reader lands on the same relative path under `/<id>/`
- OR, if that page does not exist in the non-current version, the reader lands on that version's fallback page

### Requirement: version identifiers

Version `id`s MUST be validated by the Phase 1 two-version experiment (OQ1, C5). The default MUST be sanitized alphanumeric `id`s (e.g. `rs5x`, `rs4x`, `adm394`, `tes`, `devices`) paired with friendly human `label`s (e.g. `RS 5.x`, `ADempiere 3.9.4`); dotted ids (e.g. `rs-5.x`) MUST be adopted only if the experiment proves they work.

#### Scenario: two-version experiment gates id format

- GIVEN a Phase 1 pilot build with the current version plus one non-current version using a dotted id
- WHEN the build and switcher are exercised
- THEN either the dotted id works end-to-end (build, URLs, switcher) and is adopted, or the sanitized id + friendly label is adopted and the dotted id is abandoned

### Requirement: version content sourcing

Until OQ5 is decided, each non-current version MUST carry its `downloads/updates/<line>` tree as its content; the design phase MUST finalize the version-to-content mapping (update notes as version content vs. versioned manual copies).

#### Scenario: release line content reachable under version

- GIVEN a non-current release line (e.g. `rs-3.x`) with its `downloads/updates/rs-3.x` update-note pages
- WHEN the site is built with versioning active
- THEN those pages are served under `/<id>/` and are reachable from that version's navigation

---

# ai-accessibility

## Purpose

Make the documentation machine-readable and agent-consumable: `llms.txt`/`llms-full.txt`/`llms.json` endpoints, a client-side search index, and an MCP endpoint with a `validate_docs` tool usable as a CI gate (research C9).

## Requirements

### Requirement: llms endpoints

The build MUST emit `llms.txt`, `llms-full.txt`, and `llms.json` at the site root with **absolute URLs** (the `url` config property MUST be set to the canonical production host, resolving R8's hostname mismatch), covering all pages of every published version. Per-page opt-out via `llms: false` frontmatter MUST be available.

#### Scenario: production llms.txt covers versions

- GIVEN the production site with the current version and at least one non-current version published
- WHEN `https://<prod-host>/llms.txt` is fetched
- THEN it lists, with absolute URLs, a sampled page from the current version and a sampled page from the non-current version
- AND a page marked `llms: false` in frontmatter does not appear in `llms.txt`

### Requirement: search

A client-side search index (`search-index.json`) MUST be built at compile time covering all pages (all versions), surfaced through the Ctrl+K search modal, with no dependency on any external search service (C9, `@docmd/plugin-search`).

#### Scenario: pilot page discoverable

- GIVEN a term known to appear only in a pilot page (e.g. a `docs/basic-rules` page)
- WHEN the reader opens search (Ctrl+K) and types that term
- THEN the pilot page is returned as a result and navigating to it opens the page

### Requirement: MCP endpoint

The MCP endpoint (`npx @docmd/core mcp`, stdio) MUST expose the 6 documented tools (`search_docs`, `list_docs`, `read_doc`, `get_config`, `validate_docs`, `get_llms_context`). `validate_docs` MUST be usable as a CI gate that fails on broken internal links.

#### Scenario: validate_docs fails CI on broken link

- GIVEN a CI run where `validate_docs` is invoked against the candidate build
- WHEN the candidate contains a deliberately broken internal link
- THEN `validate_docs` reports the broken link and the CI run fails

---

# delivery

## Purpose

Deliver the site to production on GitHub Pages via the official docmd deployment workflow, with hard CI validity gates, a measured build-time budget, and a frozen toolchain version across the entire change.

## Requirements

### Requirement: GitHub Pages deployment

Production MUST deploy via the official `docmd-io/deploy@v1` workflow (build → `actions/upload-pages-artifact@v3` → `actions/deploy-pages@v4`), with the Pages site source set to GitHub Actions (C6). The `url` property MUST encode the `github.io` subpath so docmd auto-applies the prefix to asset references and navigation links; the custom-domain CNAME path for `docs.erpya.com` MUST be documented and applied at cutover.

#### Scenario: main push deploys the site

- GIVEN the deployment workflow is configured and the Pages source is GitHub Actions
- WHEN a commit is pushed to `main`
- THEN a new production deployment completes and the site is reachable at the production URL
- AND a push to the staging branch builds green without affecting production

### Requirement: build-time budget

A full production build (all 1,284 pages + ~370 MB) MUST complete within the GitHub Actions free tier for public repos (20 minutes), **or** an approved mitigation (C7 ladder: Actions caching → slim first import → self-hosted/paid runner) MUST be in place. The Phase 1 full-scope dry build MUST record the measured build time with an explicit go/adjust decision on the budget (OQ2/R2).

#### Scenario: pilot build time recorded and decision logged

- GIVEN the pilot commit with all 1,284 pages imported
- WHEN the full-scope dry build runs on GitHub Actions
- THEN the measured build time is recorded in the change record, and a go (within 20 min) or adjust (mitigation selected) decision is logged

### Requirement: CI validity gates

Every pull request MUST pass: (1) a clean `npx @docmd/core build`, (2) zero broken internal links, and (3) zero missing images. PRs violating any gate MUST be blocked.

#### Scenario: PR with broken link is blocked

- GIVEN a pull request that adds an internal link to a non-existent page
- WHEN the PR's CI run completes
- THEN the run fails and the PR is blocked from merging

### Requirement: version pinning

`@docmd/core` MUST be pinned to **0.9.4** for the entire change, from Phase 0 through cutover; no upgrade MAY be applied until after cutover (R5, pre-1.0 breaking-change risk).

#### Scenario: dependency locked across the change

- GIVEN any commit within this change (Phase 0 through Phase 3)
- WHEN the dependency manifest is inspected
- THEN `@docmd/core` resolves to exactly `0.9.4`

---

# Out of scope (condensed, mirrors proposal §5)

- **Feeds** (atom/rss/json) — no docmd feed plugin; dropped (accepted degradation).
- **PWA** (manifest/icons/shortcuts) — no docmd equivalent identified; dropped.
- **Comments** — none live in source (Waline was a placeholder); no action.
- **Mermaid / math** — 0 usage in source; dropped.
- **Blog dynamic behavior** (blog2) — the 2 news posts become **static pages** under Nosotros; no blog engine, categories, or timeline.
- **Source repo modification** — `erpcya/docs` is never modified in any phase.
