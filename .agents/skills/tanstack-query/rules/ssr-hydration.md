# SSR & Hydration

## QueryClient Per Request

In SSR, create a new QueryClient for each request to prevent data leaking between users.

```tsx
// ❌ Shared client — data leaks between requests
const queryClient = new QueryClient()

// ✅ Per-request client
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60, // 1 min — avoid immediate refetch on client
      },
    },
  })
}
```

## Next.js App Router (Server Components)

```tsx
// src/app/providers.tsx
'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

## Dehydrate/Hydrate Pattern

Prefetch on the server, serialize to the client, hydrate into the client cache.

```tsx
// Server Component
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

export default async function TodosPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TodoList />
    </HydrationBoundary>
  )
}

// Client Component
'use client'
function TodoList() {
  // Data is already in cache from server prefetch
  const { data } = useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  return <ul>{data.map(t => <li key={t.id}>{t.title}</li>)}</ul>
}
```

## Set staleTime on Server

Set `staleTime > 0` for SSR to prevent the client from immediately refetching data that was just fetched on the server.

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // Data stays fresh for 1 min after SSR
    },
  },
})
```

## Next.js Pages Router

```tsx
// _app.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() =>
    new QueryClient({
      defaultOptions: { queries: { staleTime: 1000 * 60 } },
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
```

## Known Hydration Issues

### useQuery + Server Prefetch Mismatch

`useQuery` with server prefetch can cause hydration errors because the server renders `isLoading` state but the client synchronously resolves the prefetched data.

```tsx
// ❌ Causes hydration mismatch
function Todos() {
  const { data, isLoading } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos })
  if (isLoading) return <div>Loading...</div> // Server renders this
  return <div>{data.length} todos</div>        // Client renders this
}

// ✅ Use useSuspenseQuery for SSR
function Todos() {
  const { data } = useSuspenseQuery({ queryKey: ['todos'], queryFn: fetchTodos })
  return <div>{data.length} todos</div>
}
```

### Streaming SSR + useSuspenseQuery

When using `void prefetchQuery` (streaming/non-awaited), don't conditionally render based on `fetchStatus`:

```tsx
// ❌ Hydration mismatch with streaming prefetch
const { data, isFetching } = useSuspenseQuery(...)
return <>{data && <div>{data}</div>} {isFetching && <Loading />}</>

// ✅ Don't render based on fetchStatus with Suspense
const { data } = useSuspenseQuery(...)
return <div>{data}</div>
```
