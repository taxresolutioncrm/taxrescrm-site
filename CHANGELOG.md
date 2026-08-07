# TaxRes CRM — Website Changelog

## v1.0.0 — August 6, 2026

### Pages (17)
- `/` — Homepage
- `/features` — Platform features hub
- `/features/client-management`
- `/features/case-management`
- `/features/irs-workflows`
- `/features/document-portal`
- `/features/scheduler`
- `/features/automation`
- `/about`
- `/demo`
- `/contact`
- `/pricing` — Placeholder (tiers not yet published)
- `/resources` — Resource center hub
- `/resources/how-to-read-irs-account-transcript` — First cornerstone article
- `/security`
- `/privacy`
- `/terms`
- `404.html`

### Infrastructure
- Static multi-page HTML — no framework, no build step
- GitHub Pages — `taxresolutioncrm/taxrescrm-site`, `main` branch
- Custom domain: `taxrescrm.net` (HTTPS enforced)
- `www.taxrescrm.net` redirect via `/www/index.html`

### Design System
- Shared stylesheet: `/assets/css/site.css`
- Fonts: Manrope (headings), Inter (body), IBM Plex Mono (mono)
- Primary button: `#14213A` background, `#C4A44A` text
- Ghost button: transparent, `#C4A44A` border and text
- CSS variables: `--ink`, `--ink-2`, `--paper`, `--card`, `--line`, `--red`, `--green`, `--green-soft`, `--mut`

### Configuration
- `/assets/js/config.js` — Single source of truth: `BOOK_URL`, `APP_URL`, `CONTACT_EMAIL`, `GA4_ID`, `CLARITY_ID`, `BING_VERIFICATION`
- `/assets/js/site.js` — Runtime URL resolution + analytics init

### SEO
- Unique title + meta description on every page
- Canonical URLs, Open Graph, Twitter Cards, JSON-LD on every page
- `robots.txt`, `sitemap.xml` (17 URLs)
- Google Search Console verified — sitemap accepted
- Bing Webmaster Tools verified via GSC import — sitemap accepted

### Analytics
- Google Analytics 4: `G-M6J80B65LG` ✅
- Microsoft Clarity: `xyck7g2mfl` ✅
- Bing Webmaster Tools: verified via GSC import ✅

### Branding
- Logo, favicon, OG image finalized
- All ghost buttons: gold outline (`#C4A44A`) sitewide
- All contact: `info@taxrescrm.net`
- Zero `.org` references

---

## v1.1.0 — In Progress

### Resource Center
- Added `/resources/understanding-irs-transaction-codes` — Article 2
- Updated `/resources` index with Article 2 card
- Updated `sitemap.xml` — 18 URLs

### Search Console — Request Indexing
- [ ] `https://taxrescrm.net/resources/understanding-irs-transaction-codes`
- [ ] `https://taxrescrm.net/resources/` (updated index)
