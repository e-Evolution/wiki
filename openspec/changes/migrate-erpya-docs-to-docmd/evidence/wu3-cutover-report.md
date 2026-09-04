# WU3 Cutover prep (WU3.1–WU3.4) — Report

- Date: 2026-09-04
- Executor: orchestrator (inline, autonomous mandate)
- Branch: `wu3/cutover` (base `wu2.7/final-census`, head of the Phase 2 chain)

This PR prepares the cutover. The **owner actions** (DNS, final production
verification, decommission) are documented at the bottom and in the PR
description; they are intentionally NOT performed by this PR.

## WU3.1 — CNAME + url swap (D8)

- `CNAME` (repo root): `docs.erpya.com`.
- `docmd.config.json`: `url: "https://docs.erpya.com"` (was the Phase 0–2
  subpath `https://e-evolution.github.io/wiki`).
- `.github/workflows/docs.yml`: new deploy step copies `CNAME` into the
  Pages artifact root before upload — **docmd 0.9.4 does not copy a CNAME
  into its build output** (no CNAME handling in dist), and GitHub Pages
  reads it from the artifact root.
- Cutover build: exit 0, 2,051 pages; all gates green (below).

## WU3.2 — Redirect crawl sample (20 old URLs)

- 20 representative old `docs.erpya.com` URLs spanning page,
  directory-index, and `downloads/` forms (crawl log:
  `evidence/wu3-crawl-log.md`).
- **20/20 satisfy the contract** (200 at the new path, or 301 → 200).
- The old site serves page URLs without trailing slash; the new site
  canonicalizes to the trailing-slash form via 301, so every old form
  resolves. Two old-404 forms (trailing-slash page, one deep adm394 leaf)
  are now 200 — strict improvement.

## WU3.3 — Production AI verification (local/commit-level part)

Production-host fetches remain an owner step (after DNS), but the
commit-level equivalents all pass on the cutover build:

- `llms.txt` at the site root: **2,051 absolute
  `https://docs.erpya.com/…` URLs**, including sampled current-version
  pages (e.g. `/docs/master-data/business-partner/`) AND non-current
  versions (e.g. `/rs-3.x/`).
- MCP smoke at the cutover commit: **6/6 tools** (`search_docs`,
  `list_docs`, `read_doc`, `get_config`, `validate_docs`,
  `get_llms_context`) via stdio JSON-RPC; `get_config` reports the
  cutover url; `search_docs("authenticator")` resolves the pilot page.
- `validate_docs` (ci-validate) at the cutover commit: **PASS**
  (new broken 0; baseline 13 parity-preserved) — log archived.
- `check-images`: **PASS** (0 missing) — log archived.

## WU3.4 — Decommission + pin check

- **Pin check (R5): PASS** — `@docmd/core` resolves to exactly `0.9.4`
  (package.json exact spec + lockfile resolved URL at this commit).
- Decommission (owner): archive/annotate `erpcya/docs` as read-only and
  record the docs.erpya.com DNS/301 disposition after the production
  verification passes. Notes:

  - **Recommended owner order** (rollback-safe):
    1. Merge the whole stacked chain (#1 → #22) to main; the deploy
       workflow auto-configures GitHub Actions as the Pages source on
       first deploy (github-pages environment + deploy-pages@v4).
    2. In the repo Settings → Pages, point `docs.erpya.com` DNS at
       GitHub Pages (the A-records the settings page shows).
    3. Verify production: `https://docs.erpya.com/` 200; repeat the
       WU3.3 fetches against the live host (llms.txt absolute URLs,
       6/6 MCP reachable, spot crawl).
    4. Only then decommission the old VuePress site (archive
       `erpcya/docs`, stop its deploy). **Do not decommission before
       step 3.**
  - **Rollback**: revert the DNS flip (old site stays live until
    decommissioned) and/or `git revert` the cutover commit (subpath URL
    resumes serving). The CNAME in the artifact disables the
    `e-evolution.github.io/wiki` subpath URL once the custom domain is
    active — that is the intended cutover, and reverting the commit
    restores the subpath.

## Owner actions remaining (NOT done here)

1. Review + merge the stacked chain (#1 → #22).
2. DNS: point `docs.erpya.com` at GitHub Pages.
3. Production verification (live-host WU3.3 fetches).
4. Decommission the old site + record DNS/301 disposition.
5. Optional editorial follow-ups (owner scope): R6 stale downloads
   content disposition; `llms: false` opt-outs; business-partner.md page
   split candidate.
