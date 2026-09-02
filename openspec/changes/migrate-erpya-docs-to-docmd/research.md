# Research — migrate-erpya-docs-to-docmd

- Schema: `gentle-ai.sdd-research/v1`
- Revision: 2 (supersedes revision 1, outcome `blocked`)
- Outcome: **done**
- Run date: 2026-09-02
- Change: `migrate-erpya-docs-to-docmd` · Project: `wiki`
- Input artifact: `explore.md` (same directory)
- Executed by: parent orchestrator (the delegated `sdd-research` runtime declared `documentation=[]; open-web=[]` grants and was correctly blocked; the verbatim retained request from rev 1 §2 was executed inline by the orchestrator, which holds web access)

## 0. Scope & Method

- **Scope** (unchanged from rev 1 §2): answer explore risks R1 (static assets), R2 (GitHub Pages deployment + build budget), R3 (versioning), R4 (scale rendering) with auditable evidence from `docs.docmd.io`.
- **Method**: sitemap-first (fetched `https://docs.docmd.io/sitemap.xml`, 1,400 URLs; current = un-prefixed paths), then 11 one-pass page fetches. Per claim: doc URL + quoted line.
- **Documented version**: release notes run through `0-9-4` → docs describe **docmd 0.9.4**, matching the pin recorded in `openspec/config.yaml` (R5 satisfied: pin `@docmd/core@0.9.4`).

## 1. Admission

| Field | Value |
| --- | --- |
| Requested evidence classes | `documentation` (docs.docmd.io) |
| Observed grants for the executing runtime | orchestrator: full web fetch (`fetch_content` + `get_search_content`) |
| Decision | **GRANTED** (executed inline after delegated-runtime denial) |
| Consequence | 9 validated claims (C1–C9) below; rev 1 blocked state superseded |

## 2. Questions

The four retained lanes from rev 1 §2 (static assets / versioning / deployment / markdown mapping), executed as-is.

## 3. Sources

| ID | URL | Fetched |
| --- | --- | --- |
| S1 | https://docs.docmd.io/theming/assets-management/ | 2026-09-02 |
| S2 | https://docs.docmd.io/content/syntax/images/ | 2026-09-02 |
| S3 | https://docs.docmd.io/getting-started/project-structure/ | 2026-09-02 |
| S4 | https://docs.docmd.io/configuration/versioning/ | 2026-09-02 |
| S5 | https://docs.docmd.io/deployment/github-action/ | 2026-09-02 |
| S6 | https://docs.docmd.io/content/containers/callouts/ | 2026-09-02 |
| S7 | https://docs.docmd.io/configuration/navigation/ | 2026-09-02 |
| S8 | https://docs.docmd.io/plugins/search/ | 2026-09-02 |
| S9 | https://docs.docmd.io/plugins/llms/ | 2026-09-02 |
| S10 | https://docs.docmd.io/guides/ai/mcp-and-agent-skills/ | 2026-09-02 |
| S11 | https://docs.docmd.io/migration/vitepress/ | 2026-09-02 |
| S12 | https://docs.docmd.io/sitemap.xml | 2026-09-02 |

## 4. Findings / Validated Claims

**C1 — Static assets: root `assets/` is mirrored 1:1 to site root, referenced root-relative.** (S1)
> "By default, docmd processes an `assets/` directory located at your project root … The entire contents of `assets/` are copied recursively to `site/assets/`. … Reference assets in Markdown and configuration files using **root-relative** paths: `![Architecture Diagram](/assets/images/architecture.png)`"

**C2 — Source image paths need ZERO rewriting.** (S1 + explore.md §3)
Source references are `/assets/img/...` (4,990 absolute refs, single pattern). Placing `src/.vuepress/public/assets/` as the docmd root `assets/` makes every existing reference resolve unchanged. Only the few `public/`-root files (`logo.svg`, `logo.png`, `favicon.ico`, `background.jpg`) sit outside `assets/` and must be moved under `assets/` with their config references updated (~4 refs).

**C3 — Image styling extras exist but are optional.** (S2)
Sizing classes `{ .size-small }`, alignment `{ .align-centre }`, lightbox `{ .lightbox }`, `<figure>/<figcaption>`, `.image-gallery` grid. **No documented lazy-loading** (the source's theme-hope `imgLazyload` has no documented docmd equivalent) → R4 stays a rollout validation item.

**C4 — Native versioning engine with parallel published versions + switcher.** (S4)
> "docmd features a native Versioning Engine that allows you to manage and serve multiple release versions simultaneously." Config: `versions: { current, position, all: [{ id, dir, label }] }`. Convention: current in `docs/`, others in `docs-<id>/`-style dirs. "The `current` version builds directly into your site root … Non-current releases build into dedicated subfolders named after their `id`." Sticky route preservation on switch; each version may carry its own `navigation.json`; all versions build in one unified pass from one config.

**C5 — Version IDs should be concise alphanumeric (`v1`, `v2`, `beta`); dotted release names unverified.** (S4)
> "Use concise, alphanumeric identifiers such as `v1`, `v2`, or `beta`." — Whether `rs-5.x`-style ids (dots/hyphens) are accepted is **unverified** → pilot experiment (OQ1).

**C6 — Official GitHub Action: `docmd-io/deploy@v1`, full Pages workflow documented.** (S5)
checkout → `docmd-io/deploy@v1` → `actions/upload-pages-artifact@v3` (`path: site-dir` output) → `actions/deploy-pages@v4`; `permissions: contents/pages/id-token write`; Node default `20`; reusable workflow `docmd-io/deploy/.github/workflows/deploy.yml@v1` also documented. Pages source must be set to **GitHub Actions**. Subpath: set `url: https://<user>.github.io/<repo>` in config — "docmd extracts the `/my-repo/` path prefix automatically and applies it to internal asset references and navigation links." Custom domain: `CNAME` in `docs/` + `url` property.

**C7 — No documented build-time/caching guidance for large sites.** (S5, S12)
Deployment pages document workflow shape only; no guidance on build budgets, caching, or large-content sites anywhere in the current sitemap. → R2 mitigation stays measurement-driven (pilot build-time).

**C8 — Container aliases from the source render out of the box.** (S6, S11)
> "Migration Aliases: `::: tip`, `::: warning`, `::: danger`, `::: info`, `::: note`, `::: caution` — Supported directly out of the box for VitePress and Docusaurus compatibility." Native syntax `::: callout <info|tip|warning|danger|success> [title:"…"] [icon:…] … ::: /callout`. Covers 100% of the source container census (note 50 / info 42 / tip 5 / warning 5). The single `vue-demo` page (3 containers, 1 file) has **no equivalent** → manual adaptation or drop (design decision).

**C9 — Search / llms / MCP all confirmed with config shapes.** (S8, S9, S10)
- Search: `@docmd/plugin-search`, MiniSearch, **enabled by default**, build-time `search-index.json`, Ctrl+K, client-side only; `semantic: true` (docmd-search) with multilingual embedding models (`paraphrase-multilingual-MiniLM-L12-v2` ~118 MB fits Spanish); `noindex` frontmatter excludes pages.
- llms: `@docmd/plugin-llms` **enabled by default**, emits `llms.txt` + `llms-full.txt` + `llms.json` at output root, absolute URLs require `url` property, per-page opt-out `llms: false` in frontmatter, sanitised output.
- MCP: `npx @docmd/core mcp` (stdio) with 6 tools: `search_docs`, `list_docs`, `read_doc`, `get_config`, `validate_docs` (lints internal links → usable CI gate), `get_llms_context`. `docmd init` also generates `SKILL.md`.

**C10 — Navigation model.** (S7, S11)
`navigation` array in `docmd.config.json` OR `navigation.json` in the docs dir (VitePress migration generates the latter). Item props: `title` (req), `path` (leading `/`), `icon` (Lucide), `children`, `collapsible`, `external`. Category header with `path` + `children` = clickable landing + toggle (matches theme-hope `prefix` pattern). Cascading: language > version > global config; broken sidebar links auto-filtered.

## 5. Risk Answers Table

| Risk (explore.md) | Verdict | Concrete consequence for the plan |
| --- | --- | --- |
| R1 — static-asset contract vs `/assets/...` | **CONFIRMED** (C1, C2) | Copy `public/assets/` → root `assets/`; **zero rewrite of the 4,990 refs**. Fallback rewrite dropped from plan; keep only as a defensive CI check (`validate_docs` / broken-image scan). |
| R2 — GH Actions budget vs 1,284 pages + 370 MB | **PARTIAL** (C6, C7) | Action shape + subpath handling confirmed; build-time/caching undocumented. Pilot must measure a full-scope build (or the pilot slice build × page-ratio) under the free-tier limit; mitigations ladder: Actions caching → slim first import (drop unused `downloads` history?) → self-hosted runner. |
| R3 — parallel published ERP versions | **CONFIRMED** (C4) | Use the native `versions` engine from the pilot: release lines as versions, `current` at root, others at `/<id>/`, switcher in sidebar top. Design maps release lines (rs-1.x…rs-5.x, 3.9.4, T.E.S, devices) to version ids. |
| R4 — 309-image page | **PARTIAL** (C3) | No lazy-load documented; lightbox/figure supported. Sequencing unchanged: pilot excludes `business-partner.md`; it is the FIRST rollout item to validate worst-case render/build. |
| R5 — pre-1.0 version drift | **CONFIRMED** (S12) | Docs describe 0.9.4; pin `@docmd/core@0.9.4` exactly (matches config.yaml). |

## 6. Open Questions (→ design decisions or pilot experiments)

- **OQ1 — Version id charset**: are dotted ids (`rs-5.x`) valid? Pilot experiment with a 2-version build; fallback: sanitized ids (`rs5x`) + friendly `label`.
- **OQ2 — Full build time** under GH Actions free tier for 1,284 pages + 370 MB: measured in pilot (full-scope dry build on the pilot commit).
- **OQ3 — `vue-demo` page**: adapt (static screenshot + code) vs drop — owner decision, low impact (1 file).
- **OQ4 — Blog/news + feeds + PWA**: keep 2 posts as static content; drop atom/json/rss feeds and PWA (no docmd feed plugin in current sitemap) — recorded as accepted degradation unless owner objects.
- **OQ5 — `downloads/updates` 844 pages**: model each release line as a docmd version (C4) vs one tree — design recommendation pending owner preference; versioning is the native fit.
- **OQ6 — `public/` root files** (logo/favicon/background): move under `assets/`, update ~4 config/theme refs.

## 7. Source List

S1–S12 (see §3). All fetched 2026-09-02 via orchestrator `fetch_content`.
