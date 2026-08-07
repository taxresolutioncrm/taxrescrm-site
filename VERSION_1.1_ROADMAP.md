# TaxRes CRM Website — Version 1.1 Roadmap

**Status:** Planning  
**Prerequisite:** 30 days of analytics data from v1.0.0

---

## Marketing

### Resource Center
- Article 2: Understanding IRS Transaction Codes
- Article 3: What is CSED? (Collection Statute Expiration Date)
- Article 4: Form 2848 vs Form 8821 — What's the Difference?
- Article 5: Offer in Compromise — How the Process Works
- Article 6: CP504 Notice — What It Means and What To Do
- Article 7: Form 433-F — How to Complete a Collection Information Statement
- Article 8: IRS Penalty Abatement — First-Time Abatement and Reasonable Cause
- Resource index page updated with article cards as articles publish

### LinkedIn
- Founder launch post
- Weekly educational posts (one per published article)

### Outreach
- Warm outreach copy for EAs, CPAs, tax attorneys
- Demo follow-up email sequence

---

## Website

### Pricing Page
- Publish actual pricing tiers once confirmed
- Replace placeholder with live tier cards

### Homepage
- Add real product screenshots (Cruz Resolution Group fictional tenant)
- Replace placeholder screenshot areas with actual CRM UI

### Social Proof
- Customer testimonials section (once first customers confirm)
- Case study format (anonymized, with permission)

### Demo Flow
- Review and refine demo page copy once booking flow is confirmed working
- Add post-demo confirmation page copy

---

## CRM Product

### IRS A2A Integration
- IRS Account to Account transcript pull
- Direct transcript import into case file

### Customer Feedback Loop
- In-app feedback mechanism
- Feature request tracking

### New Integrations
- IRS eServices / TDS connection
- Calendar sync (Google, Outlook)
- E-signature improvements

### Performance
- Sub-2s load time on all pages
- Lighthouse score 95+ across all categories

---

## Knowledge Base

### IRS Forms Library
- Searchable IRS form index
- Pre-fill guides for common forms (2848, 8821, 433-A, 433-B, 656, 12153)

### IRS Notice Library
- CP14, CP501, CP503, CP504, LT11 explained
- Response timelines and action steps per notice

### State Resources
- State POA requirements by state
- State collection timeline guides (FL, TX, AZ, GA priority)

### Transcript Guides
- How to order transcripts via eServices
- How to read wage and income transcripts
- How to read business (941) transcripts

---

## Infrastructure

### CRM Migration
- Move CRM from `/taxcasereview-CRM/` subpath to `app.taxrescrm.net`
- Two-stage cutover (DNS first, base path flatten second)
- OAuth callback updates (Google, QuickBooks, Xero)

### `taxrescrm.app` Redirects
- Configure Porkbun URL forwarding: `taxrescrm.app` → `taxrescrm.net`
- Configure `www.taxrescrm.app` → `taxrescrm.net`

### Founder Dashboard (inside CRM)
- Morning card: new demo requests, website visitors, organic clicks
- Top landing pages, top keywords, search position changes
- New indexed pages, articles needing updates
