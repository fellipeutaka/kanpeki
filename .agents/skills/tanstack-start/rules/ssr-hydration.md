# Hydration Safety

## Priority: MEDIUM

Hydration errors occur when server-rendered HTML doesn't match the client's initial render. React discards the server HTML and re-renders from scratch, losing SSR benefits (flash of content, slower load).

## Common Causes and Fixes

| Cause | Fix |
|-------|-----|
| `Date.now()` / `new Date()` | Pass timestamp from loader |
| `Math.random()` | Generate on server, pass to client |
| `window` / `document` access | Use `useEffect` or lazy loading |
| Timezone differences | Use UTC or client-only formatting |
| Browser extension–injected content | Use `suppressHydrationWarning` |

## Bad: Non-Deterministic Rendering

```tsx
// BAD — different on server and client
function Timestamp() {
  return <span>{Date.now()}</span>
}

// BAD — window doesn't exist on server
function DeviceInfo() {
  return <span>{window.innerWidth}px</span>
}

// BAD — timezone may differ
function TimeGreeting() {
  const hour = new Date().getHours()
  return hour < 12 ? <Morning /> : <Evening />
}
```

## Good: Pass Dynamic Values from Loaders

```tsx
export const Route = createFileRoute('/dashboard')({
  loader: async () => ({
    generatedAt: Date.now(),
    welcomeVariant: Math.floor(Math.random() * 3),
  }),
  component: Dashboard,
})

function Dashboard() {
  const { generatedAt, welcomeVariant } = Route.useLoaderData()
  // Both server and client use the same values
  return <span>Generated at: {generatedAt}</span>
}
```

## Good: Client-Only with useEffect

```tsx
function WindowSize() {
  const [size, setSize] = useState<{ w: number; h: number } | null>(null)

  useEffect(() => {
    setSize({ w: window.innerWidth, h: window.innerHeight })
  }, [])

  if (!size) return <span>Loading...</span>
  return <span>{size.w} x {size.h}</span>
}
```

## Good: Lazy Loading Client-Only Components

```tsx
import { lazy, Suspense } from 'react'

const ClientOnlyMap = lazy(() => import('./Map'))

function LocationPage() {
  return (
    <Suspense fallback={<MapPlaceholder />}>
      <ClientOnlyMap />
    </Suspense>
  )
}
```

## Good: Client-Only Date Formatting

```tsx
function RelativeTime({ date }: { date: string }) {
  const [formatted, setFormatted] = useState<string>('')

  useEffect(() => {
    setFormatted(formatDistanceToNow(new Date(date), { addSuffix: true }))
  }, [date])

  // Show ISO date initially (same server/client), then user's locale
  return (
    <time dateTime={date}>
      {formatted || new Date(date).toISOString().split('T')[0]}
    </time>
  )
}
```

## Rules

- **NEVER** use `Date.now()`, `Math.random()`, or `window` in render output
- Pass dynamic/random values from loaders so server and client agree
- Use `useEffect` for client-only state (window size, locale, etc.)
- Use `lazy()` + `<Suspense>` for components that require browser APIs
- Use `suppressHydrationWarning` only as a last resort (e.g., extension-injected content)
- Test SSR by disabling JavaScript — the server HTML should be correct
