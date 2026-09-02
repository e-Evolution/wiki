# Proposal — migrate-erpya-docs-to-docmd

- Project: `wiki` · Change: `migrate-erpya-docs-to-docmd`
- Artifact store: openspec · Phase: sdd-propose
- Inputs: `openspec/config.yaml`, `explore.md`, `research.md` (rev 2, outcome done)
- Date: 2026-09-02

## 1. Problem

The current ERP documentation site (docs.erpya.com) runs on VuePress 2.0.0-beta.68 + theme-hope, a pre-1.0 beta stack that is effectively unmaintained. The decisive gap is AI-first accessibility: the current platform exposes **no `llms.txt` / `llms-full.txt` machine-readable index, no MCP endpoint, and no raw-markdown access**, so AI assistants and agent tooling cannot consume the documentation at all. Meanwhile the corpus is substantial — 1,284 markdown files and 5,249 images (≈370 MB) — and there is no versioning: release lines (rs-1.x…rs-5.x, adempiere-3.9.4, T.E.S, devices) exist only as flat `downloads/updates` note trees, so readers cannot browse docs for a specific ERP release in parallel. The platform decision is already made: **docmd** (pinned `@docmd/core@0.9.4`), whose native llms/MCP plugins and versioning engine close exactly these gaps. This change migrates the full content from `erpcya/docs` into this repo and publishes it on docmd.

## 2. Proposed solution

Execute a phased VuePress→docmd migration into **this repo** (erpcya/docs stays untouched; its content is imported here as the base): Phase 0 scaffolds the docmd project (root `assets/` import — zero rewriting of the 4,990 absolute image refs, per research C2), Phase 1 pilots 14 representative pages with search/llms/mcp and docmd native versioning live, Phase 2 rolls out module-by-module in nav order (844 update-note pages mapped onto versioned trees per OQ5), and Phase 3 cuts over with URL redirects for docs.erpya.com. Production is GitHub Pages via the official `docmd-io/deploy@v1` action; every phase is gated by a clean `npx @docmd/core build` with link/image validity enforced in CI.

## 3. Phases

### Phase 0 — Scaffold

- Import `src/.vuepress/public/assets/` → root `assets/` (research C1/C2: root `assets/` is mirrored 1:1 to the site root, so all `/assets/img/...` refs resolve **unchanged**).
- Move the few `public/`-root files (`logo.svg`, `logo.png`, `favicon.ico`, `background.jpg`) under `assets/` and update ~4 config refs (OQ6).
- Create `docmd.config.json`: `url` (GitHub Pages subpath, C6 — docmd auto-applies the `/repo` prefix), navigation config, `versions` block (see §4), plugins search/llms/mcp.
- Generate `navigation.json` from `sidebar.ts` (`enSidebar` is canonical, 1:1 shape mapping, C10).
- Pin `@docmd/core@0.9.4` exactly (R5).
- GH Actions workflow: build on every PR (fail on link/image validity) + `docmd-io/deploy@v1` → `upload-pages-artifact@v3` → `deploy-pages@v4` on main (C6). Pages source set to GitHub Actions.

**Entry:** repo writable, import from erpcya/docs available.
**Exit:** clean `npx @docmd/core build` of the imported tree (even with pilot nav active); deploy workflow green on a staging branch; `validate_docs` MCP check runnable in CI.

### Phase 1 — Pilot

- Migrate `docs/basic-rules` (9 md) + `docs/master-data` minus `business-partner.md` (4 md) = **14 pages** per the explore §6 pilot recommendation (the pilot set includes the module index page): representative core content (containers, frontmatter) + image-heavy `master-data/product` (77 image refs).
- Strip VuePress-only frontmatter (`sticky`, `icon`); keep `title`. Containers `note/info/tip/warning` render out of the box (C8).
- Search, llms, MCP **live** and verified (llms.txt/llms-full.txt/llms.json emitted with absolute URLs).
- **OQ1 experiment:** build with 2 versions (current + one non-current) using a dotted id (e.g. `rs-5.x`) to determine version-id charset; fallback `rs5x` + friendly label.
- **OQ2 measurement:** full-scope dry build (all 1,284 pages imported) on the pilot commit to measure build time vs the GH Actions free tier (20 min public) — R2 gate.

**Entry:** Phase 0 exit met.
**Exit:** 14 pages built clean; search finds pilot pages; llms.txt lists them; MCP `validate_docs` green; 2-version build works (or fallback id adopted); full-scope build time recorded with go/adjust decision on the build-time budget (R2).

### Phase 2 — Rollout

- Module-by-module in nav order (Documentación sub-modules, then Nosotros/Producto/Comunidad).
- **`master-data/business-partner.md` FIRST** (309 images / ~120 KB): R4 worst-case render/build validation before any bulk lands (no lazy-load documented in docmd, C3).
- **`downloads/updates` (844 pages)**: mapped onto docmd versions per the OQ5 recommendation — each release line (rs-1.x…rs-5.x, adempiere-3.9.4, T.E.S, devices) as a versioned tree; `docker`/`binary` pages as regular pages.
- Per-slice gate: clean build + link/image validity (CI enforces).

**Entry:** Phase 1 exit met, OQ1/OQ2 resolved.
**Exit:** all 1,284 pages migrated and building clean; version switcher functional across all versions; zero broken internal links and zero missing images.

### Phase 3 — Cutover

- Redirect strategy for old `https://docs.erpya.com/...` URLs via docmd redirects config (VuePress permalink shape → docmd paths); cover directory-index pages (`/docs/basic-rules/login/` → new path).
- Final QA: broken links/images across the full site, search parity (pilot-verified queries), llms.txt completeness (all pages present, per-version), version switcher across ≥2 versions, canonical host fixed (R8 — source config had `docs-md.erpya.com` mismatch).
- Decommission plan for docs.erpya.com (owner-run): point DNS/CNAME or 301 at the new site; erpcya/docs repo archived/annotated read-only (never modified).

**Entry:** Phase 2 exit met.
**Exit:** new site serving as production at the redirected URLs; old URL crawl sample all 200/301-correct; llms.txt + MCP verified against production URL.

## 4. Version model recommendation

docmd native versioning engine (C4): `current` builds to site root; non-current versions build to `/<id>/` subfolders in one unified build; per-version `navigation.json` allowed; sticky-route switcher.

- **`current` = newest GA release line (recommended: `rs-5.x`)** — the core manual in `docs/` describes the current release; this is the reading experience for most users.
- Non-current versions: `rs-1.x` … `rs-4.x`, `adempiere-3.9.4`, `T.E.S`, `devices`, each with `id` + human `label`, content in `docs-<id>/`-style dirs.
- **OQ1 experiment (Phase 1):** dotted ids (`rs-5.x`) are unverified (C5 recommends concise alphanumeric). Default recommendation: **sanitized ids** (`rs5x`, `rs4x`, `adm394`, `tes`, `devices`) + friendly `label`s (`RS 5.x`, `ADempiere 3.9.4`…) — adopt dotted ids only if the 2-version pilot proves they work.
- Version content sourcing: the source repo has **no per-release doc trees** — releases exist only as update-note trees. The design must define what content each version's tree actually carries (update notes as version content vs. versioned copies of the manual); until then the versions may legitimately carry the `downloads/updates/<line>` trees (OQ5).

## 5. Scope

**In:**
- All 1,284 md files + 5,249 images (≈370 MB), imported into this repo.
- `navigation.json` translated from `sidebar.ts` (all top sections: Nosotros, Producto, Documentación, Comunidad, Descargas).
- Plugins from pilot: **search** (MiniSearch, default), **llms** (llms.txt/llms-full.txt/SKILL.md), **mcp** (`npx @docmd/core mcp`, 6 tools incl. `validate_docs` as CI gate).
- Docmd native **versioning** active from pilot (see §4).
- GitHub Pages production via `docmd-io/deploy@v1`; CI build + link/image validity gate.
- Locale `es` single, i18n-ready structure.
- Frontmatter/container migration (title kept; sticky/icon dropped; note/info/tip/warning native).
- `vue-demo` page (1 file): **recommended default = adapt to static screenshot + code** (keep the content; no live repl in docmd).

**Out — accepted degradations** (per research OQ4, recorded unless owner objects):
- Feeds (atom/rss/json) — no docmd feed plugin in current sitemap.
- PWA (manifest/icons/shortcuts) — no docmd equivalent identified.
- Comments — source had **none live** (Waline was a placeholder); no action.
- Mermaid / math — 0 usage in source (dependency installed, never used).
- Blog dynamic behavior (blog2) — 2 news posts become **static pages** under Nosotros; no blog engine, categories, or timeline.

## 6. Risks & mitigations (explore R1–R8 + research verdicts)

| # | Risk | Verdict | Mitigation |
|---|------|---------|-----------|
| R1 | docmd asset handling vs `/assets/...` absolute refs | **Resolved** (C1/C2) | Import `public/assets/` → root `assets/`; zero rewrites; defensive CI check (`validate_docs`) stays. |
| R2 | GH Actions free tier (20 min) vs 1,284 pages + 370 MB | **Open — measurement gate** (C6/C7) | Phase 1 full-scope dry build (OQ2). Ladder: Actions caching → slim first import → self-hosted/paid runner. |
| R3 | Versioning can't express parallel published ERP versions | **Resolved** (C4) | Native `versions` engine; §4 model; OQ1 id experiment in pilot. |
| R4 | 309-image page degrades render/build | **Open — validation gate** (C3, no lazy-load doc'd) | Excluded from pilot; **first** rollout item; measure render + build; fallback: split page. |
| R5 | Pre-1.0 breaking changes mid-migration | Confirmed pin (C5/S12) | Pin `@docmd/core@0.9.4` from Phase 0; no upgrades until after cutover. |
| R6 | 844 downloads pages may be stale | High likelihood / low impact | Owner decision per OQ5 at design: migrate all (redirect-safe) vs trim. |
| R7 | Blog/feeds/PWA parity expectations | Low / low | Accepted degradations in §5; owner may object at design review. |
| R8 | Hostname mismatch in source config | Low / low | Set correct canonical `url` in `docmd.config.json`; verify in cutover QA (affects SEO + llms.txt absolute URLs). |

## 7. Success criteria (measurable)

1. 100% of 1,284 source pages built (clean `npx @docmd/core build`).
2. 0 broken internal links — `validate_docs` (MCP) green in CI at cutover.
3. 0 missing images across the full site (build image-validity gate).
4. `llms.txt` covers all pages (per-version), verified at the production URL.
5. Version switcher works across ≥2 published versions with sticky-route behavior.
6. Full production build completes within the GH Actions free tier (or an approved mitigation is in place — OQ2).
7. Cutover complete: sampled old `docs.erpya.com` URLs return 200 or 301→new path; no dead links in the redirect map.
8. MCP server reachable with all 6 tools against the production site.

## 8. Open decisions for the owner (design/spec phase — not resolved here)

Each carries a **recommended default** (marked); the owner decides at design review.

- **OQ1 — Version id charset** (dotted `rs-5.x` vs sanitized `rs5x`): *recommended default: sanitized ids + friendly labels; adopt dotted only if the Phase 1 two-version experiment proves it.*
- **OQ2 — Full build time vs free tier**: *recommended default: measure in pilot; if over 20 min, first apply Actions caching, then decide slim-import vs runner upgrade.*
- **OQ3 — `vue-demo` page** (adapt vs drop): *recommended default: adapt to static screenshot + code (1 file, low cost).*
- **OQ4 — Blog/news + feeds + PWA**: *recommended default: 2 posts as static pages; drop feeds and PWA (accepted degradation).*
- **OQ5 — `downloads/updates` 844 pages** (per-release-line versions vs one tree): *recommended default: model each release line as a docmd version (native fit, C4); current = newest GA line.*
- **OQ6 — `public/` root files** (logo/favicon/background placement): *recommended default: move under `assets/`, update ~4 config refs (C2).*

---

**next_recommended: `sdd-spec`**
