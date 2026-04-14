# Feature Research

**Domain:** On-demand home wellness marketing website (India) — massage, spa, stretch therapy
**Researched:** 2026-04-14
**Confidence:** HIGH (brief is authoritative, competitor analysis via Urban Company / Soothe / Zeel verified)

---

## Feature Landscape

### Table Stakes (Users Expect These)

Features every competitive site in this space has. Missing these = the site feels incomplete or untrustworthy, especially for a skeptical Indian household considering letting a stranger into their home.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Hero section with primary booking CTA | First impression; every competitor (Urban Company, Soothe, Zeel) opens with a direct CTA above the fold | LOW | Brief specifies gradient hero with "Book Now" — present in scope |
| Service catalog / menu page | Users need to know exactly what they can book before trusting the site | MEDIUM | Brief covers Massages page (8 service cards, "Coming Soon" tags) + Stretch page |
| How It Works explainer (4-step flow) | Home services are inherently opaque — users won't book if they don't understand the process | LOW | Brief specifies 4-step horizontal flow on Home page |
| Trust signals: verified badges, ratings, certifications | Urban Company and Soothe both lead with "background checked, licensed, insured" messaging; Indian users require visible proof | LOW | Brief requires trust-signal UI patterns across pages — critical for stigma-breaking |
| Testimonials / social proof | 63.6% of Indian consumers check reviews before engaging a home service | MEDIUM | Brief specifies testimonial carousel on Home (autoplay + swipe) |
| Provider safety / verification narrative | Non-negotiable for letting a stranger into one's home; Urban Company uses facial recognition; Soothe uses identity verification | MEDIUM | Brief covers this on Work With Zorova and Home pages — must be prominent, not buried |
| Pricing transparency (or tier explanation) | Users bounce without price anchoring; Urban Company starts from Rs.499 visible upfront | LOW | Brief has Membership tier pricing cards (3 tiers, pricing TBD + waitlist CTA) — acceptable for pre-launch |
| FAQ / Help page | Reduces pre-booking anxiety; every competitor has an FAQ section | MEDIUM | Brief specifies Accordion FAQs on Help page — present |
| Contact / support channels | Trust requires reachability; WhatsApp is the dominant channel in India | LOW | Brief specifies WhatsApp link (no embedded widget) + Contact form |
| Legal pages (Privacy, Terms, Cancellation) | Required for any service accepting booking intent; cancellation policy is especially important for home services | LOW | Brief covers all three with shared template |
| Corporate / B2B pitch page | Urban Company, Soothe both have corporate wellness offerings; B2B is a high-ticket acquisition channel | MEDIUM | Brief covers Business page with corporate proposal form |
| Franchise / partnership inquiry page | Standard for scaling home-service brands in India | MEDIUM | Brief covers Franchise page with application form |
| App download CTAs | Urban Company and all Indian home-service apps drive to app download; mobile is primary channel | LOW | Brief specifies "Coming Soon" app mention in footer — correct scope deferral |
| Careers / provider recruitment page | Providers are a supply-side asset; recruitment narrative builds credibility and brand | MEDIUM | Brief covers "Work With Zorova" / Careers page with provider application form |
| About / brand story page | Trust-building requires a human face behind the brand; critical for stigma-breaking positioning | LOW | Brief covers About page with value cards |
| Blog / content hub | SEO driver and education channel; normalizes massage as healthcare not luxury | HIGH | Brief covers Blog page with contribute CTA; no CMS (hardcoded v1) |
| Newsletter / waitlist signup | Captures pre-launch demand; Membership + Gifts pages both use waitlist CTAs | LOW | Brief specifies waitlist CTA on Membership and Gifts pages |
| Gifts page with tier cards | Gift cards are a low-friction entry point for new customers; reduces first-booking hesitation | MEDIUM | Brief covers 3 gift tiers; purchase flow deferred (waitlist only) |
| Mobile-first responsive layouts | 70%+ of Indian internet users access via mobile; Urban Company's primary channel is app/mobile web | MEDIUM | Brief mandates mobile-first; all layouts verified <768px first |
| SEO meta tags, Open Graph, JSON-LD schema | Organic search is primary acquisition for pre-launch brands without app distribution | MEDIUM | Brief specifies per-page title/description/canonical, OG, Twitter Card, JSON-LD — present |

### Differentiators (Competitive Advantage)

Features Zorova has that competitors do not, or executes better. These map directly to the Core Value: trust-building, stigma-breaking conversion.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Multi-generation positioning (kids, seniors, athletes, women, men) | Urban Company segments by gender only (men/women); Zorova explicitly serves all ages and life stages — "wellness for every Indian household" is a genuinely broader mandate | MEDIUM | Requires benefit grids and content tailored to each audience segment across Home, Massages, Stretch pages |
| Explicit stigma-breaking narrative | No Indian competitor explicitly names and breaks the stigma; Urban Company implies trust but never addresses the cultural discomfort directly | MEDIUM | Brief treats this as the core mission — content on About, Home, Massages must name and dismantle the "massage = luxury/sleazy" perception |
| Safety-first for female providers and female clients | Soothe/Zeel mention background checks; Zorova can go further with explicit safe-working-conditions narrative for female therapists dispatched to homes, plus same-gender options for clients | MEDIUM | Brief covers "Work With Zorova" page; should also surface safety messaging for female clients on Home and service pages |
| Ayurvedic / therapeutic legitimacy positioning | International competitors (Soothe, Zeel) use Western clinical framing; Indian users respond to Ayurvedic heritage legitimacy + modern clinical fusion | LOW | Brief implies health-first framing; "Did You Know?" diabetes highlight box is an example — can expand with Ayurvedic service descriptions |
| Education-first health content (myth-busting, diabetes/chronic pain benefits) | Competitors have service menus, not educational content; Indian households are skeptical without evidence | MEDIUM | Brief specifies "Did You Know?" diabetes highlight box (Home + Massages); benefit grids (3x4 health benefits) — unique competitive angle |
| Provider-side recruitment narrative as a trust signal | Showing that Zorova cares for its providers (fair pay, safety, training) builds brand trust with customers — unusual in this space | LOW | "Work With Zorova" page content; surfaces credibility by inversion (a company that treats providers well treats customers well) |
| GEO / AI search optimization (AI Overviews, ChatGPT, Perplexity) | No Indian home-service competitor is optimizing for AI-generated answers; early mover advantage for "best massage at home in [city]" answer engine queries | MEDIUM | Brief specifies AI crawler accessibility, passage-level citability, brand mention signals — meaningful differentiator in 2026 |
| Membership tier model as an anchor for regular wellness spend | Positions massage as routine healthcare, not one-off luxury — shifts price framing entirely | MEDIUM | Brief covers 3-tier membership (Essentials, Wellness Plus, Family Wellness); competitor Urban Company has a wellness membership but it is not positioned as "preventive healthcare" |
| Design system quality (Zorova visual identity vs. generic marketplace look) | Urban Company is utilitarian marketplace UI; Zorova's Playfair Display + deep purple brand signals premium wellness credibility without luxury pricing | HIGH | Brief mandates design system: specific 5-token palette, micro-animations, gradient heroes — execution quality is itself a differentiator |

### Anti-Features (Explicitly NOT in v1)

Features to consciously exclude. Building these in v1 creates technical debt, scope overrun, or credibility risk before the product is proven.

| Feature | Why Requested | Why to Exclude in v1 | Alternative |
|---------|---------------|---------------------|-------------|
| Real booking / checkout / payment flow | Users expect to book immediately | No backend exists; premature checkout erodes trust if it breaks; full booking system is a later milestone | Prominent "Join Waitlist" or "Book a Trial" CTA flowing to a form or WhatsApp |
| User authentication / customer accounts | Personalization and order history | Auth introduces session state, security surface, and significant dev scope with no product to personalize yet | Collect email via waitlist forms; auth in v2 |
| Multi-language / Hindi i18n | Hindi-speaking users are a large TAM | Adds string management, layout complexity, font scope, and content translation overhead before brand voice is stable in English | English-only launch; mark i18n as v2 requirement |
| Headless CMS / dynamic content | Blog needs to scale | CMS integration (Contentful, Sanity, etc.) adds auth, API surface, and build complexity; v1 blog is 2-3 hardcoded articles | Hardcode 3-5 founding blog posts; add CMS in v1.x when editorial cadence is established |
| Live chat / chatbot widget | Users expect instant answers | Third-party widgets (Intercom, Tawk.to) add script weight (~100KB+), hurt Core Web Vitals, require support staffing, and create brand-inconsistent UX | WhatsApp deep-link ("Chat with us on WhatsApp") — lower friction, fits Indian user behavior |
| E-commerce gift card purchase | Gift cards drive revenue | Payment gateway, cart state, order confirmation email, refund handling — full e-commerce scope for a pre-launch site | Show gift tier cards with "Join Waitlist" CTA; purchase flow in v2 |
| Therapist profile pages | SEO value, provider showcase | Individual profile pages require content management for every provider, photo assets, and ongoing maintenance; premature at pre-launch | Provider trust shown through aggregate stats ("500+ verified therapists", ratings) and safety narrative; individual profiles in v2 |
| Real-time availability calendar | Users want to see slots | Requires backend scheduling system; false availability would destroy trust | "Book a time that works for you" form with callback promise |
| Dark mode | Modern UX expectation | Adds CSS complexity, doubles visual QA surface, and the Zorova palette (deep purple + lavender) works cleanly in light mode | Single light theme; dark mode in v2 if requested |
| City-specific landing pages | Local SEO value | High SEO value but requires per-city content uniqueness to avoid thin-content penalty; premature while service area is still being validated | Single-city or "available in [city] — expanding soon" copy on Home; city pages in v2 when service areas are confirmed |
| Analytics dashboards / A/B testing | Data-driven optimization | No traffic yet; setting up Optimizely/VWO before baseline traffic is overhead | GA4 tag in HTML (no server-side); PostHog deferred; structured for easy addition |
| Blog category/tag filter pages | Content discovery at scale | With only 3-5 founding posts, filter pages produce thin content and waste crawl budget | Simple list layout; category pages in v1.x when 10+ posts exist |

---

## Feature Dependencies

```
Trust signal UI patterns (badges, ratings, verified icons)
    └──required by──> All page conversions (every CTA depends on prior trust)
    └──required by──> Provider safety narrative
    └──required by──> Testimonial carousel

Zorova design system (tokens, typography, spacing)
    └──required by──> ALL page builds
    └──required by──> Micro-animations

Global navigation + Footer
    └──required by──> All pages (must ship before page content)
    └──required by──> Internal linking SEO strategy

SEO meta layer (react-helmet-async, JSON-LD)
    └──required by──> All pages (must be woven in, not retrofitted)
    └──required by──> Blog articles (Article schema)
    └──required by──> FAQ page (FAQPage schema)
    └──required by──> GEO / AI search optimization

Membership waitlist form
    └──requires──> Basic form handling (client-side validation + visual confirmation)
    └──enhances──> Membership tier pricing cards

Gifts waitlist form
    └──requires──> Basic form handling
    └──enhances──> Gift card tier cards

Provider application form
    └──requires──> Basic form handling
    └──lives on──> Work With Zorova page

Corporate proposal form + Franchise application form
    └──requires──> Basic form handling
    └──live on──> Business page, Franchise page

Blog
    └──requires──> SEO meta layer (Article schema)
    └──conflicts──> CMS (do NOT add CMS in v1; hardcode only)

City landing pages
    └──conflicts v1──> Service area not confirmed; thin content risk
    └──deferred to──> v2 after service area validation
```

### Dependency Notes

- **Design system must precede all page builds.** Token mismatches retrofitted across 14 pages is costly — establish palette, type scale, and spacing system first.
- **Global nav/footer must precede page content.** Internal linking and navigation consistency are required for both UX and SEO crawlability.
- **Trust signals are load-bearing across every page.** They are not a feature on one page — they are a pattern repeated at every conversion point (hero, service cards, booking CTA sections, provider page).
- **SEO meta layer (react-helmet-async) must be woven into each page build, not end-loaded.** Retrofitting schema JSON-LD and canonical tags is significantly more expensive.
- **Forms require client-side validation + visual confirmation before any page with a form ships.** Without this, form CTAs on Membership, Gifts, Business, Franchise, and Careers pages are non-functional.

---

## MVP Definition

### Launch With (v1)

Minimum required to convert a skeptical Indian household visiting the site for the first time.

- [ ] Zorova design system (tokens, type, spacing) — every other visual decision depends on this
- [ ] Global Navigation + Footer — prerequisite for all pages
- [ ] Home page — hero, How It Works, benefit grid, testimonial carousel, trust signals, membership anchor, app coming soon
- [ ] Massages page — service catalog, health benefits grid, "Did You Know?" diabetes box, pricing signals, booking CTA
- [ ] Stretch page — service benefits, use cases (athletes, seniors, recovery), booking CTA
- [ ] Work With Zorova / Careers page — provider recruitment narrative, safety narrative, application form
- [ ] Membership page — 3-tier pricing cards, waitlist CTA
- [ ] Gifts page — 3-tier gift cards, waitlist CTA
- [ ] Business page — corporate wellness pitch, proposal form
- [ ] Franchise page — franchise opportunity pitch, application form
- [ ] About page — brand story, mission, value cards, team/brand signal
- [ ] Blog page — 3-5 founding articles hardcoded, Article schema, SEO optimized
- [ ] Help + FAQ page — accordion FAQs, contact channels
- [ ] Legal pages (Privacy, Terms, Cancellation) — shared template, required for booking intent
- [ ] Contact page — WhatsApp link, contact form
- [ ] SEO layer — per-page title/description/canonical, OG tags, JSON-LD (Organization, LocalBusiness, Service, FAQPage, Article), sitemap.xml, robots.txt
- [ ] GEO / AI optimization — AI crawler access, passage-level content structure, llms.txt
- [ ] Trust signal UI patterns — repeated across all pages at conversion touchpoints
- [ ] Mobile-first responsive layouts — all pages verified <768px
- [ ] WCAG AA accessibility — contrast, semantic HTML, keyboard nav
- [ ] Core Web Vitals compliance — LCP <2.5s, INP <200ms, CLS <0.1
- [ ] Micro-animations — hover lifts, fade-ins, slide-ups, CTA press feedback

### Add After Validation (v1.x)

Add when the site is live and initial traffic establishes a baseline.

- [ ] Blog CMS integration — when editorial cadence exceeds 1 post/week and hardcoding is a bottleneck
- [ ] Blog category/tag filter pages — when 10+ posts exist
- [ ] GA4 + PostHog analytics — once traffic baseline exists to make data meaningful
- [ ] Hindi i18n — when Hindi-speaking user segment is validated via analytics
- [ ] Real photography assets — replace placeholder illustrations with brand photoshoot

### Future Consideration (v2+)

Defer until product-market fit and operational readiness.

- [ ] Real booking / checkout / payment — requires backend, payment gateway, scheduling system
- [ ] User authentication / accounts — requires booking history, personalization backend
- [ ] City-specific landing pages — requires confirmed service areas and unique per-city content
- [ ] Therapist profile pages — requires content ops for provider onboarding at scale
- [ ] Real-time availability calendar — requires scheduling backend
- [ ] E-commerce gift card purchase — requires payment gateway + order management
- [ ] Mobile native app — web-first; app when retention mechanics justify native build
- [ ] Live chat / chatbot — when support volume justifies staffing

---

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Zorova design system + tokens | HIGH | MEDIUM | P1 |
| Global nav + footer | HIGH | MEDIUM | P1 |
| Home page (hero + how it works + testimonials) | HIGH | MEDIUM | P1 |
| Trust signal UI patterns (repeated) | HIGH | LOW | P1 |
| Massages service catalog page | HIGH | MEDIUM | P1 |
| Stretch service page | HIGH | LOW | P1 |
| Membership tier pricing cards + waitlist | HIGH | LOW | P1 |
| Work With Zorova + provider safety narrative | HIGH | MEDIUM | P1 |
| Help + FAQ accordion page | HIGH | LOW | P1 |
| Legal pages (Privacy, Terms, Cancellation) | MEDIUM | LOW | P1 |
| SEO meta layer (react-helmet-async + JSON-LD) | HIGH | MEDIUM | P1 |
| Mobile-first responsive layouts | HIGH | MEDIUM | P1 |
| About page | MEDIUM | LOW | P1 |
| Contact page + WhatsApp link | MEDIUM | LOW | P1 |
| Blog page (3-5 hardcoded articles) | MEDIUM | MEDIUM | P1 |
| Business / corporate wellness page | MEDIUM | MEDIUM | P2 |
| Franchise page | MEDIUM | MEDIUM | P2 |
| Gifts page (waitlist, no purchase flow) | MEDIUM | LOW | P2 |
| GEO / AI search optimization (llms.txt, passage structure) | MEDIUM | LOW | P2 |
| Micro-animations | MEDIUM | MEDIUM | P2 |
| WCAG AA + Core Web Vitals tuning | HIGH | MEDIUM | P1 |
| sitemap.xml + robots.txt | MEDIUM | LOW | P1 |
| City-specific landing pages | HIGH | HIGH | P3 (v2) |
| Therapist profile pages | MEDIUM | HIGH | P3 (v2) |
| Real booking / payment flow | HIGH | HIGH | P3 (v2) |
| CMS integration | MEDIUM | HIGH | P3 (v1.x) |
| Hindi i18n | MEDIUM | HIGH | P3 (v1.x) |

**Priority key:**
- P1: Must have for launch
- P2: Should have, add when core pages are stable
- P3: Defer — v1.x or v2

---

## Competitor Feature Analysis

| Feature | Urban Company (India) | Soothe / Zeel (US) | Zorova Approach |
|---------|----------------------|---------------------|-----------------|
| Hero + booking CTA | Direct price + book flow | Book now with zip code | Waitlist/WhatsApp CTA (pre-launch); same visual weight |
| Service catalog | City-specific service pages with prices | Simple service menu | 8-card Massages page with "Coming Soon" tags; Stretch separate |
| Trust signals | "4.5+ rated", background checked, facial recognition on arrival | Licensed, insured, background checked, ID verified | Verified badges, rating callouts, safety narrative — must match depth |
| Testimonials | Inline star ratings on service pages | Dedicated testimonials section | Carousel on Home (autoplay + swipe) |
| Provider safety | Real-time selfie verification on arrival | License + $1M insurance required | Safety narrative on Careers page + surface on Home; female-provider-specific safety unique to Zorova |
| Pricing | Explicit (Rs.499–Rs.1299) | Explicit (USD ranges) | Membership tiers (TBD price); "pricing revealed at booking" acceptable for pre-launch |
| Membership | UC Wellness Membership (discounts) | Soothe Pass (subscription) | 3-tier model (Essentials / Wellness Plus / Family Wellness) — broader family positioning is differentiator |
| Multi-generation targeting | Men / Women only | Adults only | Kids, teens, adults, seniors, athletes, women, men — unique |
| Education / health content | Minimal | Minimal | "Did You Know?" health boxes, benefit grids, founding blog articles — differentiator |
| Stigma-breaking content | None explicitly | None | Explicit mission on About + Home — unique in Indian market |
| B2B / corporate wellness | Yes (Urban Company for Business) | Yes (Zeel for Business) | Business page + corporate proposal form — table stakes |
| Franchise | No | No | Franchise page — potential first-mover in Indian on-demand wellness franchising |
| City landing pages | Yes (core SEO strategy) | Yes | v2 — establish service areas first |
| App download CTAs | Prominent (app-first product) | Prominent | "Coming Soon" in footer — correct pre-launch approach |
| GEO / AI search optimization | Not observed | Not observed | Explicit in brief — first-mover advantage |

---

## Brief Gap Analysis

Features the brief has that are table stakes — confirmed present:
- Hero + CTA: present
- Service catalog (Massages, Stretch): present
- How It Works: present
- Trust signals: present
- Testimonials carousel: present
- Membership tiers: present
- Provider recruitment + safety narrative: present
- FAQ accordion: present
- Legal pages: present
- SEO layer: present
- GEO / AI optimization: present (differentiator)
- Forms (5 types): present
- Gift tier cards: present
- Blog: present

Table stakes the brief does not explicitly call out but should be confirmed:

| Gap | Risk | Recommendation |
|-----|------|----------------|
| "Did You Know?" diabetes box alone is thin for health education | Low — blog fills this | Ensure 1-2 founding blog articles directly address "is massage safe for [condition]?" queries |
| WhatsApp CTA placement | Medium — must be visible on every page, not just Contact | Add WhatsApp floating button or repeated in-section CTA on service pages and Home |
| Pricing signal on Home page | Medium — users bounce without price anchoring | Add "starting from ₹[X]" or "see membership plans" anchor near first booking CTA on Home |
| Service-specific landing page SEO | Medium — single /massages page has SEO ceiling vs. Urban Company's per-service-per-city structure | Acceptable for v1; document as v2 SEO expansion |
| Cancellation policy surface on booking flow | Low — policy page exists but must be linked from every CTA section | Ensure "Free cancellation" or cancellation link is near every "Book Now" button |

---

## Sources

- [Urban Company India — massage services, pricing, trust model](https://www.urbancompany.com/mumbai-massage-for-men)
- [Urban Company trust-first playbook — YourStory 2026](https://yourstory.com/2026/02/urban-company-built-trust-indias-home-services-market)
- [Soothe Trust and Safety page](https://www.soothe.com/trust-and-safety/)
- [Zeel — background check and verification model](https://www.zeel.com/4/oldbooking)
- [Body Well vs Soothe vs Zeel — feature comparison](https://www.bodywelltherapy.com/body-well-vs-soothe-vs-zeel-massage-apps/)
- [Service area pages for local SEO — Search Engine Land](https://searchengineland.com/guide/service-area-pages)
- [City pages for local SEO — best practices](https://www.sangfroidwebdesign.com/local-seo/city-pages-good-seo-local-landing-page-examples/)
- [Digital Marketing for Wellness Industry 2025 — Wolfable](https://wolfable.com/digital-marketing-for-wellness-industry/)
- [Massage therapy marketing strategies — Yocale 2025](https://www.yocale.com/blog/massage-therapy-marketing)
- [Male RMT stigma breaking — Hive Manager](https://hivemanager.io/buzz/male-rmt-stigma-breaking-barriers-inclusivity/)
- [Zorova PROJECT.md brief — authoritative source (internal)](/.planning/PROJECT.md)

---

*Feature research for: Zorova on-demand home wellness marketing website (India)*
*Researched: 2026-04-14*
