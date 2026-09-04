# WU1.2 Pilot Verification Slice — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU1.2 pilot verification slice", token `sha256:81b17433…`
- Pilot slice (per tasks.md, verification not content): 14 pages =
  `docs/docs/basic-rules/` 9 (incl. its index) + `docs/docs/master-data/` 4
  (business-partner, product, reports, warehouse) + site root index.

## 1. 14 pilot pages build clean and render

Fresh in-repo build of the exact pilot tree (`npm ci` + `npx @docmd/core build`):
**exit 0, 2,051 pages, 0 errors**. All 14 URLs served 200 with their HTML present:

`/`, `/docs/basic-rules/`, `/docs/basic-rules/{icons-interface,login-2fa,login-keycloak,login,props,quick-access,toolbar,user-interface}/`,
`/docs/master-data/{business-partner,product,reports,warehouse}/`.

## 2. Ctrl+K search (live browser test)

- Index artifact: `site/_docmd-search/search-index.json` (MiniSearch inverted index,
  10,742 tokens; per-document `version` field populated).
- Pilot-only term selected by containment check over the index: **`authenticator`**
  (exactly 2 pages, both pilot: `/docs/basic-rules/login-2fa/`,
  `/docs/basic-rules/login-keycloak/`; no other corpus page contains the token).
- Live test: opened `/docs/basic-rules/`, dispatched **Ctrl+K** →
  `.docmd-search-modal` opened (input "Search documentation..."), typed
  `authenticator` → results listed both pilot pages (plus fuzzy
  authenticat* matches), clicked the login-2fa result → **navigated to
  `/docs/basic-rules/login-2fa/`**, modal closed, page content rendered.

## 3. Version switcher — DEFECT FOUND AND FIXED (config-only, ~1 line)

Verification **initially failed**: with D2's `position: "sidebar"`, the switcher
rendered nowhere (sidebar groups empty; options menu held only search + theme).
Root cause from the 0.9.4 dist source (`@docmd/ui/templates/layout.ejs`): the
version-dropdown partial is included only for
`config.versions.position === 'sidebar-top'` or `'sidebar-bottom'` —
`"sidebar"` is not a recognized value and is silently dropped.

**Fix (deviation from D2 wording, recorded):** `docmd.config.json`
`versions.position`: `"sidebar"` → `"sidebar-top"`. No other config or content
change; D2's intent (switcher in the sidebar) is met by the nearest valid value.

After the one-line fix and rebuild, live verification:

- Dropdown renders inside `aside.sidebar > .sidebar-version-wrapper` (sidebar-top).
- Toggle label: **RS 5.x (current)** with **Latest** badge; **8 items**, correct
  roots: `/`, `/rs4x/`, `/rs3x/`, `/rs2x/`, `/rs1x/`, `/adm394/`, `/tes/`, `/devices/`;
  active item = current.
- **Round-trip:** clicked **RS 4.x** → navigated to `/rs4x/`; switcher toggle now
  reads **RS 4.x** with the RS 4.x item active (version context sticky per C4).

## 4. CI gate (docs.yml) on the pilot PR

`docs.yml` triggers on `pull_request: branches: [main]` and `push: main`. This PR
is stacked (base ≠ main), so the workflow does not fire on it; it will run when
the chain is merged bottom-up. Equivalent evidence — the exact command sequence
the gate runs, executed on this commit:

- `npm ci` → exit 0
- `npx @docmd/core build` → exit 0 (2,051 pages)
- `node scripts/ci/ci-validate.mjs .` → **PASS** (mirror-strict 4,921, real broken
  13 = baseline 13, **new 0**)
- `node scripts/ci/check-images.mjs docs assets` → **PASS** (0 missing)

## Verdict

**PASS** — all three WU1.2 acceptance bullets verified on the pilot slice; the
switcher position defect is fixed with a documented one-line config deviation
(`sidebar` → `sidebar-top`, the valid 0.9.4 value for the D2 intent).
