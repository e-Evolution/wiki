# WU1.3 OQ1 Dotted-Id Experiment — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU1.3 oq1 dotted-id experiment", token `sha256:15d15709…`
- One experiment, one decision (design §6 mechanics).

## Experiment (exact design-6 config)

Two-version config with dotted ids, sanitized dir names, `position: sidebar-top`
(the WU1.2-fixed value):

```json
{ "current": "rs-5.x",
  "all": [ { "id": "rs-5.x", "dir": "docs", "label": "RS 5.x (current)" },
           { "id": "rs-3.x", "dir": "docs-rs3x", "label": "RS 3.x" } ] }
```

## Results — PASS on all three criteria

1. **Build green:** exit 0, 1,396 pages (current + rs-3.x trees; the six
   non-experiment version trees correctly absent from the output), 0 errors.
2. **Dotted subpath URLs serve:** 200 on `/rs-3.x/`, `/rs-3.x/updates/`, and the
   deep nested-dotted path `/rs-3.x/updates/rs-35.x/rs-35.4/` (dots in multiple
   path segments).
3. **Switcher round-trips:** 2 items in the sidebar; on `/rs-3.x/` the toggle
   reads **RS 3.x**, the RS 3.x item is active, the root item links back to `/`;
   clicking back returned to the root with the RS 5.x (current) context.

## Decision (recorded in measurements.md OQ1 slot)

**ADOPT dotted ids.** Final 8-version config committed in this PR:

| id | dir | label |
|---|---|---|
| rs-5.x (current) | docs | RS 5.x (current) |
| rs-4.x | docs-rs4x | RS 4.x |
| rs-3.x | docs-rs3x | RS 3.x |
| rs-2.x | docs-rs2x | RS 2.x |
| rs-1.x | docs-rs1x | RS 1.x |
| ad-3.9.4 | docs-adm394 | ADempiere 3.9.4 |
| tes | docs-tes | T.E.S |
| devices | docs-devices | Devices |

`tes`/`devices` keep sanitized ids (no dotted form exists for them). Dir names
stay sanitized (D2): **config-only change, no content move**.

Post-adoption verification: build exit 0 (2,051 pages); 200 on all seven
version roots (`/rs-4.x/`, `/rs-3.x/updates/`, `/rs-1.x/`, `/ad-3.9.4/`,
`/tes/`, `/devices/`) + `/` + a pilot page; 8-item switcher with dotted hrefs
rendered in the sidebar (verified on the 309-ref business-partner page).

Redirect-map note: non-current version URLs never existed on the old site, so
the WU0.7 identity coverage map (1,284 current-site URLs) is unaffected by the
id change. Per-version `navigation.json` files use version-root-relative paths
(`/updates/…`) and embed no id — no regeneration needed.
