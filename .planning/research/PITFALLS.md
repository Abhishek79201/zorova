# Pitfalls Research

**Domain:** React SPA marketing site — on-demand home wellness, India, trust-first, SEO/GEO, micro-animations
**Researched:** 2026-04-14
**Confidence:** HIGH (stack-specific), MEDIUM (India market / cultural), HIGH (SEO/CWV)

---

## Critical Pitfalls

### Pitfall 1: react-helmet-async Does Not Fix SPA SEO Alone

**What goes wrong:**
react-helmet-async injects `<title>` and `<meta>` after JS executes in the browser. Social crawlers (WhatsApp, LinkedIn, Facebook), GPTBot, ClaudeBot, and Google's first-pass crawler all see the raw `index.html` shell — which contains only the default fallback title and empty meta tags. Per-route meta is invisible to them. OG previews break. Google may index the fallback title instead of the page-specific one.

**Why it happens:**
Developers assume "react-helmet-async works like Next.js Head" — it does not. It manages the DOM; it does not generate static HTML per route at build time.

**How to avoid:**
Use `vite-plugin-prerender` (or `vite-ssg` / React Router v7 prerendering) to generate per-route static HTML at build time. Every route in `src/App.tsx` must produce its own HTML file with the correct `<title>`, `<meta name="description">`, `<link rel="canonical">`, and OG tags already in the HTML string before JS executes. react-helmet-async remains useful for hydration, but the static HTML must already contain correct tags. The 14 known routes are static — prerendering all of them is feasible.

**Warning signs:**
- Sharing a Zorova page URL in WhatsApp shows the default "Zorova" title on every route, not the page-specific title
- Google Search Console shows "Crawled — currently not indexed" on multiple routes
- `curl -s https://zorova.in/massages | grep "<title>"` returns the generic fallback

**Phase to address:**
SEO phase (prerendering setup). Every page-build phase must also set its own Helmet tags so prerendering captures them correctly.

---

### Pitfall 2: Lovable Artifacts Surviving the Rebrand

**What goes wrong:**
"zen-at-home" and "Lovable" references survive in obscure locations after a superficial find-and-replace of component copy. These surface in Google's index (title tags, OG tags, sitemap), in PWA install prompts (manifest.json `name`/`short_name`), in social shares (OG tags in index.html), in dependency metadata (`lovable-tagger` in `package.json` and `vite.config.ts`), in browser tab titles before JS loads (index.html `<title>`), in Git history (commit messages, branch names — cosmetic but visible in GitHub), in playwright config (`lovable-agent-playwright-config`), in `README.md`, and in Lovable-specific component comments/`data-lovable-*` attributes that `lovable-tagger` may inject at dev time.

**Why it happens:**
Rebrands typically hit the visible UI copy. The metadata layer (index.html, manifest.json, package.json `name`/`description`, README, vite.config.ts, playwright config) lives outside the React component tree and is never seen during local dev.

**How to avoid:**
Run a dedicated brand-purge checklist as the first phase:
1. `grep -ri "lovable\|zen-at-home\|zen_at_home\|zenathome" --include="*.json,*.html,*.ts,*.tsx,*.md,*.js" .` — fix every hit
2. `index.html`: update `<title>`, all `<meta>` tags, `<link rel="manifest">` target
3. `public/manifest.json`: `name`, `short_name`, `description`, `theme_color`, icon paths
4. `package.json`: `name`, `description`, `author`
5. `vite.config.ts`: remove `lovable-tagger` plugin import and usage
6. `playwright.config.ts`: replace `lovable-agent-playwright-config` with standard Playwright config
7. All `data-lovable-component` or similar HTML attributes injected by lovable-tagger at runtime — confirm they don't appear in prerendered HTML

**Warning signs:**
- `curl https://zorova.in | grep -i "lovable\|zen"` returns hits
- PWA install banner shows "zen-at-home" as app name
- WhatsApp link preview shows old OG title
- `package.json` `name` field still reads `zen-at-home-now`

**Phase to address:**
Phase 1 (brand purge) — must be atomic and complete before any other phase builds on it.

---

### Pitfall 3: Hash-Based or Missing Canonical Logic Confusing Crawlers

**What goes wrong:**
If React Router is configured with `HashRouter` instead of `BrowserRouter`, all routes become `/#/massages` instead of `/massages`. Hash fragments are never sent to the server — Google treats the entire site as a single URL (`/`). Even with `BrowserRouter`, missing `<link rel="canonical">` allows query-string variations (`?ref=`, `?utm_`) to create duplicate pages in Google's index.

**Why it happens:**
HashRouter is sometimes used as a "safe" fallback for static hosts that cannot handle SPA routing. Canonical tags are often deferred to "later" and never added.

**How to avoid:**
Confirm `App.tsx` uses `BrowserRouter`. Static host (Netlify/Vercel/GitHub Pages) must have a `_redirects` or `vercel.json` rule that serves `index.html` for all routes. Every prerendered HTML file must include `<link rel="canonical" href="https://zorova.in/[route]">` — no trailing slash inconsistency, no `www` vs. non-`www` mixing. Add `sitemap.xml` listing all 14 canonical URLs with `<lastmod>`.

**Warning signs:**
- Browser address bar shows `/#/massages`
- Google Search Console > Coverage shows a single URL covering the whole site
- Multiple GSC entries for `/?utm_source=...` variants

**Phase to address:**
SEO phase — canonical audit must be a checklist item before launch.

---

### Pitfall 4: Framer Motion Causing CLS and Breaking Accessibility

**What goes wrong:**
Four distinct failure modes:
1. **CLS**: Slide-in and fade-up animations on hero content delay its appearance, causing the LCP element (headline or hero image) to shift layout as it enters — this counts as CLS and fails Core Web Vitals.
2. **Animating layout properties**: `width`, `height`, `margin`, `padding`, `top`, `left` animations trigger browser layout recalculation on every frame — janky on low-end Android.
3. **Ignoring `prefers-reduced-motion`**: Users with vestibular disorders or motion sensitivity who have set the OS preference get the full animation suite anyway — WCAG 2.3.3 violation.
4. **Staggering too many children**: Animating every grid card simultaneously on a page with 30+ cards blocks INP — touch/click response degrades while animation frames are in flight.

**Why it happens:**
Micro-animations are specified as a design requirement, so every element gets wrapped in `<motion.div>`. The accessibility media query and performance cost of stagger are afterthoughts.

**How to avoid:**
- Wrap the entire app in `<MotionConfig reducedMotion="user">` — this automatically disables animations when the OS preference is set (Framer Motion supports this natively via the `reducedMotion` prop).
- Hero LCP content (headline H1, hero image) must NOT be hidden or offset before animation. Either skip animation on LCP elements entirely, or use `opacity` only (no transform that would shift layout before render).
- Use only `transform` and `opacity` for animated properties — never `width`, `height`, `margin`, `top`, `left`.
- Cap stagger groups at ~10 items visible in viewport; items below the fold can animate on intersection.
- Test on a mid-range Android (Moto G series emulation in Chrome DevTools, CPU 4x throttle) before shipping any animated page.

**Warning signs:**
- Lighthouse CLS score > 0.1 on the homepage
- Chrome DevTools Performance tab shows "Layout" events during card animations
- `prefers-reduced-motion` test (set in OS → Chrome → still plays full animation)

**Phase to address:**
Design system phase (establish MotionConfig wrapper, define permitted animation primitives). Enforced in every page-build phase.

---

### Pitfall 5: LCP Image Not Prioritized — Critical for India Mobile

**What goes wrong:**
The hero section's primary image (or gradient-with-text) is the LCP element. On India mobile (typical 4G latency 40–80ms, Snapdragon 4xx-class CPU), if the hero image is not preloaded with `fetchpriority="high"` and `loading="eager"`, the browser discovers it late (after parsing the JS bundle) — LCP blows past 2.5s easily. Animated heroes that fade-in from opacity-0 make this worse: even when the image is loaded, it's invisible until JS executes the animation, meaning Google's Lighthouse measures LCP as the moment of first opacity > 0, not network load time.

**Why it happens:**
Vite bundles the hero as a lazy-loaded import, or the `<img>` tag appears inside a React component that hydrates after the initial paint. There is no `<link rel="preload">` in `index.html` for the hero image.

**How to avoid:**
- Add `<link rel="preload" as="image" href="/hero-image.webp" fetchpriority="high">` in `index.html` (or in the prerendered HTML for the homepage).
- The hero `<img>` must have `loading="eager"` and `fetchpriority="high"` attributes — not React-default lazy loading.
- For gradient-only heroes (no image), ensure the LCP text element is NOT animated with an initial `opacity: 0` state — use `opacity: 1` as the initial state and animate supplementary elements only.
- Serve images in WebP/AVIF. For Indian mobile networks, hero images must be under 150KB.

**Warning signs:**
- Lighthouse LCP > 2.5s with "Largest Contentful Paint element: img" in the report
- LCP element shown as an invisible/transparent element in Lighthouse screenshot filmstrip
- PageSpeed Insights flags "Preload Largest Contentful Paint image"

**Phase to address:**
Performance phase (or as part of each page build phase — enforce hero image pattern per page).

---

### Pitfall 6: Trust-Tone Failures — Sleazy, Luxury-Exclusive, or Clinical Cold

**What goes wrong:**
Three distinct tone failures specific to Zorova's positioning:
1. **Sleazy/suggestive**: Stock imagery of attractive people in spa robes with soft lighting reads as massage parlour in Indian cultural context. Even subtle sensuality destroys trust immediately for the female segment (both as customers and as potential providers).
2. **Luxury-exclusive tone**: Copy like "indulge yourself", "premium pampering", "treat yourself" signals this is for the rich — alienates the target of normalising massage for every Indian household. The brief explicitly positions it as healthcare, not luxury.
3. **Clinical cold**: Overcorrecting with medical jargon and sterile copy ("therapeutic intervention", "modality") is off-putting for wellness; it fails to communicate care and warmth.

**Why it happens:**
Copywriters default to the global spa/wellness playbook (luxury) or over-correct toward medical credibility (clinical). Neither fits a stigma-breaking Indian home wellness brand.

**How to avoid:**
- Review every page's H1, H2, and CTA copy against this test: "Would a middle-class Indian family in Bengaluru find this welcoming and non-threatening?" If not, rewrite.
- For the `/careers` and provider pages: explicitly address safety — background verification process, protocols, ID checks. Female providers must see specific, named safety features (emergency contact system, GPS tracking, block-user function) — vague assurances are not enough.
- Imagery: use placeholder illustrations that show diverse Indian families (grandparents, children, athletes, working professionals) — not young attractive adults only. Never suggestive poses.
- CTA copy: "Book a massage at home" > "Indulge in our luxury treatments". "See how it works" > "Experience premium wellness".

**Warning signs:**
- User testing or informal reviews from Indian women produce comments like "feels unsafe" or "looks fancy/expensive"
- Provider page has no specific safety features listed
- More than 50% of visible imagery shows young, conventionally attractive adults only

**Phase to address:**
Content phase (copy review) and design system phase (imagery guidelines). Enforce in every page build.

---

### Pitfall 7: Schema.org Invalid Markup Killing Rich Results

**What goes wrong:**
Four specific failure modes:
1. **Missing required properties**: `Service` schema without `serviceType` and `provider`, `FAQPage` without `acceptedAnswer.text`, `Organization` without `url` — Google ignores the schema silently or returns validation warnings.
2. **Fake or inflated reviews**: Adding `AggregateRating` with fabricated star counts triggers Google's fake review manual action. This is one of the few schema mistakes that results in a sitewide penalty.
3. **Schema content not matching visible page content**: JSON-LD that describes content not visible on the page (e.g., a price in schema that's not shown on page) — manual action risk.
4. **Duplicate conflicting schemas**: Placing `Organization` schema in `index.html` AND generating it again via react-helmet-async on every route — Google sees multiple conflicting `Organization` blocks.

**Why it happens:**
Schema is added by copying templates without validating against Google's Rich Results Test. Reviews are added speculatively before launch. Multiple developers add schema in different places.

**How to avoid:**
- Validate every schema type in Google's Rich Results Test (search.google.com/test/rich-results) before each phase ships.
- For `AggregateRating`: only add if you have real collected reviews. Pre-launch, omit this entirely — add it in a post-launch phase when real data exists.
- Use a single `seo.ts` module that exports all JSON-LD schemas per route — no schema in index.html, no schema in individual page components. One source of truth.
- Required properties checklist per type: `LocalBusiness` (name, address, telephone, openingHours), `FAQPage` (mainEntity array with Question + acceptedAnswer), `Service` (name, provider, serviceType, areaServed), `BreadcrumbList` (itemListElement with position + name + item).

**Warning signs:**
- Google Search Console > Enhancements > any schema type shows "Invalid items" count > 0
- Rich Results Test returns red errors (not just warnings)
- Two `@type: "Organization"` blocks visible when viewing page source

**Phase to address:**
SEO phase — schema audit before every page ships. Never add `AggregateRating` pre-launch.

---

### Pitfall 8: GEO/AI Search — Content Buried in Client-Side Rendering

**What goes wrong:**
GPTBot, ClaudeBot, and PerplexityBot crawl HTML — they do not execute JavaScript. If Zorova's service descriptions, FAQ answers, and value propositions are rendered client-side only (standard React SPA behavior), AI crawlers see an empty shell. The brand will not be cited by AI Overviews, ChatGPT, or Perplexity. Additionally, a blanket `Disallow: /` in `robots.txt` (common Lovable default) blocks all bots including AI crawlers.

**Why it happens:**
`robots.txt` is often copied from a "block everything while in dev" pattern and never updated. Content is in React components that are invisible to non-JS crawlers.

**How to avoid:**
- Prerendering (Pitfall 1) solves the CSR problem — AI crawlers get static HTML.
- `robots.txt`: explicitly allow `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Googlebot`, `Bingbot`. Default policy should be `Allow: /` with specific disallows for `/api/` if applicable.
- Add `llms.txt` at `/llms.txt`: a plain-text document listing Zorova's name, what it does, key services, service area, and canonical URLs — structured for LLM ingestion.
- Structure content for passage-level citability: each major value claim should be in a self-contained paragraph (60–100 words) that answers a specific question. FAQs are naturally citable — the FAQPage schema + visible accordion content double as AI source material.
- Avoid burying key claims inside carousels or tab panels that require interaction — static-HTML-first presentation of all core content.

**Warning signs:**
- `curl -A "GPTBot" https://zorova.in/massages | wc -c` returns < 5000 bytes (near-empty HTML)
- `robots.txt` has `Disallow: /` without explicit allow rules for AI bots
- No `llms.txt` at root
- Searching "Zorova massage home" in Perplexity or ChatGPT returns no citations after 4 weeks post-launch

**Phase to address:**
SEO phase (robots.txt, llms.txt, prerendering enables GEO automatically).

---

### Pitfall 9: CLS from Custom Fonts Without font-display and Size Adjustment

**What goes wrong:**
Playfair Display and Plus Jakarta Sans are Google Fonts / self-hosted fonts. Without `font-display: swap`, the browser hides text until the font loads (FOIT), contributing to LCP delay. With `font-display: swap`, the browser shows fallback system font first, then swaps — causing a visible text reflow (FOUT) that registers as CLS if the fallback and custom font have different metrics (line height, letter spacing, character width). On Indian mobile devices with slower CPUs, font swap happens noticeably late.

**Why it happens:**
Tailwind's `@import` of Google Fonts without font-display specification, or using the Google Fonts URL `?display=swap` without also specifying `size-adjust` and `ascent-override` on the fallback font.

**How to avoid:**
- Self-host both fonts (use `fontsource` npm packages: `@fontsource/playfair-display`, `@fontsource/plus-jakarta-sans`) — eliminates the third-party DNS lookup latency.
- Use `font-display: swap` on all `@font-face` declarations.
- Add CSS `size-adjust`, `ascent-override`, and `descent-override` on the fallback font-face to make the fallback metrics match the custom font — eliminates the reflow CLS. The `fontaine` tool or `@next/font` approach can generate these values, but since we're on Vite, calculate them manually from font metrics.
- Preload the subset of each font actually used (Latin + Devanagari subset if Hindi is added later) with `<link rel="preload" as="font" crossorigin>` in `index.html`.

**Warning signs:**
- PageSpeed Insights flags "Avoid large layout shifts" with "Text content shifted from font loading"
- Visible flash of unstyled text (FOUT) in Lighthouse filmstrip screenshots
- CLS score above 0.05 on any page with significant text content

**Phase to address:**
Design system phase (establish font loading strategy before any page is built).

---

### Pitfall 10: Prerendering Hydration Mismatches

**What goes wrong:**
When prerendering generates static HTML at build time, then React hydrates it in the browser, any difference between server-rendered and client-rendered output causes a hydration mismatch. For Zorova, specific risks:
1. **Date formatting**: Legal pages show "Last updated: April 14, 2026" — if this is computed with `new Date()` at build time (server) vs. at runtime (client), the strings may differ due to timezone or locale.
2. **window/document references without guards**: Any component using `window.innerWidth`, `localStorage`, or `document` at module level will throw during prerendering (no browser APIs).
3. **Dynamic content in static routes**: If a "Coming Soon" tag is conditionally shown based on a date comparison, build-time and runtime may disagree.
4. **Radix UI portals**: `<Portal>` renders into `document.body` — this is undefined during prerendering, causing errors or missing HTML.

**Why it happens:**
React SPA developers write code assuming a browser environment always exists. Prerendering introduces a Node.js render context.

**How to avoid:**
- Guard all browser API access: `if (typeof window !== 'undefined')` or use `useEffect` (runs only client-side) for anything touching `window`, `document`, `localStorage`.
- Hardcode the "last updated" date as a string constant in each legal page component — never compute from `new Date()` at render time.
- Radix UI portals: test every dialog, dropdown, and tooltip in the prerendering environment. Configure the prerender plugin to handle portal errors gracefully.
- Add a CI check: run `npm run build` and verify no hydration warnings in the build output. Use React 18's `hydrateRoot` error logging to catch mismatches early.

**Warning signs:**
- Browser console shows `Warning: Prop 'className' did not match. Server: "..." Client: "..."`
- Build process throws `ReferenceError: window is not defined`
- Dropdowns or modals invisible or broken after prerendering

**Phase to address:**
SEO phase (prerendering setup). Also enforced in every page-build phase via a "guard browser APIs" code convention.

---

### Pitfall 11: Forms with No Loading State, No Spam Protection, and Silent Success

**What goes wrong:**
Zorova has 6+ forms (provider application, corporate proposal, franchise application, contact, membership waitlist, gifts waitlist). The existing codebase already has this problem. Specific failure modes:
1. **Silent success**: User submits → nothing visible happens → user submits again → duplicate entries → user leaves thinking it's broken.
2. **No loading state**: Submit button remains clickable during submission (even to a third-party service like Formspree/Netlify Forms) — double submissions.
3. **Client-side validation only, no server error feedback**: Formspree returns 429 (rate limit) — the form shows "success" anyway because the frontend doesn't handle error responses.
4. **No honeypot / spam protection**: Bot submissions flood the provider application inbox within hours of launch.
5. **Data loss on navigation**: User fills 10 fields of the provider application form, accidentally taps Back — all data lost with no warning. Indian mobile users frequently mis-tap navigation.

**Why it happens:**
Forms are "out of scope for backend" but frontend form UX is left as a stub. The existing `useToast` and `Sonner` components exist but are unused.

**How to avoid:**
- Integrate `react-hook-form` + `zod` (both already in `package.json`) for all forms — with field-level error display anchored to the input (not a floating toast).
- Every submit button: `disabled={isSubmitting}` + spinner icon during submission state.
- Success state: replace the entire form with a confirmation message (not a toast that disappears) — "Thank you, we've received your application. We'll contact you within 2 business days."
- For no-backend forms, use Formspree or Netlify Forms as the submission endpoint — free tier sufficient for pre-launch volumes. Handle non-200 responses explicitly.
- Add a honeypot field (hidden input with `tabindex="-1"` and `aria-hidden="true"`) to every form — bots fill it, humans don't.
- For the long provider application form, add `useBeforeUnload` or React Router's `unstable_usePrompt` to warn on unsaved navigation.

**Warning signs:**
- Clicking submit twice sends two identical network requests (visible in DevTools Network tab)
- No network request visible in DevTools after clicking submit (form silently fails)
- Provider application form has no confirmation message visible after submission

**Phase to address:**
Forms phase (or whichever phase builds each form). Checklist item: every form must have loading state + confirmation state + error state before phase is considered done.

---

### Pitfall 12: Accessibility Gaps with the Zorova Palette

**What goes wrong:**
The Zorova palette (`#09080a` near-black, `#f6f4f9` off-white, `#3e1b7c` deep purple, `#b08eeb` light lavender, `#8442f5` vibrant purple) has specific contrast failure risks:
1. **`#b08eeb` on white (`#ffffff`)**: The light lavender accent on white background fails WCAG AA (4.5:1) — ratio is approximately 2.8:1. Using this as button text or body text color fails immediately.
2. **`#8442f5` on `#f6f4f9`**: Vibrant purple on the off-white background — approximately 4.2:1 — passes Large Text (3:1) but fails normal text (4.5:1). Cannot be used for body copy.
3. **Focus rings**: shadcn/Radix components default to `ring-ring` which may be invisible against the dark hero gradient.
4. **Icon-only buttons**: The navigation hamburger menu and any close/dismiss icons must have `aria-label` — `<Button variant="ghost"><Menu /></Button>` without a label fails screen readers.
5. **Skip navigation**: No skip-to-main-content link exists. Keyboard users must tab through 10 navigation items on every page.

**Why it happens:**
Palette is chosen for visual aesthetics; contrast ratios are checked only for the obvious cases (dark text on light background) but not for the accent colors. Radix components have accessible internals but styling overrides can remove focus visibility.

**How to avoid:**
- Run the full Zorova palette through WebAIM Contrast Checker before the design system phase ships.
- `#b08eeb`: use only for decorative purposes (gradient wash, borders) — never for text or interactive element labels.
- `#8442f5`: use only for heading-size text (≥18px or bold) where the 3:1 large-text threshold applies, or darken to approximately `#6b2fd4` for body text use.
- Add `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8442f5]` to all interactive elements in the Tailwind config's base layer.
- Add a `<a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>` as the first child of `<body>`.
- Every icon-only interactive element: `aria-label` required — enforce via ESLint `jsx-a11y` plugin.

**Warning signs:**
- Browser accessibility overlay (Axe DevTools extension) reports contrast failures on any page
- Tabbing through the homepage requires > 15 tab stops to reach the first `<main>` content
- Screen reader announces "button" with no label on hamburger menu

**Phase to address:**
Design system phase (palette contrast audit, focus ring tokens). Enforced in every page-build phase via Axe DevTools check.

---

### Pitfall 13: India-Specific UX Assumptions

**What goes wrong:**
Five failure modes specific to the Indian mobile-first market:
1. **Heavy hero backgrounds**: A CSS `background-image` hero or `<video autoplay>` on the homepage on a mid-range Android (Snapdragon 4xx, 2GB RAM) with 4G causes visible jank and slow LCP — Indian users on these devices constitute a large segment.
2. **WhatsApp as the expected contact channel**: Indian users overwhelmingly prefer WhatsApp for business contact. A form-only contact page with no WhatsApp link is a conversion failure. The brief already includes "WhatsApp link only" — this pitfall is about ensuring the WhatsApp number appears prominently on every relevant page (not buried in footer).
3. **Western imagery defaults**: Using Unsplash stock photos (the existing codebase already does this — `ServicesSection.tsx` uses Unsplash URLs) that show non-Indian people, Western spa environments, or Western home interiors disconnects from the target audience.
4. **Assuming fast devices for INP**: shadcn Radix dialogs and dropdowns that perform well on MacBook Pro will lag on budget Androids — CPU throttle testing is mandatory, not optional.
5. **Collectivist framing vs. individualist**: Indian wellness decisions are often family-driven ("good for the whole family") not individual-driven ("treat yourself"). Copy that targets the individual exclusively misses the opportunity.

**Why it happens:**
Default development environment is a laptop with fast WiFi. Stock imagery is Western-default. Copy templates are global wellness templates.

**How to avoid:**
- Test every page build with Chrome DevTools: Mobile (Moto G4), CPU 4x throttle, Slow 4G network. INP and LCP must pass thresholds under these conditions.
- All imagery: use illustration placeholders with accent-light backgrounds (per the brief's explicit direction) — no Unsplash URLs in production code.
- WhatsApp contact link: present on Home page hero CTA, Contact page, Help page, and Footer. Format: `https://wa.me/91XXXXXXXXXX`.
- Review body copy for family/community framing: "for your family", "for every household", "safe for grandparents and children" are more resonant than "for you".

**Warning signs:**
- Any `unsplash.com` URL in production build output
- No `wa.me` link visible above the fold on the Contact page
- Lighthouse Performance score < 60 on Mobile with throttling enabled

**Phase to address:**
Design system phase (imagery rules, WhatsApp link component). Enforced in every page-build phase.

---

### Pitfall 14: shadcn/Radix Bundle Bloat from Unused Components

**What goes wrong:**
The existing codebase has 47 shadcn component files in `src/components/ui/` with only 12 actively used — 35 unused components. Each component file imports its Radix primitive. While Radix is tree-shakeable in theory, the local file copies mean unused components are included in the bundle if they are accidentally imported, or if a build tool misconfiguration prevents dead code elimination. The existing `react-resizable-panels`, `recharts`, `cmdk`, `vaul`, and `next-themes` packages are also unused — combined, these add significant KB to the initial bundle.

**Why it happens:**
Lovable scaffolded the full shadcn component library automatically. Developers don't audit the initial scaffold.

**How to avoid:**
- During the rebrand/cleanup phase: delete component files in `src/components/ui/` that are not imported anywhere. Run `grep -r "from '@/components/ui/[component]'" src/` for each — if no matches, delete the file.
- Remove from `package.json`: `react-resizable-panels`, `recharts`, `cmdk`, `vaul`, `@tanstack/react-query` (unused), `react-day-picker` (unused), `input-otp` (unused), `next-themes` (unused for single-theme site).
- Use `vite-bundle-visualizer` after each major phase to catch accidental re-inclusions.
- Keep the rule: only add a shadcn component when a feature phase explicitly requires it.

**Warning signs:**
- `npm run build` output shows bundle > 500KB gzipped for a static marketing site
- `vite-bundle-visualizer` shows `recharts` or `cmdk` in the bundle despite no chart or command palette feature
- `grep -r "recharts\|cmdk\|vaul" src/` returns zero results but bundle still includes them

**Phase to address:**
Brand purge / cleanup phase (initial audit). Re-check after every phase with bundle visualizer.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Hardcode "last updated" date in legal pages | Avoids hydration mismatch | Must manually update on each revision | Acceptable for static marketing site |
| Skip prerendering for non-indexed utility pages (Privacy, Terms, Cancellation) | Faster build | Minor SEO loss on legal pages | Acceptable — legal pages rarely rank |
| Use Formspree/Netlify Forms instead of real backend | Ships forms without backend work | Vendor dependency, data in third-party system | Acceptable for pre-launch; migrate in backend milestone |
| Placeholder illustrations instead of real photography | Avoids photoshoot cost/delay | Lower conversion rate than real Indian imagery | Acceptable for launch; replace in content milestone |
| Keep `react-hook-form` + `zod` for all forms rather than custom validation | Consistent patterns | Adds ~13KB to bundle | Always acceptable — the consistency benefit outweighs the cost |
| Self-host fonts instead of Google Fonts CDN | Better CLS, no third-party DNS | Must update fonts manually | Always preferable on this stack |
| Delete unused shadcn components instead of keeping for "future use" | Leaner bundle | Must re-install if later needed | Delete — re-installing a shadcn component is a one-line CLI command |

---

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Formspree / Netlify Forms | Not handling 429 / 5xx responses; form shows "success" on error | Always check `response.ok` before showing success state; show error message on failure |
| Google Fonts | Importing via CSS `@import` in `index.css` blocks render | Self-host via fontsource npm packages; use `<link rel="preconnect">` only as fallback |
| Google Search Console | Submitting sitemap before prerendering is in place | Set up GSC only after prerendering is confirmed — otherwise it indexes shell HTML |
| Schema Rich Results Test | Testing localhost URL | Deploy to staging first; the Rich Results Test fetches the live URL |
| WhatsApp `wa.me` links | Using phone number without country code (`wa.me/9876543210`) | Always use full format: `wa.me/919876543210` (91 prefix for India) |
| Google Analytics (future) | Adding GA4 before consent mechanism | For Indian users, consent is not legally mandated yet (PDPB not fully enacted), but adding a consent flag in the analytics init is good practice |

---

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Animating all scroll-reveal elements simultaneously | INP > 200ms on first scroll; jank visible on budget Android | Use `IntersectionObserver` with stagger; cap concurrent animations at 10 | On any page with > 8 animated cards |
| No font subsetting | TTFB-equivalent delay for full Latin + Cyrillic + Greek font download | Request only `latin` subset in fontsource import | On every page load; worse on slow connections |
| Eager-loading all page components in `App.tsx` | Large initial JS bundle; slow TTI | `React.lazy()` + `Suspense` for all page components | From first deploy; more noticeable on 3G |
| Unoptimized SVG icons from Lucide | Lucide React ships individual SVG components; unused icons included if imported from the barrel | Import named icons individually: `import { ArrowRight } from 'lucide-react'` — never `import * from 'lucide-react'` | Bundle size inflates proportionally to icon count |
| Scroll event listener without passive flag | Prevents browser scroll optimization; jank on iOS Safari | Add `{ passive: true }` to all `addEventListener('scroll', ...)` calls; use `IntersectionObserver` instead | Immediate on iOS Safari; worse on older devices |
| Tailwind CSS not purging in production | 3MB+ CSS bundle | Confirm `content` array in `tailwind.config.ts` covers `./src/**/*.{ts,tsx}` | If content paths are wrong; check with `npx tailwindcss --dry-run` |

---

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| Logging `window.location.pathname` in NotFound.tsx | If expanded to include query params, could log sensitive data (tokens in URLs) | Remove the console.log; use an error tracking service (Sentry) if needed |
| No honeypot on provider application form | Bot submissions flood the inbox within hours of public launch | Add hidden `<input tabIndex={-1} aria-hidden="true">` field; reject submissions where this field has a value |
| Inline sensitive config (email, phone) in source code | Values visible in public GitHub repository | Move to `import.meta.env.VITE_SUPPORT_EMAIL` environment variables; add `.env.example` |
| Form submissions to third-party without HTTPS | Data intercepted in transit | Formspree and Netlify Forms are HTTPS-only; verify any future submission endpoint is HTTPS |

---

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Provider application form with no progress indicator | User doesn't know how many fields remain; abandons long form | Break into 3 steps with a progress indicator: Personal → Experience → Documents |
| Membership waitlist with no expected timeline | User signs up but has no idea when they'll hear back | Add "We'll reach out within 2 weeks of launch" below the submit button |
| "Coming Soon" service cards with no notify-me option | Visitor interested in a coming-soon service has no action to take; lost lead | Add "Notify me when available" link on Coming Soon cards that opens a lightweight email capture |
| Contact page with only a form | Indian users expect WhatsApp as primary contact channel | Add WhatsApp button above the form with explicit number and message prompt |
| Success state as a disappearing toast | User who submitted a form may not see the toast before it disappears (3s default) | Replace the entire form with a persistent confirmation section on success |
| FAQ accordion keyboard navigation | Keyboard users may find Radix Accordion defaults require Arrow keys, not Tab | Test Radix Accordion with keyboard — it follows ARIA pattern correctly, but verify focus ring is visible with Zorova palette |

---

## "Looks Done But Isn't" Checklist

- [ ] **Rebrand complete:** Run `grep -ri "lovable\|zen-at-home" --include="*.html,*.json,*.ts,*.tsx,*.md" .` — must return zero results
- [ ] **Prerendering active:** `curl -s https://zorova.in/massages | grep "<title>"` must return "Massages — Zorova | Professional Home Massage" (not generic fallback)
- [ ] **Schema valid:** Google Rich Results Test returns green for every schema type on every page that declares schema
- [ ] **Contrast passed:** All text/interactive element combinations verified in WebAIM Contrast Checker — especially `#b08eeb` and `#8442f5` uses
- [ ] **Reduced motion respected:** Set OS `prefers-reduced-motion: reduce`, visit homepage — no animations should play
- [ ] **WhatsApp link present:** `wa.me/91XXXXXXXXXX` link visible on Home, Contact, and Help pages (above the fold on mobile)
- [ ] **No Unsplash URLs in production:** `grep -r "unsplash.com" src/` returns zero results before any page ships
- [ ] **Forms have three states:** Every form has visible loading state (disabled submit + spinner), success state (confirmation replacing form), and error state (specific error message per field)
- [ ] **Hero LCP passes:** Lighthouse Mobile LCP < 2.5s on homepage and each service page
- [ ] **Font CLS:** No layout shift visible in Lighthouse filmstrip during font load
- [ ] **Bundle size:** `npm run build` gzipped output < 300KB for initial JS chunk
- [ ] **Honeypot present:** Every form has a hidden honeypot field

---

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Lovable references found post-launch | LOW | grep-and-replace, redeploy; static site redeploy is < 5 minutes |
| Google indexed wrong titles (SPA SEO failure) | HIGH | Add prerendering, force GSC recrawl, wait 2–4 weeks for re-index |
| AggregateRating manual action from fake reviews | HIGH | Remove all fake review schema, submit reconsideration request; timeline 2–6 weeks |
| CLS failing Core Web Vitals | MEDIUM | Identify shifting element in CWV report, fix animation or font metric; re-verify in 28-day rolling window |
| Provider safety concerns raised publicly | VERY HIGH | Cannot be recovered by code change alone — requires PR response + product changes. Prevention is the only real strategy |
| Bundle bloat causing slow TTI | MEDIUM | Identify with bundle visualizer, delete unused components/packages, redeploy |
| Hydration mismatch in prerendered pages | MEDIUM | Add SSR guards (`typeof window !== 'undefined'`), rebuild, redeploy |

---

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Lovable/zen-at-home artifact leakage | Phase 1: Brand Purge | `grep -ri "lovable\|zen-at-home" .` returns zero results |
| react-helmet-async not enough for SEO | SEO Phase | `curl` each route and verify `<title>` and `<meta description>` in response HTML |
| Hash routing / missing canonicals | SEO Phase | GSC shows 14 distinct indexed pages, no hash URLs |
| Framer Motion CLS + reduced motion | Design System Phase | Lighthouse CLS < 0.1; reduced-motion test passes |
| LCP image not prioritized | Design System Phase + each page build | Lighthouse LCP < 2.5s on Mobile |
| Trust-tone failure | Content Phase (all pages) | Review against "middle-class Indian family" test |
| Schema invalid / fake reviews | SEO Phase | Rich Results Test green on all schema types; no AggregateRating pre-launch |
| GEO — CSR content invisible to AI crawlers | SEO Phase | `curl -A "GPTBot"` returns full page HTML |
| Font CLS from metric mismatch | Design System Phase | Lighthouse filmstrip shows no FOUT reflow |
| Prerendering hydration mismatches | SEO Phase | No console hydration warnings; build completes cleanly |
| Form UX — silent success / no loading state | Forms Phase (each form) | Manual test: submit, verify loading state, confirmation state, error state |
| Accessibility — contrast + focus + skip-nav | Design System Phase | Axe DevTools shows zero errors on every page |
| India-specific — Unsplash / no WhatsApp | Design System Phase + each page build | `grep -r unsplash src/` returns zero; WhatsApp link visible on mobile above fold |
| shadcn/Radix bundle bloat | Brand Purge Phase | Bundle visualizer shows no unused library packages |

---

## Sources

- React SPA SEO / prerendering: https://luminousdigitalvisions.com/blog/why-google-cant-index-your-react-site-spa-seo-guide-2026
- react-helmet-async limitations: https://www.dhiwise.com/post/maximizing-seo-impact-with-react-helmet-a-complete-guid
- Vite prerender + React Router: https://reactrouter.com/how-to/pre-rendering
- Hydration mismatch in Vike/vite-plugin-ssr: https://vike.dev/hydration-mismatch
- Framer Motion performance patterns: https://dev.to/whoffagents/framer-motion-animations-that-dont-kill-performance-patterns-and-pitfalls-5cki
- Framer Motion reducedMotion: https://github.com/framer/motion/discussions/1797
- Animation performance tier list: https://motion.dev/magazine/web-animation-performance-tier-list
- Core Web Vitals LCP/CLS/INP guide 2025: https://mobileproxy.space/en/pages/core-web-vitals-2025-the-complete-guide-to-lcp-cls--inp-for-mobile-and-desktop.html
- India mobile device performance: https://csswizardry.com/2025/08/low-and-mid-tier-mobile-for-the-real-world-2025/
- India mobile memory constraints: https://blog.eleven2.com/2026/04/03/too-much-in-memory-web-performance-on-low-end-devices/
- Schema.org mistakes + manual actions: https://robertcelt95.medium.com/common-schema-markup-errors-that-kill-your-seo-rankings-cc64a83480af
- Schema LocalBusiness pitfalls: https://rookdigital.com/common-mistakes-to-avoid-with-schema-implementation-on-local-business-sites/
- Schema misuse: https://www.humanlevel.com/en/blog/seo/misuse-of-structured-data
- GEO / llms.txt guide: https://llmrefs.com/generative-engine-optimization
- llms.txt mistakes: https://www.incremys.com/en/resources/blog/llms-txt
- GEO content citability: https://totheweb.com/blog/beyond-seo-your-geo-checklist-mastering-content-creation-for-ai-search-engines/
- shadcn bundle optimization: https://shadcnstudio.com/blog/how-to-optimize-shadcn-performance
- Cultural sensitivity wellness India: https://www.5wpr.com/new/cultural-sensitivity-in-wellness-branding-a-guide-to-inclusive-marketing/

---
*Pitfalls research for: React SPA wellness marketing site — Zorova, India, mobile-first, SEO/GEO*
*Researched: 2026-04-14*
