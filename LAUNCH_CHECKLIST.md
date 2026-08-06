# TaxRes CRM — Launch Checklist

Complete every item before driving traffic. Check the box once confirmed.

---

## DNS & Hosting
- [ ] `taxrescrm.net` A records pointing at GitHub Pages (185.199.108-111.153)
- [ ] `www.taxrescrm.net` CNAME pointing at `taxresolutioncrm.github.io`
- [ ] CNAME file in repo contains `taxrescrm.net`
- [ ] SSL/HTTPS enforced in GitHub Pages settings
- [ ] `taxrescrm.app` and `www.taxrescrm.app` redirect to `taxrescrm.net` (Porkbun URL Forwarding)
- [ ] `www.taxrescrm.net` redirects to `taxrescrm.net`

## Legal Pages
- [ ] `/privacy` — `[MONTH DAY, YEAR]` replaced with effective date
- [ ] `/privacy` — `[LEGAL ENTITY NAME]` replaced with business name
- [ ] `/privacy` — `[MAILING ADDRESS]` and `[CITY, STATE ZIP]` replaced
- [ ] `/terms` — All placeholders replaced (same fields as Privacy)
- [ ] Attorney has reviewed Privacy Policy
- [ ] Attorney has reviewed Terms of Service

## Analytics
- [ ] Google Analytics 4 property created
- [ ] GA4 Measurement ID added to `config.js` (`GA4_ID`)
- [ ] Google Search Console property verified for `taxrescrm.net`
- [ ] Sitemap submitted to Google Search Console (`https://taxrescrm.net/sitemap.xml`)
- [ ] Microsoft Clarity project created
- [ ] Clarity Project ID added to `config.js` (`CLARITY_ID`)
- [ ] Bing Webmaster Tools property verified
- [ ] Bing verification meta tag / ID added to `config.js` (`BING_VERIFICATION`)

## Email
- [ ] `info@taxrescrm.net` Porkbun forward confirmed working (send a test)
- [ ] Reply arrives in correct inbox
- [ ] romy@taxrescrm.net mailbox operational (Stalwart/webmail)

## Functional Testing
- [ ] "Book a Demo" button opens CRM scheduler with TaxRes CRM branding (not Tax Case Review)
- [ ] Scheduler books an appointment and creates a lead in the CRM
- [ ] `info@taxrescrm.net` contact link opens correct email client
- [ ] All nav links load the correct page
- [ ] All footer links load the correct page
- [ ] All "Explore →" cards on feature pages load the correct page
- [ ] 404 page appears for a non-existent URL
- [ ] Homepage loads in under 3 seconds

## SEO Verification
- [ ] Every page has a unique title
- [ ] Every page has a unique meta description
- [ ] Every page has a canonical URL
- [ ] Open Graph image appears when URL is pasted into iMessage / Slack / LinkedIn
- [ ] Favicon appears in browser tab
- [ ] `robots.txt` accessible at `https://taxrescrm.net/robots.txt`
- [ ] `sitemap.xml` accessible at `https://taxrescrm.net/sitemap.xml`

## Browser & Device Testing
- [ ] Chrome (desktop) — all pages
- [ ] Edge (desktop) — homepage + one feature page
- [ ] Firefox (desktop) — homepage + one feature page
- [ ] Safari (desktop) — homepage + one feature page
- [ ] iPhone Safari — homepage, nav, features, booking
- [ ] Android Chrome — homepage, nav, features, booking
- [ ] No horizontal scrolling on any device
- [ ] Mobile nav hamburger opens and closes
- [ ] All CTAs are tappable (min 44px tap target)

## Content Review
- [ ] Read every page aloud — no awkward phrasing
- [ ] No placeholder text remaining (lorem ipsum, [BRACKETS], TODO)
- [ ] No invented statistics, testimonials, or certifications
- [ ] No references to `taxrescrm.org`
- [ ] No demo account credentials visible anywhere
- [ ] Booking page shows TaxRes CRM branding (not Tax Case Review)
- [ ] All prices on Pricing page match approved rates (or page remains placeholder)

## Visual QA
- [ ] Logo appears correctly in nav on all pages
- [ ] Strip section ("One login instead of five invoices") — clean text, no strikethrough
- [ ] "Book a Demo" buttons: navy background, gold text, consistent across all pages
- [ ] Feature cards hover correctly
- [ ] No layout shift on page load
- [ ] No broken images

## Performance
- [ ] Lighthouse Performance ≥ 90 (mobile)
- [ ] Lighthouse Accessibility = 100
- [ ] Lighthouse Best Practices = 100
- [ ] Lighthouse SEO = 100

---

## Sign-Off
- [ ] Romy has personally reviewed every page
- [ ] Legal pages approved
- [ ] Analytics confirmed firing
- [ ] Site is ready to receive traffic

**Version:** v1.0.0
**Domain:** taxrescrm.net
**Repo:** taxresolutioncrm/taxrescrm-site
