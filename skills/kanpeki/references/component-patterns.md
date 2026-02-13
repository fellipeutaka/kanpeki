# Component Patterns

## File Structure

Every Kanpeki component follows this structure:

```
components/ui/<component-name>/
├── index.ts          # Barrel exports (named + namespace)
├── <name>.tsx        # Component implementation
├── styles.ts         # CVA variant definitions
└── namespace.ts      # Namespace re-exports (multi-part components only)
```

## Simple Component Pattern (Button)

### `button.tsx`

```tsx
"use client";

import type { VariantProps } from "cva";
import { composeRenderProps, Button as RACButton } from "react-aria-components";
import { ButtonStyles } from "./styles";

export interface ButtonProps
  extends React.ComponentProps<typeof RACButton>,
    VariantProps<typeof ButtonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <RACButton
      className={composeRenderProps(className, (className) =>
        ButtonStyles({ className, size, variant })
      )}
      data-slot="button"
      {...props}
    />
  );
}
```

### `styles.ts`

```ts
import { cva } from "~/lib/cva";

export const ButtonStyles = cva({
  base: [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "pressed:scale-95",
  ],
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-white hover:bg-destructive/90",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      unstyled: null,
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
```

### `index.ts`

```ts
export * from "./button";
export * from "./styles";
```

## Multi-Part Component Pattern (Dialog)

Multi-part components use namespace exports for grouped imports like `Dialog.Root`, `Dialog.Content`.

### `dialog.tsx` (abbreviated)

```tsx
"use client";

import type { VariantProps } from "cva";
import {
  composeRenderProps,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { DialogStyles } from "./styles";

export function DialogRoot(props: React.ComponentProps<typeof DialogTrigger>) {
  return <DialogTrigger data-slot="dialog-root" {...props} />;
}

export function DialogOverlay({ className, isBlurred, isDismissable = true, ...props }) {
  return (
    <ModalOverlay
      className={composeRenderProps(className, (className) =>
        DialogStyles.Overlay({ className, isBlurred })
      )}
      data-slot="dialog-overlay"
      isDismissable={isDismissable}
      {...props}
    />
  );
}

export function DialogModal({ className, isDismissable = true, ...props }) {
  return (
    <Modal
      className={composeRenderProps(className, (className) =>
        DialogStyles.Modal({ className })
      )}
      data-slot="dialog-modal"
      isDismissable={isDismissable}
      {...props}
    />
  );
}

export function DialogContent({ className, ...props }) {
  return (
    <Dialog
      className={DialogStyles.Content({ className })}
      data-slot="dialog-content"
      {...props}
    />
  );
}

// Also: DialogClose, DialogHeader, DialogFooter, DialogTitle, DialogDescription
```

### `styles.ts` (multi-part)

Multi-part components export a styles object with a key per sub-component:

```ts
import { cva } from "~/lib/cva";

export const DialogStyles = {
  Modal: cva({ base: ["fixed z-50 w-full bg-background p-4 shadow-lg ..."] }),
  Overlay: cva({
    base: ["fixed inset-0 z-50 ..."],
    variants: {
      isBlurred: {
        false: ["bg-black/15 dark:bg-black/60"],
        true: ["backdrop-blur"],
      },
    },
  }),
  Content: cva({ base: ["grid gap-4 outline-none"] }),
  Header: cva({ base: ["flex flex-col gap-2 text-center sm:text-left"] }),
  Footer: cva({ base: ["flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"] }),
  Title: cva({ base: ["font-semibold text-lg leading-none"] }),
  Description: cva({ base: ["text-muted-foreground text-sm"] }),
  Close: cva({ base: ["absolute top-4 right-4 rounded-xs opacity-70 ..."] }),
};
```

### `namespace.ts`

```ts
export {
  DialogClose as Close,
  DialogContent as Content,
  DialogDescription as Description,
  DialogFooter as Footer,
  DialogHeader as Header,
  DialogModal as Modal,
  DialogOverlay as Overlay,
  DialogRoot as Root,
  DialogTitle as Title,
} from "./dialog";
```

### `index.ts`

```ts
export * from "./dialog";
export * as Dialog from "./namespace";
export * from "./styles";
```

### Usage

```tsx
import { Dialog } from "~/components/ui/dialog";

<Dialog.Root>
  <Button>Open Dialog</Button>
  <Dialog.Overlay>
    <Dialog.Modal>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>Description text.</Dialog.Description>
        </Dialog.Header>
        {/* content */}
        <Dialog.Footer>
          <Button>Save</Button>
        </Dialog.Footer>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Modal>
  </Dialog.Overlay>
</Dialog.Root>
```

## Key Patterns

### `composeRenderProps`

Always use `composeRenderProps` from `react-aria-components` when the underlying primitive accepts a render prop for `className`. This ensures React Aria state-based classes (e.g., `pressed:`, `selected:`) work correctly.

```tsx
// Correct
className={composeRenderProps(className, (className) =>
  Styles({ className, variant })
)}

// Wrong — breaks React Aria state selectors
className={Styles({ className, variant })}
```

For non-React Aria elements (plain `div`, `p`, `span`), call the CVA function directly:

```tsx
className={Styles.Header({ className })}
```

### `data-slot` Attribute

Every component element gets a `data-slot` attribute for CSS targeting and debugging:

```tsx
<RACButton data-slot="button" {...props} />
```

### `VariantProps` Typing

Extend component props with `VariantProps` to expose variant props:

```tsx
import type { VariantProps } from "cva";

export interface ButtonProps
  extends React.ComponentProps<typeof RACButton>,
    VariantProps<typeof ButtonStyles> {}
```

## Customizing Components

Since you own the code, edit files directly:

1. **Add a variant** — add to `variants` in `styles.ts`
2. **Change defaults** — update `defaultVariants`
3. **Override styles** — pass `className` prop (merged via `cn`/`twMerge`)
4. **Add sub-components** — add to `.tsx`, export from `namespace.ts` and `index.ts`
