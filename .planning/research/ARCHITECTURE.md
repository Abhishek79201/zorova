# Architecture Patterns

**Domain:** Multi-page wellness marketing SPA (Zorova)
**Researched:** 2026-04-14

---

## Recommended Architecture

### Overview

The Zorova site is a Vite + React 18 SPA with client-side routing. The target is 14 statically-renderable marketing pages. The architecture layers new concerns (SEO, design system, animation, forms) on top of the existing shadcn/Radix/Tailwind foundation without breaking it. Routing stays in React Router v6 with a `<RootLayout>` pattern replacing the current per-page Navbar/Footer inclusion.

```
src/
├── main.tsx                     # Entry — imports fonts, index.css, renders App
├── App.tsx                      # Providers + BrowserRouter + Routes
├── index.css                    # CSS variables (already defined), Tailwind directives
├── tailwind.config.ts           # Tokens already wired via CSS vars (do not duplicate)
│
├── components/
│   ├── layout/                  # Global chrome and page scaffolding
│   │   ├── RootLayout.tsx       # <Outlet /> between Navbar and Footer
│   │   ├── Navigation.tsx       # Renamed from Navbar.tsx (updated links/brand)
│   │   ├── Footer.tsx           # 4-column footer (keep, restyle)
│   │   ├── Page.tsx             # Wraps page content: pt-[72px] + min-h-screen
│   │   ├── Section.tsx          # bg variant + section-padding + container-content
│   │   ├── LegalPageLayout.tsx  # Shared wrapper for Privacy/Terms/Cancellation
│   │   └── HeroLayout.tsx       # Gradient hero shell (bg, overlay, padding)
│   │
│   ├── sections/                # Shared content sections (reused across pages)
│   │   ├── TrustStrip.tsx
│   │   ├── BenefitGrid.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── CTABanner.tsx
│   │   ├── AudienceCards.tsx
│   │   ├── StepFlow.tsx
│   │   ├── GradientCTA.tsx
│   │   ├── AccordionFAQ.tsx
│   │   ├── PricingTier.tsx
│   │   └── GiftCardTier.tsx
│   │
│   ├── seo/
│   │   ├── SEO.tsx              # HelmetProvider wrapper component
│   │   └── SchemaOrg.tsx        # JSON-LD <script> injector
│   │
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── ProviderForm.tsx
│   │   ├── CorporateForm.tsx
│   │   ├── FranchiseForm.tsx
│   │   └── WaitlistForm.tsx
│   │
│   ├── motion/                  # (optional — see lib/motion.ts note below)
│   │   ├── FadeInSection.tsx
│   │   ├── MotionCard.tsx
│   │   └── AnimatedCTA.tsx
│   │
│   ├── landing/                 # Page-specific sections (HOME only)
│   │   └── [existing HeroSection.tsx, PersonaSection.tsx, etc.]
│   │
│   └── ui/                      # shadcn/Radix primitives — do not modify
│
├── content/                     # Typed content objects (one file per page)
│   ├── home.ts
│   ├── massages.ts
│   ├── stretch.ts
│   ├── membership.ts
│   ├── business.ts
│   ├── franchise.ts
│   ├── about.ts
│   ├── blog.ts
│   ├── gifts.ts
│   ├── careers.ts
│   ├── contact.ts
│   ├── privacy.ts
│   ├── terms.ts
│   └── cancellation.ts
│
├── lib/
│   ├── utils.ts                 # cn() — already present
│   ├── motion.ts                # Shared Framer Motion variants + MotionConfig
│   └── schemas/                 # Zod validation schemas
│       ├── contact.schema.ts
│       ├── provider.schema.ts
│       ├── corporate.schema.ts
│       └── franchise.schema.ts
│
├── hooks/
│   ├── use-mobile.tsx           # Already present
│   ├── use-toast.ts             # Already present
│   └── use-reduced-motion.ts   # Wraps motion's useReducedMotion hook
│
└── pages/
    ├── HomePage.tsx             # Rename from Index.tsx
    ├── MassagesPage.tsx         # New (was ServicesPage.tsx)
    ├── StretchPage.tsx          # New (was SportsWellnessPage.tsx)
    ├── MembershipPage.tsx       # Rename from MembershipsPage.tsx
    ├── BusinessPage.tsx         # Keep
    ├── FranchisePage.tsx        # Keep
    ├── CareersPage.tsx          # Keep (covers Work With Zorova / Provider)
    ├── AboutPage.tsx            # Keep
    ├── BlogPage.tsx             # Keep
    ├── GiftsPage.tsx            # Keep
    ├── ContactPage.tsx          # New (replaces HelpPage.tsx + FaqsPage.tsx)
    ├── PrivacyPage.tsx          # Keep
    ├── TermsPage.tsx            # Keep
    ├── CancellationPage.tsx     # Keep
    └── NotFound.tsx             # Keep
```

---

## Component Boundaries

### What Talks to What

| Component | Receives | Outputs / Calls |
|-----------|----------|-----------------|
| `App.tsx` | — | Provides QueryClient, TooltipProvider, HelmetProvider, BrowserRouter; defines Routes |
| `RootLayout.tsx` | — | Renders Navigation + `<Outlet />` + Footer |
| `Page.tsx` | `className?` | Wraps children with top padding offset (matches `h-[72px]` nav height) |
| `Section.tsx` | `variant: 'white'\|'whisper'\|'cream'\|'gradient'`, `className?` | Applies bg class + `section-padding` + `container-content` wrapper |
| `SEO.tsx` | `title`, `description`, `canonical`, `ogImage?`, `type?` | Renders `<Helmet>` tags via react-helmet-async |
| `SchemaOrg.tsx` | `schema: Thing` (schema-dts type) | Renders `<script type="application/ld+json">` inside `<Helmet>` |
| Content file (`src/content/home.ts`) | — | Exports typed `PageContent` object; consumed by page component |
| Page component | Imports content from `src/content/`, imports SEO/SchemaOrg | Composes Section, SEO, SchemaOrg, shared sections |
| Shared section (`TrustStrip`, etc.) | Props from page content or defaults | Renders composed UI from shadcn `ui/` primitives |
| Form component | Zod schema imported from `src/lib/schemas/` | Uses react-hook-form + zodResolver; no external data submit yet |
| `motion.ts` | — | Exports `fadeUp`, `staggerContainer`, `slideIn` variant objects; no JSX |
| `FadeInSection.tsx` | `children`, `delay?` | Wraps children in `motion.div` with `fadeUp` variant from `motion.ts` |

### Dependency Direction (strict)

```
pages → content/ (read-only import)
pages → components/layout/, components/sections/, components/seo/, components/forms/
components/sections/ → components/ui/
components/seo/ → react-helmet-async, schema-dts
components/forms/ → lib/schemas/, react-hook-form, zod, components/ui/
components/motion/ → lib/motion.ts, motion/react
lib/motion.ts → motion/react (variants only — no JSX)
lib/schemas/ → zod only
```

No component below `pages/` imports from `pages/`. No `content/` file imports React.

---

## Data Flow

### Page Render Flow

```
main.tsx
  └─ App.tsx (HelmetProvider, QueryClientProvider, TooltipProvider, BrowserRouter)
       └─ Routes
            └─ Route path="/" element={<RootLayout />}
                 └─ Outlet (renders matched page)
                      └─ e.g. HomePage.tsx
                           ├─ import pageContent from '@/content/home'
                           ├─ <SEO title={pageContent.meta.title} ... />
                           ├─ <SchemaOrg schema={pageContent.schema} />
                           └─ <Page>
                                ├─ <HeroLayout>...</HeroLayout>
                                ├─ <Section variant="whisper"><TrustStrip /></Section>
                                ├─ <Section variant="white"><BenefitGrid ... /></Section>
                                └─ <Section variant="gradient"><CTABanner ... /></Section>
```

### Meta / SEO Data Flow

Content objects (`src/content/home.ts`) export a typed `PageMeta` shape. Pages import and pass it to `<SEO>`. `HelmetProvider` in `App.tsx` writes the resolved tags to `<head>`. The `<SchemaOrg>` component serializes the schema-dts typed object as JSON-LD inside a `<Helmet>` script tag — no extra library needed beyond `schema-dts` + `react-schemaorg`.

### Form Data Flow

```
Form component
  ├─ imports Zod schema from src/lib/schemas/{form}.schema.ts
  ├─ useForm({ resolver: zodResolver(schema) })
  ├─ validates on submit (client-side only — no API this milestone)
  └─ on success: shows visual confirmation (shadcn Toast / inline message)
```

---

## Patterns to Follow

### Pattern 1: RootLayout with Outlet

Replace per-page `<Navbar /> ... <Footer />` inclusion with a single nested route layout. All 14 pages become children of one `<Route element={<RootLayout />}>` parent in `App.tsx`.

```tsx
// src/App.tsx (updated structure)
<Routes>
  <Route element={<RootLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/massages" element={<MassagesPage />} />
    <Route path="/stretch" element={<StretchPage />} />
    <Route path="/careers" element={<CareersPage />} />
    <Route path="/membership" element={<MembershipPage />} />
    <Route path="/business" element={<BusinessPage />} />
    <Route path="/franchise" element={<FranchisePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/gifts" element={<GiftsPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route path="/cancellation" element={<CancellationPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Route>
  <Route path="*" element={<NotFound />} />
</Routes>
```

```tsx
// src/components/layout/RootLayout.tsx
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
```

### Pattern 2: SEO Component (react-helmet-async)

Wrap per-page meta in a reusable `<SEO>` component. `HelmetProvider` goes in `App.tsx` (wrap around `BrowserRouter`). The component is small — no additional abstraction layer needed.

```tsx
// src/components/seo/SEO.tsx
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noIndex?: boolean
}

export default function SEO({ title, description, canonical, ogImage, ogType = 'website', noIndex }: SEOProps) {
  const siteTitle = `${title} | Zorova`
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
```

Live in: `src/components/seo/SEO.tsx`. `HelmetProvider` added to `App.tsx` outside `BrowserRouter`.

### Pattern 3: JSON-LD Schema via SchemaOrg Component

Use `schema-dts` for TypeScript types and `react-schemaorg` for the React component. One `<SchemaOrg>` wrapper accepts any `schema-dts` `Thing` type and injects it. Per-page schema objects live in the content file.

```tsx
// src/components/seo/SchemaOrg.tsx
import { JsonLd } from 'react-schemaorg'
import type { Thing, WithContext } from 'schema-dts'

interface SchemaOrgProps {
  schema: WithContext<Thing>
}

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return <JsonLd<Thing> item={schema} />
}
```

Usage in page: `<SchemaOrg schema={homeContent.schema} />` — schema typed as `WithContext<LocalBusiness>` or appropriate type in the content file.

### Pattern 4: Content Data Architecture

Pages import typed content objects from `src/content/`. Do NOT inline copy in JSX.

**Rationale:**
- Typed objects let TypeScript catch missing required fields (title, description) at build time
- Content is easily replaceable when moving to a CMS later
- SEO meta and schema co-located with page copy — one place to edit
- Sections receive typed props, not free-form JSX strings

```typescript
// src/content/home.ts
import type { WithContext, LocalBusiness } from 'schema-dts'

export interface PageMeta {
  title: string
  description: string
  canonical: string
  ogImage?: string
}

export interface HomeContent {
  meta: PageMeta
  schema: WithContext<LocalBusiness>
  hero: { headline: string; subheadline: string; cta: string }
  benefits: Array<{ icon: string; title: string; body: string }>
  testimonials: Array<{ name: string; text: string; rating: number; location: string }>
  // ...
}

export const homeContent: HomeContent = {
  meta: {
    title: 'Professional Home Massage & Wellness',
    description: 'Book a certified therapist to your home in minutes. ...',
    canonical: 'https://zorova.in/',
  },
  schema: { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Zorova', ... },
  // ...
}
```

**Trade-off acknowledged:** This adds a content-file maintenance layer, but for a 14-page static site without a CMS it is strictly better than inline JSX — it keeps pages thin and content testable.

### Pattern 5: Design Tokens — Status and What to Do

The token system is already correctly wired. `index.css` defines CSS variables in `:root`. `tailwind.config.ts` maps them via `hsl(var(--...))`. The `brand.*` color scale is also defined directly in `tailwind.config.ts`. This is the shadcn-idiomatic pattern and must NOT be changed.

**Use semantic tokens in components:**
- `bg-background`, `text-foreground` — page backgrounds and default text
- `bg-primary`, `text-primary-foreground` — CTA buttons, active nav links
- `bg-accent`, `text-accent-foreground` — highlight boxes, tags
- `bg-muted`, `text-muted-foreground` — subtext, disabled states, dividers

**Use brand scale for one-off values:**
- `bg-brand-whisper`, `bg-brand-cream` — section backgrounds (maps to `.section-whisper` utility already in `index.css`)
- `text-brand-ink` — deep heading text
- `shadow-card`, `shadow-card-hover` — card elevation already in `tailwind.config.ts`

**Do not add new tokens without reason.** The palette is already complete.

### Pattern 6: Typography Loading

Fonts are already loaded via Google Fonts `@import` at the top of `src/index.css`. This is acceptable for launch given the "static CDN" production target. Font families are already mapped in `tailwind.config.ts` as `font-display`, `font-body`, `font-accent`.

**Recommended swap to `@fontsource` (deferred — do in polish phase):**
- `npm install @fontsource-variable/plus-jakarta-sans @fontsource/playfair-display @fontsource/cormorant-garamond`
- Replace `@import url(...)` in `index.css` with `import '@fontsource-variable/plus-jakarta-sans'` in `main.tsx`
- Eliminates render-blocking Google Fonts request, improves LCP
- No Tailwind config changes needed — families are already defined

For now: keep Google Fonts CDN. Mark as a Core Web Vitals improvement in the SEO polish phase.

### Pattern 7: Animation Layer

Use `motion` (formerly `framer-motion`) — same API, new package name. Library is NOT yet in `package.json` and must be installed.

```bash
npm install motion
```

Shared animation variants live in `src/lib/motion.ts` (pure TypeScript, no JSX). Motion components live in `src/components/motion/`.

```typescript
// src/lib/motion.ts
import type { Variants } from 'motion/react'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
```

**Reduced motion handling — two levels:**

1. **MotionConfig wrapper** in `App.tsx` (global): `<MotionConfig reducedMotion="user">` — Motion will automatically skip animations when `prefers-reduced-motion: reduce` is active. This one line handles 90% of cases.

2. **Per-component override** via hook when custom logic needed:
```tsx
// src/hooks/use-reduced-motion.ts
export { useReducedMotion } from 'motion/react'
// re-exported so imports don't spread 'motion/react' throughout hooks/
```

```tsx
// src/components/motion/FadeInSection.tsx
import { motion, useReducedMotion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export default function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      initial="hidden"
      whileInView={prefersReduced ? 'visible' : undefined}
      animate={prefersReduced ? 'visible' : undefined}
      variants={prefersReduced ? {} : fadeUp}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
```

Note: `tailwind.config.ts` already defines CSS `fade-up` and `fade-in` keyframes. These are for lightweight CSS-only animations (nav link underlines, mobile menu items). Framer Motion handles scroll-triggered and hover animations. Do NOT mix — each has a domain.

### Pattern 8: Forms Architecture

React Hook Form + Zod is already in `package.json`. shadcn's `Form` component is the wrapper — it already handles accessible error states via Radix-based patterns.

```
src/lib/schemas/contact.schema.ts    → z.object({ name, email, phone?, message })
src/lib/schemas/provider.schema.ts   → z.object({ name, phone, city, experience, ... })
src/lib/schemas/corporate.schema.ts  → z.object({ company, name, email, teamSize, ... })
src/lib/schemas/franchise.schema.ts  → z.object({ name, city, investment, ... })
```

Each form component:
1. Imports its schema: `import { contactSchema, ContactFormData } from '@/lib/schemas/contact.schema'`
2. Calls `useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })`
3. Uses shadcn `<Form>`, `<FormField>`, `<FormItem>`, `<FormLabel>`, `<FormMessage>` from `src/components/ui/`
4. On submit success: shows `sonner` toast (already in `App.tsx`)
5. No API call this milestone — `onSubmit` logs to console and triggers success state

Shared field components are **not** needed for 4-5 distinct forms. Each form is self-contained. Share only the Zod schema file and the shadcn `ui/form` primitives.

### Pattern 9: Section Component

The most-used primitive after `ui/`. All pages share the same alternating section rhythm.

```tsx
// src/components/layout/Section.tsx
type SectionVariant = 'white' | 'whisper' | 'cream' | 'gradient-soft'

interface SectionProps {
  variant?: SectionVariant
  className?: string
  children: React.ReactNode
  id?: string
  as?: 'section' | 'div' | 'article'
}

const variantClass: Record<SectionVariant, string> = {
  white: 'section-white',
  whisper: 'section-whisper',
  cream: 'section-cream',
  'gradient-soft': 'section-gradient-soft',
}

export default function Section({ variant = 'white', className, children, id, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={cn('section-padding', variantClass[variant], className)}>
      <div className="container-content">
        {children}
      </div>
    </Tag>
  )
}
```

`section-padding`, `section-white`, `section-whisper`, `container-content` are all already defined in `index.css`.

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Per-Page Navbar/Footer Import

**What:** Each page imports and renders `<Navbar />` and `<Footer />` directly.
**Why bad:** Already the current pattern — results in Navigation mounted/unmounted on every route change, losing scroll state, causing layout flash. 14 pages = 14 copies of the same import.
**Instead:** `<RootLayout>` with `<Outlet />` keeps Navigation and Footer mounted across all page transitions.

### Anti-Pattern 2: Inline Copy in JSX

**What:** `<h1>Professional Massage Therapy at Home in India</h1>` hardcoded in page component.
**Why bad:** Copy changes require touching JSX. No TypeScript safety. No easy CMS migration path. SEO meta and body copy drift apart.
**Instead:** Import from `src/content/{page}.ts`. JSX just renders what the content object provides.

### Anti-Pattern 3: Duplicating CSS Tokens in Tailwind Config

**What:** Adding `zorova-purple: '#3E1B7C'` to `tailwind.config.ts` when `brand.primary` already exists.
**Why bad:** `bg-brand-primary` and `bg-zorova-purple` both refer to `#3E1B7C` — confusion, drift, bloat.
**Instead:** The token system is complete. Use `bg-primary` (semantic) or `bg-brand-primary` (explicit) consistently.

### Anti-Pattern 4: Global MotionConfig Skipped

**What:** Wrapping every motion component with individual `useReducedMotion()` checks.
**Why bad:** Verbose, easy to forget, misses cases.
**Instead:** `<MotionConfig reducedMotion="user">` in `App.tsx` handles the browser preference globally. Only add `useReducedMotion()` in components that need to switch animation type (not just skip it).

### Anti-Pattern 5: Schema JSON-LD as Inline String

**What:** `<script type="application/ld+json">{`{"@type":"LocalBusiness"...}`}</script>` handwritten in page JSX.
**Why bad:** No type checking. Copy-paste errors. No IDE autocomplete.
**Instead:** `<SchemaOrg schema={content.schema} />` where `schema` is typed as `WithContext<LocalBusiness>` from `schema-dts`.

### Anti-Pattern 6: Forms with Inline Zod Schemas

**What:** Defining `z.object({ name: z.string()... })` inside the form component file.
**Why bad:** Schema cannot be reused for API validation in a future milestone. Tests cannot import schema independently.
**Instead:** All schemas in `src/lib/schemas/`. Form component imports `{ schema, FormData }`.

---

## Scalability Considerations

This is a 14-page static marketing site. Scalability concerns are constrained:

| Concern | Now (14 pages) | If CMS added later |
|---------|----------------|--------------------|
| Content | Typed objects in `src/content/` | Replace imports with CMS fetch, keep TypeScript shape |
| SEO meta | Per-page in content file | Same shape, sourced from CMS API |
| Routing | Static routes in App.tsx | Add dynamic routes for blog posts |
| Forms | Client-side only | Add API `action` to same schema |

---

## Build Order (Phase Dependencies)

The following order is architecturally required — each layer depends on the one above it being stable.

**Layer 1 — Tokens, Fonts, Global CSS** (nothing else works without stable tokens)
- Verify/finalize `src/index.css` CSS variables
- Verify/finalize `tailwind.config.ts` token mappings
- Confirm Google Fonts import is loading correct weights
- Note: `tailwind.config.ts` already has `font-display`, `font-body`, `font-accent` families defined

**Layer 2 — Global Layout Chrome** (all pages need this shell before they can render)
- `src/components/layout/RootLayout.tsx` — Outlet wrapper
- `src/components/layout/Navigation.tsx` — update from Navbar.tsx (new links, brand)
- `src/components/Footer.tsx` — restyle with 4-column layout
- `src/App.tsx` — restructure Routes to use `<RootLayout>`
- `src/components/layout/Section.tsx` — used by every page
- `src/components/layout/Page.tsx` — top-padding offset wrapper

**Layer 3 — SEO Infrastructure** (wire before any page, because pages need `<SEO>` and `<SchemaOrg>`)
- Install `react-helmet-async`
- Add `HelmetProvider` to `App.tsx`
- `src/components/seo/SEO.tsx`
- Install `schema-dts` + `react-schemaorg`
- `src/components/seo/SchemaOrg.tsx`

**Layer 4 — Animation Primitives** (used by shared sections — must exist before sections)
- Install `motion`
- Add `<MotionConfig reducedMotion="user">` to `App.tsx`
- `src/lib/motion.ts` — variant definitions
- `src/components/motion/FadeInSection.tsx`
- `src/components/motion/MotionCard.tsx`
- `src/components/motion/AnimatedCTA.tsx`

**Layer 5 — Shared Sections** (used by multiple pages — build once, reuse everywhere)
- `TrustStrip`, `BenefitGrid`, `TestimonialCarousel`, `CTABanner`
- `AudienceCards`, `StepFlow`, `GradientCTA`
- `AccordionFAQ`, `PricingTier`, `GiftCardTier`
- `LegalPageLayout`

**Layer 6 — Form Infrastructure**
- `src/lib/schemas/` — all 4 Zod schemas
- Shared shadcn `ui/form` primitives (already available)
- `src/components/forms/` — ContactForm, ProviderForm, CorporateForm, FranchiseForm, WaitlistForm

**Layer 7 — Content Objects**
- `src/content/` files — one per page, typed against defined interfaces
- SEO meta, schema, and copy all in one place

**Layer 8 — Individual Pages**
- Build each page: import content, compose sections, add `<SEO>` and `<SchemaOrg>`
- Pages are thin — most work is in sections and content files
- Update `src/App.tsx` routes to final 14 Zorova URLs

**Layer 9 — Prerendering / SSG Setup**
- `vite-react-ssg` is the recommended library for this stack (maintained for React Router v6, supports loaders)
- Install after all pages are stable — prerendering is a build-time concern
- Generates one static HTML file per route from the existing React Router config
- No hydration changes needed; `vite-react-ssg` handles it

**Layer 10 — SEO Polish**
- `public/sitemap.xml` — all 14 URLs with `<lastmod>`
- `public/robots.txt` — allow GPTBot, ClaudeBot, PerplexityBot; no Disallow for marketing pages
- `public/llms.txt` — brand description, key pages, contact for AI crawlers
- Swap Google Fonts CDN for `@fontsource` packages (improves LCP)
- Verify all canonical URLs, Open Graph images, schema validation

---

## Route Structure — Final 14 URLs

| URL | Page Component | Rename/New | Notes |
|-----|---------------|------------|-------|
| `/` | `HomePage.tsx` | Rename Index.tsx | |
| `/massages` | `MassagesPage.tsx` | New (from ServicesPage.tsx) | |
| `/stretch` | `StretchPage.tsx` | New (from SportsWellnessPage.tsx) | |
| `/careers` | `CareersPage.tsx` | Keep | Covers Work With Zorova / Provider |
| `/membership` | `MembershipPage.tsx` | Rename from MembershipsPage | |
| `/business` | `BusinessPage.tsx` | Keep | |
| `/franchise` | `FranchisePage.tsx` | Keep | |
| `/about` | `AboutPage.tsx` | Keep | |
| `/blog` | `BlogPage.tsx` | Keep | |
| `/gifts` | `GiftsPage.tsx` | Keep | |
| `/privacy` | `PrivacyPage.tsx` | Keep | |
| `/terms` | `TermsPage.tsx` | Keep | |
| `/cancellation` | `CancellationPage.tsx` | Keep | |
| `/contact` | `ContactPage.tsx` | New (replaces HelpPage + FaqsPage) | |

Pages to remove: `ReferPage.tsx`, `WorkWithUsPage.tsx`, `HelpPage.tsx`, `FaqsPage.tsx` (content merged into `ContactPage` or `CareersPage`).

---

## New Dependencies Required

| Package | Purpose | Install Command |
|---------|---------|-----------------|
| `react-helmet-async` | Per-route `<head>` meta management | `npm install react-helmet-async` |
| `motion` | Animation (formerly framer-motion) | `npm install motion` |
| `schema-dts` | TypeScript types for Schema.org | `npm install schema-dts` |
| `react-schemaorg` | JSON-LD React component | `npm install react-schemaorg` |
| `@fontsource-variable/plus-jakarta-sans` | Self-hosted fonts (SEO polish phase) | `npm install @fontsource-variable/plus-jakarta-sans` |
| `@fontsource/playfair-display` | Self-hosted fonts (SEO polish phase) | `npm install @fontsource/playfair-display` |

Already present (no install needed): `react-hook-form`, `@hookform/resolvers`, `zod`, `embla-carousel-react` (for TestimonialCarousel), all `@radix-ui/*` packages, `sonner`.

---

## Sources

- [react-helmet-async npm](https://www.npmjs.com/package/react-helmet-async) — HIGH confidence
- [Motion.dev — React Accessibility (useReducedMotion, MotionConfig)](https://motion.dev/docs/react-accessibility) — HIGH confidence
- [motion.dev — useReducedMotion hook](https://motion.dev/docs/react-use-reduced-motion) — HIGH confidence
- [github.com/google/react-schemaorg](https://github.com/google/react-schemaorg) — HIGH confidence
- [github.com/google/schema-dts](https://github.com/google/schema-dts) — HIGH confidence
- [shadcn/ui — Theming docs](https://ui.shadcn.com/docs/theming) — HIGH confidence (CSS variable pattern confirmed)
- [shadcn/ui — React Hook Form integration](https://ui.shadcn.com/docs/forms/react-hook-form) — HIGH confidence
- [github.com/Daydreamer-riri/vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) — MEDIUM confidence (active project, maintained for RR v6)
- [React Router v6 nested routes / Outlet pattern](https://reactrouter.com/start/framework/routing) — HIGH confidence
- [fontsource.org — Plus Jakarta Sans](https://fontsource.org/fonts/plus-jakarta-sans) — HIGH confidence
