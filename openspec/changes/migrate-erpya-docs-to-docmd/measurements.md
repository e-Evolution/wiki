# Measurements — migrate-erpya-docs-to-docmd

Phase 1 decision record. Each slot is filled by exactly one work unit, with
evidence, and carries one explicit decision. No other phase reads assumptions —
these slots are the only place the two open questions resolve.

## OQ1 — Version identifiers: dotted ids vs sanitized ids

**Question.** Does docmd 0.9.4 accept dotted version ids (`rs-5.x`) in the
`versions` config — config parse, build, URL subpath, and switcher round-trip —
so we can publish under human-friendly ids instead of the D2 sanitized default?

**Experiment (WU1.3).** Two-version config exactly per design §6 (dir names stay
sanitized):

```json
{
  "current": "rs-5.x",
  "all": [
    { "id": "rs-5.x", "dir": "docs", "label": "RS 5.x (current)" },
    { "id": "rs-3.x", "dir": "docs-rs3x", "label": "RS 3.x" }
  ]
}
```

Pass = build green + `/rs-3.x/…` URLs serve + switcher round-trips.
Fail or any ambiguity = revert to the D2 sanitized block (config-only, no content move).

**Config used (WU1.3, exact design-6 experiment):**

```json
{ "current": "rs-5.x",
  "all": [ { "id": "rs-5.x", "dir": "docs", "label": "RS 5.x (current)" },
           { "id": "rs-3.x", "dir": "docs-rs3x", "label": "RS 3.x" } ] }
```

(position kept at `sidebar-top` per the WU1.2 fix; dir names sanitized)

**Evidence (WU1.3):**
- Build: exit 0, 1,396 pages (current + rs-3.x trees), 0 errors.
- URLs: 200 on `/rs-3.x/`, `/rs-3.x/updates/`, and deep nested-dotted
  `/rs-3.x/updates/rs-35.x/rs-35.4/`; current-root URLs unaffected.
- Switcher: 2 items rendered in the sidebar; from `/rs-3.x/` the toggle reads
  **RS 3.x** with the RS 3.x item active and the root link pointing back —
  round-trip complete both ways.

**Decision: ADOPT dotted ids.** The experiment passed all three criteria
(build green + dotted subpath URLs serve + switcher round-trips). Final 8-version
config (WU1.3 commit): dotted ids for every line with a natural dotted form —
`rs-5.x, rs-4.x, rs-3.x, rs-2.x, rs-1.x, ad-3.9.4` — and the unchanged sanitized
ids `tes` / `devices` (no dotted form exists for them). Dir names stay sanitized
(D2). Verified after adoption: build exit 0 (2,051 pages), 200 on all seven
version roots, 8-item switcher with dotted hrefs.

Redirect-map note: non-current version URLs are NEW (they never existed on the
old site), so the WU0.7 identity coverage map is unaffected by the id change.

## OQ2 — Build-time budget (R2)

**Question.** Does the full-scope build on the pilot commit fit the 20-minute
budget, measured by the C7 runner (`build-benchmark.yml`, workflow_dispatch)?

**Budget.** ≤ 20 minutes → **go**. Over budget → **adjust**, and the named
mitigation (C7 ladder) is:

1. Actions caching (`node_modules` / build cache)
2. Slim first import (defer/trim unused `downloads` history — needs owner sign-off)
3. Self-hosted or paid runner

If the decision is **adjust**, apply STOPs for owner confirmation before any
mitigation is selected (decision needed before apply).

**Runner:** `build-benchmark.yml` (workflow_dispatch, full-scope `npm ci` + build)
**Pilot commit:** _pending — WU1.4_
**Measured time:** _pending — WU1.4_
**Decision (go / adjust + named mitigation):** _pending — WU1.4_
