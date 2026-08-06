# TaxRes CRM — Website Changelog

## v1.0.0 — Initial Public Launch
**Released:** August 2026

### Pages Added
- `/` — Homepage with hero, transcript card, feature grid, how-it-works, builder credibility, trust band
- `/features` — Platform overview with 6 feature area cards and case pipeline diagram
- `/features/client-management` — Client Management feature page
- `/features/case-management` — Case Management feature page
- `/features/irs-workflows` — IRS Workflows flagship feature page
- `/features/document-portal` — Document Portal feature page
- `/features/scheduler` — Scheduler feature page
- `/features/automation` — Automation feature page
- `/about` — About page with Organization JSON-LD schema
- `/demo` — Demo booking page
- `/contact` — Contact page
- `/pricing` — Pricing placeholder (tiers not yet published)
- `/resources` — Resources hub placeholder
- `/security` — Security and access controls page
- `/privacy` — Privacy Policy (legal details pending)
- `/terms` — Terms of Service (legal details pending)
- `404.html` — Custom 404 page

### Infrastructure
- Static multi-page HTML — no framework, no build step
- Hosted on GitHub Pages from `taxresolutioncrm/taxrescrm-site`, `main` branch
- Custom domain: `taxrescrm.net`
- CNAME: `taxrescrm.net`

### Design System
- Shared stylesheet: `/assets/css/site.css`
- CSS variables: `--ink`, `--ink-2`, `--paper`, `--card`, `--line`, `--red`, `--green`, `--green-soft`, `--mut`, `--maxw`
- Fonts: Bricolage Grotesque (headings), Inter (body), IBM Plex Mono (code/mono)
- Responsive breakpoints: 900px, 560px

### Configuration
- `/assets/js/config.js` — Single source of truth for all URLs and IDs (`BOOK_URL`, `APP_URL`, `CONTACT_EMAIL`, `GA4_ID`, `CLARITY_ID`, `BING_VERIFICATION`)
- `/assets/js/site.js` — Runtime URL resolution (`data-link`, `data-email` attributes) and analytics auto-init

### SEO
- Unique `<title>` and `<meta name="description">` on every page
- Canonical URLs on every page
- Open Graph tags on every page
- Twitter Card tags on every page
- Favicon: `/assets/img/favicon.ico` (all sizes)
- `robots.txt`
- `sitemap.xml` — 16 URLs
- JSON-LD Organization schema on every page
- JSON-LD SoftwareApplication schema on homepage
- One H1 per page, semantic heading order

### Analytics (hooks ready, IDs pending)
- Google Analytics 4 — auto-init via `config.js GA4_ID`
- Microsoft Clarity — auto-init via `config.js CLARITY_ID`
- Bing Webmaster Tools — verification via `config.js BING_VERIFICATION`

### Branding
- Logo: TaxRes CRM (navy shield with gold gradient blades + navy wordmark)
- Primary button: navy `#14213A` background, gold `#C4A44A` text
- Public contact: `info@taxrescrm.net`
- Booking: CRM scheduler at `/book?demo=true` (TaxRes CRM branding)

---

## Upcoming — v1.1.0
- Legal details finalized in `/privacy` and `/terms`
- GA4, Clarity, Bing IDs configured
- `/resources` first 5 cornerstone articles
- Homepage screenshots (Cruz Resolution Group fictional data)
- `/pricing` page (when tiers are confirmed)
