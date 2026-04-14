# Project Research Summary

**Project:** Zorova — On-Demand Home Wellness Marketing Site
**Domain:** Multi-page marketing site, India mobile-first, SEO/GEO/animation
**Researched:** 2026-04-14
**Confidence:** HIGH

---

## ⚠ Pivot Notice (2026-04-14, post-research)

After this research was completed, the user directed a pivot **from Vite SPA to Next.js 16 App Router** (greenfield at `zorova/`; legacy Vite `src/` kept as reference). This invalidates the following subset of recommendations below:

- ❌ **`react-helmet-async`** → replaced by Next.js `export const metadata` / `generateMetadata`
- ❌ **`vite-react-ssg` prerender phase** → replaced by Next.js native SSG (`next build`)
- ❌ **`@fontsource-variable` + Fontaine fallback metrics** → replaced by `next/font/google` with `adjustFontFallback: true`
- ❌ **Manual `public/sitemap.xml`** → replaced by `src/app/sitemap.ts`
- ❌ **Manual `public/robots.txt`** → replaced by `src/app/robots.ts`
- ❌ **Lovable purge phase** → unnecessary (fresh Next.js scaffold is clean)
- ❌ **Shared `<SEO>` component wrapping HelmetProvider** → replaced by `src/lib/seo.ts` `buildMetadata()` helper

**Still valid after pivot:**

- ✅ `schema-dts` for typed JSON-LD (via a `<JsonLd>` server component now)
- ✅ `motion` (v12, import from `motion/react`) + `MotionConfig reducedMotion="user"` (in a client `providers.tsx`)
- ✅ AI bot robots.txt allow/block matrix (now expressed in `src/app/robots.ts`)
- ✅ `llms.txt` as a static file in `zorova/public/`
- ✅ All feature scope, page breakdown, content mapping
- ✅ All architectural component decomposition (layout primitives, shared sections, forms, content objects) — still correct conceptually, just re-homed in Next.js App Router
- ✅ All pitfalls around `#b08eeb` contrast, `AggregateRating` risk, WhatsApp CTA requirement, trust-tone failures, accessibility, INP/CLS/LCP targets

Refer to the updated `.planning/ROADMAP.md` (5 phases) and `.planning/REQUIREMENTS.md` for the post-pivot plan.

---

## Executive Summary

Zorova is a 14-page marketing SPA built on an existing Lovable-scaffolded React 18 + Vite 5 codebase that must be fully rebranded, cleaned of Lovable artifacts, and launched with a complete Zorova identity, content, and SEO/GEO layer. The stack is locked — no framework migration. SPA SEO is solved via react-helmet-async (per-route meta) plus vite-react-ssg (static prerendering at build time), which together produce fully-rendered HTML for every known route without requiring Next.js. Animations use motion v11 with a MotionConfig reducedMotion global wrapper; fonts use self-hosted @fontsource-variable packages with Fontaine fallback metrics; JSON-LD schema uses schema-dts types plus a thin SchemaOrg component. The complete brownfield cleanup (35 unused shadcn files, 6+ unused npm packages, Lovable artifacts in vite.config.ts, playwright.config.ts, package.json, index.html, manifest.json, robots.txt) must happen atomically in Phase 1 before any other work starts.

The recommended build order is strictly layered: design tokens first, then global layout chrome (RootLayout + nav/footer), then SEO infrastructure (HelmetProvider, SchemaOrg), then animation primitives (MotionConfig, lib/motion.ts, FadeInSection/MotionCard), then shared sections (TrustStrip, BenefitGrid, TestimonialCarousel, etc.), then form infrastructure (Zod schemas + 5 form components), then content objects (src/content/*.ts), then individual pages (14 total, thin composers over sections), then prerendering setup (vite-react-ssg), then SEO polish (sitemap.xml, robots.txt, llms.txt, font swap, schema audit). Any deviation creates costly retrofitting.

Primary risks: (1) react-helmet-async alone does not produce crawlable HTML — prerendering must be validated with a proof-of-concept build before all 14 pages are committed; (2) the #b08eeb light lavender accent fails WCAG AA contrast at 2.8:1 on white and must never be used for text; (3) AggregateRating schema added pre-launch with fabricated data triggers a Google manual action — omit entirely until real reviews exist; (4) font swap CLS will register unless Fontaine fallback metrics are applied; (5) every page must surface a WhatsApp CTA prominently — form-only contact is a conversion failure for Indian users.

---

## Key Findings

### Recommended Stack

The existing brownfield stack (React 18.3.1, Vite 5.4.19, TypeScript 5.8.3, Tailwind 3.4.17, shadcn/Radix, React Hook Form 7.61.1 + Zod 3.25.76, Embla Carousel 8.6.0) is complete and locked. All additions are additive — no existing dependency removed.

**New dependencies required (install in order):**

| Package | Version | Purpose | Confidence |
|---------|---------|---------|------------|
| react-helmet-async | 3.0.0 | Per-route title/meta/canonical/OG in React 18 | HIGH |
| vite-react-ssg | ~0.3.x | Static prerendering for 14 known routes (React Router v6) | MEDIUM |
| motion | 11.x | Micro-animations: hover lifts, scroll reveals, press feedback | HIGH |
| schema-dts | 2.0.0 (devDep) | TypeScript types for Schema.org JSON-LD — zero runtime cost | HIGH |
| react-schemaorg | latest | JsonLd component wrapper | HIGH |
| @fontsource-variable/playfair-display | latest | Self-hosted variable heading font | HIGH |
| @fontsource-variable/plus-jakarta-sans | latest | Self-hosted variable body font | HIGH |
| fontaine | latest (devDep) | Fallback font metric overrides — achieves CLS = 0 on font swap | HIGH |
| vite-imagetools | 9.0.2 (devDep) | Build-time AVIF/WebP conversion for LCP hero images | HIGH |

**Static files to create in public/:** robots.txt (allow OAI-SearchBot, PerplexityBot, Claude-SearchBot, GoogleExtended; block GPTBot, ClaudeBot, CCBot, Bytespider, Meta-ExternalAgent, Amazonbot, Applebot-Extended), sitemap.xml (14 URLs with lastmod), llms.txt (brand + canonical page list for AI indexing).

**Packages to DELETE:** react-resizable-panels, recharts, cmdk, vaul, next-themes, react-day-picker, input-otp. Remove lovable-tagger from vite.config.ts. Delete 35 unused shadcn component files from src/components/ui/ (keep only ~12 actively imported).

**Analytics deferred** per PROJECT.md. Recommendation when ready: Plausible (no cookie consent, ~1KB, SPA-native route tracking) over GA4; PostHog if product analytics needed.

### Expected Features

**Must have — v1 table stakes (launch-blocking):**
- Zorova design system: 5-token palette (#09080a, #f6f4f9, #3e1b7c, #b08eeb decorative-only, #8442f5), Playfair Display + Plus Jakarta Sans, alternating white/#f6f4f9 section rhythm
- Global Navigation (frosted-glass sticky, 10 links + Book Now CTA) + Footer (4-column)
- Home: gradient hero, 4-step How It Works, 3x4 benefit grid, testimonial carousel (Embla autoplay+swipe), trust signals, membership anchor
- Massages: 8-card service catalog with Coming Soon tags, 3x4 health benefits grid, Did You Know diabetes highlight box
- Stretch: service benefits, audience use cases (athletes/seniors/recovery), booking CTA
- Membership: 3-tier pricing cards (Essentials / Wellness Plus / Family Wellness) + waitlist CTA
- Careers / Work With Zorova: provider recruitment narrative, named safety features, provider application form
- Business: corporate wellness pitch + corporate proposal form
- Franchise: franchise pitch + franchise application form
- About: brand story, mission, value cards
- Gifts: 3-tier gift cards + waitlist CTA
- Blog: 3-5 hardcoded founding articles with Article schema
- Help + FAQ: accordion FAQs (Radix Accordion), contact channels
- Legal pages (Privacy, Terms, Cancellation): shared LegalPageLayout with last-updated date
- Contact: WhatsApp link above fold (wa.me/91XXXXXXXXXX format), contact form
- Full SEO layer: per-page title/description/canonical, OG + Twitter Card, JSON-LD (Organization, LocalBusiness, Service, FAQPage, Article, BreadcrumbList — no AggregateRating pre-launch), sitemap.xml, robots.txt
- GEO layer: AI crawler allow-list in robots.txt, passage-level content structure, llms.txt
- Trust signal UI patterns at every conversion touchpoint across all pages
- Micro-animations: hover lifts on cards, fade-ins + slide-ups on scroll reveal, gradient wash on CTAs
- Mobile-first at <768px; WCAG AA (4.5:1 contrast, 16px body, semantic HTML, keyboard nav, skip-to-main); LCP <2.5s, INP <200ms, CLS <0.1

**Should have — v1 competitive differentiators:**
- Multi-generation audience framing (children/teens/adults/seniors/athletes/women/men) — unique vs. Urban Company which segments by gender only
- Explicit stigma-breaking narrative on About + Home — no Indian competitor does this
- Ayurvedic/therapeutic legitimacy positioning throughout service pages
- Female-provider-specific safety features named explicitly on Careers page (GPS tracking, emergency contact, block-user function)
- Membership positioned as preventive healthcare routine, not a discount subscription
- GEO first-mover: Zorova answerable in ChatGPT/Perplexity before any Indian competitor
- Design system quality as differentiator: Playfair Display + deep purple vs. Urban Company utilitarian UI

**Defer to v2+:**
- Real booking/checkout/payment (requires backend); user auth/accounts; city-specific landing pages; therapist profile pages; real-time availability calendar; e-commerce gift card purchase; Hindi i18n; headless CMS; dark mode; live chat/chatbot

### Architecture Approach

The architecture layers new concerns onto the existing shadcn/Radix/Tailwind foundation with a strict unidirectional dependency flow. Pages are thin composers: they import typed content objects from src/content/ and compose shared sections from src/components/sections/. A RootLayout with React Router Outlet replaces the current per-page Navbar/Footer import pattern. SEO components (SEO.tsx, SchemaOrg.tsx) live in src/components/seo/. Animation primitives (FadeInSection, MotionCard, AnimatedCTA) live in src/components/motion/, backed by shared variants in src/lib/motion.ts (pure TypeScript, no JSX). Form components in src/components/forms/ import Zod schemas from src/lib/schemas/. The content data layer (src/content/*.ts — one typed file per page) co-locates SEO meta, JSON-LD schema, and copy for future CMS migration.

**Major components:**
1. RootLayout.tsx — Outlet wrapper keeping Nav + Footer mounted across all route changes
2. src/components/seo/ — SEO.tsx (react-helmet-async) + SchemaOrg.tsx (schema-dts + react-schemaorg)
3. src/components/sections/ — 10 shared: TrustStrip, BenefitGrid, TestimonialCarousel, CTABanner, AudienceCards, StepFlow, GradientCTA, AccordionFAQ, PricingTier, GiftCardTier
4. src/components/motion/ — FadeInSection, MotionCard, AnimatedCTA backed by src/lib/motion.ts
5. src/components/forms/ — 5 form components with loading + success + error states + honeypot
6. src/content/ — 14 typed objects: PageMeta + JSON-LD schema + structured copy
7. src/pages/ — 14 thin page composers, each calling SEO, SchemaOrg, and composing sections

**Route consolidation:** Remove ReferPage.tsx, WorkWithUsPage.tsx, HelpPage.tsx, FaqsPage.tsx. Final 14 routes: /, /massages, /stretch, /careers, /membership, /business, /franchise, /about, /blog, /gifts, /privacy, /terms, /cancellation, /contact.

**Dependency direction (strict):** pages -> content/ (read-only). pages -> layout, sections, seo, forms. sections -> components/ui. seo -> react-helmet-async, schema-dts. forms -> lib/schemas, react-hook-form, zod, ui. motion -> lib/motion.ts, motion/react. lib/motion.ts -> motion/react variants only. lib/schemas -> zod only. Nothing below pages/ imports from pages/. No content/ file imports React.

### Critical Pitfalls

**These 7 pitfalls must shape every phase decision. They are not optional polish items.**

1. **react-helmet-async alone does not fix SPA SEO** — Social crawlers (WhatsApp previews), AI bots, and Googlebot first-pass see only raw index.html shell. vite-react-ssg static prerendering is mandatory. Validate with proof-of-concept in Phase 4 before committing all 14 pages. Recovery cost if skipped: HIGH (2-4 week GSC re-index wait).

2. **Lovable artifact leakage** — zen-at-home and Lovable references survive in index.html, manifest.json, package.json, vite.config.ts, playwright.config.ts, README.md, and data-lovable-* HTML attributes. Phase 1 grep must achieve zero results across all file types before any other phase starts.

3. **#b08eeb contrast failure** — Light lavender on white (#ffffff) = 2.8:1. Fails WCAG AA for text and interactive elements. Use #b08eeb for decorative purposes only (gradient washes, borders). For text needing an accent, darken to ~#6b2fd4 or use #3e1b7c. Audit in WebAIM Contrast Checker before any page is built.

4. **MotionConfig reducedMotion missing + hero LCP** — Without MotionConfig reducedMotion="user" in App.tsx, prefers-reduced-motion users get full animations (WCAG 2.3.3 violation). Hero H1 and hero image must start at opacity:1 — animating from opacity:0 delays LCP measurement. Establish both rules in Design System phase.

5. **AggregateRating schema pre-launch = manual action risk** — Never add AggregateRating JSON-LD with fabricated star counts. Google fake review detection results in sitewide penalties requiring 2-6 weeks to recover. Omit entirely from all v1 schemas.

6. **WhatsApp CTA must be visible above fold on every conversion page** — Indian users prefer WhatsApp for business contact. Form-only contact is a conversion failure. wa.me/91XXXXXXXXXX (with 91 country prefix) must appear above fold on Home, Contact, Help, and all service pages. Non-negotiable checklist gate for every page build.

7. **Font CLS from Playfair Display / Plus Jakarta Sans swap** — Google Fonts CDN @import causes render-blocking requests. font-display:swap without Fontaine fallback size-adjust/ascent-override causes visible text reflow (CLS >0.1 on text-heavy pages). Fix in Design System phase: swap to @fontsource-variable packages and apply Fontaine metrics before any page builds start.

---

## Implications for Roadmap

Based on combined research, 10 phases are architecturally required in strict order. Skipping any phase forces expensive retrofitting across all 14 pages.

### Phase 1: Brand Purge and Brownfield Cleanup
**Rationale:** Zero Lovable/zen-at-home references is a hard prerequisite. Metadata, manifest, vite config, playwright config, index.html, package.json must reflect Zorova before anything builds on top of them.
**Delivers:** Clean Zorova-branded codebase, no Lovable artifacts, trimmed npm packages, 35 unused shadcn files deleted, bundle baseline established.
**Addresses:** PITFALLS #2 (Lovable artifacts), PITFALLS #14 (bundle bloat).
**Checklist gate:** grep -ri "lovable|zen-at-home" returns zero results across all file types. npm run build succeeds. Bundle visualizer shows no orphaned packages.

### Phase 2: Design System and Tokens
**Rationale:** Every visual decision in all 14 pages depends on stable tokens. Font loading strategy and contrast audit must happen before any page is built incorrectly.
**Delivers:** Finalized Tailwind token config, contrast-audited palette (#b08eeb rules documented), @fontsource-variable fonts with Fontaine fallback metrics, imagery guidelines (no Unsplash, accent-light illustrations), MotionConfig reducedMotion="user" in App.tsx.
**Addresses:** PITFALLS #4 (MotionConfig), PITFALLS #9 (font CLS), PITFALLS #12 (#b08eeb contrast), PITFALLS #13 (India imagery).
**Checklist gate:** WebAIM passes all text/interactive uses. No FOUT in Lighthouse filmstrip. MotionConfig confirmed in App.tsx.

### Phase 3: Global Layout Chrome
**Rationale:** Navigation and Footer must exist before any page renders correctly. RootLayout with Outlet must replace per-page Navbar/Footer imports before page builds start.
**Delivers:** RootLayout.tsx with Outlet, Navigation.tsx (frosted-glass sticky, 10 links + Book Now), Footer.tsx (4-column), Section.tsx (variant: white/whisper/cream/gradient-soft), Page.tsx, App.tsx refactored to 14 Zorova URL routes.
**Addresses:** ARCHITECTURE anti-pattern #1 (per-page Navbar/Footer), FEATURES (global nav + internal linking SEO).

### Phase 4: SEO Infrastructure
**Rationale:** SEO components must exist before pages so meta tags are woven in at creation, not retrofitted. vite-react-ssg proof-of-concept must be validated — do not build all 14 pages without confirming prerendering works.
**Delivers:** react-helmet-async + HelmetProvider in App.tsx, SEO.tsx, SchemaOrg.tsx (schema-dts + react-schemaorg), vite-react-ssg proof-of-concept on one page, public/robots.txt (AI crawler allow-list), public/sitemap.xml, public/llms.txt.
**Addresses:** PITFALLS #1 (helmet alone insufficient), PITFALLS #3 (canonical + BrowserRouter), PITFALLS #7 (no AggregateRating), PITFALLS #8 (GEO — AI crawlers get static HTML).
**Research flag (MEDIUM confidence):** vite-react-ssg proof-of-concept must pass before Phase 8. If it fails, document fallback approach before proceeding.

### Phase 5: Animation Primitives
**Rationale:** Shared sections (Phase 6) use FadeInSection and MotionCard. Animation primitives must exist before sections are built.
**Delivers:** motion installed, LazyMotion + domAnimation (~15KB gzipped), src/lib/motion.ts (fadeUp, staggerContainer, slideIn variants), FadeInSection.tsx, MotionCard.tsx, AnimatedCTA.tsx, use-reduced-motion.ts hook. Rules: transform/opacity only, hero opacity:1 initially, stagger capped at 10 visible items.
**Addresses:** PITFALLS #4 (animation CLS, reduced motion), CWV INP <200ms (GPU-accelerated properties only).

### Phase 6: Shared Sections
**Rationale:** 10 shared sections reused across multiple pages. Build once before any page phase. TestimonialCarousel uses Embla (already installed). AccordionFAQ uses Radix Accordion.
**Delivers:** TrustStrip, BenefitGrid, TestimonialCarousel, CTABanner, AudienceCards, StepFlow, GradientCTA, AccordionFAQ, PricingTier, GiftCardTier, LegalPageLayout — all using Phase 2 tokens, animated with Phase 5 primitives, mobile-first.
**Addresses:** FEATURES (trust signals load-bearing on every page), PITFALLS #6 (WhatsApp CTA component built here, reused everywhere).

### Phase 7: Form Infrastructure
**Rationale:** 5 forms span 6 pages. Zod schemas must exist before form components. All forms share loading/success/error patterns — build once.
**Delivers:** 4 Zod schemas in src/lib/schemas/ (contact, provider, corporate, franchise), 5 form components (ContactForm, ProviderForm, CorporateForm, FranchiseForm, WaitlistForm) each with: disabled submit + spinner, persistent success confirmation, per-field errors, honeypot field, non-200 error handling. Provider form has unsaved-navigation warning.
**Addresses:** PITFALLS #11 (silent success, no loading state, no spam protection, data loss on navigation).

### Phase 8: Content Objects and Page Builds
**Rationale:** With all infrastructure stable, pages are thin composers. Content objects first (typed), then pages assembled. Order: Home + Massages first (highest traffic), then Stretch + Membership + Careers, then remaining 9 pages.
**Delivers:** src/content/*.ts (14 typed files: PageMeta + JSON-LD schema + copy), 14 page components with SEO, SchemaOrg, mobile-first layout, trust signals, WhatsApp CTA. No Unsplash URLs.
**Addresses:** All 14 pages from FEATURES MVP. PITFALLS #6 (trust-tone review per page), PITFALLS #13 (WhatsApp visible above fold on mobile).
**Checklist gate per page:** Axe DevTools zero errors; WhatsApp link visible mobile above fold (where applicable); no unsplash.com in source; SEO and SchemaOrg present with real values.

### Phase 9: Prerendering / SSG
**Rationale:** Once all 14 pages are stable, wire vite-react-ssg. Main.tsx refactored to ViteReactSSG export. Validates browser API guards and correct per-page HTML before GSC submission.
**Delivers:** Static HTML per route at npm run build, all 14 routes returning full HTML to curl, zero hydration warnings, Radix portal behavior verified.
**Addresses:** PITFALLS #1 (confirmed SPA SEO), PITFALLS #10 (hydration mismatches).
**Checklist gate:** curl -s https://zorova.in/massages | grep "<title>" returns page-specific title, not generic fallback.

### Phase 10: SEO Polish and Performance Audit
**Rationale:** Final launch gate. Schema validation, canonical audit, Core Web Vitals under India mobile conditions, GSC submission.
**Delivers:** Rich Results Test green on all schema types (zero AggregateRating), Lighthouse Mobile LCP <2.5s, CLS <0.1, INP <200ms under 4x CPU throttle (Moto G emulation), final sitemap.xml, GSC submitted.
**Addresses:** PITFALLS #5 (LCP image fetchpriority), PITFALLS #7 (schema audit), PITFALLS #9 (font CLS final check).

### Phase Ordering Rationale

- Phases 1-5 produce zero visible user-facing output but are not skippable. Each is a prerequisite for everything that follows.
- Phase 6 (shared sections) must precede Phase 8 (pages) — pages are thin composers, not content generators.
- Phase 7 (forms) can overlap the latter half of Phase 6 when parallelizing, but each form must complete before its containing page is built.
- Phase 9 (prerendering) is deliberately deferred until all pages are stable to avoid repeated hydration debugging during page development.
- Phase 10 is the launch gate, not a post-launch task. CWV, schema validation, and canonical audit are launch-blocking.

### Research Flags

**Needs deeper validation during planning:**
- Phase 4 / Phase 9 (vite-react-ssg): MEDIUM confidence. Community project for React Router v6. Proof-of-concept on one page mandatory before committing all 14. Fallback plan must be documented before Phase 8.
- Phase 9 (Radix UI portals in SSR): Radix dialogs, dropdowns, tooltips use Portal accessing document.body. Test explicitly during Phase 9. May need typeof window !== undefined guards or conditional portal suppression.

**Standard patterns (skip research-phase):**
- Phase 1 (brand purge): Mechanical checklist; no novel architectural decisions.
- Phase 2 (design tokens): Token system already wired; verification + contrast audit + Fontaine setup only.
- Phase 3 (global layout): React Router v6 RootLayout + Outlet is well-documented and high-confidence.
- Phase 5 (animation): Motion v11 is category-dominant with clear official documentation.
- Phase 6 (shared sections): Standard React composition over existing shadcn primitives.
- Phase 7 (forms): React Hook Form + Zod already installed; patterns documented in shadcn official docs.
- Phase 8 (pages): Thin composers — complexity is in sections already built; no novel architectural decisions.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All critical choices verified via official sources and npm as of 2026-04-14. One MEDIUM caveat: vite-react-ssg is a community project requiring proof-of-concept validation. |
| Features | HIGH | Brief is authoritative (full 14-page content spec supplied by user). Competitor analysis (Urban Company, Soothe, Zeel) confirms table stakes. Anti-features clearly reasoned. |
| Architecture | HIGH | All patterns are standard React Router v6 + shadcn idioms verified via official docs. Dependency direction is strict and documented. |
| Pitfalls | HIGH (stack/SEO/CWV), MEDIUM (India market) | Stack-specific pitfalls verified against official sources. India mobile performance and cultural framing based on multiple 2025-2026 sources; no first-party Zorova user testing yet. |

**Overall confidence:** HIGH

### Gaps to Address

- **vite-react-ssg compatibility with Vite 5.4.x + React Router 6.30.1:** Proof-of-concept required in Phase 4. Document fallback plan before Phase 8.
- **Radix UI portal behavior during prerender:** Test every Radix Dialog, DropdownMenu, Tooltip in SSR context during Phase 9. May need window guards or conditional portal suppression.
- **Form submission endpoint:** Decide Formspree vs. Netlify Forms vs. defer during Phase 7 planning. Zod schemas designed for server-side reuse.
- **WhatsApp phone number:** wa.me/91XXXXXXXXXX is a placeholder. Actual number must be confirmed before Phase 8 to avoid post-build find-and-replace.
- **Real photography timeline:** All v1 uses placeholder illustrations. If photography is available before launch, vite-imagetools pipeline becomes critical earlier.

---

## Sources

### Primary (HIGH confidence)
- PROJECT.md (internal) — authoritative brief, 14-page content spec, brownfield constraints, out-of-scope decisions
- motion.dev/docs — Motion v11 accessibility (MotionConfig reducedMotion, useReducedMotion, LazyMotion)
- npmjs.com — react-helmet-async 3.0.0, schema-dts 2.0.0, vite-imagetools 9.0.2, @fontsource-variable packages (confirmed 2026-04-14)
- github.com/google/schema-dts — Google Open Source; v2.0.0 confirmed
- github.com/google/react-schemaorg — Google Open Source
- ui.shadcn.com/docs/theming — CSS variable theming pattern confirmed
- reactrouter.com/start/framework/routing — RootLayout + Outlet for React Router v6
- web.dev/articles/font-best-practices — Fontaine CLS prevention with size-adjust/ascent-override
- developers.google.com/search/docs/appearance/core-web-vitals — LCP/CLS/INP thresholds
- WebAIM Contrast Checker — #b08eeb on white verified at 2.8:1

### Secondary (MEDIUM confidence)
- github.com/Daydreamer-riri/vite-react-ssg — actively maintained for RR v6; community project
- Cloudflare Q1 2026 crawl analysis — AI bot classification and crawl-to-referral ratios
- ALM Corp Anthropic bots framework — ClaudeBot vs Claude-SearchBot distinction
- Urban Company India service pages — competitor feature and trust signal baseline
- Multiple 2025-2026 sources on India mobile performance (Snapdragon 4xx-class, 4G 40-80ms latency)

### Tertiary (LOW confidence)
- llms.txt community standard (SearchEngineLand, Bluehost) — community convention, not W3C/IETF standard; include anyway (trivial cost, potential future value)
- GEO passage-level citability impact for Indian market — directionally sound; no controlled study

---
*Research completed: 2026-04-14*
*Ready for roadmap: yes*
