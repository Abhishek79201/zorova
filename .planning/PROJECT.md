# Zorova — On-Demand Home Massage & Spa Platform

## What This Is

Zorova is a multi-page responsive marketing website for an on-demand home wellness service that dispatches certified therapists to customers' homes for professional massage, spa, and stretch therapy. The site serves every demographic — children, teens, adults, seniors, athletes, women, men — and positions therapeutic bodywork as essential healthcare, not luxury, with a mission to normalize massage culture in Indian society and break the stigma around it.

**Implementation:** Greenfield **Next.js 16 App Router** project. The previous Vite SPA lives in the parent directory (`../src/`, `../vite.config.ts`, `../package.json`) and is kept as a reference for salvage (content, component patterns) — delete after launch. All new work happens at this workspace root.

> ⚠ **Next.js 16 note** (from `AGENTS.md`): this version has breaking API/convention changes from training-data-era Next.js. Consult `node_modules/next/dist/docs/` before writing non-trivial code.

## Core Value

**Trust-building, stigma-breaking conversion site** — every page must make any Indian household (regardless of age or gender) feel safe, respected, and confident enough to book a therapist into their home. If the site feels sleazy, luxury-exclusive, or clinical-cold, the product fails.

## Requirements

### Validated

<!-- Fresh Next.js 16 scaffold just created. -->

- ✓ Next.js 16.2.3 App Router + React 19.2.4 + TypeScript — scaffolded (`package.json`)
- ✓ Tailwind CSS v4 — scaffolded (`postcss.config.mjs`, `src/app/globals.css`)
- ✓ ESLint with eslint-config-next — scaffolded
- ✓ `src/app/` App Router structure with `layout.tsx` + `page.tsx` + `globals.css`

<!-- Old Vite SPA lives in parent directory — reference only (salvage content/components, delete after launch). -->

- ✓ Legacy Vite SPA at `../src/`, `../package.json` — kept for reference only

### Active

<!-- Current scope for the Zorova milestone — building toward these. -->

- [ ] **Greenfield Next.js 16 build** — fresh scaffold; no Lovable artifacts inherit
- [ ] **Salvage valuable assets from legacy Vite `../src/`** — verified content, design-token patterns — copy selectively (no Lovable taggers, no Vite-specific code)
- [ ] **Zorova design system** — colors (`#09080a`, `#f6f4f9`, `#3e1b7c`, `#b08eeb`, `#8442f5`), typography (Playfair Display + Plus Jakarta Sans), spacing, radii, shadows tokenized in Tailwind config
- [ ] **14 content-complete pages** — Home, Massages, Stretch, Work With Zorova (Careers/Provider), Membership, Business, Franchise, About, Blog, Gifts, Privacy, Terms, Cancellation, Help & Contact
- [ ] **Global components** — sticky Navigation (frosted-glass, 10 links + Book Now CTA), Footer (4-column with social + legal + contact)
- [ ] **Forms** — Provider application, Corporate proposal, Franchise application, Contact form, Waitlist signup (Membership + Gifts), Blog contribute CTA
- [ ] **Comprehensive SEO (Next.js-native)** — per-page `export const metadata` / `generateMetadata()` with title/description/canonical/Open Graph/Twitter Card, JSON-LD schema via `<script type="application/ld+json">` in layouts (Organization, LocalBusiness, Service, FAQPage, Article, BreadcrumbList), `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`, semantic HTML5 landmarks, alt text, internal linking strategy
- [ ] **GEO / AI search optimization** — AI crawler accessibility (GPTBot, ClaudeBot, PerplexityBot), passage-level citability, brand mention signals, optimized for Google AI Overviews + ChatGPT + Perplexity
- [ ] **Micro-animations across all pages** — hover lifts on cards, fade-ins on scroll, slide-ups on section reveal, button press feedback, smooth transitions, primary-to-accent gradient washes on CTAs
- [ ] **Trust-signal UI patterns** — verified badges, rating stars, safety icons, certification callouts repeated across pages
- [ ] **Testimonial carousel** (Home page, autoplay + swipe)
- [ ] **Accordion FAQs** (Help page)
- [ ] **4-step "How It Works" horizontal flow** (Home page)
- [ ] **Benefit grids** — 3×4 health benefits (Home, Massages), 3×4 stretch benefits (Stretch), value cards (About)
- [ ] **Mobile-first responsive layouts** — primary access channel is phones; all layouts verified <768px first
- [ ] **WCAG AA accessibility** — contrast ratios, 16px body minimum, semantic HTML, keyboard nav, screen-reader labels
- [ ] **Core Web Vitals targets** — LCP <2.5s, INP <200ms, CLS <0.1
- [ ] **Gradient hero sections** with primary-to-accent overlays for Home + CTA banners
- [ ] **Section rhythm** — alternating white (`#ffffff`) and background (`#f6f4f9`) sections across all pages
- [ ] **"Did You Know?" diabetes highlight box** (accent background, Home + Massages)
- [ ] **Service placeholder grid with "Coming Soon" tags** — Massages page, 8 service cards
- [ ] **Membership tier pricing cards** (3 tiers — Essentials, Wellness Plus, Family Wellness, pricing TBD with waitlist CTA)
- [ ] **Gift card tier cards** (3 options — Relaxation Starter, Wellness Package, Custom Gift — launch-waitlist CTA)
- [ ] **Legal page template** — shared layout for Privacy, Terms, Cancellation (last-updated date, scrollable body)

### Out of Scope

<!-- Explicit boundaries for this milestone. -->

- Backend / API integration — frontend-only static marketing site; forms collect data but no server wiring yet (TBD in future milestone)
- Actual booking flow / checkout / payment — CTAs link to placeholder/waitlist, full booking system is a later milestone
- User authentication / customer accounts — no login in this milestone
- Mobile native apps — web-first, app mentioned only as "Coming Soon" in footer
- Multi-language / i18n — English-only for launch (Hindi and regional languages deferred)
- CMS integration — blog and content are hardcoded; headless CMS deferred
- Real photography — placeholder images with accent-light backgrounds + icon illustrations; real photoshoot deferred
- Live chat / chatbot — WhatsApp link only, no embedded widget
- Analytics integration beyond basic setup — GA4/PostHog deferred (semantic HTML + meta tags set up to support it later)
- Dark mode — single theme only
- E-commerce / gift card purchase — gift card tiers shown, purchase flow deferred

## Context

**Codebase state (greenfield Next.js + reference Vite SPA in parent dir):**
- **Next.js 16.2.3 App Router project** at this workspace root (React 19.2.4, Tailwind v4, TypeScript, ESLint)
- `src/app/` — App Router structure (layout.tsx, page.tsx, globals.css)
- `public/` — static assets; SEO artifacts generated via `src/app/sitemap.ts`, `src/app/robots.ts`, and static `public/llms.txt`
- **Legacy Vite SPA at `../`** (`../src/`, `../vite.config.ts`, `../package.json`) — reference only; **do not import from it**; delete after Zorova launch
- Lovable artifacts only exist in the legacy Vite tree — this Next.js project is clean
- shadcn/ui components installed fresh via `npx shadcn@latest init` against this project root

**Target URL structure (from brief):**
- `/` (Home), `/massages`, `/stretch`, `/careers` (Work With Zorova), `/membership`, `/business`, `/franchise`, `/about`, `/blog`, `/gifts`, `/privacy`, `/terms`, `/cancellation`, `/contact`

**Brand & UX themes:**
- Professional yet warm — "wellness for every Indian household"
- Trust-first UI: verified badges, ratings, safety icons repeated across pages
- Stigma-breaking through representation — diverse ages, genders, families in imagery
- Gradients (primary → accent) on hero + CTA sections
- Alternating white / lavender-white section rhythm
- Subtle rounded corners (8–16px), soft shadows, hover elevation
- Micro-animations: hover lifts, fade-ins, slide-ups, smooth transitions (user-specified requirement)

**Typography:**
- Heading: Playfair Display / DM Serif Display / Cormorant Garamond — pick ONE
- Body: Plus Jakarta Sans / DM Sans / Inter — pick ONE
- Decision deferred to design system phase; recommendation Playfair Display + Plus Jakarta Sans per brief hints

**Deep brief provided:**
Full 14-page content + design spec supplied by user including section-by-section copy, layout directives, CTA wording, form fields, FAQ content, testimonial text, value props, and benefit lists. Content is ready to drop into pages — implementation work is structural, stylistic, and SEO-focused, not copywriting.

## Constraints

- **Tech stack:** **Next.js 16 App Router + React 19 + TypeScript + Tailwind v4** — locked
- **UI library:** shadcn/ui + Radix + Tailwind — installed fresh via shadcn CLI (do NOT copy from legacy `../src/`)
- **Routing:** Next.js App Router file-based routing (`src/app/<route>/page.tsx`) — no React Router
- **Performance:** Core Web Vitals thresholds — LCP <2.5s, INP <200ms, CLS <0.1
- **Accessibility:** WCAG AA minimum — 4.5:1 text contrast, 16px body minimum, semantic HTML, keyboard nav
- **Mobile-first:** primary user is on phone — every layout designed mobile, scaled up
- **Design system compliance:** strict adherence to the 5-token palette + derived shades + type scale from the brief — no off-palette colors, no deviating font pairings once chosen
- **Content fidelity:** copy from the brief is final — implement as specified, do not paraphrase
- **Dependency:** `superpowers:frontend-design` skill must be invoked during UI phases to avoid generic AI aesthetics
- **Imagery ethics:** diverse Indian representation, all ages, never suggestive or sleazy — placeholder illustrations with accent-light bg until real photography available
- **Brand purge:** zero "Lovable" or "zen-at-home" references anywhere in code, copy, metadata, or dev tags

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| **Pivot to Next.js 16 App Router** (reversed prior decision) | User-directed pivot before planning began. Native SSG, metadata API, `app/sitemap.ts`, `app/robots.ts`, React 19 RSC, built-in image/font optimization — eliminates the entire prerender phase and the `react-helmet-async` dependency. Old Vite SPA kept as reference | ✓ Good |
| Fresh scaffold vs. in-place migration | Old Vite SPA has Lovable contamination in config files; fresh Next.js scaffold avoids inheriting any of it | ✓ Good |
| Standard granularity, parallel execution, balanced models | Fits scope of 14 pages + rebrand + SEO without over-ceremony | — Pending |
| Full rebrand in early phase (not incremental) | Avoid fragmented codebase with half-Zorova / half-zen references; atomic rename is cleaner | — Pending |
| SEO woven into every phase, not end-loaded | Meta/schema/semantic HTML are cheaper to build correctly the first time than retrofit | — Pending |
| Micro-animations as a first-class design concern | User-specified requirement — codify in design system phase and enforce in every page build | — Pending |
| Use `superpowers:frontend-design` for page UI work | User-requested; avoids generic AI-looking output | — Pending |
| Forms collect data but no backend submission wiring this milestone | Out-of-scope call — hooks need to exist for future API but we ship with client-side validation + visual confirmation only | — Pending |
| Placeholder imagery with accent-light bg + icons | Brief explicitly permits this until real photography; avoids delay waiting on photoshoot | ✓ Good |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-14 after initialization*
