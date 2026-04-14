# Roadmap: Zorova

## Overview

This roadmap builds the Zorova wellness brand as a **greenfield Next.js 16 App Router project** (this workspace) — a 14-page, mobile-first, trust-first marketing site with native SSG, comprehensive SEO/GEO, and micro-animations. The legacy Vite SPA lives in the parent directory (`../src/`) as reference only; no code or config from it flows into this project. Because Next.js 16 solves SSG, per-route metadata, sitemap, and robots natively, the prior "Prerendering" phase is eliminated. Build order is strictly layered — design tokens + root layout chrome must precede shared building blocks (SEO helpers, animation, sections, forms), which must precede pages, which must precede the launch gate.

**Critical pitfalls surfaced throughout:**
- `#b08eeb` fails WCAG AA as text (2.8:1 on white) — decorative only
- `MotionConfig reducedMotion="user"` (motion/react) required globally from Phase 1 onward
- No `AggregateRating` JSON-LD ever (fabrication = Google manual action)
- WhatsApp CTA (`wa.me/91XXXXXXXXXX`) visible above fold on every conversion page
- `next/font` with `adjustFontFallback: true` handles font CLS natively
- All work stays in this workspace — do not import from the legacy Vite `../src/` tree
- Use Next.js `export const metadata` / `generateMetadata` — NOT `react-helmet-async`
- Radix components inside RSC must be wrapped with `"use client"` components; structure pages as thin server composers calling client islands

## Phases

- [ ] **Phase 1: Foundation** — Zorova design system in Next.js, root layout chrome (Navigation + Footer + providers), 14 route skeletons — every page mounts with correct tokens and shared shell
- [ ] **Phase 2: Infrastructure** — SEO metadata helpers + JSON-LD schema component, motion primitives, all 13 shared sections, all 5 forms, 14 content objects — every building block pages need
- [ ] **Phase 3: Core Pages** — Home, Massages, Stretch, Membership, About — the five highest-traffic pages built in parallel
- [ ] **Phase 4: Remaining Pages** — Careers, Business, Franchise, Blog, Gifts, Legal (×3), Contact/Help — all 9 remaining pages built in parallel (concurrent with Phase 3)
- [ ] **Phase 5: Launch Gate** — Core Web Vitals audit, schema validation, canonical audit, sitemap/robots/llms.txt finalised, static export verified, GSC submitted

## Phase Details

---

### Phase 1: Foundation
**Goal**: A working Next.js 16 App Router project at this workspace root with the complete Zorova design system (tokens, fonts, radii, shadows, gradient utility), a root layout rendering Navigation + Footer + WhatsApp FAB, fresh shadcn/ui install restyled to Zorova tokens, and all 14 route skeletons mounting without errors on `next dev`.
**Depends on**: Nothing (first phase)
**Working directory**: this workspace root
**Requirements**: BRAND-01, BRAND-02, BRAND-03, BRAND-04, BRAND-05, BRAND-06, BRAND-07, BRAND-08, BRAND-09, DS-01, DS-02, DS-03, DS-04, DS-05, DS-06, DS-07, DS-08, DS-09, LAYOUT-01, LAYOUT-02, LAYOUT-03, LAYOUT-04, LAYOUT-05, LAYOUT-06, LAYOUT-07, LAYOUT-08, LAYOUT-09, LAYOUT-10, LAYOUT-11, LAYOUT-12, ANIM-01, ANIM-02, PERF-09, A11Y-06
**Success Criteria** (what must be TRUE):
  1. `npm run dev` boots without errors; `npm run build` completes with all 14 routes in the build manifest
  2. `grep -ri "lovable" .` (excluding node_modules / .planning / .next) returns zero results (new scaffold clean)
  3. Navigation renders with Zorova logo, 10 correct links, "Book Now" accent CTA, frosted-glass scroll effect, and hamburger drawer at 375px — built with motion/react client component
  4. Footer renders 4-column layout with social icons, legal links, and "Made with care in India" bar — verified at 375px
  5. All 14 Zorova routes (`/`, `/massages`, `/stretch`, `/careers`, `/membership`, `/business`, `/franchise`, `/about`, `/blog`, `/gifts`, `/privacy`, `/terms`, `/cancellation`, `/contact`) mount as placeholder pages with correct shared layout, skip-to-content link works, and 404 (`not-found.tsx`) renders
  6. `#b08eeb` documented decorative-only in a design-system reference page (optional dev route) or CSS comments; `MotionConfig reducedMotion="user"` is wired in the root providers client component
**Plans**: TBD
**UI hint**: yes — spawn `/gsd:ui-phase 1` before planning

Plans:
- [ ] 01-01: Project hygiene — verify scaffold, purge Next.js boilerplate from `src/app/page.tsx` and `src/app/globals.css`, set `package.json` name/description/keywords to Zorova, add Zorova favicon set to `public/`, write Zorova README, configure `.env.example` with site URL
- [ ] 01-02: Design system — configure Tailwind v4 tokens in `src/app/globals.css` (`@theme` inline directive) with 5-token palette + derived shades + type scale + radii + shadow scale + gradient utility; load Playfair Display + Plus Jakarta Sans via `next/font/google` with `adjustFontFallback` for CLS; wire `font-serif` / `font-sans` variables
- [ ] 01-03: shadcn install + restyle — run `npx shadcn@latest init` with Zorova tokens; install core components (Button, Card, Input, Textarea, Select, Accordion, Dialog, Sheet, Sonner, NavigationMenu); restyle variants to match Zorova palette
- [ ] 01-04: Root layout — `src/app/layout.tsx` with metadata defaults, fonts, providers; `src/components/providers.tsx` (client) with MotionConfig; `src/components/navigation.tsx` (client, sticky frosted-glass, mobile drawer, active route accent); `src/components/footer.tsx`; `src/components/whatsapp-fab.tsx`; `src/components/skip-to-content.tsx`
- [ ] 01-05: Route skeletons — create `src/app/<route>/page.tsx` placeholder for all 13 non-home routes + update root `page.tsx`; create `src/app/not-found.tsx` (404); each placeholder exports basic `metadata` with unique title/description stub

---

### Phase 2: Infrastructure
**Goal**: Every reusable building block pages need — SEO metadata helpers, a `<JsonLd>` schema component, motion primitives, all 13 shared sections, all 5 form components, and all 14 typed content objects — exists in `src/` and is tested in isolation, so page phases can assemble thin server composers + client islands.
**Depends on**: Phase 1
**Working directory**: this workspace root
**Requirements**: SEO-01, SEO-02, SEO-07, SEO-08, SEO-19, SEO-20, SEO-21, SEO-24, ANIM-03, ANIM-04, ANIM-05, ANIM-06, ANIM-07, ANIM-08, ANIM-09, ANIM-10, ANIM-11, ANIM-12, SECT-01, SECT-02, SECT-03, SECT-04, SECT-05, SECT-06, SECT-07, SECT-08, SECT-09, SECT-10, SECT-11, SECT-12, SECT-13, FORM-01, FORM-02, FORM-03, FORM-04, FORM-05, FORM-06, FORM-07, FORM-08, FORM-09, FORM-10, FORM-11, FORM-12, CNTNT-01, CNTNT-02, CNTNT-03, CNTNT-04, A11Y-02, A11Y-03, A11Y-05, A11Y-07, A11Y-08, A11Y-09, A11Y-10, PERF-05
**Success Criteria** (what must be TRUE):
  1. `src/lib/seo.ts` exposes a `buildMetadata()` helper consumed by every page's `export const metadata` / `generateMetadata`; `src/components/json-ld.tsx` renders typed (schema-dts) JSON-LD into the page and is usable from both server and client components
  2. Site-wide Organization schema is injected in root layout; `<html lang="en-IN">`; default theme-color meta set
  3. Motion primitives in `src/lib/motion.ts` (variants) and `src/components/motion/*.tsx` client components (FadeInSection, MotionCard, AnimatedCTA, StaggerList) respect `prefers-reduced-motion` via the global `MotionConfig` established in Phase 1; animations use transform + opacity only
  4. Every shared section (TrustStrip, StepFlow, BenefitGrid, AudienceCards, TestimonialCarousel, GradientCTA, AccordionFAQ, PricingTier, HighlightBox, ProviderSafetyGrid, MeetTherapists, WhatsAppButton, LegalPageLayout) renders without errors, applies Zorova tokens, is mobile-responsive at 375px, correctly split between server and client boundaries
  5. All 5 form components (ContactForm, ProviderForm, CorporateForm, FranchiseForm, WaitlistForm) are client components with React Hook Form + Zod, show field-level validation errors, loading spinner on submit, inline success message, honeypot — all functional without a backend (console + localStorage fallback)
  6. `src/content/` contains typed content objects for all 14 pages with verbatim brief copy; TypeScript build reports zero errors; no content file imports React
**Plans**: TBD
**UI hint**: yes — spawn `/gsd:ui-phase 2` before planning

Plans:
- [ ] 02-01: SEO infrastructure — install `schema-dts`; write `src/lib/seo.ts` (`buildMetadata({title, description, canonical, ogImage, noindex?})` returning Next.js `Metadata`); write `src/components/json-ld.tsx` accepting a typed schema object; inject site-wide Organization schema in root layout; add canonical helper using `NEXT_PUBLIC_SITE_URL`
- [ ] 02-02: Animation primitives — install `motion` (v12+, "motion/react" import); write `src/lib/motion.ts` (fadeInUp, staggerChildren, scaleOnHover, gradientShift, cardLift); build `src/components/motion/` client components (FadeInSection, MotionCard, AnimatedCTA, StaggerList, CountUp) using `LazyMotion + domAnimation`; enforce transform + opacity-only via eslint comment/doc
- [ ] 02-03: Shared sections — build all 13 SECT-* components using Phase 1 tokens + Phase 2 animation primitives; carousel via `embla-carousel-react`; accordion via shadcn/Radix; mobile-first at 375px; WhatsApp FAB wired to placeholder wa.me number; LegalPageLayout with TOC
- [ ] 02-04: Forms infrastructure — install `react-hook-form` + `zod` + `@hookform/resolvers`; write 4 Zod schemas in `src/lib/schemas/`; build 5 form components with RHF + zodResolver; implement loading/success/error/honeypot pattern; console + localStorage fallback submission; accessible error announcements
- [ ] 02-05: Content objects — define `PageMeta` + content types in `src/types/content.ts`; author all 14 `src/content/*.ts` files with verbatim brief copy, SEO meta (title/description/ogImage/canonical), and typed JSON-LD schema objects for each page

---

### Phase 3: Core Pages
**Goal**: The five highest-traffic pages — Home, Massages, Stretch, Membership, About — are fully assembled in `src/app/`, content-complete, accessible, and carry correct per-page Next.js `metadata` + JSON-LD schemas injected via `<JsonLd>`. Pages compose sections from Phase 2 using content objects from Phase 2. Can run concurrently with Phase 4.
**Depends on**: Phase 2
**Working directory**: this workspace root
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, HOME-06, HOME-07, HOME-08, HOME-09, HOME-10, HOME-11, HOME-12, HOME-13, MASS-01, MASS-02, MASS-03, MASS-04, MASS-05, MASS-06, MASS-07, STRT-01, STRT-02, STRT-03, STRT-04, STRT-05, STRT-06, MEMB-01, MEMB-02, MEMB-03, MEMB-04, MEMB-05, ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, ABOUT-05, ABOUT-06, SEO-03, SEO-04, SEO-05, SEO-06, SEO-09, SEO-10, SEO-12, SEO-22, SEO-23, GEO-02, GEO-03, GEO-04, GEO-06, GEO-07, A11Y-01, A11Y-04
**Success Criteria** (what must be TRUE):
  1. Home page (`src/app/page.tsx`) renders complete hero (gradient overlay, dual CTA), trust strip, 4-step How It Works, 4 AudienceCards, awareness section, 12-card BenefitGrid, Did You Know? HighlightBox, TestimonialCarousel, GradientCTA footer — no horizontal scroll at 375px
  2. Massages page (`src/app/massages/page.tsx`) shows 8 service cards with "Coming Soon", 14-benefit grid, diabetes HighlightBox, therapist trust section; Stretch page shows 3×4 benefit grid, 4 AudienceCards, therapist trust section
  3. Membership page renders 3 PricingTier cards (Essentials, Wellness Plus [Most Popular], Family Wellness) with "pricing TBD — join waitlist" note and a working WaitlistForm
  4. About page renders mission, vision, 4 value cards, and stigma-breaking narrative; WhatsApp CTA visible above fold on Home, Massages, Stretch
  5. Each of the 5 pages has: unique `export const metadata` (title ≤60, description ≤155, canonical, OG, Twitter Card), relevant JSON-LD schemas in HTML source after `next build` — verified via `curl` on the production build
**Plans**: TBD
**UI hint**: yes — spawn `/gsd:ui-phase 3` before planning

Plans:
- [ ] 03-01: Home page — compose all sections from content object; hero gradient + dual CTA; metadata export + Organization + LocalBusiness + FAQPage schemas; mobile-first verification; WhatsApp CTA above fold
- [ ] 03-02: Massages page — service grid (8 cards, Coming Soon), benefit grid, diabetes HighlightBox, therapist trust section; metadata + Service + BreadcrumbList schemas
- [ ] 03-03: Stretch page — hero, narrative, 3×4 benefit grid, 4 AudienceCards, therapist trust section; metadata + Service + BreadcrumbList schemas
- [ ] 03-04: Membership page — hero, narrative, 3 PricingTier cards, WaitlistForm; metadata + BreadcrumbList + Offer schema placeholder
- [ ] 03-05: About page — hero, mission, vision, 4 value cards, stigma narrative; enhanced Organization schema + BreadcrumbList

---

### Phase 4: Remaining Pages
**Goal**: All 9 remaining pages — Careers, Business, Franchise, Blog, Gifts, Privacy, Terms, Cancellation, and Contact/Help — are fully assembled in `src/app/`, content-complete, and carry correct per-page SEO. Can run concurrently with Phase 3.
**Depends on**: Phase 2
**Working directory**: this workspace root
**Requirements**: CAREERS-01, CAREERS-02, CAREERS-03, CAREERS-04, CAREERS-05, CAREERS-06, BIZ-01, BIZ-02, BIZ-03, BIZ-04, BIZ-05, BIZ-06, FRAN-01, FRAN-02, FRAN-03, FRAN-04, FRAN-05, FRAN-06, BLOG-01, BLOG-02, BLOG-03, BLOG-04, BLOG-05, GIFT-01, GIFT-02, GIFT-03, GIFT-04, GIFT-05, LEGAL-01, LEGAL-02, LEGAL-03, LEGAL-04, LEGAL-05, CONT-01, CONT-02, CONT-03, CONT-04, CONT-05, SEO-11, SEO-13, SEO-22, SEO-23, GEO-01, GEO-02, GEO-04, GEO-05, SEO-14, SEO-18, SEO-25, SEO-26
**Success Criteria** (what must be TRUE):
  1. Careers (`/careers`) renders provider benefits grid, ProviderSafetyGrid (6 named female-safety features), and a functional ProviderForm
  2. Business (`/business`) and Franchise (`/franchise`) each render pitch content + functional CorporateForm / FranchiseForm; WhatsApp CTA visible above fold on both
  3. Blog (`/blog`) renders 8 placeholder post cards in 3-column grid, "Write for Zorova" CTA, Blog + ItemList JSON-LD; individual post routes deferred (or 404-noindex stubs)
  4. Gifts (`/gifts`) renders 3 gift-tier cards + WaitlistForm; all 3 legal pages (`/privacy`, `/terms`, `/cancellation`) render via `LegalPageLayout` with last-updated date, placeholder body, `robots: { index: false }` where content pending counsel
  5. Contact/Help (`/contact`) renders 3 contact-option cards (Email, Phone, WhatsApp), ContactForm, 10-item AccordionFAQ, FAQPage + ContactPoint JSON-LD; WhatsApp above fold
**Plans**: TBD
**UI hint**: yes — spawn `/gsd:ui-phase 4` before planning

Plans:
- [ ] 04-01: Careers page — hero, provider narrative, benefits grid, ProviderSafetyGrid, ProviderForm; metadata + JobPosting stub + BreadcrumbList
- [ ] 04-02: Business + Franchise pages — corporate wellness pitch + CorporateForm; franchise pitch + FranchiseForm; metadata + BreadcrumbList for both
- [ ] 04-03: Blog + Gifts pages — 8 placeholder post cards + Blog/ItemList schemas; 3 gift-tier cards + WaitlistForm + BreadcrumbList
- [ ] 04-04: Legal pages (Privacy, Terms, Cancellation) — shared `LegalPageLayout`; placeholder bodies with counsel-pending note; `robots: { index: false }` meta; BreadcrumbList
- [ ] 04-05: Contact/Help page — 3 contact-option cards, ContactForm, 10-item AccordionFAQ, FAQPage + ContactPoint schemas; WhatsApp above fold; metadata

---

### Phase 5: Launch Gate
**Goal**: Next.js `next build` produces a complete static export (or optimized output) with correct per-route metadata; Core Web Vitals pass on throttled mobile Lighthouse for Home, Massages, Stretch; every schema type passes Google Rich Results Test; all canonical URLs consistent; sitemap/robots/llms.txt live and correct; site is ready for Google Search Console submission.
**Depends on**: Phase 3, Phase 4
**Working directory**: this workspace root
**Requirements**: SEO-15, SEO-16, SEO-17, SEO-25, PERF-01, PERF-02, PERF-03, PERF-04, PERF-05, PERF-06, PERF-07, PERF-08, PERF-10, A11Y-01, SEO-03, SEO-04, SEO-05, SEO-06, SEO-08, SEO-09, SEO-10, SEO-11, SEO-12, SEO-13, SEO-14, SEO-23, SEO-24, GEO-01, GEO-06, GEO-07
**Success Criteria** (what must be TRUE):
  1. `next build` completes with no errors; `curl -s http://localhost:3000/massages | grep "<title>"` returns the Massages-specific title; `curl -s http://localhost:3000/massages | grep "application/ld+json"` returns the Service schema block
  2. Lighthouse Mobile (4x CPU throttle, Moto G emulation) reports LCP < 2.5s, CLS < 0.1, INP < 200ms for Home, Massages, Stretch — all three pass on the same run
  3. Google Rich Results Test returns green for Organization, LocalBusiness, Service (Massages + Stretch), FAQPage (Home + Contact), Blog ItemList; AggregateRating absent from all pages
  4. `src/app/sitemap.ts` produces `sitemap.xml` listing all 14 canonical URLs with correct lastmod; `src/app/robots.ts` correctly allows OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, GoogleExtended and blocks GPTBot, ClaudeBot, CCBot, Bytespider, Meta-ExternalAgent; `public/llms.txt` present with Zorova brand summary
  5. Axe DevTools a11y ≥ 95 on every page; every page canonical URL is absolute (`https://zorova.in/path`), self-referential, no trailing-slash inconsistencies; Next.js built-in `next/image` + `next/font` verify no FOUT / no LCP image unoptimized; GSC property verified + sitemap submitted
**Plans**: TBD

Plans:
- [ ] 05-01: Sitemap / robots / llms.txt — write `src/app/sitemap.ts` emitting all 14 URLs + blog stubs with lastmod; write `src/app/robots.ts` with AI-bot allow/block matrix per SEO-16; write `public/llms.txt` (GEO-01) with Zorova summary + key page links; verify `next build` produces correct `/sitemap.xml` and `/robots.txt`
- [ ] 05-02: Performance audit — run Lighthouse Mobile (4x throttle) on Home, Massages, Stretch; fix LCP > 2.5s by preloading hero image via `next/image priority`, fix INP > 200ms by deferring non-critical motion; run `@next/bundle-analyzer`; ensure no page JS exceeds 150KB gzipped
- [ ] 05-03: Schema and canonical audit — validate all JSON-LD via Google Rich Results Test; confirm AggregateRating absent; audit all 14 canonical URLs (absolute, no trailing slash); verify `public/og/*.png` exists for every page; confirm `<html lang="en-IN">` on every page
- [ ] 05-04: Accessibility audit + GSC — run Axe DevTools on all 14 pages; fix violations; verify keyboard navigation; confirm focus-visible rings use accent token; submit GSC sitemap; verify GSC indexing of first batch

## Progress

**Execution Order:**
Phases execute 1 → 2 → 3 + 4 (parallel) → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/5 | Not started | - |
| 2. Infrastructure | 0/5 | Not started | - |
| 3. Core Pages | 0/5 | Not started | - |
| 4. Remaining Pages | 0/5 | Not started | - |
| 5. Launch Gate | 0/4 | Not started | - |
