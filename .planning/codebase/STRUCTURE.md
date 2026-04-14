# Codebase Structure

**Analysis Date:** 2026-04-14

## Directory Layout

```
D:\projects\zen-at-home-now/
├── src/                           # Application source code
│   ├── main.tsx                   # React DOM render entry point
│   ├── App.tsx                    # Root application component with routing
│   ├── App.css                    # App-level styles
│   ├── index.css                  # Global styles, Tailwind imports, design tokens
│   ├── vite-env.d.ts             # Vite type declarations
│   ├── assets/                    # Static images and media
│   │   └── hero-wellness.jpg      # Hero section background image
│   ├── components/                # Reusable React components
│   │   ├── Navbar.tsx            # Top navigation bar with mobile menu
│   │   ├── Footer.tsx            # Bottom site footer
│   │   ├── NavLink.tsx           # Router NavLink wrapper component
│   │   ├── landing/              # Landing page section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PersonaSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── MassageSection.tsx
│   │   │   ├── StretchSection.tsx
│   │   │   ├── PackagesSection.tsx
│   │   │   ├── SportsSection.tsx
│   │   │   ├── CorporateSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── ReferralSection.tsx
│   │   │   └── WorkWithUsSection.tsx
│   │   └── ui/                   # UI primitive components (Radix UI based)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       └── [40+ other UI primitives]
│   ├── hooks/                     # Custom React hooks
│   │   ├── use-mobile.tsx        # Mobile breakpoint detection hook
│   │   └── use-toast.ts          # Toast notification hook
│   ├── lib/                       # Utility functions and helpers
│   │   └── utils.ts              # Class name merging utility (cn)
│   ├── pages/                     # Page/route components
│   │   ├── Index.tsx             # Home page (/)
│   │   ├── ServicesPage.tsx      # Services listing (/services)
│   │   ├── SportsWellnessPage.tsx # Sports wellness (/sports-wellness)
│   │   ├── MembershipsPage.tsx   # Memberships (/memberships)
│   │   ├── BusinessPage.tsx      # Business offerings (/business)
│   │   ├── ReferPage.tsx         # Referral program (/refer)
│   │   ├── BlogPage.tsx          # Blog (/blog)
│   │   ├── AboutPage.tsx         # About company (/about)
│   │   ├── FranchisePage.tsx     # Franchise (/franchise)
│   │   ├── GiftsPage.tsx         # Gift cards (/gifts)
│   │   ├── CareersPage.tsx       # Careers (/careers)
│   │   ├── WorkWithUsPage.tsx    # Work with us (/work-with-us)
│   │   ├── PrivacyPage.tsx       # Privacy policy (/privacy)
│   │   ├── TermsPage.tsx         # Terms of service (/terms)
│   │   ├── CancellationPage.tsx  # Cancellation policy (/cancellation)
│   │   ├── HelpPage.tsx          # Help center (/help)
│   │   ├── FaqsPage.tsx          # FAQs (/faqs)
│   │   └── NotFound.tsx          # 404 page (*)
│   └── test/                      # Test configuration and examples
│       ├── setup.ts              # Vitest setup file
│       └── example.test.ts       # Example test file
├── public/                        # Static assets served directly
├── .planning/                     # GSD planning documents (this directory)
│   └── codebase/                 # Codebase analysis documents
├── package.json                  # Node dependencies and scripts
├── tsconfig.json                 # TypeScript configuration root
├── tsconfig.app.json            # TypeScript app compilation config
├── tsconfig.node.json           # TypeScript dev tools config
├── vite.config.ts               # Vite build configuration
├── vitest.config.ts             # Vitest testing configuration
├── eslint.config.js             # ESLint rules configuration
└── tailwind.config.js           # Tailwind CSS configuration
```

## Directory Purposes

**src/:**
- Purpose: All application source code
- Contains: TypeScript/React components, pages, utilities, hooks, styling
- Key files: `App.tsx` (routing hub), `main.tsx` (entry point), `index.css` (design system)

**src/components/:**
- Purpose: Reusable React components
- Contains: Feature components, layout components, UI primitives
- Key files: `Navbar.tsx`, `Footer.tsx`

**src/components/landing/:**
- Purpose: Section-based components specific to home page
- Contains: HeroSection, ServicesSection, TestimonialSection, etc.
- Key files: Each file is self-contained and renders one major page section

**src/components/ui/:**
- Purpose: Reusable UI primitive components
- Contains: Radix UI-based buttons, dialogs, inputs, menus, etc.
- Key files: All files follow shadcn/ui pattern with component export and Radix UI composition

**src/pages/:**
- Purpose: Route-level page containers
- Contains: One component per route/URL path
- Key files: `Index.tsx` (home), `ServicesPage.tsx`, `AboutPage.tsx`, etc.

**src/hooks/:**
- Purpose: Custom React hooks for reusable logic
- Contains: `use-mobile.tsx` (responsive breakpoint detection), `use-toast.ts` (notification system)
- Key files: Each hook is self-contained and exported for use in components

**src/lib/:**
- Purpose: Shared utility functions and helpers
- Contains: Pure functions for cross-cutting concerns
- Key files: `utils.ts` (cn() function for Tailwind class merging)

**src/assets/:**
- Purpose: Static media files
- Contains: Images, icons (when not from lucide-react)
- Key files: `hero-wellness.jpg`

**src/test/:**
- Purpose: Test configuration and test files
- Contains: Vitest setup, example tests
- Key files: `setup.ts` (Vitest initialization), `example.test.ts` (test template)

**public/:**
- Purpose: Static files served directly (index.html, favicon, etc.)
- Contains: Static assets not processed by Vite
- Key files: index.html (entry HTML)

**.planning/codebase/:**
- Purpose: GSD documentation (generated by mapping tool)
- Contains: Architecture, structure, conventions, testing patterns
- Key files: ARCHITECTURE.md, STRUCTURE.md, CONVENTIONS.md, TESTING.md

## Key File Locations

**Entry Points:**
- `src/main.tsx`: Browser entry point, mounts React app to DOM
- `src/App.tsx`: Application root, sets up routing and global providers
- `public/index.html`: HTML shell (implied, standard Vite structure)

**Configuration:**
- `package.json`: Dependencies, scripts, project metadata
- `tsconfig.json`: TypeScript compiler options (paths, strict mode settings)
- `vite.config.ts`: Vite build configuration, module resolution aliases
- `vitest.config.ts`: Vitest runner configuration
- `eslint.config.js`: Linting rules
- `tailwind.config.js`: Tailwind CSS customization

**Core Logic:**
- `src/App.tsx`: Route definitions and provider setup
- `src/components/Navbar.tsx`: Navigation with mobile responsiveness
- `src/components/Footer.tsx`: Footer with site links
- `src/pages/*`: Individual page implementations

**Styling:**
- `src/index.css`: Global styles, Tailwind directives, design system tokens (colors, shadows, spacing)
- `src/App.css`: App-level scoped styles (if any)
- Inline Tailwind classes in components (primary styling approach)

**Testing:**
- `src/test/setup.ts`: Vitest environment setup
- `src/test/example.test.ts`: Test file template

## Naming Conventions

**Files:**
- Page files: PascalCase ending in "Page" (e.g., `ServicesPage.tsx`, `AboutPage.tsx`)
- Component files: PascalCase (e.g., `HeroSection.tsx`, `Navbar.tsx`)
- Hook files: camelCase starting with "use-" (e.g., `use-mobile.tsx`, `use-toast.ts`)
- Utility files: camelCase (e.g., `utils.ts`)
- UI primitive files: lowercase with dashes (e.g., `button.tsx`, `alert-dialog.tsx`)

**Directories:**
- Feature/component directories: lowercase (e.g., `landing/`, `ui/`, `components/`, `pages/`)
- Nested directory structure: flat for most cases, only nested for logical grouping (landing sections)

**Classes and Functions:**
- React components: PascalCase (e.g., `export const HeroSection = () => {}`)
- Utilities: camelCase (e.g., `export function cn(...)`)
- Custom hooks: camelCase starting with "use" (e.g., `export function useIsMobile()`)

**CSS Classes:**
- Tailwind utilities: Used inline in className attributes
- Custom CSS classes: Rare, prefer Tailwind utilities
- CSS variables: Defined in `:root` in `index.css` with `--brand-` prefix for theme colors

## Where to Add New Code

**New Page:**
1. Create new file in `src/pages/{PageName}Page.tsx`
2. Compose it with Navbar, Footer, and section components
3. Add route to `src/App.tsx` in Routes component
4. Create corresponding sections in `src/components/landing/` or new directory if needed

**New Section Component:**
- For landing page: `src/components/landing/{SectionName}Section.tsx`
- For other pages: `src/components/{PageCategory}/{ComponentName}.tsx`
- Pattern: Self-contained component with local data arrays, render UI primitives

**New UI Primitive:**
1. Create file in `src/components/ui/{component-name}.tsx`
2. Import and compose Radix UI primitive
3. Add Tailwind styling and class-variance-authority for variants
4. Export component for use in feature components

**New Custom Hook:**
1. Create file in `src/hooks/use-{hook-name}.tsx`
2. Export hook function with clear parameter and return types
3. Use in components via standard React hook patterns

**New Utility/Helper:**
1. Add to `src/lib/utils.ts` or create new file `src/lib/{feature}.ts`
2. Export pure functions with TypeScript types
3. Import in components/pages as needed via `@/lib/{feature}`

## Special Directories

**src/components/ui/:**
- Purpose: Shadcn/ui-style component library
- Generated: Partially (components adapted from shadcn/ui template)
- Committed: Yes (source files committed, not generated at build time)

**src/assets/:**
- Purpose: Static image and media files
- Generated: No
- Committed: Yes

**node_modules/:**
- Purpose: Installed dependencies
- Generated: Yes (via npm install)
- Committed: No (listed in .gitignore)

**public/:**
- Purpose: Static files served without processing
- Generated: No (except build artifacts)
- Committed: Yes

