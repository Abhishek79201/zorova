# Requirements: Zorova

**Defined:** 2026-04-14
**Last pivot:** 2026-04-14 — switched from Vite SPA to **Next.js 16 App Router** (greenfield; legacy Vite tree at `../src/` kept as reference only)
**Working directory:** this workspace root — all implementation work lives here. Legacy Vite tree is at `../` (parent directory).
**Core Value:** Trust-building, stigma-breaking conversion site — every page must make any Indian household (regardless of age or gender) feel safe, respected, and confident enough to book a therapist into their home.

## v1 Requirements

### Brand Purge (BRAND)

- [ ] **BRAND-01**: Next.js scaffold is free of Lovable references (scaffold is fresh; legacy Vite tree at `../src/` is tolerated as unused reference only)
- [ ] **BRAND-02**: No import in this project references `../src/`, `../vite.config`, or any legacy Vite code — legacy tree stays unused
- [ ] **BRAND-03**: `package.json` name, description, and keywords reflect Zorova brand
- [ ] **BRAND-04**: `src/app/layout.tsx` sets Zorova default `metadata` (title template, description, theme-color, icons)
- [ ] **BRAND-05**: `src/app/manifest.ts` (or `public/site.webmanifest`) has Zorova short_name, name, icons, theme_color, background_color
- [ ] **BRAND-06**: Favicon set (`favicon.ico`, `apple-icon.png`, `icon.png` variants) placed in `src/app/` or `public/` per Next.js conventions with Zorova mark
- [ ] **BRAND-07**: Only the shadcn components actually used in Phase 3/4 are installed into `src/components/ui/` — no bulk pre-install
- [ ] **BRAND-08**: `src/app/robots.ts` is Zorova-authored (not a copied default); `public/` contains no Lovable defaults
- [ ] **BRAND-09**: Commit messages for this milestone contain no Lovable references
- [ ] **BRAND-10**: Legacy Vite `src/` tree is earmarked for deletion after launch (documented; no active dev in it)

### Design System (DS)

- [ ] **DS-01**: Zorova color palette is tokenized — `#09080a` (text), `#f6f4f9` (background), `#3e1b7c` (primary), `#b08eeb` (secondary), `#8442f5` (accent), plus derived shades (`#2e1260`, `#f0eaff`, `#ffffff`, `#e0d8ed`, `#5a5466`) — exposed as Tailwind tokens and CSS variables
- [ ] **DS-02**: Secondary color `#b08eeb` is documented as decorative-only (fails WCAG AA as text)
- [ ] **DS-03**: Heading font (Playfair Display) and body font (Plus Jakarta Sans) are loaded via `next/font/google` with `adjustFontFallback: true` (Next.js native — eliminates CLS)
- [ ] **DS-04**: Tailwind v4 `@theme` tokens map `--font-serif` and `--font-sans` to the Zorova font pair via `next/font` CSS variables
- [ ] **DS-05**: Type scale matches brief — Hero 56-64/36-40, H2 40-48/28-32, H3 28-32/22-24, H4 20-24, body 16-18, caption 14, button 16
- [ ] **DS-06**: Border radius scale (8/12/16px) and soft shadow scale are tokenized
- [ ] **DS-07**: Reusable gradient utility (primary → accent) is available for hero + CTA banners
- [ ] **DS-08**: A design system reference page or Storybook-style route documents every token and primitive (optional dev-only)
- [ ] **DS-09**: Existing shadcn/Radix components are restyled to use Zorova tokens (Button, Card, Input, Textarea, Select, Accordion, Dialog, Sheet, Toast/Sonner)

### Global Layout (LAYOUT)

- [ ] **LAYOUT-01**: `src/app/layout.tsx` (Next.js root layout) wraps all routes — Navigation + `{children}` + Footer + Providers (client) rendered once; fonts + default metadata declared here
- [ ] **LAYOUT-02**: Sticky top Navigation with Zorova logo, 10 nav links (Home, Massages, Stretch, Work with Us, Membership, Business, Franchise, About, Blog, Gifts), and "Book Now" accent CTA on right
- [ ] **LAYOUT-03**: Navigation has frosted-glass/white background that gains subtle shadow on scroll
- [ ] **LAYOUT-04**: Navigation has mobile hamburger drawer with full link list + Book Now CTA
- [ ] **LAYOUT-05**: Active route is underlined in accent color
- [ ] **LAYOUT-06**: Footer with 4 columns — (1) logo + tagline "Wellness for Every Home" + social icons, (2) Quick Links, (3) Legal, (4) Get in Touch + App download "Coming Soon"
- [ ] **LAYOUT-07**: Footer bottom bar — "© 2025 Zorova Wellness Pvt. Ltd. All rights reserved. | Made with care in India."
- [ ] **LAYOUT-08**: `<Section>`, `<Page>`, `<Hero>`, `<CTABanner>` layout primitives with alternating bg rhythm (white ↔ `#f6f4f9`)
- [ ] **LAYOUT-09**: Skip-to-content link for keyboard users
- [ ] **LAYOUT-10**: Next.js App Router file-based routes match the 14 Zorova URLs: `src/app/page.tsx` (Home), `src/app/massages/page.tsx`, `src/app/stretch/page.tsx`, `src/app/careers/page.tsx`, `src/app/membership/page.tsx`, `src/app/business/page.tsx`, `src/app/franchise/page.tsx`, `src/app/about/page.tsx`, `src/app/blog/page.tsx`, `src/app/gifts/page.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, `src/app/cancellation/page.tsx`, `src/app/contact/page.tsx`
- [ ] **LAYOUT-11**: `src/app/not-found.tsx` (404) exists with brand-consistent design and link back home
- [ ] **LAYOUT-12**: Floating WhatsApp CTA visible on all pages (except checkout-like flows), deep-links to `wa.me/91XXXXXXXXXX`

### Animations (ANIM)

- [ ] **ANIM-01**: `motion` (import from `motion/react`, v12+) is installed with `LazyMotion + domAnimation` for minimal bundle
- [ ] **ANIM-02**: Global `<MotionConfig reducedMotion="user">` wraps the app from a client `providers.tsx` mounted in the root layout — respects `prefers-reduced-motion`
- [ ] **ANIM-03**: Shared motion variants in `src/lib/motion.ts` (fadeInUp, staggerChildren, scaleOnHover, gradientShift, cardLift)
- [ ] **ANIM-04**: Shared motion components — `<FadeInSection>`, `<MotionCard>`, `<AnimatedCTA>`, `<StaggerList>`
- [ ] **ANIM-05**: Cards have hover lift (translate-y-1 + shadow scale)
- [ ] **ANIM-06**: Sections fade/slide up on scroll into view
- [ ] **ANIM-07**: CTA buttons have press feedback (scale on tap)
- [ ] **ANIM-08**: Hero gradient has a subtle animated wash (shader-free, transform-based)
- [ ] **ANIM-09**: Testimonial carousel swipes with momentum
- [ ] **ANIM-10**: Accordion FAQs have smooth expand/collapse
- [ ] **ANIM-11**: Number counters (trust strip stats) animate on viewport entry
- [ ] **ANIM-12**: No animation uses animating width/height/top/left — transform + opacity only (perf + CLS safety)

### SEO Infrastructure (SEO)

- [ ] **SEO-01**: `src/lib/seo.ts` exports a `buildMetadata()` helper that returns a Next.js `Metadata` object (title, description, openGraph, twitter, alternates.canonical, robots); consumed by every page's `export const metadata` or `generateMetadata`
- [ ] **SEO-02**: `src/components/json-ld.tsx` renders typed JSON-LD (`schema-dts`) via `<script type="application/ld+json">` — usable from server components
- [ ] **SEO-03**: Every page sets unique title (≤60 chars), description (≤155 chars), `metadataBase` + `alternates.canonical`
- [ ] **SEO-04**: Every page sets Open Graph tags via Next.js `metadata.openGraph` (title, description, images, url, type, siteName, locale=en_IN)
- [ ] **SEO-05**: Every page sets Twitter Card via `metadata.twitter` (card: summary_large_image, title, description, images)
- [ ] **SEO-06**: Per-page OG image (1200×630) placed in `public/og/<route>.png` and referenced via metadata (or generated dynamically via `opengraph-image.tsx` per route)
- [ ] **SEO-07**: `schema-dts` typed JSON-LD injected per page via `<JsonLd>` server component
- [ ] **SEO-08**: Site-wide Organization schema injected in root `layout.tsx` (name, url, logo, sameAs social links)
- [ ] **SEO-09**: LocalBusiness schema on Home + Contact (address placeholder, telephone, areaServed, openingHours)
- [ ] **SEO-10**: Service schema on Massages and Stretch pages (service catalog items)
- [ ] **SEO-11**: FAQPage schema on Help/Contact page (maps 10 FAQs)
- [ ] **SEO-12**: BreadcrumbList schema on non-home pages
- [ ] **SEO-13**: Article schema on Blog index (ItemList) and per-post (Article) — placeholders for future posts
- [ ] **SEO-14**: AggregateRating schema is explicitly NOT included (fabrication risk) until real reviews exist
- [ ] **SEO-15**: `src/app/sitemap.ts` emits sitemap covering all 14 routes + blog placeholders with correct `lastModified`
- [ ] **SEO-16**: `src/app/robots.ts` allows Googlebot, Bingbot, retrieval bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, GoogleExtended); blocks training bots (GPTBot, ClaudeBot, CCBot, Bytespider, Meta-ExternalAgent); references sitemap
- [ ] **SEO-17**: `public/llms.txt` (static file) with a Zorova summary + key page links for AI citation readiness
- [ ] **SEO-18**: `public/humans.txt` (optional, static file)
- [ ] **SEO-19**: Semantic HTML5 landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`) used correctly on every page
- [ ] **SEO-20**: Every image has meaningful alt text; decorative images use empty alt; icon-only buttons have aria-label
- [ ] **SEO-21**: One `<h1>` per page, consistent heading hierarchy (no h2→h4 jumps)
- [ ] **SEO-22**: Internal linking strategy — every page links to at least 3 other relevant pages (breadcrumbs + footer + contextual)
- [ ] **SEO-23**: Canonical URL is absolute (`https://zorova.in/<path>`) and self-referential on every page
- [ ] **SEO-24**: `<html lang="en-IN">` set; locale meta tags consistent
- [ ] **SEO-25**: 404 page returns proper status (via prerender/hosting config) and is noindex
- [ ] **SEO-26**: Meta `theme-color` matches Zorova primary

### Static Generation (SSG) — Next.js native

<!-- Next.js 16 handles SSG natively; requirements simplify. -->

- [ ] **SSG-01**: `next build` produces static HTML for all 14 routes (pages are Server Components by default; no dynamic data sources → automatic static generation)
- [ ] **SSG-02**: `curl` on a built page returns page-specific `<title>`, `<meta description>`, OG tags, canonical, and JSON-LD in the HTML shell — not client-rendered
- [ ] **SSG-03**: Pages compose Server Components + Client Islands correctly — interactive pieces (carousel, accordion, forms, navigation drawer, motion components) marked `"use client"`; static content stays server-rendered
- [ ] **SSG-04**: No `window` / `document` / browser-only code accessed at module top-level in server components (guards inside client components or effects)
- [ ] **SSG-05**: 404 route (`src/app/not-found.tsx`) renders correctly and returns proper status
- [ ] **SSG-06**: Build + start pipeline verified: `cd zorova && npm run build && npm start` serves all 14 routes without errors

### Performance / Core Web Vitals (PERF)

- [ ] **PERF-01**: LCP < 2.5s on 4x CPU throttled mobile Lighthouse run for Home, Massages, Stretch
- [ ] **PERF-02**: CLS < 0.1 on all pages
- [ ] **PERF-03**: INP < 200ms on all pages under interaction
- [ ] **PERF-04**: Hero LCP image is preloaded (`<link rel="preload" as="image">`)
- [ ] **PERF-05**: Fonts loaded via `next/font/google` with `adjustFontFallback: true` (Next.js handles preload + fallback metrics)
- [ ] **PERF-06**: Images use `next/image` (automatic AVIF/WebP, responsive `sizes`, lazy below the fold, `priority` on LCP hero)
- [ ] **PERF-07**: Tailwind purged of unused classes; `tailwind-merge` does not leak dev classes to prod
- [ ] **PERF-08**: JS bundle analyzed — no per-page bundle exceeds 150KB gzipped
- [ ] **PERF-09**: Motion uses `LazyMotion + domAnimation` (not full `domMax`)
- [ ] **PERF-10**: No blocking third-party scripts (no chat widgets, minimal analytics)

### Accessibility (A11Y)

- [ ] **A11Y-01**: Axe/Lighthouse a11y score ≥ 95 on every page
- [ ] **A11Y-02**: All interactive elements reachable by keyboard, visible focus ring in accent color
- [ ] **A11Y-03**: Modal/sheet/drawer traps focus correctly, closes on Escape
- [ ] **A11Y-04**: Color contrast passes WCAG AA — text on background ≥ 4.5:1, UI ≥ 3:1
- [ ] **A11Y-05**: Form fields have associated labels; errors linked via `aria-describedby`
- [ ] **A11Y-06**: Skip-to-content link is the first focusable element
- [ ] **A11Y-07**: Icon-only buttons have `aria-label`; decorative SVGs have `aria-hidden="true"`
- [ ] **A11Y-08**: Carousel announces slide changes; has prev/next keyboard controls
- [ ] **A11Y-09**: Accordion uses Radix primitive (a11y built-in)
- [ ] **A11Y-10**: Respects `prefers-reduced-motion`

### Shared Sections (SECT)

- [ ] **SECT-01**: `<TrustStrip>` — horizontal icon bar ("5,000+ Sessions", "Certified Therapists", "4.9★ Rating", "100% Hygiene Compliant"); animated number counters
- [ ] **SECT-02**: `<StepFlow>` — numbered 4-step horizontal flow with connecting lines (mobile = vertical)
- [ ] **SECT-03**: `<BenefitGrid>` — configurable grid (3×4, 2-col, etc.) with icon + heading + description
- [ ] **SECT-04**: `<AudienceCards>` — 4-card row (desktop) / stacked (mobile) with illustration + title + copy
- [ ] **SECT-05**: `<TestimonialCarousel>` — autoplay + swipe + pause-on-hover, using Embla
- [ ] **SECT-06**: `<GradientCTA>` — full-width CTA banner with primary→accent gradient, heading, subheading, accent/white button
- [ ] **SECT-07**: `<AccordionFAQ>` — Radix Accordion with 10 brief-specified items; smooth expand
- [ ] **SECT-08**: `<PricingTier>` — membership/gift tier cards with "Most Popular" badge option
- [ ] **SECT-09**: `<HighlightBox>` — accent-background callout for "Did You Know?" blocks
- [ ] **SECT-10**: `<ProviderSafetyGrid>` — shield-iconed safety feature cards
- [ ] **SECT-11**: `<MeetTherapists>` — therapist credential callouts (certified, verified, trained, hygiene-compliant)
- [ ] **SECT-12**: `<WhatsAppButton>` — floating bottom-right FAB on all pages
- [ ] **SECT-13**: `<LegalPageLayout>` — shared layout for Privacy/Terms/Cancellation (heading, last-updated, scrollable body with TOC)

### Forms (FORM)

- [ ] **FORM-01**: React Hook Form + Zod schemas for every form in `src/lib/schemas/`
- [ ] **FORM-02**: Shared `<FormField>`, `<FormError>`, `<FormSuccess>`, `<SubmitButton>` components
- [ ] **FORM-03**: All forms have loading, success, and error states (client-side — no backend in v1)
- [ ] **FORM-04**: Honeypot anti-spam field on every form
- [ ] **FORM-05**: Provider application form (Careers) — Full Name, Phone, Email, City, Area of Expertise (dropdown), Years of Experience, Certifications (file upload), Brief Introduction (textarea)
- [ ] **FORM-06**: Corporate proposal form (Business) — Company Name, Contact Person, Email, Phone, Team Size (dropdown), Industry, Wellness Goals (textarea), Preferred Frequency (dropdown)
- [ ] **FORM-07**: Franchise application form — Full Name, Email, Phone, City/Region, Investment Budget (dropdown), Current Occupation (textarea), Why Zorova? (textarea)
- [ ] **FORM-08**: Contact form — Full Name, Email, Phone (optional), Subject (dropdown), Message (textarea)
- [ ] **FORM-09**: Waitlist email capture forms (Membership + Gifts pages)
- [ ] **FORM-10**: Blog "Write for Zorova" CTA — mailto or lightweight form
- [ ] **FORM-11**: Submissions either POST to a form endpoint (Formspree/Netlify Forms — to be decided) or show local-only "Thanks, we'll be in touch" confirmation with captured data logged to console + localStorage (pre-backend fallback)
- [ ] **FORM-12**: All forms accessible — labels, error announcements, focus management

### Home Page (HOME)

- [ ] **HOME-01**: Hero banner with full-width image/gradient overlay, tagline "Massage & Stretch Therapy, Redefined", heading "Wellness, Delivered to Your Doorstep", subheading, dual CTA (Book Your Session / Explore Services)
- [ ] **HOME-02**: Trust strip below hero (4 stat pills)
- [ ] **HOME-03**: "Discover the Art of Living Well" intro section with split-image visual
- [ ] **HOME-04**: "Your Wellness Journey in 4 Simple Steps" section (StepFlow)
- [ ] **HOME-05**: "Wellness Has No Age" section with 4 AudienceCards (Children/Teens/Adults/Seniors)
- [ ] **HOME-06**: "Massage Is Not a Luxury. It Is Healthcare." awareness section
- [ ] **HOME-07**: 3×4 health benefits BenefitGrid (12 items)
- [ ] **HOME-08**: "Did You Know?" diabetes HighlightBox
- [ ] **HOME-09**: "Real People. Real Relief." TestimonialCarousel with 4 brief testimonials
- [ ] **HOME-10**: Final GradientCTA banner ("Your Body Deserves Better")
- [ ] **HOME-11**: WhatsApp floating button + primary Book Now CTA in nav
- [ ] **HOME-12**: Page-specific SEO meta + Organization + LocalBusiness + FAQ schemas
- [ ] **HOME-13**: Mobile-first layout verified <768px

### Massages Page (MASS)

- [ ] **MASS-01**: Page hero with heading "Nurture Yourself — Body, Mind, and Soul"
- [ ] **MASS-02**: "The Timeless Healing of Ayurvedic Massage" philosophy section
- [ ] **MASS-03**: "Why Your Body Needs Regular Massage" — 14 benefits in 2-column grid
- [ ] **MASS-04**: "Massage as a Wellness Ally for Diabetes" HighlightBox
- [ ] **MASS-05**: "Our Massage Therapies" — 8 placeholder service cards with "Coming Soon" tags + Join Waitlist CTA
- [ ] **MASS-06**: "Expert Hands You Can Trust" therapist trust section with 5 credential callouts
- [ ] **MASS-07**: Page-specific SEO + Service schema + BreadcrumbList

### Stretch Page (STRT)

- [ ] **STRT-01**: Page hero "The Art of Effortless Movement"
- [ ] **STRT-02**: "Why Stretch Therapy Matters" narrative
- [ ] **STRT-03**: 3×4 Benefits grid (14 stretch benefits, 4 remain as a 2-row)
- [ ] **STRT-04**: "Designed for Every Body" — 4 AudienceCards (Athletes/Desk Workers/Seniors/Fitness Enthusiasts)
- [ ] **STRT-05**: "Guided by Experts" therapist trust section
- [ ] **STRT-06**: Page-specific SEO + Service schema + BreadcrumbList

### Careers / Work With Zorova (CAREERS)

- [ ] **CAREERS-01**: Page hero "Join Our Team — Build a Career with Zorova"
- [ ] **CAREERS-02**: "Why Work with Zorova" narrative
- [ ] **CAREERS-03**: "Empower Your Earnings" provider benefits grid (6 benefits)
- [ ] **CAREERS-04**: "Your Safety Is Non-Negotiable" ProviderSafetyGrid (6 safety features)
- [ ] **CAREERS-05**: Application CTA + Provider application form (FORM-05)
- [ ] **CAREERS-06**: Page-specific SEO + JobPosting schema (optional) + BreadcrumbList

### Membership Page (MEMB)

- [ ] **MEMB-01**: Page hero "Wellness That Keeps Giving"
- [ ] **MEMB-02**: "Why Membership" narrative
- [ ] **MEMB-03**: 3 PricingTier cards (Essentials, Wellness Plus [Most Popular], Family Wellness) with brief-specified feature lists
- [ ] **MEMB-04**: "Pricing TBD — join waitlist" note + waitlist email form
- [ ] **MEMB-05**: Page-specific SEO + BreadcrumbList + Offer schema (placeholder)

### Business / B2B (BIZ)

- [ ] **BIZ-01**: Page hero "Bring Wellness to Your Workplace"
- [ ] **BIZ-02**: "The Case for Corporate Wellness" narrative
- [ ] **BIZ-03**: "What We Offer" feature cards (5 offerings)
- [ ] **BIZ-04**: "The Zorova Business Advantage" benefits list (5 benefits)
- [ ] **BIZ-05**: Corporate proposal form (FORM-06)
- [ ] **BIZ-06**: Page-specific SEO + BreadcrumbList

### Franchise Page (FRAN)

- [ ] **FRAN-01**: Page hero "Own a Zorova Franchise"
- [ ] **FRAN-02**: "The Opportunity" narrative
- [ ] **FRAN-03**: Franchise partner benefits grid (6 benefits)
- [ ] **FRAN-04**: "Ideal Franchise Partner Profile" narrative
- [ ] **FRAN-05**: Franchise application form (FORM-07)
- [ ] **FRAN-06**: Page-specific SEO + BreadcrumbList

### About Page (ABOUT)

- [ ] **ABOUT-01**: Page hero "The Zorova Story"
- [ ] **ABOUT-02**: Our Mission section
- [ ] **ABOUT-03**: Our Vision section
- [ ] **ABOUT-04**: Our Values — 4 value cards (Inclusivity, Trust & Safety, Excellence, Accessibility)
- [ ] **ABOUT-05**: "The Stigma We Are Fighting" narrative
- [ ] **ABOUT-06**: Page-specific SEO + Organization schema enhanced + BreadcrumbList

### Blog Page (BLOG)

- [ ] **BLOG-01**: Page hero "The Zorova Journal"
- [ ] **BLOG-02**: Blog grid (masonry or 3-column) with 8 placeholder post cards (title, category, excerpt, author, date, read time)
- [ ] **BLOG-03**: "Write for Zorova" contribute CTA
- [ ] **BLOG-04**: Page-specific SEO + Blog schema + ItemList schema (post listing)
- [ ] **BLOG-05**: Blog post cards are static placeholders; individual post routes deferred to v2 (or scaffolded as noindex stubs)

### Gifts Page (GIFT)

- [ ] **GIFT-01**: Page hero "Give the Gift of Wellness"
- [ ] **GIFT-02**: "Why Gift Wellness" narrative
- [ ] **GIFT-03**: 3 gift-tier cards (Relaxation Starter / Wellness Package / Custom Gift) + feature list (instant digital, personal message, 12-month validity)
- [ ] **GIFT-04**: Launch waitlist email form
- [ ] **GIFT-05**: Page-specific SEO + BreadcrumbList

### Legal Pages (LEGAL)

- [ ] **LEGAL-01**: Privacy page with shared LegalPageLayout (heading, last-updated date, placeholder body with TOC)
- [ ] **LEGAL-02**: Terms & Conditions page using same layout
- [ ] **LEGAL-03**: Cancellation Policy page using same layout
- [ ] **LEGAL-04**: Each legal page has noindex-compatible meta if still placeholder (or indexed with draft copy when supplied)
- [ ] **LEGAL-05**: Placeholder copy clearly indicates the final document is pending from counsel

### Help & Contact Page (CONT)

- [ ] **CONT-01**: Page hero "We Are Here to Help"
- [ ] **CONT-02**: 3 contact-option cards (Email, Phone, WhatsApp) with brand-consistent icons
- [ ] **CONT-03**: Contact form (FORM-08)
- [ ] **CONT-04**: 10-item AccordionFAQ (brief-specified questions)
- [ ] **CONT-05**: Page-specific SEO + FAQPage schema + ContactPoint schema

### Content Objects (CNTNT)

- [ ] **CNTNT-01**: Per-page typed content modules in `src/content/<page>.ts` exporting SEO meta, schema, copy blocks
- [ ] **CNTNT-02**: Shared content types in `src/types/content.ts` for consistent page composition
- [ ] **CNTNT-03**: All copy from the brief captured verbatim (no paraphrasing)
- [ ] **CNTNT-04**: Content modules are imported by thin page components (pages are composers, not content holders)

### GEO / AI Search (GEO)

- [ ] **GEO-01**: `llms.txt` in `public/` with Zorova summary, mission, services, and page links
- [ ] **GEO-02**: Content is structured in question-answer format where natural (especially Help FAQs, benefit cards)
- [ ] **GEO-03**: Summary paragraphs above the fold on every page support passage-level citability
- [ ] **GEO-04**: Brand mentions ("Zorova") appear consistently across pages in natural prose
- [ ] **GEO-05**: Retrieval bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, GoogleExtended) explicitly allowed in robots.txt
- [ ] **GEO-06**: Content avoids being buried in client-only rendering (prerendering handles this)
- [ ] **GEO-07**: FAQPage JSON-LD on Help page maximizes AI Overview eligibility

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Booking & Auth

- **BOOK-01**: Real-time booking calendar with therapist availability
- **BOOK-02**: Customer accounts (auth) with booking history
- **BOOK-03**: Payment gateway integration (Razorpay/Stripe)
- **BOOK-04**: Therapist profile pages (individual provider showcase)

### Content & Localization

- **CMS-01**: Headless CMS integration (Sanity/Contentful) for blog posts
- **CMS-02**: Individual blog post routes with dynamic meta/schema
- **I18N-01**: Hindi language toggle
- **I18N-02**: Regional language support (Tamil, Telugu, Bengali, Marathi)

### Local SEO

- **LSEO-01**: City-specific landing pages (`/massages/bangalore`, `/stretch/mumbai`) when service areas confirmed
- **LSEO-02**: Service-specific landing pages (`/massages/deep-tissue`, `/massages/ayurvedic-abhyanga`)
- **LSEO-03**: Therapist profile SEO pages

### Engagement

- **ENG-01**: Gift card e-commerce purchase flow
- **ENG-02**: Referral program with tracking
- **ENG-03**: Live chat widget (if support staffing exists)
- **ENG-04**: Mobile native app (React Native)
- **ENG-05**: Analytics (GA4 + PostHog behavioral analytics)
- **ENG-06**: A/B testing framework
- **ENG-07**: Dark mode

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Using the legacy Vite `src/` tree for Zorova code | Lovable contamination + framework mismatch; reference only; delete after launch |
| Real booking / checkout / payment | No backend in this milestone; waitlist + WhatsApp CTA sufficient |
| User authentication | No personalized features yet to warrant auth surface |
| Multi-language / i18n | English-only launch; stable brand voice first |
| Headless CMS | 3-5 hardcoded posts sufficient; CMS when cadence justifies |
| Live chat widget | Script weight + support cost; WhatsApp deep-link is lower friction |
| E-commerce gift purchase | Full payment flow scope out of milestone |
| Therapist profile pages | Premature at pre-launch; aggregate trust signals suffice |
| Real-time availability calendar | Requires backend; false availability destroys trust |
| Dark mode | Palette works in light; doubles QA surface |
| City landing pages | Thin-content penalty risk before service areas confirmed |
| Analytics dashboards / A/B testing | No traffic baseline yet |
| Blog category/tag filter pages | <10 posts produces thin content |
| Dependency on Lovable platform | Must be fully purged — see BRAND-01 through BRAND-09 |
| AggregateRating JSON-LD | Fabrication risk; add only after real reviews exist |
| Fake testimonials with real-name claims | Brief-provided testimonials marked as illustrative until permission granted |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| BRAND-01 | Phase 1 | Pending |
| BRAND-02 | Phase 1 | Pending |
| BRAND-03 | Phase 1 | Pending |
| BRAND-04 | Phase 1 | Pending |
| BRAND-05 | Phase 1 | Pending |
| BRAND-06 | Phase 1 | Pending |
| BRAND-07 | Phase 1 | Pending |
| BRAND-08 | Phase 1 | Pending |
| BRAND-09 | Phase 1 | Pending |
| DS-01 | Phase 1 | Pending |
| DS-02 | Phase 1 | Pending |
| DS-03 | Phase 1 | Pending |
| DS-04 | Phase 1 | Pending |
| DS-05 | Phase 1 | Pending |
| DS-06 | Phase 1 | Pending |
| DS-07 | Phase 1 | Pending |
| DS-08 | Phase 1 | Pending |
| DS-09 | Phase 1 | Pending |
| LAYOUT-01 | Phase 1 | Pending |
| LAYOUT-02 | Phase 1 | Pending |
| LAYOUT-03 | Phase 1 | Pending |
| LAYOUT-04 | Phase 1 | Pending |
| LAYOUT-05 | Phase 1 | Pending |
| LAYOUT-06 | Phase 1 | Pending |
| LAYOUT-07 | Phase 1 | Pending |
| LAYOUT-08 | Phase 1 | Pending |
| LAYOUT-09 | Phase 1 | Pending |
| LAYOUT-10 | Phase 1 | Pending |
| LAYOUT-11 | Phase 1 | Pending |
| LAYOUT-12 | Phase 1 | Pending |
| ANIM-01 | Phase 1 | Pending |
| ANIM-02 | Phase 1 | Pending |
| PERF-09 | Phase 1 | Pending |
| A11Y-06 | Phase 1 | Pending |
| SEO-01 | Phase 2 | Pending |
| SEO-02 | Phase 2 | Pending |
| SEO-07 | Phase 2 | Pending |
| SEO-08 | Phase 2 | Pending |
| SEO-19 | Phase 2 | Pending |
| SEO-20 | Phase 2 | Pending |
| SEO-21 | Phase 2 | Pending |
| SEO-24 | Phase 2 | Pending |
| ANIM-03 | Phase 2 | Pending |
| ANIM-04 | Phase 2 | Pending |
| ANIM-05 | Phase 2 | Pending |
| ANIM-06 | Phase 2 | Pending |
| ANIM-07 | Phase 2 | Pending |
| ANIM-08 | Phase 2 | Pending |
| ANIM-09 | Phase 2 | Pending |
| ANIM-10 | Phase 2 | Pending |
| ANIM-11 | Phase 2 | Pending |
| ANIM-12 | Phase 2 | Pending |
| SECT-01 | Phase 2 | Pending |
| SECT-02 | Phase 2 | Pending |
| SECT-03 | Phase 2 | Pending |
| SECT-04 | Phase 2 | Pending |
| SECT-05 | Phase 2 | Pending |
| SECT-06 | Phase 2 | Pending |
| SECT-07 | Phase 2 | Pending |
| SECT-08 | Phase 2 | Pending |
| SECT-09 | Phase 2 | Pending |
| SECT-10 | Phase 2 | Pending |
| SECT-11 | Phase 2 | Pending |
| SECT-12 | Phase 2 | Pending |
| SECT-13 | Phase 2 | Pending |
| FORM-01 | Phase 2 | Pending |
| FORM-02 | Phase 2 | Pending |
| FORM-03 | Phase 2 | Pending |
| FORM-04 | Phase 2 | Pending |
| FORM-05 | Phase 2 | Pending |
| FORM-06 | Phase 2 | Pending |
| FORM-07 | Phase 2 | Pending |
| FORM-08 | Phase 2 | Pending |
| FORM-09 | Phase 2 | Pending |
| FORM-10 | Phase 2 | Pending |
| FORM-11 | Phase 2 | Pending |
| FORM-12 | Phase 2 | Pending |
| CNTNT-01 | Phase 2 | Pending |
| CNTNT-02 | Phase 2 | Pending |
| CNTNT-03 | Phase 2 | Pending |
| CNTNT-04 | Phase 2 | Pending |
| A11Y-02 | Phase 2 | Pending |
| A11Y-03 | Phase 2 | Pending |
| A11Y-05 | Phase 2 | Pending |
| A11Y-07 | Phase 2 | Pending |
| A11Y-08 | Phase 2 | Pending |
| A11Y-09 | Phase 2 | Pending |
| A11Y-10 | Phase 2 | Pending |
| PERF-05 | Phase 2 | Pending |
| HOME-01 | Phase 3 | Pending |
| HOME-02 | Phase 3 | Pending |
| HOME-03 | Phase 3 | Pending |
| HOME-04 | Phase 3 | Pending |
| HOME-05 | Phase 3 | Pending |
| HOME-06 | Phase 3 | Pending |
| HOME-07 | Phase 3 | Pending |
| HOME-08 | Phase 3 | Pending |
| HOME-09 | Phase 3 | Pending |
| HOME-10 | Phase 3 | Pending |
| HOME-11 | Phase 3 | Pending |
| HOME-12 | Phase 3 | Pending |
| HOME-13 | Phase 3 | Pending |
| MASS-01 | Phase 3 | Pending |
| MASS-02 | Phase 3 | Pending |
| MASS-03 | Phase 3 | Pending |
| MASS-04 | Phase 3 | Pending |
| MASS-05 | Phase 3 | Pending |
| MASS-06 | Phase 3 | Pending |
| MASS-07 | Phase 3 | Pending |
| STRT-01 | Phase 3 | Pending |
| STRT-02 | Phase 3 | Pending |
| STRT-03 | Phase 3 | Pending |
| STRT-04 | Phase 3 | Pending |
| STRT-05 | Phase 3 | Pending |
| STRT-06 | Phase 3 | Pending |
| MEMB-01 | Phase 3 | Pending |
| MEMB-02 | Phase 3 | Pending |
| MEMB-03 | Phase 3 | Pending |
| MEMB-04 | Phase 3 | Pending |
| MEMB-05 | Phase 3 | Pending |
| ABOUT-01 | Phase 3 | Pending |
| ABOUT-02 | Phase 3 | Pending |
| ABOUT-03 | Phase 3 | Pending |
| ABOUT-04 | Phase 3 | Pending |
| ABOUT-05 | Phase 3 | Pending |
| ABOUT-06 | Phase 3 | Pending |
| SEO-03 | Phase 3 | Pending |
| SEO-04 | Phase 3 | Pending |
| SEO-05 | Phase 3 | Pending |
| SEO-06 | Phase 3 | Pending |
| SEO-09 | Phase 3 | Pending |
| SEO-10 | Phase 3 | Pending |
| SEO-12 | Phase 3 | Pending |
| SEO-22 | Phase 3 | Pending |
| SEO-23 | Phase 3 | Pending |
| GEO-02 | Phase 3 | Pending |
| GEO-03 | Phase 3 | Pending |
| GEO-04 | Phase 3 | Pending |
| GEO-06 | Phase 3 | Pending |
| GEO-07 | Phase 3 | Pending |
| A11Y-01 | Phase 3 | Pending |
| A11Y-04 | Phase 3 | Pending |
| CAREERS-01 | Phase 4 | Pending |
| CAREERS-02 | Phase 4 | Pending |
| CAREERS-03 | Phase 4 | Pending |
| CAREERS-04 | Phase 4 | Pending |
| CAREERS-05 | Phase 4 | Pending |
| CAREERS-06 | Phase 4 | Pending |
| BIZ-01 | Phase 4 | Pending |
| BIZ-02 | Phase 4 | Pending |
| BIZ-03 | Phase 4 | Pending |
| BIZ-04 | Phase 4 | Pending |
| BIZ-05 | Phase 4 | Pending |
| BIZ-06 | Phase 4 | Pending |
| FRAN-01 | Phase 4 | Pending |
| FRAN-02 | Phase 4 | Pending |
| FRAN-03 | Phase 4 | Pending |
| FRAN-04 | Phase 4 | Pending |
| FRAN-05 | Phase 4 | Pending |
| FRAN-06 | Phase 4 | Pending |
| BLOG-01 | Phase 4 | Pending |
| BLOG-02 | Phase 4 | Pending |
| BLOG-03 | Phase 4 | Pending |
| BLOG-04 | Phase 4 | Pending |
| BLOG-05 | Phase 4 | Pending |
| GIFT-01 | Phase 4 | Pending |
| GIFT-02 | Phase 4 | Pending |
| GIFT-03 | Phase 4 | Pending |
| GIFT-04 | Phase 4 | Pending |
| GIFT-05 | Phase 4 | Pending |
| LEGAL-01 | Phase 4 | Pending |
| LEGAL-02 | Phase 4 | Pending |
| LEGAL-03 | Phase 4 | Pending |
| LEGAL-04 | Phase 4 | Pending |
| LEGAL-05 | Phase 4 | Pending |
| CONT-01 | Phase 4 | Pending |
| CONT-02 | Phase 4 | Pending |
| CONT-03 | Phase 4 | Pending |
| CONT-04 | Phase 4 | Pending |
| CONT-05 | Phase 4 | Pending |
| SEO-11 | Phase 4 | Pending |
| SEO-13 | Phase 4 | Pending |
| SEO-14 | Phase 4 | Pending |
| SEO-18 | Phase 4 | Pending |
| SEO-25 | Phase 4 | Pending |
| SEO-26 | Phase 4 | Pending |
| GEO-01 | Phase 4 | Pending |
| GEO-05 | Phase 4 | Pending |
| SSG-01 | Phase 5 | Pending |
| SSG-02 | Phase 5 | Pending |
| SSG-03 | Phase 5 | Pending |
| SSG-04 | Phase 5 | Pending |
| SSG-05 | Phase 5 | Pending |
| SSG-06 | Phase 5 | Pending |
| SEO-15 | Phase 5 | Pending |
| SEO-16 | Phase 5 | Pending |
| SEO-17 | Phase 5 | Pending |
| GEO-06 | Phase 5 | Pending |
| PERF-07 | Phase 5 | Pending |
| PERF-08 | Phase 5 | Pending |
| PERF-01 | Phase 6 | Pending |
| PERF-02 | Phase 6 | Pending |
| PERF-03 | Phase 6 | Pending |
| PERF-04 | Phase 6 | Pending |
| PERF-05 | Phase 6 | Pending |
| PERF-06 | Phase 6 | Pending |
| PERF-10 | Phase 6 | Pending |
| A11Y-01 | Phase 6 | Pending |
| SEO-06 | Phase 6 | Pending |
| SEO-08 | Phase 6 | Pending |
| SEO-09 | Phase 6 | Pending |
| SEO-10 | Phase 6 | Pending |
| SEO-11 | Phase 6 | Pending |
| SEO-12 | Phase 6 | Pending |
| SEO-13 | Phase 6 | Pending |
| SEO-23 | Phase 6 | Pending |
| SEO-24 | Phase 6 | Pending |
| GEO-07 | Phase 6 | Pending |

**Coverage:**
- v1 requirements: 116 mapped (BRAND: 9, DS: 9, LAYOUT: 12, ANIM: 12, SEO: 26, SSG: 6, PERF: 10, A11Y: 10, SECT: 13, FORM: 12, HOME: 13, MASS: 7, STRT: 6, CAREERS: 6, MEMB: 5, BIZ: 6, FRAN: 6, ABOUT: 6, BLOG: 5, GIFT: 5, LEGAL: 5, CONT: 5, CNTNT: 4, GEO: 7)
- Mapped to phases: 116/116 v1 requirements
- Unmapped: 0 (v2 requirements deferred by design)

---
*Requirements defined: 2026-04-14*
*Last updated: 2026-04-14 after roadmap creation*