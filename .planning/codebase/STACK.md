# Technology Stack

**Analysis Date:** 2026-04-14

## Languages

**Primary:**
- TypeScript 5.8.3 - All source code and configuration files
- JavaScript (via TypeScript) - Build and configuration tooling

## Runtime

**Environment:**
- Node.js (compatible with bundler module resolution)
- Browser environment (React 18 + DOM APIs)

**Package Manager:**
- npm (primary lockfile: `package-lock.json`)
- bun (secondary: `bun.lock` and `bun.lockb` present, available as alternative)

## Frameworks

**Core:**
- React 18.3.1 - UI library and component framework
- React DOM 18.3.1 - React rendering for browser
- React Router DOM 6.30.1 - Client-side routing and navigation

**UI & Styling:**
- Tailwind CSS 3.4.17 - Utility-first CSS framework
- shadcn/ui components (via `@radix-ui/*`) - Accessible component library built on Radix UI
- PostCSS 8.5.6 - CSS transformation tool
- Autoprefixer 10.4.21 - Vendor prefixing
- Tailwind CSS Animate 1.0.7 - Animation utilities
- class-variance-authority 0.7.1 - Component variant management
- clsx 2.1.1 & tailwind-merge 2.6.0 - Conditional CSS class utilities

**Data Management:**
- React Hook Form 7.61.1 - Form state management
- @hookform/resolvers 3.10.0 - Form validation resolvers
- TanStack React Query 5.83.0 - Server state and caching (not currently in use, configured but no API calls)
- Zod 3.25.76 - Schema validation library

**UI Components & Widgets:**
- @radix-ui/* (24 component packages) - Accessible, unstyled component primitives
- Lucide React 0.462.0 - Icon library (SVG icons)
- Embla Carousel React 8.6.0 - Carousel/slider component
- React Resizable Panels 2.1.9 - Resizable panel layouts
- React Day Picker 8.10.1 - Date picker component
- Date FNS 3.6.0 - Date manipulation utilities
- Sonner 1.7.4 - Toast notification library
- input-otp 1.4.2 - OTP input component
- next-themes 0.3.0 - Dark mode theme management
- cmdk 1.1.1 - Command/command palette component
- vaul 0.9.9 - Drawer component
- Recharts 2.15.4 - Charting/data visualization library

**Testing:**
- Vitest 3.2.4 - Test runner (ESM-native)
- @testing-library/react 16.0.0 - React component testing utilities
- @testing-library/jest-dom 6.6.0 - DOM matchers for assertions
- jsdom 20.0.3 - DOM implementation for Node.js
- @playwright/test 1.57.0 - E2E and integration testing (configured via lovable-agent-playwright-config)

**Build & Development:**
- Vite 5.4.19 - Build tool and dev server
- @vitejs/plugin-react-swc 3.11.0 - React plugin using SWC compiler
- lovable-tagger 1.1.13 - Component tagging in development mode
- lovable-agent-playwright-config - Playwright configuration wrapper

**Linting & Code Quality:**
- ESLint 9.32.0 - JavaScript/TypeScript linter
- typescript-eslint 8.38.0 - TypeScript ESLint plugin
- eslint-plugin-react-hooks 5.2.0 - React Hooks linting
- eslint-plugin-react-refresh 0.4.20 - React Refresh validation

**Type Definitions:**
- @types/node 22.16.5 - Node.js type definitions
- @types/react 18.3.23 - React type definitions
- @types/react-dom 18.3.7 - React DOM type definitions

## Configuration

**Environment:**
- No `.env` files detected (static content application)
- Configuration is embedded in TypeScript/React components
- Tailwind CSS configuration via `tailwind.config.ts`
- shadcn/ui component configuration via `components.json`

**Build:**
- Vite config: `vite.config.ts` - Dev server on `::` port 8080 with SWC React compilation
- TypeScript config: `tsconfig.json` (app) + `tsconfig.app.json` + `tsconfig.node.json`
- PostCSS config: `postcss.config.js` - Tailwind + Autoprefixer
- ESLint config: `eslint.config.js` - React Hooks + React Refresh rules
- Playwright config: `playwright.config.ts` - E2E testing via lovable wrapper
- Vitest config: `vitest.config.ts` - jsdom environment, setup in `src/test/setup.ts`

**Path Aliases:**
- `@/*` → `./src/*` (configured in tsconfig.json and vite.config.ts)

## Platform Requirements

**Development:**
- Node.js 18+ (ESNext module resolution)
- npm or bun package manager
- TypeScript 5.8+ support
- Git (project is git-managed)

**Production:**
- Static site hosting (SPA/static export)
- Browser support: ES2020 and later
- No server-side runtime required
- CDN-compatible static assets

## Project Structure

**Root Configuration Files:**
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Bundler configuration
- `tailwind.config.ts` - Design system and styling
- `components.json` - shadcn/ui aliases
- `tsconfig.json` + variants - TypeScript compilation
- `eslint.config.js` - Code linting
- `vitest.config.ts` - Test runner
- `playwright.config.ts` - E2E testing
- `postcss.config.js` - CSS processing
- `index.html` - HTML entry point

**Source Structure:**
- `src/main.tsx` - React root entry point
- `src/App.tsx` - Main application component with routing
- `src/pages/` - Page components (Index, About, Services, etc.)
- `src/components/` - Reusable UI components
- `src/components/ui/` - shadcn/ui component library
- `src/components/landing/` - Landing page sections
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `src/test/` - Test setup and examples
- `src/assets/` - Static assets
- `src/index.css` - Global styles with Tailwind

---

*Stack analysis: 2026-04-14*
