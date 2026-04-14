# Testing Patterns

**Analysis Date:** 2026-04-14

## Test Framework

**Runner:**
- Vitest 3.2.4
- Config: `vitest.config.ts`

**Assertion Library:**
- Vitest's built-in expect assertions (`expect()`)

**Run Commands:**
```bash
npm run test              # Run all tests once
npm run test:watch       # Run tests in watch mode
```

## Test File Organization

**Location:**
- Co-located with source code in `src/test/` directory
- Example: `src/test/example.test.ts`

**Naming:**
- Pattern: `*.test.ts` or `*.test.tsx`
- Example: `example.test.ts`

**Structure:**
```
src/
├── test/
│   ├── setup.ts          # Vitest setup file
│   └── example.test.ts   # Example test file
```

## Test Structure

**Suite Organization:**
```typescript
import { describe, it, expect } from "vitest";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});
```

**Patterns:**
- Top-level: `describe()` blocks for test suites
- Individual tests: `it()` blocks with descriptive names
- Assertions: `expect()` with chainable matchers (`.toBe()`, etc.)
- No explicit setup/teardown observed in example, but setup file exists

## Setup and Configuration

**Setup File:**
- Location: `src/test/setup.ts`
- Purpose: Global test environment initialization
- Contents:
  - Imports testing library DOM utilities: `@testing-library/jest-dom`
  - Configures `window.matchMedia` mock for responsive design testing
  - Mock polyfills `matchMedia` behavior for jsdom environment

```typescript
import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
```

**Vitest Config:**
- Environment: `jsdom` (browser-like DOM environment)
- Globals: enabled (`globals: true` - no need to import describe, it, expect)
- Setup files: `./src/test/setup.ts`
- Include pattern: `src/**/*.{test,spec}.{ts,tsx}`

## Testing Libraries

**Installed Test Dependencies:**
- `vitest: ^3.2.4` - Test runner and assertion library
- `@testing-library/react: ^16.0.0` - React component testing utilities
- `@testing-library/jest-dom: ^6.6.0` - Custom matchers for DOM assertions
- `jsdom: ^20.0.3` - JavaScript DOM implementation for tests
- `@playwright/test: ^1.57.0` - End-to-end testing (installed but no E2E tests found)

## Mocking

**Framework:** Vitest's built-in mocking (vi API available)

**Patterns:**
- DOM mocking: `window.matchMedia` polyfill in setup file
- No explicit mocking examples in test files
- Mocking approach would use Vitest's `vi.mock()` pattern

**What to Mock:**
- Browser APIs (`matchMedia`, `localStorage`, `sessionStorage`)
- External API calls (would use Vitest mocking)
- Event listeners and timers

**What NOT to Mock:**
- React hooks (prefer actual hook behavior)
- Component logic (test behavior, not implementation)
- DOM structure (test rendered output)

## Fixtures and Factories

**Test Data:**
- Example test file contains minimal fixture data
- No factory pattern observed in codebase yet
- Future approach: Create factories in `src/test/` for consistent test data

**Location:**
- `src/test/` directory is reserved for test utilities and fixtures
- Suggested: `src/test/fixtures/` for data, `src/test/factories/` for builders

## Coverage

**Requirements:** Not enforced (no coverage config in `vitest.config.ts`)

**View Coverage:**
- Not configured, would require: `npm run test -- --coverage`
- Likely needs coverage reporter installation

## Test Types

**Unit Tests:**
- Scope: Individual functions and components
- Approach: Test in isolation using Vitest
- Example: `example.test.ts` tests basic assertions
- Pattern: Arrange-Act-Assert

**Integration Tests:**
- Not explicitly separated
- Would test component behavior with hooks and context
- Use `@testing-library/react` for component rendering

**E2E Tests:**
- Framework: Playwright (`@playwright/test: ^1.57.0` installed)
- Status: Not yet implemented
- Would test full user flows end-to-end

## Common Patterns

**Async Testing:**
- Vitest supports async test functions natively
- Pattern would be:
```typescript
it("should fetch data", async () => {
  const result = await fetchSomething();
  expect(result).toBeDefined();
});
```

**React Component Testing:**
- Pattern would use `@testing-library/react`:
```typescript
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

it("renders button", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
```

**Error Testing:**
- Pattern for testing error states:
```typescript
it("should throw when hook used outside context", () => {
  expect(() => {
    useCarousel();
  }).toThrow("useCarousel must be used within a <Carousel />");
});
```

## Current Test Coverage

**Existing Tests:**
- Location: `src/test/example.test.ts`
- Count: 1 example test (placeholder)
- Status: Minimal - setup complete but not comprehensive coverage

**Untested Areas:**
- Components: No component tests found
- Hooks: `use-mobile.tsx` and `use-toast.ts` not tested
- Utilities: `lib/utils.ts` not tested
- Pages: No page-level tests

## Testing Best Practices

**Recommended Patterns:**
1. Test behavior, not implementation details
2. Use semantic queries (`getByRole`, `getByLabelText`) over test IDs
3. Avoid testing internal state; test user interactions
4. Keep tests focused and readable
5. Use descriptive test names following "should..." convention
6. Clean up after each test (built into React Testing Library)

---

*Testing analysis: 2026-04-14*
