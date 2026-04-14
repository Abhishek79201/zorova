# Architecture

**Analysis Date:** 2026-04-14

## Pattern Overview

**Overall:** Single-Page Application (SPA) with Multi-Page Routing

**Key Characteristics:**
- Client-side routing with React Router v6
- Component-driven UI architecture with React 18
- Vite-based build system for fast development and optimized production builds
- Tailwind CSS for styling with custom design system tokens
- Server State Management via TanStack React Query for data fetching and caching

## Layers

**Presentation Layer:**
- Purpose: Render UI components and handle user interactions
- Location: `src/components/` and `src/pages/`
- Contains: React functional components, page containers, UI primitives
- Depends on: Utilities, styling, icons from lucide-react
- Used by: App.tsx entry point

**Routing Layer:**
- Purpose: Define application routes and navigate between pages
- Location: `src/App.tsx`
- Contains: React Router configuration, route definitions
- Depends on: Page components from `src/pages/`
- Used by: Main application entry

**Data/State Layer:**
- Purpose: Manage application state and data fetching
- Location: App.tsx (QueryClient setup)
- Contains: TanStack React Query configuration
- Depends on: React Query library
- Used by: Any page or component needing server state

**Utility Layer:**
- Purpose: Provide helper functions and shared utilities
- Location: `src/lib/`, `src/hooks/`
- Contains: Class name merging utilities, custom React hooks, reusable logic
- Depends on: None (foundational layer)
- Used by: Presentation layer components

**UI Component Library:**
- Purpose: Provide reusable, styled component primitives
- Location: `src/components/ui/`
- Contains: Radix UI-based components (Button, Dialog, Input, etc.)
- Depends on: Radix UI, class-variance-authority, Tailwind CSS
- Used by: Page and feature components

## Data Flow

**Page Load Flow:**

1. `src/main.tsx` renders `App.tsx` into DOM
2. `App.tsx` initializes QueryClient and wraps application with providers
3. React Router matches current URL to route
4. Appropriate page component from `src/pages/` renders
5. Page composes domain-specific components from `src/components/landing/` or other sections
6. Components render UI primitives from `src/components/ui/`
7. User interaction triggers navigation via React Router Link components

**State Management:**

- Local Component State: useState for simple UI state (e.g., mobile menu toggle in `src/components/Navbar.tsx`)
- Server State: TanStack React Query via QueryClientProvider (configured in `src/App.tsx`)
- UI Provider Context: TooltipProvider wraps application (configured in `src/App.tsx`)

## Key Abstractions

**Page Components:**
- Purpose: Route-level entry points for each URL path
- Examples: `src/pages/Index.tsx`, `src/pages/ServicesPage.tsx`, `src/pages/AboutPage.tsx`
- Pattern: Compose multiple section components, wrap with Navbar and Footer

**Section Components:**
- Purpose: Compose related UI elements into logical blocks for landing page
- Examples: `src/components/landing/HeroSection.tsx`, `src/components/landing/PackagesSection.tsx`, `src/components/landing/TestimonialSection.tsx`
- Pattern: Self-contained sections with inline data, render UI primitives, no external dependencies

**Layout Components:**
- Purpose: Provide common page structure and navigation
- Examples: `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- Pattern: Used across all pages, manage scroll state and mobile responsiveness

**UI Primitives:**
- Purpose: Reusable, styled base components
- Examples: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`, `src/components/ui/dialog.tsx`
- Pattern: Composed from Radix UI, styled with Tailwind CSS via class-variance-authority for variants

## Entry Points

**Application Entry Point:**
- Location: `src/main.tsx`
- Triggers: Browser navigation to application URL
- Responsibilities: Initialize React application, mount to DOM, render App component

**App Component:**
- Location: `src/App.tsx`
- Triggers: Called by main.tsx
- Responsibilities: Set up global providers (QueryClient, TooltipProvider, Router), define all routes, render route-matched content

**Page Components:**
- Location: `src/pages/` (e.g., Index.tsx, ServicesPage.tsx)
- Triggers: React Router matching URL path
- Responsibilities: Assemble page-specific sections, include header/footer, handle page-level state

## Error Handling

**Strategy:** Boundary checking and fallback UI

**Patterns:**
- 404 Not Found: NotFound component rendered for unmatched routes (`src/pages/NotFound.tsx`)
- Component Errors: Defensive rendering with optional chaining and falsy checks
- Network Errors: Handled by TanStack React Query with built-in retry and error state management

## Cross-Cutting Concerns

**Logging:** Console logging via browser DevTools (no structured logging library detected)

**Validation:** Schema validation via Zod library (installed in package.json but not yet heavily used in codebase)

**Authentication:** Not implemented (public marketing/informational site)

**Styling:** Tailwind CSS with custom brand design tokens defined in `src/index.css` and tailwind.config file

**Accessibility:** Semantic HTML, ARIA labels in navigation, keyboard navigation support via React Router and Radix UI

