# External Integrations

**Analysis Date:** 2026-04-14

## APIs & External Services

**Not Detected:**
- No external API clients or SDK integrations currently implemented
- No backend service integrations found
- No third-party API calls in source code

**Planned/Available Infrastructure:**
- React Query (@tanstack/react-query) is configured but not actively used for API calls
- Application is currently a static marketing/informational website with no backend connectivity

## Data Storage

**Databases:**
- Not applicable - no database integration
- Application is a static content site (React SPA)
- No persistent data storage layer implemented

**File Storage:**
- Images referenced are external URLs (Unsplash CDN for service photos)
- No local file upload or storage system
- Static assets hosted in `public/` directory

**Caching:**
- React Query configured with default cache settings (available but unused)
- Browser cache via HTTP headers (managed by hosting provider)

## Authentication & Identity

**Auth Provider:**
- Not detected - no authentication system implemented
- No user accounts or login functionality
- Static content accessible to all visitors

**Implementation Status:**
- No auth provider SDK integrated
- No session management
- No protected routes

## Monitoring & Observability

**Error Tracking:**
- Not detected
- No Sentry, Bugsnag, or similar error tracking service
- Development errors logged to browser console only

**Logs:**
- Browser console logging only
- No centralized logging service
- No analytics integration detected

## CI/CD & Deployment

**Hosting:**
- Static hosting required (Vercel, Netlify, GitHub Pages, AWS S3, etc.)
- No server-side rendering or backend needed
- Output: SPA with static asset bundling via Vite

**CI Pipeline:**
- GitHub Actions available via git repository
- No CI/CD configuration file detected (`.github/workflows/` not present)
- Playwright E2E tests available (`@playwright/test` installed) but not integrated into pipeline

**Build Process:**
- Development: `npm run dev` or `bun dev` (Vite dev server on port 8080)
- Production: `npm run build` (Vite build → dist/ folder)
- Preview: `npm run preview` (test production build locally)
- Development mode uses lovable-tagger for component tagging

## Environment Configuration

**Required env vars:**
- None - application requires no environment variables
- All configuration is embedded in source code or TypeScript config files

**Secrets location:**
- Not applicable - no secrets management needed
- No API keys, credentials, or sensitive configuration

**Metadata & Configuration:**
- SEO metadata in `index.html`:
  - OG tags for social sharing (og:image, og:title, og:description)
  - Twitter card metadata
  - Viewport and character encoding
  - Author attribution to "Zorova"

## Webhooks & Callbacks

**Incoming:**
- None detected
- No webhook endpoints exposed
- Application receives no server-side events

**Outgoing:**
- None detected
- No callbacks or webhooks sent to external services
- No event streaming or pub/sub integration

## Third-Party Integrations

**Font Loading:**
- Google Fonts via CDN (configured in `src/index.css`)
  - Playfair Display (serif, font-weight 700, 800)
  - Plus Jakarta Sans (sans-serif, font-weight 400-700)
  - Cormorant Garamond (serif italic, font-weight 400)

**Image Hosting:**
- Unsplash API for service showcase images (referenced in components)
- External CDN for OG preview image

**Icons:**
- Lucide React icons (SVG-based, self-hosted in package)
- No third-party icon CDN

## Form Handling

**Form Libraries:**
- React Hook Form 7.61.1 with @hookform/resolvers
- Zod for schema validation
- No backend form submission detected
- Forms are components without active submission handlers

**Current State:**
- Form infrastructure is set up but not wired to any backend
- Validation schemas defined but endpoints not connected

## Content & Data

**Static Content:**
- All content hardcoded in React components (`src/pages/` and `src/components/`)
- No CMS integration (Contentful, Sanity, Strapi, etc.)
- No headless API for content management
- Data structures as TypeScript objects/arrays in components

**Example Data Sources in Components:**
- `src/components/landing/ServicesSection.tsx` - Service offerings
- `src/components/landing/PackagesSection.tsx` - Pricing packages and memberships
- `src/components/landing/TestimonialSection.tsx` - Customer testimonials
- All data is hardcoded as JavaScript objects

## Performance & CDN

**Asset Delivery:**
- Static assets served from hosting provider's CDN
- External images from Unsplash CDN
- No origin server requests required (fully static)

**Build Output:**
- Generated to `dist/` folder via Vite
- Suitable for any static hosting with gzip compression

## Future Integration Points

**Ready for Integration:**
- React Query is pre-configured for when backend APIs are added
- Form infrastructure ready for backend form submission
- Zod validation ready for server-side validation
- ESLint and TypeScript ready for API integration code
- Test infrastructure (Vitest + Playwright) ready for integration testing

---

*Integration audit: 2026-04-14*
