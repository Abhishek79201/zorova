# Phase 1: Foundation - Context

**Gathered:** 2026-04-14
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped via workflow.skip_discuss)

<domain>
## Phase Boundary

A working Next.js 16 App Router project at this workspace root with the complete Zorova design system (tokens, fonts, radii, shadows, gradient utility), a root layout rendering Navigation + Footer + WhatsApp FAB, fresh shadcn/ui install restyled to Zorova tokens, and all 14 route skeletons mounting without errors on `next dev`.

Requirements in scope: BRAND-01..09, DS-01..09, LAYOUT-01..12, ANIM-01, ANIM-02, PERF-09, A11Y-06.

</domain>

<decisions>
## Implementation Decisions

### Claude's Discretion
All implementation choices are at Claude's discretion — discuss phase was skipped per user setting. Use ROADMAP phase goal, REQUIREMENTS.md acceptance criteria, PROJECT.md principles, and codebase conventions in `.planning/codebase/` to guide decisions.

### Established by Prior Planning
- Framework: Next.js 16.2.3 + React 19.2.4 + Tailwind v4 (already scaffolded in this workspace)
- Fonts: Playfair Display + Plus Jakarta Sans via `next/font/google` with `adjustFontFallback: true`
- `#b08eeb` is decorative-only — must not be used as text color (fails WCAG AA 2.8:1 on white)
- `MotionConfig reducedMotion="user"` required globally from Phase 1 onward via `motion/react`
- Radix/shadcn components inside RSC must be wrapped with client components (`"use client"` leaves only)
- WhatsApp CTA uses placeholder `wa.me/91XXXXXXXXXX` for Phase 1 — sweep to real number in Phase 5
- Use Next.js `export const metadata` — NOT `react-helmet-async`
- Legacy Vite SPA at `../src/` is reference-only; do not import from it

</decisions>

<code_context>
## Existing Code Insights

Codebase context will be gathered during plan-phase research. Reference:
- `.planning/codebase/STACK.md`, `STRUCTURE.md`, `CONVENTIONS.md` — codebase maps
- `../src/` — legacy Vite SPA, salvage copy only (do not import)

</code_context>

<specifics>
## Specific Ideas

- 14 routes: `/`, `/massages`, `/stretch`, `/careers`, `/membership`, `/business`, `/franchise`, `/about`, `/blog`, `/gifts`, `/privacy`, `/terms`, `/cancellation`, `/contact`
- Navigation: 10 primary links + "Book Now" accent CTA + frosted-glass scroll effect + 375px hamburger drawer
- Footer: 4-column + social icons + legal links + "Made with care in India" bar
- shadcn core install: Button, Card, Input, Textarea, Select, Accordion, Dialog, Sheet, Sonner, NavigationMenu

</specifics>

<deferred>
## Deferred Ideas

- WhatsApp real number (placeholder sweep in Phase 5)
- Form submission backend endpoint (decision deferred, not blocking pre-launch)
- Blog post routes (Phase 4 stubs; individual articles deferred post-launch)

</deferred>
