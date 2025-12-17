# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kanpeki is a component library featuring accessible and customizable React components. The project is a monorepo that provides a documentation website where users can copy and paste components into their own projects. Built with Next.js, React Aria Components, and Tailwind CSS.

## Development Commands

### Package Manager

This project uses **Bun** as the package manager (version 1.3.1). Always use `bun` commands instead of npm/yarn/pnpm.

### Common Commands

- `bun run dev` - Start development server for all apps (runs in parallel with Turbo)
- `bun run build` - Build all apps and packages
- `bun run start` - Start production server
- `bun run preview` - Build and start production server
- `bun run type-check` - Run TypeScript type checking across all workspaces (parallel)
- `bun run lint` - Lint the entire codebase with Biome
- `bun run clean` - Remove all build artifacts, node_modules, and cache directories

### Working with the Documentation Site (apps/www)

```bash
cd apps/www
bun run dev              # Start Next.js dev server with Turbopack
bun run build            # Build the Next.js site
bun run type-check       # Type check the www app
bun run postinstall      # Process MDX files (runs automatically after install)
bun run registry:build   # Build component registry (runs shadcn build)
```

## Code Quality Tools

### Biome Configuration

- Linter and formatter are configured via `biome.json`
- Extends the "ultracite" preset
- **Important rules:**
  - Use **double quotes** for JavaScript/TypeScript strings
  - **No default exports** (except in config files and special cases in overrides)
  - Filenames must be **kebab-case**
  - Use **interfaces** over type aliases (enforced by `useConsistentTypeDefinitions`)
  - Class sorting with `useSortedClasses` for `cva`, `cv`, `cn`, `cx` functions
  - Console logs limited to `info`, `warn`, `error` only

### Git Hooks (Lefthook)

Pre-commit hooks automatically run:

1. **Biome check** - Auto-fixes and stages formatting/linting issues on staged files
2. **Type checking** - Runs on `.ts`, `.tsx` files

Commit message linting enforces conventional commit format.

### Commit Message Format

Use conventional commits:

```
<type>(<scope>): <short description>

[Optional longer description explaining why the change was made]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:

```
feat(www): add command menu

Added command menu for search docs.
```

## Architecture

### Monorepo Structure

This is a Turborepo monorepo with workspaces:

- `apps/*` - Applications (currently only `www` - the documentation site)
- `config/*` - Shared configuration packages (e.g., `tsconfig`)
- `packages/**/*` - Shared packages (currently none, but structure supports them)

### Component Registry System

The heart of Kanpeki is the **registry system** located in `apps/www/src/registry/`:

- `ui/` - UI component implementations (50+ components: accordion, alert, avatar, badge, button, button-group, calendar, card, carousel, checkbox, combobox, dialog, drawer, field, form, input, input-group, menu, pagination, popover, select, sidebar, table, tabs, textarea, tooltip, etc.)
- `lib/` - Shared utilities and helpers
- `hooks/` - React hooks
- `examples/` - Component examples/demos organized into **component folders** (e.g., `examples/button/`, `examples/input/`)
- `styles/` - Registry styles

This registry allows users to copy/paste individual components into their projects rather than installing as an npm package.

### Documentation Architecture (apps/www)

Built with Fumadocs for MDX-based documentation:

- `src/content/docs/` - MDX documentation files:
  - `components/` - Component docs (30+ pages)
  - `installation/` - Installation guides
  - `dark-mode/` - Theme guides
  - `introduction.mdx`, `typography.mdx` - Getting started guides
- `src/app/` - Next.js App Router pages
- `src/components/` - Site-specific components (header, footer, etc.)
- `src/registry/` - Component registry (see Component Registry System section)
- `src/lib/` - Utility functions and shared logic
- `src/styles/` - Global styles and Tailwind configuration
- `src/utils/` - Helper utilities
- `src/hooks/` - Site-specific React hooks
- `src/config/` - Site configuration
- `src/scripts/` - Build and utility scripts

### Key Technologies

- **React 19.2** with Server Components
- **Next.js 16** with App Router and Turbopack
- **React Aria Components** - Accessible component primitives
- **Tailwind CSS 4.1** - Utility-first styling
- **Fumadocs 16** - MDX documentation framework
- **CVA beta** (Class Variance Authority) - Component variants
- **Biome 2.3** - Fast linter/formatter (replaces ESLint/Prettier)
- **Shiki 3** - Syntax highlighting
- **Turbo 2.5** - Monorepo build system

### Styling Patterns

Components use:

- Tailwind CSS for styling
- `cva` for variant management
- `tailwind-merge` (via `cn` utility) for class merging
- `tailwindcss-react-aria-components` plugin for React Aria integration
- `tailwindcss-motion` for animations

### Data Fetching & State

- **TanStack Query 5** for server state management
- **React Hook Form 7** for form handling
- **TanStack Form** for advanced form features
- **Zod 4** for schema validation
- **@hookform/resolvers** for form validation integration

## Working with Components

When creating or modifying components:

1. Place UI components in `apps/www/src/registry/ui/<component-name>/`
2. Create corresponding examples in `apps/www/src/registry/examples/<component-name>/`
3. Add documentation in `apps/www/src/content/docs/components/`
4. Follow existing component patterns (React Aria + Tailwind + CVA)
5. Ensure accessibility with React Aria Components
6. Use kebab-case for file names
7. Export named exports (no default exports)
8. Run `bun run registry:build` to rebuild registry after changes

### Form Component Patterns

For form-related components, use these composition patterns:

- **Field** - Wrapper for form controls with label, description, error
  - `FieldRoot`, `FieldLabel`, `FieldDescription`, `FieldError`, `FieldContent`
  - `FieldSet`, `FieldLegend`, `FieldGroup` for grouping fields
- **InputGroup** - Visual grouping of input with addons
  - `InputGroupRoot`, `InputGroupInput`, `InputGroupTextarea`, `InputGroupAddon`, `InputGroupButton`, `InputGroupText`
- **ButtonGroup** - Group related buttons
  - `ButtonGroupRoot`, `ButtonGroupText`, `ButtonGroupSeparator`

Example combining Field + InputGroup:

```tsx
<FieldRoot>
  <FieldLabel>Email</FieldLabel>
  <InputGroupRoot>
    <InputGroupAddon>
      <MailIcon />
    </InputGroupAddon>
    <InputGroupInput type="email" />
  </InputGroupRoot>
  <FieldError />
</FieldRoot>
```

## TypeScript Configuration

Shared TypeScript config in `config/tsconfig/` workspace package. Note that builds ignore TypeScript errors (`ignoreBuildErrors: true` in Next.js config) - this is intentional for the documentation site but type-check command should still pass.

## Dependencies Management

The monorepo uses **workspace catalog** for dependency versioning. Common dependencies like React, Zod, TanStack libraries are defined in the root `package.json` catalog and referenced with `catalog:` in workspace package.json files. This ensures version consistency across the monorepo.
