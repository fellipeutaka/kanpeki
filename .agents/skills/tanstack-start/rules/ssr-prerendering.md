# Static Prerendering and ISR

## Priority: MEDIUM

Prerendering generates HTML at build time for pages that don't need request-time data. ISR (Incremental Static Regeneration) extends this via Cache-Control headers.

## Static Prerendering

```ts
// vite.config.ts (or app.config.ts)
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        prerender: {
          routes: ['/', '/about', '/contact', '/pricing'],
          // Or crawl from root
          crawlLinks: true,
        },
      },
    }),
  ],
})
```

## Dynamic Prerendering

```ts
tanstackStart({
  server: {
    prerender: {
      routes: async () => {
        const posts = await db.posts.findMany({
          where: { published: true },
          select: { slug: true },
        })

        return [
          '/',
          '/blog',
          ...posts.map((p) => `/blog/${p.slug}`),
        ]
      },
    },
  },
})
```

## ISR via Cache-Control

For pages that change occasionally but don't need per-request SSR:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { setHeaders } from '@tanstack/react-start/server'

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const post = await fetchPost(params.slug)

    // Cache for 60s, serve stale for 5min while revalidating
    setHeaders({
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    })

    return { post }
  },
})
```

### Cache-Control Cheatsheet

| Directive | Meaning |
|-----------|---------|
| `s-maxage=N` | CDN cache duration (seconds) |
| `max-age=N` | Browser cache duration |
| `stale-while-revalidate=N` | Serve stale while fetching fresh |
| `private` | Don't cache on CDN (user-specific data) |
| `no-store` | Never cache |

## Hybrid: Static + ISR + SSR

```tsx
// Static — prerendered at build time
// routes/about.tsx
export const Route = createFileRoute('/about')({
  loader: async () => {
    // Runs at BUILD time
    return { content: await fetchAboutContent() }
  },
})

// ISR — cached, revalidated periodically
// routes/blog/$slug.tsx
export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const post = await fetchPost(params.slug)
    setHeaders({
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    })
    return { post }
  },
})

// SSR — always fresh, per-request
// routes/cart.tsx
export const Route = createFileRoute('/cart')({
  loader: async ({ context }) => {
    setHeaders({ 'Cache-Control': 'private, no-store' })
    return { cart: await fetchUserCart(context.user.id) }
  },
})
```

## Rules

- Use prerendering for truly static pages (about, pricing, docs)
- Use ISR (Cache-Control) for content that changes but not per-request
- Always SSR for user-specific or real-time data
- Prerendering runs at build time — no request context or auth available
- ISR requires CDN/edge support (Vercel, Cloudflare, etc.)
- Test with production builds — dev server always uses SSR
