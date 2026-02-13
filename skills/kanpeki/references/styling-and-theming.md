# Styling & Theming

## CVA (Class Variance Authority)

Kanpeki uses CVA beta (not the stable `class-variance-authority` package).

### Basic CVA Usage

```ts
import { cva } from "~/lib/cva";

export const ButtonStyles = cva({
  base: ["inline-flex items-center justify-center rounded-md"],
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      destructive: "bg-destructive text-white",
      outline: "border bg-background",
    },
    size: {
      default: "h-9 px-4",
      sm: "h-8 px-3",
      lg: "h-10 px-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
```

### Compound Variants

```ts
export const Styles = cva({
  base: ["..."],
  variants: {
    variant: { primary: "...", secondary: "..." },
    size: { sm: "...", lg: "..." },
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "lg",
      className: "font-bold",
    },
  ],
});
```

### Multi-Part Styles

For multi-part components, export a styles object:

```ts
export const DialogStyles = {
  Modal: cva({ base: ["..."] }),
  Overlay: cva({ base: ["..."], variants: { isBlurred: { true: "backdrop-blur" } } }),
  Content: cva({ base: ["..."] }),
  // ...
};
```

## `cn()` Utility

`cn` is `cx` (from CVA) re-exported with a `twMerge` hook. Use it to merge classes:

```tsx
import { cn } from "~/lib/cva";

cn("px-4 py-2", condition && "bg-primary", className);
// twMerge resolves conflicts automatically
```

## Color Tokens (OKLCH)

All colors use CSS `light-dark()` with OKLCH values. They auto-switch between light/dark mode.

| Token | Usage |
|---|---|
| `background` / `foreground` | Page background and text |
| `card` / `card-foreground` | Card surfaces |
| `popover` / `popover-foreground` | Popovers, dropdowns, tooltips |
| `primary` / `primary-foreground` | Primary actions (buttons, links) |
| `secondary` / `secondary-foreground` | Secondary actions |
| `muted` / `muted-foreground` | Muted backgrounds and text |
| `accent` / `accent-foreground` | Hover states, subtle backgrounds |
| `destructive` | Destructive actions (delete, error) |
| `border` | Default border color |
| `input` | Input border color |
| `ring` | Focus ring color |
| `chart-1` through `chart-5` | Chart colors |
| `sidebar-*` | Sidebar-specific tokens |

### Customizing Colors

Override in `globals.css` under `@theme inline`:

```css
@theme inline {
  --color-primary: light-dark(oklch(0.6 0.2 260), oklch(0.7 0.2 260));
  --color-primary-foreground: light-dark(oklch(1 0 0), oklch(1 0 0));
}
```

### Adding New Tokens

```css
@theme inline {
  --color-success: light-dark(oklch(0.7 0.2 145), oklch(0.6 0.2 145));
  --color-success-foreground: light-dark(oklch(1 0 0), oklch(1 0 0));
}
```

Then use as `bg-success text-success-foreground` in Tailwind classes.

## React Aria State Selectors

The `tailwindcss-react-aria-components` plugin adds these Tailwind prefixes:

| Prefix | React Aria State |
|---|---|
| `pressed:` | Button/toggle press state (use instead of `active:`) |
| `selected:` | Selected state (checkboxes, toggles, tabs) |
| `disabled:` | Disabled state |
| `focus-visible:` | Keyboard focus |
| `entering:` | Animation enter state (modals, popovers) |
| `exiting:` | Animation exit state |
| `placement-top:` | Tooltip/popover placement |
| `placement-bottom:` | Tooltip/popover placement |
| `dragging:` | Drag state |
| `drop-target:` | Drop target state |
| `indeterminate:` | Indeterminate checkbox state |
| `readonly:` | Read-only input state |
| `invalid:` | Invalid form state |
| `required:` | Required field state |

### Usage

```tsx
<Button className="pressed:scale-95 selected:bg-primary">
  Toggle
</Button>
```

## `tailwindcss-motion` Plugin

Provides animation utilities:

```tsx
// Enter animations
"entering:motion-opacity-in motion-duration-200"
"entering:motion-scale-in-95"

// Exit animations
"exiting:motion-opacity-out"
"exiting:motion-scale-out-95"

// General
"motion-ease"
"motion-duration-200"
```

## Dark Mode

Dark mode is handled at the CSS level via `light-dark()`. Components rarely need explicit `dark:` prefixes.

When you do need dark-specific overrides:

```tsx
"bg-black/15 dark:bg-black/60"
"dark:border-input dark:bg-input/30"
```

The custom variant `@custom-variant dark (&:is(.dark *))` enables the `dark:` prefix via the class strategy (controlled by `next-themes`).

## Overriding Component Styles

Pass `className` to any component — `twMerge` resolves conflicts:

```tsx
<Button className="rounded-full px-8" variant="default">
  Custom Button
</Button>
```

For permanent changes, edit `styles.ts` directly — you own the code.
