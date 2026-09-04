# WU2.7 Final census + version switcher verification — Report

- Date: 2026-09-04
- Executor: orchestrator (inline)
- Base per DAG: `wu2.6/slice-downloads` (head of the Phase 2 chain).

## Final census (site-wide)

- **Exactly 1,284 md files in the current tree → 1,284 unique page URLs.**
- **0 missing from build output** (fresh `rm -rf site` build: exit 0, 2,051
  pages total = 1,284 current + 767 version-tree pages).
- **1,284/1,284 serve 200** from a static serve of the build output
  (concurrent; the one space-filename URL resolves through the WU2.4
  generated redirect, counted 200).
- Gates site-wide:
  - `ci-validate` → **PASS** (mirror-strict 4,921, real broken 13 =
    baseline 13 pre-existing source defects, **new 0**) — i.e. zero NEW
    broken internal links site-wide; logs archived (extract documented
    in-file)
  - `check-images` → **PASS** (0 missing images site-wide)

## Version switcher — all 8 versions

Switcher component: `.docmd-version-dropdown` (sidebar-top, the WU1.2
config fix). Verified live in a browser against the static build:

- **Presence: 8/8 roots** (`/`, `/rs-4.x/`, `/rs-3.x/`, `/rs-2.x/`,
  `/rs-1.x/`, `/ad-3.9.4/`, `/tes/`, `/devices/`) each render **8 items**
  with the active item correctly self-referencing.
- **Sticky-route (path preservation)**: from `/rs-4.x/updates/`, clicking
  the rs-3.x item landed on **`/rs-3.x/updates/`** (relative path kept —
  the route exists in the target version).
- **Fallback (missing relative route → target's index.md)**: from
  `/rs-4.x/updates/rs-40.x/` (rs-4.x-only content), clicking rs-3.x
  landed on **`/rs-3.x/`** (the target version's fallback landing).
- **Current deep page → version**: from
  `/docs/master-data/business-partner/`, clicking rs-4.x landed on
  **`/rs-4.x/`** (version trees mirror `updates/` content, not the
  current `/docs/` tree, so the relative route is missing → fallback;
  same shape as the legacy site's versioned-docs layout).

Mechanism (dist source, 0.9.4 `@docmd/ui/assets/js/docmd-main.js`):
clicks on `.version-dropdown-item` are intercepted ("Sticky Version
Switching (Path Preservation)"); the candidate `targetRoot + suffix` is
checked with `fetch(HEAD)` and navigated to when it exists, otherwise the
switcher falls back to `targetRoot` (the version's index).

## Verdict

**PASS** — 1,284/1,284 current-tree pages 200; 0 new broken links and 0
missing images site-wide; switcher present on all 8 versions with
sticky-route and fallback behavior exactly as specified. **Phase 2
complete** (WU2.1–WU2.7).
