---
name: kanpeki
description: "Use Kanpeki component library in React projects. Activate when user wants to add, use, customize, or compose accessible UI components from Kanpeki (@kanpeki/*). Triggers: shadcn CLI, copy-paste components, Field.Root, composeRenderProps, ~/components/ui/*, React Aria Components + Tailwind CSS 4.1 + CVA. Covers installation, component patterns, forms (React Hook Form, TanStack Form), theming, and dark mode."
---

# Kanpeki

Kanpeki is a copy-paste component library for React. Components are copied into your project (not installed as npm packages) via the shadcn CLI. Built on **React Aria Components** (accessibility), **CVA beta** (variants), and **Tailwind CSS 4.1** (styling).

Docs: https://kanpeki.vercel.app

## Quick Start

Install dependencies, create `~/lib/cva.ts`, configure `globals.css`, then add components:

```bash
npx shadcn@latest add @kanpeki/button
```

Components are copied to `~/components/ui/<name>/`. You own the code.

See [references/installation-setup.md](references/installation-setup.md) for full setup (deps, CVA config, globals.css, dark mode, path alias).

## Component Architecture

Each component has: `index.ts` (exports), `<name>.tsx` (implementation), `styles.ts` (CVA variants).

- **Simple components** — single export: `import { Button } from "~/components/ui/button"`
- **Multi-part components** — namespace exports: `import { Dialog } from "~/components/ui/dialog"` → `Dialog.Root`, `Dialog.Content`, etc.

Multi-part components: Accordion, Breadcrumb, ButtonGroup, Calendar, Card, Carousel, Chart, Combobox, DateField, DatePicker, Dialog, Drawer, Field, InputGroup, ListBox, Menu, NumberField, Pagination, Popover, RadioGroup, Resizable, ScrollArea, SearchField, Select, Sheet, Sidebar, Slider, Table, Tabs, Toast, ToggleGroup, Tooltip.

**Key rule:** Always use `composeRenderProps` from `react-aria-components` on React Aria primitives — required for state selectors (`pressed:`, `selected:`, etc.). For plain HTML elements, call CVA directly.

See [references/component-patterns.md](references/component-patterns.md) for full examples (Button, Dialog, namespace pattern, customization).

## Form System

3-layer architecture: **Form** > **Field** > **Input component**.

`Field.Root`'s `render` prop connects to a React Aria form primitive (TextField, Select, NumberField, etc.) for automatic label association and validation.

### Form Library Integration

1. Determine the form library:
   - **React Hook Form?** → See [references/form-react-hook-form.md](references/form-react-hook-form.md)
   - **TanStack Form?** → See [references/form-tanstack-form.md](references/form-tanstack-form.md)
   - **Native HTML validation only?** → Use React Aria `<Form>` + `isRequired` on primitives

All libraries use the same `Field.Root render={<Primitive>}` pattern. `Field.Error` accepts an `errors` prop — `undefined` entries are silently ignored.

See [references/form-system.md](references/form-system.md) for Field/InputGroup/ButtonGroup API details.

## Styling & Theming

- **CVA** — variant definitions in `styles.ts`. Import `cva` from `~/lib/cva` (not `cva` directly).
- **`cn()`** — class merging utility from `~/lib/cva`. Wraps `twMerge`.
- **OKLCH colors** — defined in `globals.css` via `@theme inline`. Use `light-dark()` for automatic dark mode.
- **Dark mode** — `next-themes` (class strategy) + CSS `light-dark()`. Components auto-switch.
- **React Aria selectors** — `pressed:`, `selected:`, `disabled:`, `entering:`, `exiting:`, `focus-visible:`.
- **Animations** — `tailwindcss-motion` plugin: `motion-opacity-in`, `motion-scale-in-95`, `motion-duration-200`.

Override styles by passing `className` (twMerge resolves conflicts) or editing `styles.ts` directly.

See [references/styling-and-theming.md](references/styling-and-theming.md) for full token reference and CVA deep dive.

## Common Pitfalls

| Pitfall | Fix |
|---|---|
| Using `className={Styles(...)}` on React Aria components | Use `composeRenderProps` — required for state selectors |
| Missing `"use client"` directive | All interactive components need it (React Aria is client-only) |
| Importing `cva` from `"cva"` | Import from `~/lib/cva` — includes `twMerge` hook |
| Old shadcn deps installed (`class-variance-authority`, `clsx`) | Remove them, use `cva@beta` + `tailwind-merge` |
| Using `active:` for press state | Use `pressed:` — React Aria prefix |
| Using `@/` path alias | Kanpeki uses `~/` |

## Component List

Install any component: `npx shadcn@latest add @kanpeki/<name>`

**Layout & Structure:** card, separator, aspect-ratio, resizable, scroll-area, sidebar, collapsible, carousel

**Form Inputs:** input, textarea, text-field, number-field, search-field, checkbox, radio-group, select, combobox, autocomplete, switch, slider, date-field, date-picker, calendar, input-otp, dropzone, field, form, input-group

**Buttons & Actions:** button, button-group, link, link-button, toggle, toggle-group

**Overlays:** dialog, drawer, sheet, popover, tooltip, menu

**Data Display:** table, list-box, accordion, tabs, avatar, badge, keyboard, chart

**Feedback:** alert, toast, progress, spinner, skeleton

**Navigation:** breadcrumb, pagination

**Utilities:** label

## References

- [Installation & Setup](references/installation-setup.md) — full CSS, CVA config, dark mode, path alias
- [Component Patterns](references/component-patterns.md) — Button + Dialog examples, namespace pattern, customization
- [Form System](references/form-system.md) — Field/InputGroup/ButtonGroup API, native HTML validation
- [React Hook Form](references/form-react-hook-form.md) — Controller patterns, all field types (Select, Checkbox, Switch, arrays)
- [TanStack Form](references/form-tanstack-form.md) — form.Field patterns, Zod validation
- [Styling & Theming](references/styling-and-theming.md) — CVA deep dive, OKLCH tokens, React Aria selectors, animations
