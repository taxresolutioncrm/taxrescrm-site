# TaxRes CRM Website — Version 1.0 Release Notes

**Released:** August 6, 2026  
**Domain:** https://taxrescrm.net  
**Status:** Production

---

## What Was Completed

### Architecture
- Static multi-page HTML site — no build step, no framework dependency
- Hosted on GitHub Pages via `taxresolutioncrm/taxrescrm-site` (main branch → gh-pages)
- Custom domain `taxrescrm.net` with HTTPS enforced via GitHub Pages
- `www.taxrescrm.net` redirect handled via `/www/index.html` (meta refresh + JS replace)
- Centralized configuration via `/assets/js/config.js` (all URLs, IDs, email in one place)
- Data-driven CTAs via `/assets/js/site.js` (`data-link="book"`, `data-link="app"`, `data-email="contact"`) — no hardcoded URLs in HTML

### Pages (17 total)
| Page | Path |
|------|------|
| Homepage | / |
| Features Hub | /features |
| Client Management | /features/client-management |
| Case Management | /features/case-management |
| IRS Workflows | /features/irs-workflows |
| Document Portal | /features/document-portal |
| Scheduler | /features/scheduler |
| Automation | /features/automation |
| About | /about |
| Demo | /demo |
| Pricing | /pricing |
| Contact | /contact |
| Resources | /resources |
| Security | /security |
| Privacy Policy | /privacy |
| Terms of Service | /terms |
| 404 | /404.html |

### Analytics
| Service | ID | Status |
|---------|-----|--------|
| Google Analytics 4 | G-M6J80B65LG | ✅ Live |
| Microsoft Clarity | xyck7g2mfl | ✅ Live |
| Bing Webmaster | Pending ID | Hook live in site.js — fires when BING_VERIFICATION is set in config.js |

All analytics load conditionally from `site.js` — no hardcoded script tags in HTML. Zero duplicate tags confirmed.

### SEO Foundation
- `robots.txt` — allows all, references sitemap
- `sitemap.xml` — 16 URLs, submitted to Google Search Console and Bing Webmaster Tools
- Google Search Console — domain property verified, sitemap accepted (16 URLs, 0 errors)
- Bing Webmaster — connected via GSC import, sitemap accepted (16 URLs, 0 errors)
- Every page has: unique `<title>`, unique `<meta description>`, `<link rel="canonical">`, Open Graph tags, Twitter Card tags, JSON-LD schema, exactly one `<h1>`
- No duplicate page titles
- No `.org` references anywhere in the codebase

### Branding & Email
- All contact references use `info@taxrescrm.net`
- All internal links use `taxrescrm.net`
- Logo, favicon, apple-touch-icon, OG image all present

### Security
- HTTPS enforced site-wide via GitHub Pages
- No mixed-content references in HTML
- No hardcoded credentials anywhere in the codebase

### Legal
- Privacy Policy live at /privacy — entity: TaxResCRM Corp, Lake Park FL
- Terms of Service live at /terms

---

## Final Config State (config.js)

```js
window.TAXRES_CONFIG = {
  SITE_NAME: "TaxRes CRM",
  MARKETING_URL: "https://taxrescrm.net",
  BOOK_URL: "https://taxresolutioncrm.github.io/taxcasereview-CRM/book?demo=true",
  APP_URL: "https://taxresolutioncrm.github.io/taxcasereview-CRM/login",
  CONTACT_EMAIL: "info@taxrescrm.net",
  GA4_ID: "G-M6J80B65LG",
  CLARITY_ID: "xyck7g2mfl",
  BING_VERIFICATION: ""   // ← paste Bing code here when confirmed
};
```

---

## Remaining Future Enhancements (Not Bugs)

These are intentional deferrals, not deficiencies:

1. **Pricing page** — placeholder copy only; locked pending tier decisions
2. **Resource Center articles** — index page live, first article (IRS Account Transcript) written and ready to build
3. **CRM migration** — app still at `/taxcasereview-CRM/` subpath; migration to `app.taxrescrm.net` deferred (two-stage cutover plan documented in memory)
4. **BING_VERIFICATION** — config key exists and hook is live in site.js; paste the verification string from Bing Webmaster to activate
5. **Founder/Marketing Dashboard** — scoped for build once all analytics IDs are confirmed active for 30 days
6. **Screenshot tenant** — Cruz Resolution Group fictional data to be loaded for homepage polish sprint
7. **Book a Demo click tracking** — GA4 event tracking for CTA clicks (enhancement, not required for launch)
8. **`taxrescrm.app` redirects** — DNS redirect to `taxrescrm.net` not yet configured at Porkbun

---

## Key Decisions Locked in v1.0

- Primary domain: `taxrescrm.net`
- CTA: "Book a Demo" site-wide (no "Request a Demo" / mailto flows)
- Positioning: "Built by a practicing tax-resolution professional. Designed for the way your firm actually works."
- No demo credentials publicly displayed anywhere
- Static HTML only — no React, no Vite, no build pipeline for the marketing site
