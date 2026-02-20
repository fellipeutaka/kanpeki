# Streaming SSR

## Priority: HIGH

Streaming SSR sends HTML chunks to the browser as they become ready, improving Time to First Byte (TTFB) and perceived performance. TanStack Start supports streaming via React 18's Suspense boundaries.

## Core Pattern: Await Critical, Prefetch Rest

```tsx
export const Route = createFileRoute('/dashboard')({
  loader: async ({ context: { queryClient } }) => {
    // AWAIT critical above-the-fold data
    await queryClient.ensureQueryData(userQueries.profile())

    // PREFETCH non-critical data (don't await)
    queryClient.prefetchQuery(statsQueries.dashboard())
    queryClient.prefetchQuery(activityQueries.recent())
    queryClient.prefetchQuery(notificationQueries.all())

    // HTML starts streaming after profile loads
    // TTFB: ~200ms instead of waiting for all queries
  },
  component: DashboardPage,
})
```

## Suspense Boundaries Define Streaming Chunks

```tsx
function DashboardPage() {
  // Critical data — ready immediately from loader
  const { data: user } = useSuspenseQuery(userQueries.profile())

  return (
    <div>
      <Header user={user} />

      {/* Streams in when stats data resolves */}
      <Suspense fallback={<StatsSkeleton />}>
        <DashboardStats />
      </Suspense>

      {/* Streams independently */}
      <Suspense fallback={<ActivitySkeleton />}>
        <RecentActivity />
      </Suspense>
    </div>
  )
}

function DashboardStats() {
  const { data: stats } = useSuspenseQuery(statsQueries.dashboard())
  return <StatsDisplay stats={stats} />
}
```

## Bad: Blocking All Data

```tsx
// BAD — waits for ALL data before sending any HTML
export const Route = createFileRoute('/dashboard')({
  loader: async ({ context: { queryClient } }) => {
    await Promise.all([
      queryClient.ensureQueryData(userQueries.profile()),      // 200ms
      queryClient.ensureQueryData(statsQueries.dashboard()),   // 500ms
      queryClient.ensureQueryData(activityQueries.recent()),   // 300ms
    ])
    // TTFB: 500ms (slowest query)
  },
})
```

## Nested Suspense Boundaries

Group related content within the same boundary, separate independent sections.

```tsx
function DashboardPage() {
  const { data: user } = useSuspenseQuery(userQueries.profile())

  return (
    <div>
      <Header user={user} />

      <div className="grid grid-cols-2 gap-4">
        {/* Left column streams together */}
        <Suspense fallback={<LeftColumnSkeleton />}>
          <LeftColumn />
        </Suspense>

        {/* Right column streams independently */}
        <Suspense fallback={<RightColumnSkeleton />}>
          <RightColumn />
        </Suspense>
      </div>
    </div>
  )
}

function LeftColumn() {
  // Both load together (same Suspense boundary)
  const { data: stats } = useSuspenseQuery(statsQueries.dashboard())
  const { data: chart } = useSuspenseQuery(statsQueries.chartData())

  return (
    <>
      <StatsCard stats={stats} />
      <ChartDisplay data={chart} />
    </>
  )
}
```

## Error Boundaries with Streaming

Each streamed section can handle its own errors independently.

```tsx
function DashboardPage() {
  return (
    <div>
      <Header />

      <ErrorBoundary fallback={<StatsError />}>
        <Suspense fallback={<StatsSkeleton />}>
          <DashboardStats />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<ActivityError />}>
        <Suspense fallback={<ActivitySkeleton />}>
          <RecentActivity />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
```

## Streaming Timeline

```
Traditional SSR:
Request → [Wait for all data...] → Send complete HTML → Render

Streaming SSR:
Request → Send shell + critical data → Stream chunk 1 → Stream chunk 2 → Done
          ↓                            ↓                ↓
          Renders skeleton             Shows stats       Shows activity
```

## Rules

- **ALWAYS** await critical above-the-fold data in loaders
- **ALWAYS** use `prefetchQuery` (not `ensureQueryData`) for non-critical data
- Wrap non-critical sections in `<Suspense>` with skeleton fallbacks
- Pair `<ErrorBoundary>` with `<Suspense>` for independent error handling
- Don't create too many Suspense boundaries — each adds a streaming chunk
- Monitor TTFB to verify streaming is effective
