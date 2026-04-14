# Technology Stack — SEO/GEO/Animation Additions

**Project:** Zorova — On-Demand Home Wellness Marketing Site
**Researched:** 2026-04-14
**Scope:** Additions to existing React 18 + Vite 5 + TypeScript + Tailwind + shadcn/Radix SPA
**Overall confidence:** MEDIUM-HIGH (all critical choices verified via official sources or high-signal web evidence; version numbers current as of research date)

---

## Context: What Already Exists (Do Not Re-research)

The brownfield stack is locked:
- React 18.3.1, React Router DOM 6.30.1, Vite 5.4.19, TypeScript 5.8.3
- Tailwind CSS 3.4.17, shadcn/ui + Radix UI, React Hook Form 7.61.1 + Zod 3.25.76
- Embla Carousel React 8.6.0 (testimonial carousel is already solved)
- TanStack React Query 5.83.0 (configured but unused — available for future API calls)

Everything below is ADDITIVE. No existing dependency should be removed.

---

## 1. SPA Meta Management (SEO Titles / OG / Twitter / Canonical)

### Recommended: `react-helmet-async` v3.0.0

| Property | Value |
|----------|-------|
| Package | `react-helmet-async` |
| Version | 3.0.0 (published March 2026) |
| React 18 compatible | YES — tested and supported |
| React 19 compatible | YES — v3.0.0 upgraded; HelmetProvider becomes a transparent passthrough in React 19 |
| Weekly downloads | ~1M+ (high adoption) |

**Why react-helmet-async over React 19 native metadata:**

React 19 ships a native document metadata API (`<title>`, `<meta>`, `<link>` hoisted from inside components to `<head>`). However, this project is on **React 18.3.1**, not React 19. Upgrading to React 19 would be a separate milestone concern. react-helmet-async is the proven, thread-safe solution for React 18 SPAs and will work without any React version upgrade.

**Why not the original `react-helmet`:** Unmaintained; not thread-safe; last meaningful publish was 2020.

**Why not migrate to Next.js for SEO:** Migration cost is prohibitive on an existing 18-page SPA. SPA SEO is achievable via react-helmet-async + prerendering (see Section 2). The PROJECT.md explicitly locks the stack.

```bash
npm install react-helmet-async
```

**Confidence:** HIGH — verified via npm page, GitHub issues confirming React 18 support, and the v3.0.0 release notes.

---

## 2. Static Prerendering / SSG for Vite SPA

### Recommended: `vite-react-ssg` (latest, ~0.3.x)

| Property | Value |
|----------|-------|
| Package | `vite-react-ssg` |
| Target | React Router v6 (exact match for this project's RR v6.30.1) |
| Approach | Pre-renders all known routes to static HTML at build time; React hydrates on load |
| Maintains SPA behavior | YES — full client-side navigation after hydration |

**Why vite-react-ssg:**

This project uses React Router v6. vite-react-ssg was specifically designed and maintained for RR v6 users after the ecosystem moved to RR v7 with built-in SSG. The README explicitly states: "vite-react-ssg will continue to maintain SSG functionality for React Router v6 users." For a 14-page marketing site with fully known static routes (`/`, `/massages`, `/stretch`, etc.), prerendering all routes at build time is straightforward.

Prerendering solves the core SPA SEO problem: Googlebot and AI crawlers receive fully-rendered HTML with all meta tags, JSON-LD, and content already in place — no JavaScript execution needed.

**Why not vike (formerly vite-plugin-ssr):** Vike is a full SSR framework that requires adopting its routing conventions and server infrastructure. It would effectively replace React Router — a major architectural change that conflicts with the "don't break existing stack" constraint.

**Why not react-snap:** Abandoned; last release 2019; uses headless Chrome which is fragile in CI; does not support Vite natively.

**Why not prerender-spa-plugin (Webpack):** Webpack-only; incompatible with Vite.

**Caveat:** vite-react-ssg requires refactoring the router entry point. The `src/main.tsx` bootstrap needs to use vite-react-ssg's `ViteReactSSG` export instead of ReactDOM.createRoot. This is a one-time migration, estimated 1-2 hours. All existing page components remain unchanged.

```bash
npm install vite-react-ssg
```

**Confidence:** MEDIUM — actively maintained for RR v6, but is a community project (not an official Vite/React team project). The SEO milestone should validate by doing a small proof-of-concept build before committing all 14 pages.

---

## 3. JSON-LD Schema Markup

### Recommended: `schema-dts` v2.0.0 + raw `<script>` tags via react-helmet-async

| Property | Value |
|----------|-------|
| Package | `schema-dts` |
| Version | 2.0.0 (published ~March 2026 — recent major release) |
| Companion | `react-schemaorg` (optional, for `<JsonLd>` component pattern) |
| Runtime cost | Zero — schema-dts is types-only, no runtime bundle |

**Why schema-dts over react-schemaorg's JsonLd component:**

schema-dts provides TypeScript type definitions for all Schema.org types. The recommended pattern for this project is a thin `useJsonLd` utility hook that takes a typed Schema.org object and injects it as a `<script type="application/ld+json">` tag via react-helmet-async. This gives:
1. Full TypeScript safety (schema-dts types catch malformed JSON-LD at compile time)
2. No extra runtime bundle (react-schemaorg adds minimal weight but is unnecessary if you write the injection utility yourself)
3. Per-page granularity via react-helmet-async — schema changes on navigation

**Schemas needed per page:**
- All pages: `Organization`, `WebSite`, `BreadcrumbList`
- Home: `LocalBusiness`, `Service` (list)
- Blog posts: `Article`
- FAQ/Help: `FAQPage`
- Massages/Stretch: `Service` with `serviceType` and `areaServed`

```bash
npm install --save-dev schema-dts
# Optional companion if you prefer JSX component syntax over raw injection:
npm install react-schemaorg
```

**Confidence:** HIGH — schema-dts is a Google Open Source project; v2.0.0 recently verified on npm/GitHub releases.

---

## 4. Sitemap Generation

### Recommended: `vite-plugin-sitemap` (jbaubree, ~1.x) — or manual generation script

| Property | Value |
|----------|-------|
| Package | `vite-plugin-sitemap` |
| Weekly downloads | ~15,000 (popular, actively maintained) |
| Approach | Generates `sitemap.xml` and `robots.txt` at Vite build time |
| Route definition | Pass array of route strings — matches the 14 known static routes |

**Why a plugin over manual:**

With 14 static, known routes, a manually maintained `public/sitemap.xml` is also viable and requires zero dependencies. However, the plugin ensures the sitemap is always regenerated on build and can incorporate `lastmod` dates automatically.

**Why not dynamic sitemap server:** Out of scope — this is a static site with no server runtime.

**Practical recommendation:** For a 14-page site, **start with a handwritten `public/sitemap.xml`** for the SEO phase launch, and add the plugin if routes grow beyond 20. The manually managed file is auditable, git-trackable, and never has a mis-configuration surprise.

`robots.txt` should also live in `public/robots.txt` as a static file (see Section 10).

```bash
# Optional — install only if you want automated sitemap
npm install --save-dev vite-plugin-sitemap
```

**Confidence:** HIGH (for manual approach) / MEDIUM (for plugin — small community project, verify compatibility with Vite 5.4.x before committing).

---

## 5. Animation Library

### Recommended: `motion` (formerly Framer Motion) v11.x — with `LazyMotion` for bundle control

| Property | Value |
|----------|-------|
| Package | `motion` (import from `motion/react`) |
| Old package name | `framer-motion` — same library, rebranded late 2024; both packages maintained |
| npm downloads | ~30M/month (dominant; 3x nearest competitor) |
| Bundle (full) | ~34KB gzipped |
| Bundle (LazyMotion + domAnimation) | ~15KB gzipped |
| Bundle (LazyMotion + domMax) | ~18KB gzipped |
| Accessibility | Respects `prefers-reduced-motion` via `useReducedMotion()` hook |

**Why Motion over React Spring:**

For a marketing site with scroll-triggered reveals, hover lifts, card fade-ins, and carousel transitions — Motion's declarative `animate`, `whileHover`, `whileInView` props map directly to the design requirements with near-zero boilerplate. React Spring excels at physics-based simulations where you need precise mass/tension/friction values. Zorova does not need physics-based animation.

Motion's hybrid engine uses the Web Animations API and ScrollTimeline natively (GPU-accelerated, off main thread) and falls back to JS only when needed. This is directly relevant to the INP <200ms target.

**Why not Auto-Animate:** Auto-Animate is a micro-library for list/DOM mutations. It has no support for scroll-triggered reveals, hover effects, or sequence orchestration. Insufficient for the Zorova animation requirements.

**Accessibility note:** Zorova has a WCAG AA requirement. Motion's `useReducedMotion()` hook must be wired up in the animation system — when a user has `prefers-reduced-motion: reduce` set, animations should be disabled or reduced to simple opacity fades. This is a design system constraint, not just a library capability.

```bash
npm install motion
```

**Confidence:** HIGH — motion/framer-motion is the clear category leader with verified 2026 documentation; bundle size figures confirmed via official docs.

---

## 6. Font Loading Strategy

### Recommended: `@fontsource-variable/playfair-display` + `@fontsource-variable/plus-jakarta-sans` + Fontaine fallback metrics

| Package | Purpose |
|---------|---------|
| `@fontsource-variable/playfair-display` | Variable weight (wght 300-900) — headings; self-hosted WOFF2 |
| `@fontsource-variable/plus-jakarta-sans` | Variable weight (wght 200-800) — body/UI; self-hosted WOFF2 |

**Why @fontsource-variable over Google Fonts + preload:**

1. **Self-hosted** — no third-party network request; eliminates one DNS lookup and SSL handshake from the critical path
2. **Privacy compliant** — no Google Fonts tracking pixels; relevant for Indian privacy regulations
3. **Variable fonts** — single font file covers all weights; reduces HTTP requests from 4-6 files to 2
4. **CLS control** — with `font-display: swap` (Fontsource default) plus explicit `size-adjust`/`ascent-override` on the fallback via Fontaine, CLS from font swap is measurable and close to zero

**CLS prevention strategy (3 layers):**

1. Import only the weights actually used (e.g., `@fontsource-variable/playfair-display/wght.css` rather than the full package CSS) to minimize font file size
2. Add `<link rel="preload" as="font" type="font/woff2" crossorigin>` for the critical subset (Latin, 400 + 700 weights for the above-the-fold hero)
3. Use `vite-plugin-webfont-dl` or the Fontaine Vite plugin (`@nuxtjs/fontaine` has a standalone version) to auto-generate `@font-face` fallback rules with `size-adjust` that match system fonts to the loaded fonts — this closes the CLS gap caused by `font-display: swap`

**Fontsource + Fontaine together** is the current 2025/2026 best practice for CLS-free self-hosted fonts in Vite projects (confirmed via multiple implementation write-ups and the Fontsource documentation referencing Fontaine integration).

```bash
npm install @fontsource-variable/playfair-display @fontsource-variable/plus-jakarta-sans
npm install --save-dev fontaine
```

**Confidence:** HIGH — both @fontsource-variable packages confirmed on npm; Fontaine CLS-prevention pattern is well-documented with official Fontsource docs referencing it.

---

## 7. Image Optimization for Vite

### Recommended: `vite-imagetools` v9.x for build-time transforms + standard `<img>` with `loading="lazy"` + `fetchpriority="high"` on LCP image

| Property | Value |
|----------|-------|
| Package | `vite-imagetools` |
| Version | 9.0.2 (published October 2025; active) |
| Weekly downloads | ~84,000 |
| Formats | AVIF, WebP, PNG, JPEG — configurable via import query strings |
| LCP optimization | `fetchpriority="high"` attribute on hero image, NOT lazy-loaded |

**Why vite-imagetools over unpic-img:**

unpic-img is optimized for CDN-hosted images (Cloudinary, Imgix, etc.). Zorova is a static site with local placeholder images + icon illustrations — no CDN in scope for this milestone. vite-imagetools processes images at build time, outputting AVIF/WebP with multiple sizes for `srcset`. Zero runtime cost.

**Why not `vite-plugin-image-optimizer`:** Sharp-based, good for compressing PNGs/JPGs, but vite-imagetools also handles format conversion (AVIF/WebP) which is the primary LCP win.

**LCP-specific guidance:**

The hero section image is the LCP element on mobile (primary access channel for Zorova). Key rules:
- Hero image must have `fetchpriority="high"` attribute — do NOT lazy-load it
- Use `<picture>` element with `<source type="image/avif">` and WebP fallback
- Explicit `width` and `height` on `<img>` to prevent CLS
- Below-the-fold images: `loading="lazy"` attribute

For the current placeholder-illustrations phase, PNGs/SVGs with explicit dimensions and `fetchpriority="high"` on the hero placeholder are sufficient. vite-imagetools becomes critical when real photography arrives.

```bash
npm install --save-dev vite-imagetools
```

**Confidence:** HIGH — version and download figures confirmed from search results; approach aligns with Google's official Core Web Vitals guidance for LCP.

---

## 8. Analytics

### Recommended: Plausible Analytics (lightweight, SPA-native) — GA4 as secondary option

| Property | Plausible | GA4 |
|----------|-----------|-----|
| SPA support | Automatic — native pushState support | Requires manual `useEffect + useLocation` hook per route change |
| Cookie requirement | None (GDPR/PDPA compliant by default) | Requires consent banner |
| Bundle impact | ~1KB script tag (CDN) | ~28KB |
| India data sovereignty | EU or self-hosted option | Google servers |
| Cost | $9/month (up to 10k pageviews), free self-host | Free |
| Setup complexity | 1 script tag in `index.html` | npm package + route tracking hook |

**Why Plausible as primary:**

PROJECT.md explicitly places analytics in "Out of Scope" for this milestone ("GA4/PostHog deferred"). When analytics IS implemented, Plausible is the recommendation because:
1. SPA route changes tracked automatically — no per-page `useEffect` hook needed
2. No cookie consent banner required — relevant for Indian users and potential EU tourists booking
3. Tiny script footprint preserves Core Web Vitals scores (no INP/LCP impact)
4. Privacy-first aligns with Zorova's trust-building brand positioning

**PostHog** is the recommendation if product analytics (funnels, session replay, feature flags) are needed in a future milestone — it has excellent React integration and SPA pageview tracking.

**GA4** should be added only if Google Ads campaigns are planned (GA4 is required for Google Ads conversion tracking). If so, use `react-ga4` package + a route-tracking hook in React Router.

```bash
# When analytics milestone arrives — choose one:
npm install react-ga4          # GA4 (if Google Ads dependency)
npm install posthog-js @posthog/react  # PostHog (if product analytics needed)
# Plausible: no npm install — 1 script tag in public/index.html
```

**Confidence:** MEDIUM — Plausible SPA support confirmed via official docs; GA4 SPA integration pattern confirmed via multiple 2025 articles; PostHog confirmed via official React tutorial.

---

## 9. llms.txt

### Recommended: Manual file, generated once and maintained

| Property | Value |
|----------|-------|
| Format | Markdown file at `/llms.txt` (served from `public/llms.txt`) |
| Standard status | Community convention — NOT an official W3C/IETF standard |
| Adoption | ~844,000 sites as of October 2025 (BuiltWith data) |
| AI adoption | Contested — Google's John Mueller stated in mid-2025: "No AI system currently uses llms.txt" |
| Tooling | Markdowner (open-source), Hyperleap AI generator — but for 14 known pages, manual is faster |

**What to include:**

```markdown
# Zorova

> On-demand professional massage and spa services delivered to your home across India.

## Pages

- [Home](https://zorova.in/): Platform overview, services, trust signals
- [Massages](https://zorova.in/massages): Full-body, deep tissue, sports, and therapeutic massage services
- [Stretch Therapy](https://zorova.in/stretch): Assisted stretch and flexibility services
- [About](https://zorova.in/about): Company mission, safety standards, therapist verification
- [Business](https://zorova.in/business): Corporate wellness programs
- [Franchise](https://zorova.in/franchise): Franchise partnership information
- [Help](https://zorova.in/contact): Contact and support

## Optional

- [llms-full.txt](https://zorova.in/llms-full.txt): Full page content for AI training
```

**Rationale:** llms.txt is low-effort (create once, rarely update) and may become more relevant as AI crawlers standardize behavior. The minimal downside justifies inclusion. It signals that Zorova explicitly consents to AI indexing for retrieval purposes (see also robots.txt in Section 10).

**Confidence:** LOW-MEDIUM — the standard itself has low confidence for impact, but implementation cost is trivial. Include it.

---

## 10. AI Crawler robots.txt Strategy

### Recommended: Allow retrieval crawlers, block training crawlers

Zorova is a marketing site that WANTS to appear in AI-generated search answers (ChatGPT, Perplexity, Google AI Overviews). The strategy is to allow crawlers that power AI answers while blocking bulk training data scrapers.

**2026 Crawler Classification:**

| Crawler | Operator | Purpose | Recommendation |
|---------|----------|---------|----------------|
| `GPTBot` | OpenAI | Model training data collection | BLOCK (training, 1255:1 crawl-to-referral ratio) |
| `OAI-SearchBot` | OpenAI | ChatGPT search index | ALLOW (powers ChatGPT answers) |
| `ChatGPT-User` | OpenAI | Real-time user queries | ALLOW (appears in ChatGPT results) |
| `PerplexityBot` | Perplexity | Search index + answers | ALLOW (powers Perplexity citations) |
| `ClaudeBot` | Anthropic | Model training | BLOCK (training; 20,583:1 crawl-to-referral ratio — extremely high extraction with no referrals) |
| `Claude-SearchBot` | Anthropic | Claude search / retrieval | ALLOW (retrieval for Claude AI answers) |
| `GoogleExtended` | Google | AI training data for Gemini | ALLOW (blocking does NOT affect Google Search ranking; but for Zorova, appearing in Google AI Overviews is a goal — allow it) |
| `CCBot` | Common Crawl | Academic/training datasets | BLOCK (no referral value) |
| `Bytespider` | ByteDance/TikTok | Model training | BLOCK |
| `Meta-ExternalAgent` | Meta | LLaMA training | BLOCK |
| `Amazonbot` | Amazon | Alexa/model training | BLOCK |
| `Applebot-Extended` | Apple | Apple Intelligence training | BLOCK (extended training bot; the base Applebot for Siri/Safari should be allowed) |

**Recommended `public/robots.txt`:**

```
User-agent: *
Allow: /

# Allow AI search/retrieval crawlers (generate citations and traffic)
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: GoogleExtended
Allow: /

# Block AI training crawlers (high crawl cost, zero referral value)
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

Sitemap: https://zorova.in/sitemap.xml
```

**Why allow GoogleExtended:** Blocking GoogleExtended prevents content from appearing in Google AI Overviews — one of Zorova's explicit GEO goals. The PROJECT.md specifically calls out "optimized for Google AI Overviews" as a requirement. Allow it.

**Confidence:** MEDIUM-HIGH — bot names and recommended strategy confirmed via multiple 2026 authoritative sources including Cloudflare's Q1 2026 crawl analysis and ALM Corp's Anthropic bot framework breakdown.

---

## GEO / AI Citability (Non-Library Strategy)

GEO is primarily a **content structure and semantic HTML** concern, not a library concern. Key implementation patterns:

1. **Direct answers in first 40-60 words** of each section — AI Overviews extract passage-level content; the first sentence of each section should be a standalone factual statement about Zorova's service
2. **Statistics and specifics over vague claims** — "certified therapists with minimum 500 hours of training" outranks "experienced professionals" in AI extraction
3. **FAQ schema on every page** with `FAQPage` JSON-LD — FAQ content is the highest-probability citation target for AI Overviews
4. **Consistent brand entity signals** — `Organization` schema on every page with `name`, `url`, `logo`, `sameAs` (social profiles) fields — builds the brand entity graph
5. **Semantic HTML5 landmarks** — `<main>`, `<article>`, `<section>`, `<aside>` with meaningful `aria-label` values help passage extraction
6. **llms.txt and robots.txt** configured as above (Sections 9-10)
7. **Internal linking with descriptive anchor text** — "book a home massage in Bengaluru" not "click here"

---

## Complete Installation Reference

```bash
# SEO meta management
npm install react-helmet-async

# Static prerendering (evaluate with proof-of-concept first)
npm install vite-react-ssg

# JSON-LD schema types (dev dependency — types only, no runtime)
npm install --save-dev schema-dts

# Animation
npm install motion

# Font loading (self-hosted variable fonts)
npm install @fontsource-variable/playfair-display @fontsource-variable/plus-jakarta-sans

# Font fallback metrics for CLS prevention
npm install --save-dev fontaine

# Image optimization
npm install --save-dev vite-imagetools

# Sitemap — start with manual public/sitemap.xml; add plugin only if routes grow
# npm install --save-dev vite-plugin-sitemap  (optional)

# Analytics — deferred per PROJECT.md; listed for future reference
# npm install react-ga4          (if Google Ads dependency)
# npm install posthog-js @posthog/react  (if product analytics)
# Plausible: script tag in index.html, no npm install
```

**Static files to create in `public/`:**
- `robots.txt` — AI crawler policy (see Section 10)
- `sitemap.xml` — 14 routes with lastmod dates
- `llms.txt` — AI indexing manifest (see Section 9)

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Meta management | react-helmet-async 3.0 | React 19 native metadata | Project is on React 18; upgrade not in scope |
| Meta management | react-helmet-async 3.0 | react-helmet (original) | Unmaintained since 2020, not thread-safe |
| Prerendering | vite-react-ssg | Vike (vite-plugin-ssr) | Requires replacing React Router — architectural conflict |
| Prerendering | vite-react-ssg | react-snap | Abandoned 2019; no Vite support |
| Prerendering | vite-react-ssg | Migrate to Next.js | Locked out by PROJECT.md; excessive cost |
| Animation | motion (Framer Motion) | React Spring | Physics library, overkill for marketing hover/scroll animations |
| Animation | motion (Framer Motion) | Auto-Animate | DOM mutation only; no scroll-triggered reveals or hover effects |
| Animation | motion (Framer Motion) | GSAP | License: GSAP Club required for many features; heavier learning curve |
| Fonts | @fontsource-variable/* | Google Fonts + preload | Third-party DNS lookup; privacy concern; less CLS control |
| Fonts | @fontsource-variable/* | @fontsource/* (static) | Variable font = single file = fewer HTTP requests vs per-weight static files |
| Image optimization | vite-imagetools | unpic-img | unpic-img is for CDN images; this project uses local static assets |
| Analytics | Plausible | GA4 | Cookie consent overhead; 28KB script; complex SPA tracking setup |
| JSON-LD | schema-dts + raw injection | react-schemaorg JsonLd | react-schemaorg adds runtime dependency; thin custom hook is sufficient |

---

## Sources

- react-helmet-async v3.0.0: [npm](https://www.npmjs.com/package/react-helmet-async) | [GitHub issues on React 18/19 support](https://github.com/staylor/react-helmet-async/issues/238)
- React 19 document metadata: [LogRocket guide](https://blog.logrocket.com/guide-react-19-new-document-metadata-feature/)
- vite-react-ssg: [GitHub](https://github.com/Daydreamer-riri/vite-react-ssg) | [npm](https://www.npmjs.com/package/vite-react-ssg)
- Vike (formerly vite-plugin-ssr): [vite-plugin-ssr.com/render-modes](https://vite-plugin-ssr.com/render-modes)
- schema-dts v2.0.0: [npm](https://www.npmjs.com/package/schema-dts) | [GitHub releases](https://github.com/google/schema-dts/releases)
- react-schemaorg: [GitHub (Google)](https://github.com/google/react-schemaorg)
- vite-plugin-sitemap: [GitHub](https://github.com/jbaubree/vite-plugin-sitemap) | [npm](https://www.npmjs.com/package/vite-plugin-sitemap)
- Motion (Framer Motion): [motion.dev](https://motion.dev/) | [bundle size docs](https://motion.dev/docs/react-reduce-bundle-size) | [LogRocket 2026 comparison](https://blog.logrocket.com/best-react-animation-libraries/)
- Motion vs React Spring 2026: [ogblocks.dev comparison](https://ogblocks.dev/blog/framer-motion-vs-react-spring)
- @fontsource-variable packages: [Fontsource](https://fontsource.org/) | [plus-jakarta-sans npm](https://www.npmjs.com/package/@fontsource-variable/plus-jakarta-sans) | [playfair-display npm](https://www.npmjs.com/package/@fontsource-variable/playfair-display)
- Fontaine for CLS: [font best practices web.dev](https://web.dev/articles/font-best-practices)
- vite-imagetools v9.0.2: [npm](https://www.npmjs.com/package/vite-imagetools) | [GitHub](https://github.com/JonasKruckenberg/imagetools)
- Core Web Vitals 2026: [Google Search Central](https://developers.google.com/search/docs/appearance/core-web-vitals) | [Sky SEO Digital guide](https://skyseodigital.com/core-web-vitals-optimization-complete-guide-for-2026/)
- Plausible SPA support: [official docs](https://plausible.io/docs/spa-support)
- PostHog React setup: [PostHog tutorial](https://posthog.com/tutorials/react-analytics)
- llms.txt standard: [SearchEngineLand announcement](https://searchengineland.com/llms-txt-proposed-standard-453676) | [Bluehost 2026 guide](https://www.bluehost.com/blog/what-is-llms-txt/) | [SearchSignal 2026 analysis](https://searchsignal.online/blog/llms-txt-2026)
- AI crawler robots.txt 2026: [Cloudflare Q1 2026 analysis](https://blog.cloudflare.com/from-googlebot-to-gptbot-whos-crawling-your-site-in-2025/) | [aicarma.com strategy guide](https://aicarma.com/blog/robots-txt-for-ai/) | [ALM Corp Anthropic bots](https://almcorp.com/blog/anthropic-claude-bots-robots-txt-strategy/)
- GEO 2026: [Search Engine Land mastering GEO](https://searchengineland.com/mastering-generative-engine-optimization-in-2026-full-guide-469142) | [Enrich Labs complete guide](https://www.enrichlabs.ai/blog/generative-engine-optimization-geo-complete-guide-2026)

---

*Stack research: 2026-04-14 | Scope: SEO/GEO/Animation additions to brownfield Vite SPA*
