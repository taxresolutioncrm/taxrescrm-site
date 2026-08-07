# TaxRes CRM — Marketing Website

**Live:** https://taxrescrm.net  
**Repo:** taxresolutioncrm/taxrescrm-site  
**Status:** v1.0.0 — Production (frozen)

---

## Stack

Static multi-page HTML. No framework. No build step. Deployed via GitHub Pages from `main` branch root.

- **CSS:** `/assets/css/site.css`
- **Config:** `/assets/js/config.js` — all URLs, analytics IDs, contact email
- **Runtime:** `/assets/js/site.js` — CTA resolution, analytics init

## Analytics IDs (config.js)

| Service | ID |
|---------|-----|
| Google Analytics 4 | G-M6J80B65LG |
| Microsoft Clarity | xyck7g2mfl |
| Bing Webmaster | Verified via GSC import |

## To update a URL or ID

Edit `/assets/js/config.js`. Every CTA and analytics tag reads from this file — nothing is hardcoded in HTML.

## Pages

17 production pages. See `sitemap.xml` for the full list.

## Docs

- `CHANGELOG.md` — version history
- `LAUNCH_CHECKLIST.md` — pre-launch verification record
- `VERSION_1.0_RELEASE_NOTES.md` — full v1.0 audit summary
- `VERSION_1.1_ROADMAP.md` — next phase work
