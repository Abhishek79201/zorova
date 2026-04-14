# Coding Conventions

**Analysis Date:** 2026-04-14

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `Navbar.tsx`, `HeroSection.tsx`, `AboutPage.tsx`)
- Utilities: camelCase with descriptive names (e.g., `use-toast.ts`, `use-mobile.tsx`, `utils.ts`)
- UI components: PascalCase in `src/components/ui/` (e.g., `button.tsx`, `carousel.tsx`, `dialog.tsx`)
- Hooks: kebab-case with `use-` prefix (e.g., `use-toast.ts`, `use-mobile.tsx`)

**Functions:**
- Components: Named exports using PascalCase (e.g., `const HeroSection = () => {}`)
- Hooks: camelCase with `use` prefix (e.g., `useToast()`, `useIsMobile()`)
- Utilities: camelCase (e.g., `cn()`, `toast()`, `genId()`)
- Event handlers: camelCase with action prefix (e.g., `handleScroll`, `handleChange`, `setMobileOpen`)

**Variables:**
- React state: camelCase (e.g., `scrolled`, `mobileOpen`, `isMobile`)
- Constants: UPPER_SNAKE_CASE for module-level constants (e.g., `MOBILE_BREAKPOINT`, `TOAST_LIMIT`, `TOAST_REMOVE_DELAY`)
- Data objects: camelCase (e.g., `navLinks`, `trustItems`, `values`, `services`)

**Types:**
- Component props: PascalCase with `Props` suffix (e.g., `ButtonProps`)
- Union types and enums: camelCase or UPPER_SNAKE_CASE (e.g., `ActionType`, `ToasterToast`)
- Type imports: `import type { ... }` pattern used

## Code Style

**Formatting:**
- No explicit Prettier config found - likely using defaults or Prettier is auto-configured through eslint
- 2-space indentation (inferred from code)
- Quotes: Double quotes preferred in JSX
- Line length: No strict limit observed; long lines present

**Linting:**
- ESLint configuration: `eslint.config.js` using Flat config format
- Extends: `@eslint/js` recommended + `typescript-eslint` recommended
- Plugins: `react-hooks`, `react-refresh`
- Key rule: `@typescript-eslint/no-unused-vars` disabled (rule set to "off")
- React refresh validation enabled with `allowConstantExport: true`

**TypeScript Configuration:**
- Target: ES2020
- JSX: `react-jsx` (modern JSX without importing React)
- Path aliases: `@/*` maps to `src/*`
- Strict mode: disabled (`strict: false`)
- Null checks: disabled (`strictNullChecks: false`)
- Unused locals/parameters: not enforced (`noUnusedLocals: false`, `noUnusedParameters: false`)

## Import Organization

**Order:**
1. React and external libraries (e.g., `import { useState, useEffect } from "react"`)
2. Third-party UI libraries (e.g., `import { Button } from "@/components/ui/button"`)
3. Icons and utilities (e.g., `import { Clock } from "lucide-react"`)
4. Type imports (e.g., `import type { ButtonProps } from "..."`)
5. Local component/page imports (e.g., `import Navbar from "@/components/Navbar"`)
6. Asset imports (e.g., `import heroImage from "@/assets/hero-wellness.jpg"`)

**Path Aliases:**
- `@/` prefix used throughout for `src/` directory
- Example: `@/components/ui/button` resolves to `src/components/ui/button.tsx`
- Enables cleaner imports regardless of nesting depth

## Error Handling

**Patterns:**
- Hook invariant errors: Throw descriptive errors when hooks are used outside proper context
  - Example in `carousel.tsx`, `chart.tsx`, `form.tsx`, `sidebar.tsx`: `throw new Error("useCarousel must be used within a <Carousel />")`
- Simple validation throws with meaningful messages
- 404 error logging: Console.error with route path (`src/pages/NotFound.tsx`)
- No try-catch blocks observed; errors are prevented via proper context setup
- Validation and error prevention through context providers is preferred over error catching

## Logging

**Framework:** `console` only (no logger library detected)

**Patterns:**
- `console.error()` for error logging: Used in NotFound page to log 404 attempts
- Minimal logging philosophy - only critical errors logged
- No structured logging or log levels implemented

## Comments

**When to Comment:**
- Inline comments used sparingly for side effects or non-obvious logic
- Example: `// ! Side effects ! - This could be extracted into a dismissToast() action, but I'll keep it here for simplicity` in `use-toast.ts` (line 88)
- DOM/accessibility comments used (e.g., `{/* Desktop Nav */}`, `{/* Mobile toggle */}`)
- Section dividers with comments for clarity in complex JSX

**JSDoc/TSDoc:**
- Not commonly used in components
- Type definitions rely on TypeScript inference
- No function-level JSDoc observed

## Function Design

**Size:** 
- Small, single-responsibility functions preferred
- Components range from 25-100 lines (typical)
- Utility functions are very concise (5-10 lines)

**Parameters:** 
- Destructuring used for component props
- Event handlers follow React conventions (e.g., `React.HTMLAttributes<T>`)
- Rest parameters used for flexibility (e.g., `(...inputs: ClassValue[])`)

**Return Values:** 
- Components return JSX elements directly
- Hooks return state, callbacks, or compound values (object shape)
- Pure functions prefer early returns
- No error objects; errors are thrown immediately

## Module Design

**Exports:**
- Named exports for hooks and utilities (e.g., `export function useIsMobile()`)
- Default exports for components (e.g., `export default Navbar`)
- Type exports use `export type` pattern
- Constants exported as named exports

**Barrel Files:**
- Not heavily used; component imports are direct
- UI component directory `src/components/ui/` contains individual component files
- No index files creating aggregate exports observed

## React-Specific Conventions

**Component Patterns:**
- Functional components with hooks (no class components)
- Components defined as arrow functions or named function declarations
- Event handlers defined inline in JSX or as arrow functions in component body

**State Management:**
- React hooks (`useState`, `useEffect`) for local state
- React Context (`useContext`, providers) for shared state
- Tanstack React Query for server state (installed, seen in `App.tsx`)
- No Redux or Zustand detected

**Effects and Cleanup:**
- Cleanup functions used in `useEffect` for event listeners (e.g., `window.addEventListener` cleanup)
- Dependency arrays properly managed
- No memory leaks from subscriptions (listener cleanup observed in `use-toast.ts`)

**Conditional Rendering:**
- Inline ternary operators for simple conditions
- Template literals with conditional classes for dynamic styling
- Logical AND (`&&`) for single branch conditions

---

*Convention analysis: 2026-04-14*
