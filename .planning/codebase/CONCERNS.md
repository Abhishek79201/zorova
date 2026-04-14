# Codebase Concerns

**Analysis Date:** 2026-04-14

## Tech Debt

**Placeholder Phone Numbers:**
- Issue: Multiple pages contain hardcoded placeholder phone numbers `+91-XXXXX-XXXXX` instead of actual contact information
- Files: 
  - `src/pages/CancellationPage.tsx` (line 42)
  - `src/pages/HelpPage.tsx` (line 26)
- Impact: Users cannot contact support; reduces credibility and trust; may confuse visitors
- Fix approach: Replace with actual company phone number from environment configuration or centralized constants file

**Unimplemented Contact Forms:**
- Issue: Contact/message forms in `HelpPage.tsx` and `WorkWithUsPage.tsx` have no form validation, error handling, or submission logic
- Files:
  - `src/pages/HelpPage.tsx` (lines 45-49) - contact message form
  - `src/pages/WorkWithUsPage.tsx` (lines 83-87) - application form
- Impact: Form submissions are non-functional; user data is not captured; no user feedback on submission
- Fix approach: Integrate form handling with `react-hook-form` and `zod` (already in dependencies), add submission endpoints, implement validation and error messages

## Security Considerations

**Console Error Logging of Sensitive Routes:**
- Issue: `NotFound.tsx` logs the pathname to console when accessing invalid routes, but this pattern could leak sensitive information if expanded
- Files: `src/pages/NotFound.tsx` (line 8)
- Current mitigation: Only logs basic pathname; no sensitive data currently exposed
- Recommendations: Remove or move to error tracking service; ensure logging never includes query parameters or user data

**Form Input Security:**
- Issue: Email and phone number inputs in contact forms lack validation and sanitization before potential submission
- Files:
  - `src/pages/HelpPage.tsx` (lines 45-48)
  - `src/pages/WorkWithUsPage.tsx` (lines 83-86)
- Current mitigation: No backend submission currently, so data not at risk
- Recommendations: When implementing submission, add input validation using `zod` schemas; sanitize before sending to backend; add CSRF protection if applicable

## Testing Coverage Gaps

**Minimal Test Suite:**
- Issue: Only one dummy test file exists with a placeholder "should pass" test
- Files: `src/test/example.test.ts`
- What's not tested: All page components, form interactions, navigation, responsive behavior
- Risk: Refactoring, updates, and bug fixes could introduce regressions undetected
- Priority: High - as the application scales, untested code becomes a liability

**No Component-Level Tests:**
- Issue: No tests for core components like `Navbar.tsx`, `Footer.tsx`, or UI components
- Files: All components in `src/components/`
- Risk: Navigation issues, mobile menu bugs, state management errors could go unnoticed
- Recommendation: Add unit tests for Navbar scroll behavior and mobile menu toggle; test Footer link functionality

**No Integration Tests:**
- Issue: No E2E or integration tests for page navigation, routing, or cross-page workflows
- Risk: Broken routes, incorrect links, and navigation state issues undetectable until runtime
- Recommendation: Add Playwright tests (already configured) for common user flows

## Fragile Areas

**State Management in Navbar:**
- Files: `src/components/Navbar.tsx` (lines 16-28)
- Why fragile: Two separate `useState` hooks manage scroll state and mobile menu state independently; mobile menu doesn't always close on navigation in mobile view
- Safe modification: Consider consolidating state management or using Context API if complexity increases; test mobile menu behavior thoroughly
- Test coverage: No tests for scroll behavior or mobile toggle

**Inline Form Styling and Hardcoded Classes:**
- Issue: Form inputs have long, repeated inline className strings with hardcoded styling
- Files:
  - `src/pages/HelpPage.tsx` (lines 45-48)
  - `src/pages/WorkWithUsPage.tsx` (lines 83-86)
- Why fragile: Difficult to maintain, prone to inconsistency, styling changes require updating multiple files
- Safe modification: Extract to reusable form input component or use UI component library's input component
- Recommendation: Use `src/components/ui/input.tsx` which already exists and has proper styling

**Direct HTML Input Elements Instead of Form Components:**
- Issue: Pages use raw `<input>` and `<textarea>` elements instead of form component abstractions
- Files:
  - `src/pages/HelpPage.tsx` (lines 45-49)
  - `src/pages/WorkWithUsPage.tsx` (lines 83-87)
- Risk: No validation, no state management, no accessibility features like labels properly linked
- Recommendation: Refactor to use `react-hook-form` with proper form validation using `zod`

## Unused Dependencies and Components

**47 UI Components Defined, Only 12 Actually Used:**
- Issue: 49 component files in `src/components/ui/` but only 12 are imported anywhere
- Unused components: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, calendar, card, checkbox, collapsible, command, context-menu, carousel, chart, drawer, dropdown-menu, form, hover-card, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, slider, switch, table, tabs, textarea, toggle, toggle-group
- Impact: Increased bundle size, maintenance burden, confusion about available components
- Fix approach: Either remove unused components or document why they're kept; audit import statements to identify genuinely necessary components; remove from package bundle if not used

**Unused Dependencies in package.json:**
- Issue: Several packages imported in components but not actively used in meaningful ways
  - `@tanstack/react-query` v5.83.0 - imported in `App.tsx` but no queries executed
  - `react-resizable-panels` - not imported anywhere
  - Various Radix UI components - most not imported
- Impact: Larger bundle size, slower load time
- Fix approach: Remove `@tanstack/react-query` if no API integration planned; remove unused Radix components; keep only essential dependencies

## Performance Bottlenecks

**Scroll Event Listener on Every Component Render:**
- Issue: `Navbar.tsx` adds a scroll event listener on every render without proper debouncing
- Files: `src/components/Navbar.tsx` (lines 20-24)
- Problem: Event handler recreated every render; no debouncing on scroll calculations
- Cause: Direct `window.addEventListener` without optimization
- Improvement path: Move scroll handler to a custom hook with `useCallback`; consider debouncing for better performance on low-end devices

**Heavy Component Imports:**
- Issue: All pages import both `Navbar` and `Footer` individually, increasing code duplication
- Files: All files in `src/pages/`
- Cause: No layout wrapper or page template pattern
- Improvement path: Create a `PageLayout` wrapper component that includes common Navbar/Footer; reduces import duplication and ensures consistency

**No Image Optimization:**
- Issue: ServicesSection uses external Unsplash images without optimization
- Files: `src/components/landing/ServicesSection.tsx`
- Problem: Images loaded at original resolution; no lazy loading
- Improvement path: Use `next/image` or implement lazy loading; use responsive image sizing

## Missing Critical Features

**No Error Boundary:**
- Issue: No error boundary component to catch and handle React errors gracefully
- Impact: Single component error crashes entire app
- Recommendation: Implement error boundary wrapper for root app

**No Loading States:**
- Issue: Forms have no loading/disabled state during potential submission
- Files:
  - `src/pages/HelpPage.tsx` (line 49)
  - `src/pages/WorkWithUsPage.tsx` (line 87)
- Impact: Users can click submit multiple times, poor UX feedback
- Recommendation: Add loading state to buttons; disable forms during submission

**No Toast/Alert Notifications for Form Actions:**
- Issue: Contact and application forms have no success/error messages after submission
- Files:
  - `src/pages/HelpPage.tsx` (line 49)
  - `src/pages/WorkWithUsPage.tsx` (line 87)
- Current setup: Toast/Sonner components exist in `App.tsx` but not used
- Impact: Users don't know if form submission succeeded
- Recommendation: Implement form submission with toast notifications using existing `useToast` hook

**No API Integration:**
- Issue: No backend API calls implemented; forms cannot submit data
- Files: All page components
- Impact: Core functionality (booking, form submissions, contact) completely non-functional
- Blocking: Form submission, bookings, user data collection

## Dependency Version Management

**Loose Version Constraints:**
- Issue: Most dependencies use `^` (caret) version constraints, allowing minor and patch updates
- Files: `package.json` (all dependencies)
- Risk: Transitive dependency updates could introduce breaking changes
- Recommendation: Consider using exact versions (`=`) for critical dependencies; monitor updates carefully

**Outdated or Deprecated Patterns:**
- Issue: Component Tagger (`lovable-tagger` v1.1.13) only used in development mode, minimal value
- Files: `vite.config.ts` (line 4)
- Impact: Unnecessary development dependency
- Recommendation: Evaluate necessity; remove if not actively used

## Code Quality Issues

**Hardcoded Data in Components:**
- Issue: Service prices, membership details, FAQ content, and job listings are hardcoded in component files
- Files:
  - `src/pages/FaqsPage.tsx` (lines 6-42)
  - `src/components/landing/PackagesSection.tsx`
  - `src/components/landing/ServicesSection.tsx`
  - `src/pages/WorkWithUsPage.tsx` (lines 6-19)
- Impact: Content updates require code changes; not maintainable for non-developers
- Fix approach: Move to constants file or CMS; implement data-driven component rendering

**No Environment Configuration:**
- Issue: No `.env` setup for configurable values (API endpoints, contact info, etc.)
- Current state: Email `support@zorova.in` hardcoded in multiple files
- Impact: Difficult to support multiple environments (dev, staging, prod)
- Fix approach: Create `.env.example`; centralize configuration in constants or environment variables

**Inline Styles and Long Classnames:**
- Issue: Multiple long Tailwind classname strings repeated across files
- Files:
  - `src/pages/HelpPage.tsx` (lines 45-48)
  - `src/pages/WorkWithUsPage.tsx` (lines 83-86)
- Impact: Difficult to maintain, inconsistent styling, duplication
- Fix approach: Extract to component-level constants or create reusable form field components

**Missing TypeScript Strictness:**
- Issue: Type safety could be improved; some components lack proper typing
- Example: Form handlers are untyped functions
- Impact: Runtime type errors possible; reduced IDE support
- Recommendation: Enable `strict: true` in `tsconfig.json`; add proper types to form handlers

## Scaling Limitations

**Single Route per Page Pattern:**
- Issue: Each page has its own route in `App.tsx`; no nested routing or parameterized routes
- Files: `src/App.tsx` (lines 33-50)
- Current capacity: Manageable for ~20 pages; problematic at 50+ pages
- Scaling path: Implement route configuration array; consider nested routes for related pages

**No Caching Strategy:**
- Issue: No caching headers or client-side caching for static content
- Impact: Every page load fetches all assets fresh; poor performance for repeat visitors
- Recommendation: Implement service worker or caching layer

**No Pagination or Lazy Loading:**
- Issue: FAQ page loads all questions at once; scales poorly with content growth
- Files: `src/pages/FaqsPage.tsx` (lines 6-42)
- Impact: Page becomes slow with hundreds of FAQs
- Recommendation: Implement pagination, infinite scroll, or category filtering

---

*Concerns audit: 2026-04-14*
