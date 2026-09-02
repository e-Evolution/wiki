# Exploration — migrate-erpya-docs-to-docmd

Generated: 2026-09-02 · Source clone: `/tmp/erpcya-docs` (github.com/erpcya/docs, shallow) · All counts are grep/find evidence from the local clone.

## 1. Source Content Inventory

Top level: `src/{.vuepress, about, community, docs, downloads, product}` + `src/README.md`.

| Module | Path | .md files | Notes |
| --- | --- | --- | --- |
| Root | `src/README.md` | 1 | Site home |
| Nosotros | `src/about/` | 87 | includes `news/` (2 blog posts), services |
| Producto | `src/product/` | 5 | technology, business-process, benefits, source-code |
| **Documentación** | `src/docs/` | **344** | Core ERP manual |
| Comunidad | `src/community/` | 3 | code-of-conduct, duties-and-rights |
| **Descargas** | `src/downloads/` | **844** | Per-release update notes (rs-1.x … rs-5.x, 3.9.4, T.E.S, devices) |
| **Total** | — | **1284** | Matches live-site URL count |

`src/docs/` sub-modules (md / in-tree images):

| Sub-module | md | img | | Sub-module | md | img |
| --- | --- | --- | --- | --- | --- | --- |
| lve (Localización VE) | 100 | 75 | | distribution-management | 10 | 0 |
| data-importation | 85 | 0 | | sales-management | 14 | 0 |
| devices | 21 | 0 | | pdv-management | 14 | 0 |
| accounting-management | 15 | 0 | | master-data | 5 | 0 |
| balance-management | 15 | 0 | | material-management | 9 | 13 |
| basic-rules | 9 | 0 | | other-process | 5 | 0 |
| production-management | 5 | 0 | | asset-management | 4 | 0 |
| purchase-management | 10 | 0 | | return-management | 3 | 0 |
| customer-relationship-management | 2 | 0 | | human-management | 2 | 0 |
| verticals | 15 | 0 | | | | |

Heaviest pages (chars / image refs):

| Page | chars | image refs |
| --- | --- | --- |
| `docs/master-data/business-partner.md` | 119,753 | **309** |
| `docs/lve/procedures/payroll/payroll-import-format.md` | 106,319 | — |
| `docs/balance-management/selection.md` | 77,100 | 154 |
| `docs/sales-management/point.md` | 50,776 | 152 |
| `docs/purchase-management/purchase-order.md` | 44,808 | 148 |
| `docs/accounting-management/configuration.md` | 49,748 | 148 |

**Scale-risk case (EXCLUDE from pilot): `docs/master-data/business-partner.md`** — 309 images, ~120 KB.

## 2. Navigation Map

Canonical nav = `src/.vuepress/sidebar.ts` (`enSidebar`), es-ES. `navbar.ts` mirrors it; `zhNavbarConfig`/`esNavbarConfig` in navbar.ts are UNUSED theme-hope starter leftovers (no zh/es content exists).

```
/                          (home, src/README.md)
Nosotros      /about/      → Acerca de, Noticias (2), Nuestros Servicios (3), Otros Servicios (2)
Producto      /product/    → Características, Tecnología (4)
Documentación /docs/
  ├ ADempiere Estándar     → /docs/ index
  ├ Gestión Básica         → basic-rules/{login, user-interface, icons-interface, toolbar, quick-access, props}
  ├ Aplicaciones           → devices/{record-weight, printers} (+ attendance-control in navbar only)
  ├ Login Keycloak         → basic-rules/{login-keycloak, login-2fa}
  ├ Importación            → data-importation/ (85 md; deep tree)
  ├ Otros procedimientos   → other-process/ (5)
  ├ Datos Maestros         → master-data/{business-partner, product, warehouse, reports}
  ├ Gestiones (12)         → material/production/distribution/sales/crm/pdv/purchase/return/balance/human/asset/accounting-management
  ├ Verticales             → verticals/{fap, investment-and-loan}
  └ Localización Venezuela → lve/{document-utility, procedures, report, standard-coding}
Comunidad     /community/  → Comunidad, code-of-conduct, duties-and-rigths
Descargas     /downloads/  → docker, binary, updates/{adempiere-3.9.4, T.E.S, devices, rs-1.x…rs-5.x}
```

Sidebar leaf entries are file paths under a `prefix` (e.g. `prefix: "/docs/"` + `basic-rules/login` → `/docs/basic-rules/login/`). Entries ending in `/` are directory index pages. Mapping to docmd `navigation.json` is 1:1 by shape (groups → children → pages).

## 3. Markdown / Frontmatter Census (evidence)

- **Frontmatter is extremely uniform**: `title` 1282 files, `sticky: true` 1279, `icon` 1064, `author` 4. No per-file `sidebar`, `lang`, `date`, `prev/next`, `editLink` in content — navigation is centralized in config. Migration: keep `title`, drop `sticky`/`icon` (or map if docmd frontmatter supports).
- **Containers** (211 `:::` lines ≈ ~105): `note` 50, `info` 42, `tip` 5, `warning` 5, `vue-demo` 3 (1 file). **No** details, code-tabs, group-icons, figure, image-gallery usage in content.
- **mermaid: 0 code fences in content** (dependency installed, never used). Math/KaTeX: 0.
- **Image reference style is ONE pattern**: absolute public paths `![alt](/assets/img/...)` — **4,990 absolute `/assets|/~public|/file` refs**. Relative md links: 196. Absolute internal md links: 1.
- In-tree content images (lve 75, material-management 13) are ALSO referenced via `/assets/img/docs/...` — the canonical store is `public/assets/img`; in-tree copies look like duplicates to be verified and dropped.
- `.markdownlint.json` + prettier exist in source (content was linted).

## 4. Theme-Dependent Features

| Feature | State | Evidence |
| --- | --- | --- |
| Local search | **PRESENT** (client-side) | `@vuepress/plugin-search` in config.ts, placeholder "Buscar" |
| Comment system | **ABSENT in prod** | theme.ts: Waline `serverURL: "https://<to-be-defined>"` (placeholder) |
| Blog/news | PRESENT, small | `plugins.blog: true` (blog2); 2 posts in `about/news/`; blog config points to `/about/` intro |
| Feeds | PRESENT | atom/json/rss enabled |
| PWA | PRESENT (config) | manifest + apple/ms icons; shortcuts are theme-hope blog defaults (category/tag/timeline) |
| @vue/repl | PRESENT, 1 file | 3 `vue-demo` containers |
| i18n | Single locale | `lang: es-ES`, one locale block |
| Versioning | **ABSENT in source** | no versioned docs; release history lives in `downloads/updates/rs-*.x` |
| mdEnhance | enabled but mostly unused | stylize rule rewrites `*Recommended*` → Badge; align/attrs/figure etc. on |
| PWA / lazy images | PRESENT | `imgLazyload: true`, `imgSize: true` |
| hostname | **MISMATCH** | theme.ts `hostname: "https://docs-md.erpya.com"` vs live `docs.erpya.com` |

## 5. Assets & Submodule Risk

- `public/assets/img`: **5,249 files, 369 MB** (`docs/` 282M, `downloads/` 59M, `about/` 27M). Plus `assets/files` 440K (download links), `assets/icon` 124K (PWA icons), `public/` logos/background 1M. Total `public/` ≈ 371 MB.
- **Submodule `src/.vuepress/public/file` (private, SSH) is a NON-ISSUE**: empty in clone, and the only `/file/` match in content is an external URL (sofitasa.com PDF), not a local path. No content depends on it.
- Image risk is purely **size + absolute-path pattern**, not access.

## 6. Pilot Candidate Recommendation

**Pilot = `docs/basic-rules` (9 md) + `docs/master-data` (5 md, excluding business-partner.md initially)** = 14 pages:

- `basic-rules`: representative core-ERP operational content, container usage, light images — validates navigation, frontmatter stripping, container mapping, search/llms/mcp behavior at small scale.
- `master-data/product` (34 KB, 77 image refs): representative IMAGE-HEAVY page — validates the `/assets/img/...` absolute-path strategy (static assets) and lazy loading.
- **Deferred scale-risk case**: `master-data/business-partner.md` (309 imgs / 120 KB) is migrated first in the rollout phase to validate worst-case rendering/build before the 844-page `downloads/` bulk lands.

## 7. Migration Complexity Signals

1. **4,990 absolute image refs** → one decision (docmd static-asset root that keeps `/assets/...` working, or one mechanical rewrite). No per-page chaos.
2. **369 MB of images** → repo weight, GitHub Actions clone/build time (public repos: 20 free min). Consider LFS or CDN later; must fit GH Actions budget.
3. **844 update-note pages in `downloads/`** → bulk, low-complexity, natural home for docmd **versioning** (rs-1.x…rs-5.x release lines).
4. **No source versioning in `docs/`** → "parallel versions" is a NEW capability; the design must define what a version is (ERP release line) and how docs/ content is versioned.
5. **Containers: only 4 kinds + 1 vue-demo file** → trivial mapping; vue-demo (1 page) manual adaptation or drop.
6. **Frontmatter: title/sticky/icon only** → near-zero per-page work.
7. **Single locale (es-ES)**, no i18n split needed.
8. **No comments, no mermaid, no math in content** → drop those features from scope; keep docmd search + llms + mcp as the AI-first differentiator.
9. **Blog**: 2 posts + feeds + PWA — decide keep-vs-drop per module in design (likely keep as static content, drop PWA).
10. **Nav is centralized config** → one `navigation.json` translation, not 1,284 per-file sidebars.

## 8. Risk Register

| # | Risk | Evidence | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- | --- | --- |
| R1 | docmd static-asset handling doesn't preserve `/assets/img/...` absolute paths | 4,990 refs, 369 MB | Medium | High | Research docmd static dir contract (sdd-research); fallback = scripted rewrite of refs (mechanical) |
| R2 | GitHub Actions free tier (20 min public) too small for 1,284 pages + 370 MB clone | module sizes | Medium | Medium | Measure build time in pilot; options: cache, LFS/sparse, self-hosted runner, or paid minutes |
| R3 | docmd versioning model can't express the needed "parallel published ERP versions" | no source versioning to copy | Medium | High | Research docmd versioning docs (sdd-research); design fallback: separate versioned content trees per release line |
| R4 | 309-image page degrades rendering or build | business-partner.md | Medium | Medium | Pilot excludes it; first rollout item = this page; verify lazy-load support in docmd |
| R5 | docmd 0.9.x pre-1.0 breaking changes mid-migration | package version | Medium | Low | Pin exact `@docmd/core` version in package.json from pilot onward |
| R6 | 844 downloads pages contain stale/obsolete release notes | rs-1.x…rs-5.x age | High | Low | Rollout decision: migrate all (redirect-safe) vs trim; owner decides per phase |
| R7 | Blog/feeds/PWA parity expectations | 2 posts, feeds, PWA config | Low | Low | Default: keep posts as static content; drop PWA + feeds unless requested; record in design |
| R8 | hostname mismatch (docs-md.erpya.com in theme config) | theme.ts | Low | Low | Set correct canonical host in docmd config; affects SEO/canonical URLs + llms.txt |

## Deliverable checklist

- [x] Source content inventory
- [x] Navigation map
- [x] Frontmatter/container census (grep evidence)
- [x] Theme-dependent feature list
- [x] Asset & submodule risk
- [x] Pilot candidate recommendation
- [x] Migration complexity signals
- [x] Risk register

**next_recommended: `sdd-research`** — required user-mandated research phase after exploration.
