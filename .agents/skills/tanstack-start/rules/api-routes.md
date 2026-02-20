# API Routes

## Priority: MEDIUM

TanStack Start supports API routes via `createAPIFileRoute`. These are standalone HTTP endpoints that don't render React components — useful for webhooks, REST APIs, and third-party integrations.

## Basic API Route

```tsx
// routes/api/health.ts
import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/health')({
  GET: async () => {
    return Response.json({ status: 'ok', timestamp: Date.now() })
  },
})
```

## REST Handlers

```tsx
// routes/api/posts.ts
export const APIRoute = createAPIFileRoute('/api/posts')({
  GET: async () => {
    const posts = await db.posts.findMany()
    return Response.json(posts)
  },

  POST: async ({ request }) => {
    const body = await request.json()
    const post = await db.posts.create({ data: body })
    return Response.json(post, { status: 201 })
  },
})
```

## Dynamic Params

```tsx
// routes/api/posts/$postId.ts
export const APIRoute = createAPIFileRoute('/api/posts/$postId')({
  GET: async ({ params }) => {
    const post = await db.posts.findUnique({
      where: { id: params.postId },
    })

    if (!post) {
      return Response.json({ error: 'Not found' }, { status: 404 })
    }

    return Response.json(post)
  },

  DELETE: async ({ params }) => {
    await db.posts.delete({ where: { id: params.postId } })
    return new Response(null, { status: 204 })
  },
})
```

## Webhooks

```tsx
// routes/api/webhooks/stripe.ts
export const APIRoute = createAPIFileRoute('/api/webhooks/stripe')({
  POST: async ({ request }) => {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return Response.json({ error: 'Missing signature' }, { status: 400 })
    }

    try {
      const event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!,
      )

      switch (event.type) {
        case 'checkout.session.completed':
          await handleCheckoutComplete(event.data.object)
          break
      }

      return Response.json({ received: true })
    } catch (err) {
      return Response.json({ error: 'Invalid signature' }, { status: 400 })
    }
  },
})
```

## Custom Headers and Status

```tsx
export const APIRoute = createAPIFileRoute('/api/data')({
  GET: async () => {
    const data = await fetchData()

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=60',
        'Access-Control-Allow-Origin': '*',
      },
    })
  },
})
```

## API Routes vs Server Functions

| Feature | API Routes | Server Functions |
|---------|-----------|-----------------|
| Use case | External APIs, webhooks | Internal app logic |
| URL | Explicit URL path | Auto-generated RPC endpoint |
| Methods | GET, POST, PUT, DELETE, etc. | GET or POST only |
| Response | Raw `Response` object | Serialized return value |
| Type safety | Manual | End-to-end typed |
| Called from | Any HTTP client | Components, loaders, other server fns |

## Rules

- Use API routes for webhooks and external integrations
- Use server functions for internal app data fetching and mutations
- Always validate webhook signatures before processing
- Return appropriate HTTP status codes
- Use `Response.json()` for JSON responses
- API routes follow the same file-based routing as pages (`routes/api/...`)
