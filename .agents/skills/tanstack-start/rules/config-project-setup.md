# Project Setup and Configuration

## Priority: MEDIUM

TanStack Start is a Vite-based full-stack React framework. The minimal setup requires a Vite config, a root route, and `@tanstack/react-start`.

## Scaffolding a New Project

```bash
pnpm create @tanstack/start@latest my-app
cd my-app
pnpm install
pnpm dev
```

Optional add-ons during setup: Shadcn, Clerk, Convex, etc.

## Manual Setup

### 1. Install

```bash
npm install @tanstack/react-start @tanstack/react-router react react-dom
npm install -D @tanstack/router-plugin typescript vite @vitejs/plugin-react
```

### 2. Vite Config

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  plugins: [tanstackStart(), react()],
})
```

### 3. Root Route

The root route owns the entire HTML document:

```tsx
// src/routes/__root.tsx
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [{ rel: 'icon', href: '/favicon.ico' }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
```

### 4. Index Route

```tsx
// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return <h1>Hello, TanStack Start!</h1>
}
```

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root route (HTML shell)
│   ├── index.tsx           # / route
│   ├── about.tsx           # /about route
│   ├── _authed.tsx         # Auth layout (pathless)
│   ├── _authed/
│   │   └── dashboard.tsx   # /dashboard (protected)
│   └── api/
│       └── health.ts       # /api/health API route
├── server/
│   └── auth.ts             # Server functions
├── lib/
│   ├── middleware.ts        # Shared middleware
│   └── schemas.ts          # Shared validation schemas
└── components/
    └── ...
```

## With TanStack Query

```bash
npm install @tanstack/react-query
```

```tsx
// src/routes/__root.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRouteWithContext } from '@tanstack/react-router'

export interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
})

// src/router.tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity }, // Server data is fresh from loader
  },
})

const router = createRouter({
  routeTree,
  context: { queryClient },
})
```

## TypeScript Config

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "paths": {
      "~/*": ["./src/*"]
    }
  }
}
```

## Rules

- **ALWAYS** include `<HeadContent />` in `<head>` and `<Scripts />` before `</body>`
- The root route owns the full HTML document (`<html>`, `<head>`, `<body>`)
- Use `tanstackStart()` Vite plugin — it handles SSR, code splitting, and route generation
- Place server functions in `src/server/` to keep them separate from components
- Use `createRootRouteWithContext` when integrating TanStack Query
- Set `staleTime: Infinity` for queries loaded in route loaders (data is already fresh)
