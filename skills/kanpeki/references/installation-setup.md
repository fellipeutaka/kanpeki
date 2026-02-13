# Installation & Setup

## Prerequisites

- Next.js 16+ with App Router
- React 19+
- Tailwind CSS 4.1+
- TypeScript 5+

## 1. Install Core Dependencies

```bash
npm install cva@beta tailwind-merge tailwindcss-motion tailwindcss-react-aria-components react-aria-components -D
```

**Remove shadcn defaults** (if previously installed):

```bash
npm remove class-variance-authority clsx tw-animate-css
```

## 2. Configure CVA Utility

Create `src/lib/cva.ts`:

```ts
import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

export const { cva, cx: cn, compose } = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});
```

- `cva` — variant management
- `cn` — class merging (re-exported `cx` with `twMerge` hook)
- `compose` — combine multiple CVA recipes

## 3. Configure Global Styles

Create or replace `src/styles/globals.css`:

```css
@import "tailwindcss";

@plugin "tailwindcss-react-aria-components";
@plugin "tailwindcss-motion";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-sans:
    var(--font-sans), ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-mono:
    var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;

  --radius: 0.625rem;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --color-background: light-dark(oklch(1 0 0), oklch(0.145 0 0));
  --color-foreground: light-dark(oklch(0.145 0 0), oklch(0.985 0 0));
  --color-card: light-dark(oklch(1 0 0), oklch(0.205 0 0));
  --color-card-foreground: light-dark(oklch(0.145 0 0), oklch(0.985 0 0));
  --color-popover: light-dark(oklch(1 0 0), oklch(0.205 0 0));
  --color-popover-foreground: light-dark(oklch(0.145 0 0), oklch(0.985 0 0));
  --color-primary: light-dark(oklch(0.85 0.2 93), oklch(0.85 0.2 93));
  --color-primary-foreground: light-dark(oklch(0 0 0), oklch(0 0 0));
  --color-secondary: light-dark(oklch(0.97 0 0), oklch(0.269 0 0));
  --color-secondary-foreground: light-dark(oklch(0.205 0 0), oklch(0.985 0 0));
  --color-muted: light-dark(oklch(0.97 0 0), oklch(0.269 0 0));
  --color-muted-foreground: light-dark(oklch(0.556 0 0), oklch(0.708 0 0));
  --color-accent: light-dark(oklch(0.97 0 0), oklch(0.269 0 0));
  --color-accent-foreground: light-dark(oklch(0.205 0 0), oklch(0.985 0 0));
  --color-destructive: light-dark(
    oklch(0.577 0.245 27.325),
    oklch(0.704 0.191 22.216)
  );
  --color-border: light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%));
  --color-input: light-dark(oklch(0.922 0 0), oklch(1 0 0 / 15%));
  --color-ring: light-dark(oklch(0.708 0 0), oklch(0.556 0 0));
  --color-chart-1: light-dark(
    oklch(0.646 0.222 41.116),
    oklch(0.488 0.243 264.376)
  );
  --color-chart-2: light-dark(
    oklch(0.6 0.118 184.704),
    oklch(0.696 0.17 162.48)
  );
  --color-chart-3: light-dark(
    oklch(0.398 0.07 227.392),
    oklch(0.769 0.188 70.08)
  );
  --color-chart-4: light-dark(
    oklch(0.828 0.189 84.429),
    oklch(0.627 0.265 303.9)
  );
  --color-chart-5: light-dark(
    oklch(0.769 0.188 70.08),
    oklch(0.645 0.246 16.439)
  );
  --color-sidebar: light-dark(oklch(0.985 0 0), oklch(0.205 0 0));
  --color-sidebar-foreground: light-dark(oklch(0.145 0 0), oklch(0.985 0 0));
  --color-sidebar-primary: light-dark(
    oklch(0.205 0 0),
    oklch(0.488 0.243 264.376)
  );
  --color-sidebar-primary-foreground: light-dark(
    oklch(0.985 0 0),
    oklch(0.985 0 0)
  );
  --color-sidebar-accent: light-dark(oklch(0.97 0 0), oklch(0.269 0 0));
  --color-sidebar-accent-foreground: light-dark(
    oklch(0.205 0 0),
    oklch(0.985 0 0)
  );
  --color-sidebar-border: light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%));
  --color-sidebar-ring: light-dark(oklch(0.708 0 0), oklch(0.556 0 0));
}

@utility container {
  padding-inline: 2rem;
  margin-inline: auto;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-color: var(--color-border) transparent;
    scrollbar-width: thin;

    &.light {
      color-scheme: light;
    }

    &.dark {
      color-scheme: dark;
    }
  }

  body {
    font-synthesis-weight: none;
    text-rendering: optimizeLegibility;
    @apply bg-background text-foreground antialiased font-sans;
  }

  input:-webkit-autofill {
    background-clip: text;
  }

  ::selection {
    color: var(--color-background);
    background: var(--color-foreground);
  }
}
```

## 4. Dark Mode Setup

Install `next-themes`:

```bash
npm install next-themes
```

Create `src/components/providers.tsx`:

```tsx
"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

Wrap in `src/app/layout.tsx`:

```tsx
import { Providers } from "~/components/providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

Dark mode works automatically via CSS `light-dark()` function — no manual `dark:` prefixes needed in components.

## 5. Add Your First Component

```bash
npx shadcn@latest add @kanpeki/button
```

This copies the component files to your project (typically `~/components/ui/button/`). You own the code — edit freely.

## Path Alias

Kanpeki uses `~/` path alias (not `@/`). Configure in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "~/*": ["./src/*"]
    }
  }
}
```
