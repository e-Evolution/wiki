# WU3.2 — 20-URL old-site crawl (2026-09-04)

20 representative old docs.erpya.com URLs spanning page, directory-index, and downloads/
forms. Contract: each must return 200 at the new path or 301 -> 200 on the cutover build
(fresh `rm -rf site` build at the cutover commit, url=https://docs.erpya.com, served statically).

| Old status | New status | URL |
|---|---|---|
| 200 | 200 | / |
| 200 | 301->200 (canonical /docs/basic-rules/login-2fa/) | /docs/basic-rules/login-2fa |
| 404 | 200 | /docs/basic-rules/login-2fa/ |
| 200 | 301->200 (canonical /docs/master-data/business-partner/) | /docs/master-data/business-partner |
| 200 | 301->200 (canonical /product/source-code/) | /product/source-code |
| 200 | 301->200 (canonical /community/code-of-conduct/) | /community/code-of-conduct |
| 200 | 200 | /docs/basic-rules/ |
| 200 | 301->200 (canonical /docs/basic-rules/) | /docs/basic-rules |
| 200 | 200 | /about/ |
| 200 | 200 | /downloads/ |
| 200 | 200 | /downloads/updates/rs-5.x/ |
| 200 | 200 | /downloads/updates/rs-4.x/ |
| 200 | 200 | /downloads/updates/rs-3.x/ |
| 200 | 200 | /downloads/updates/rs-2.x/ |
| 200 | 200 | /downloads/updates/rs-1.x/ |
| 200 | 200 | /downloads/updates/adempiere-3.9.4/ |
| 200 | 200 | /downloads/updates/adempiere-T.E.S/ |
| 200 | 200 | /downloads/updates/devices/ |
| 200 | 200 | /downloads/updates/devices/printers/ |
| 404 | 200 | /downloads/updates/adempiere-3.9.4/erpya-3.9.4-001-3.x.x/erpya-3.9.4-001-3.1.x/erpya-3.9.4-001-3.1.6/ |

Result: 20/20 satisfy the contract.
Notes: old site serves page URLs without trailing slash (trailing-slash page forms were
404 on the old site and are 200 on the new one — strict improvement); directory-index and
downloads forms are 1:1. The last row (deep adm394 leaf) was 404 on the old site and 200
on the new one (old-site defect, not a migration regression).
