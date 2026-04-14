# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-04-14)

**Core value:** Trust-building, stigma-breaking conversion site — every page must make any Indian household feel safe, respected, and confident enough to book a therapist into their home.
**Current focus:** Phase 1 — Foundation

## Current Position

**Working directory:** this workspace root (Next.js 16.2.3 + React 19.2.4 + Tailwind v4 scaffolded)
**Reference tree:** `../src/` in parent directory (legacy Vite SPA — do not edit; delete after launch)

Phase: 1 of 5 (Foundation)
Plan: 0 of 5 in current phase
Status: Ready to plan
Last activity: 2026-04-14 — Pivoted to Next.js 16 App Router; scaffold complete; planning docs updated

Progress: [░░░░░░░░░░] 0%

## Performance Metrics

**Velocity:**
- Total plans completed: 0
- Average duration: —
- Total execution time: 0 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| - | - | - | - |

**Recent Trend:** No data yet

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- **Pivot (2026-04-14):** Switched from Vite SPA to Next.js 16 App Router. Legacy Vite `../src/` retained as reference (salvage content/components selectively).
- **Planning relocated (2026-04-14):** `.planning/` moved from parent repo root to this workspace so that opening this folder as a standalone project keeps planning state alongside code.
- Roadmap: 5 phases at standard granularity; Phases 3 + 4 run in parallel; Prerendering phase eliminated (Next.js SSG is native)
- Roadmap: SEO moved from `react-helmet-async` to Next.js `metadata` API + `<JsonLd>` server component (`schema-dts` typed)
- Roadmap: `sitemap.xml` via `src/app/sitemap.ts`, `robots.txt` via `src/app/robots.ts`, `llms.txt` as static file in `public/`
- Roadmap: Fonts loaded via `next/font/google` with `adjustFontFallback: true` (replaces `@fontsource` + Fontaine manual config)
- Roadmap: #b08eeb documented as decorative-only in Phase 1 DS token work (DS-02)
- Roadmap: No AggregateRating schema anywhere in v1 — omitted by design (SEO-14)

### Pending Todos

None yet.

### Blockers/Concerns

- WhatsApp phone number (wa.me/91XXXXXXXXXX) is a placeholder — actual number must be confirmed before Phase 3 page builds begin to avoid post-build find-and-replace
- Radix UI components inside Next.js App Router must be split between server (static) and client (interactive) boundaries — `"use client"` at client island leaf only; don't mark layout as client
- `next/font` locale (latin) matches Playfair Display + Plus Jakarta Sans availability — confirm at DS phase
- Form submission endpoint decision deferred (Formspree vs. Netlify Forms vs. custom API route in `src/app/api/*`) — does not block pre-launch work

## Session Continuity

Last session: 2026-04-14
Stopped at: Next.js 16 pivot complete — scaffold in place, `.planning/` relocated into this folder, PROJECT/REQUIREMENTS/ROADMAP/STATE all updated; ready for `/gsd:plan-phase 1`
Resume file: None
