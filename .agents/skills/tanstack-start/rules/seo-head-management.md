# SEO and Head Management

## Priority: HIGH

TanStack Start provides per-route `head()` for managing meta tags, titles, and links. Use `<HeadContent />` in the root route to render them. All head tags are SSR'd for crawlers.

## Basic Route Head

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us — My App' },
      { name: 'description', content: 'Learn about our company and mission.' },
    ],
  }),
  component: AboutPage,
})
```

## Dynamic Head from Loader Data

```tsx
export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const post = await fetchPost(params.slug)
    return { post }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.post.title} — Blog` },
      { name: 'description', content: loaderData.post.excerpt },
    ],
  }),
  component: BlogPost,
})
```

## Open Graph and Twitter Cards

```tsx
head: ({ loaderData }) => ({
  meta: [
    { title: loaderData.post.title },
    { name: 'description', content: loaderData.post.excerpt },
    // Open Graph
    { property: 'og:title', content: loaderData.post.title },
    { property: 'og:description', content: loaderData.post.excerpt },
    { property: 'og:image', content: loaderData.post.coverImage },
    { property: 'og:type', content: 'article' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: loaderData.post.title },
    { name: 'twitter:description', content: loaderData.post.excerpt },
    { name: 'twitter:image', content: loaderData.post.coverImage },
  ],
})
```

## Root Route Setup

The root route must include `<HeadContent />` and `<Scripts />`:

```tsx
// routes/__root.tsx
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/styles/app.css' },
    ],
  }),
  component: () => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
})
```

## Links (Stylesheets, Fonts, Canonical)

```tsx
head: () => ({
  meta: [{ title: 'Home' }],
  links: [
    { rel: 'stylesheet', href: appCss },
    { rel: 'canonical', href: 'https://example.com/' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
  ],
})
```

## Structured Data (JSON-LD)

```tsx
head: ({ loaderData }) => ({
  meta: [{ title: loaderData.post.title }],
  scripts: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: loaderData.post.title,
        author: { '@type': 'Person', name: loaderData.post.author },
        datePublished: loaderData.post.publishedAt,
      }),
    },
  ],
})
```

## SEO Helper Pattern

```tsx
// utils/seo.ts
export function seo({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image?: string
}) {
  const meta: Array<Record<string, string>> = [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
  ]

  if (image) {
    meta.push(
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: image },
    )
  }

  return meta
}

// Usage in route:
head: () => ({
  meta: seo({
    title: 'About Us — My App',
    description: 'Learn about our company.',
  }),
})
```

## Rules

- **ALWAYS** include `<HeadContent />` in the root route's `<head>`
- **ALWAYS** include `<Scripts />` before `</body>` in the root route
- **ALWAYS** set `charSet` and `viewport` meta in the root route head
- Use `head()` on every route for page-specific title and description
- Access loader data in `head()` via `({ loaderData })` for dynamic pages
- Use the `links` array for stylesheets, canonical URLs, and favicons
