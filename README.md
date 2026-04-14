# Zorova

On-demand home massage, spa, and stretch therapy — wellness for every Indian household.

Certified therapists visit customers at their homes to deliver professional-grade treatments. The platform serves every demographic — children, teens, adults, seniors, athletes, men, women — and positions therapeutic bodywork as essential healthcare, not luxury.

## Tech stack

- **Next.js 16.2.3** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** (`@theme` tokens in `globals.css`)
- **shadcn/ui** + Radix primitives (restyled to Zorova tokens)
- **motion/react** (v12+) for micro-animations with `prefers-reduced-motion` respected
- **next/font** for Playfair Display + Plus Jakarta Sans (CLS-safe)

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server at `localhost:3000` |
| `npm run build` | Production build (static generation of all routes) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Project structure

```
src/
├── app/                 # App Router routes, layout, metadata, sitemap, robots
│   ├── layout.tsx       # Root layout — fonts, Navigation, Footer, Providers
│   ├── page.tsx         # Home
│   └── <route>/page.tsx # Massages, Stretch, Membership, Business, Franchise,
│                        # Careers, About, Blog, Gifts, Contact, Privacy,
│                        # Terms, Cancellation
├── components/          # Navigation, Footer, WhatsApp FAB, shared sections
├── content/             # Typed per-page content modules
├── lib/                 # seo.ts (metadata helper), motion.ts (variants), utils
└── types/               # Shared TypeScript types
public/
├── llms.txt             # AI citation summary
├── og/                  # Per-route Open Graph images (1200×630)
└── ...static assets
```

## Brand tokens

| Token | Hex | Role |
|-------|-----|------|
| `--color-text` | `#09080a` | Body text |
| `--color-bg` | `#f6f4f9` | Page background |
| `--color-primary` | `#3e1b7c` | Nav, footer, primary CTAs |
| `--color-secondary` | `#b08eeb` | Decorative only (fails WCAG AA as text) |
| `--color-accent` | `#8442f5` | Interactive accent, focus rings, Book Now |

Fonts: **Playfair Display** (display/headings) + **Plus Jakarta Sans** (body).

## Conventions

- Pages are **server components** by default. Interactive pieces (carousel, drawer, forms) are isolated into `"use client"` islands.
- All metadata goes through `buildMetadata()` in `src/lib/seo.ts` — never raw `<Head>`.
- JSON-LD is rendered server-side via `<JsonLd>` (typed with `schema-dts`).
- Animations use transform + opacity only (no width/height/top/left) — CLS-safe.
- Copy is captured verbatim from the brief in `src/content/<page>.ts`; pages import and compose.

## License

Proprietary — © Zorova Wellness Pvt. Ltd.
