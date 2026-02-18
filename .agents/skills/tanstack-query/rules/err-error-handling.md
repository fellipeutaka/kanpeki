# Error Handling

## throwOnError with Error Boundaries

v5 renamed `useErrorBoundary` to `throwOnError`. Propagates query errors to the nearest React error boundary.

```tsx
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              Something went wrong.
              <button onClick={resetErrorBoundary}>Retry</button>
            </div>
          )}
        >
          <Todos />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

function Todos() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    throwOnError: true, // ✅ v5 (was useErrorBoundary)
  })
  return <ul>{data.map(t => <li key={t.id}>{t.title}</li>)}</ul>
}
```

`throwOnError` also accepts a function for conditional propagation:

```tsx
throwOnError: (error) => error.status >= 500 // Only 5xx errors go to boundary
```

## Retry Configuration

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,                    // Default: 3 retries
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    },
  },
})

// Per-query override
useQuery({
  queryKey: ['critical-data'],
  queryFn: fetchCriticalData,
  retry: 5,
  retryDelay: 1000,
})

// Disable retries (useful for 4xx errors)
useQuery({
  queryKey: ['user'],
  queryFn: fetchUser,
  retry: (failureCount, error) => {
    if (error.status === 404) return false // Don't retry 404s
    return failureCount < 3
  },
})
```

## Error Type Default

v5 defaults error type to `Error` (v4 used `unknown`). If throwing non-Error types, specify explicitly:

```tsx
// Default: error is Error | null
const { error } = useQuery({ queryKey: ['data'], queryFn: fetchData })

// Custom error type
const { error } = useQuery<DataType, ApiError>({
  queryKey: ['data'],
  queryFn: fetchData,
})
// error: ApiError | null
```

Best practice: always throw `Error` objects from queryFn.

## Inline Error Handling

For non-critical errors that shouldn't crash the component:

```tsx
function Todos() {
  const { data, error, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (isError) return <div>Error: {error.message}</div>

  return <ul>{data?.map(t => <li key={t.id}>{t.title}</li>)}</ul>
}
```

## refetchOnMount with Errored Queries

`refetchOnMount: false` is **ignored** for queries in error state — errors are always considered stale. Use `retryOnMount: false` instead:

```tsx
// ❌ Still refetches if query previously errored
useQuery({
  queryKey: ['data'],
  queryFn: failingFetch,
  refetchOnMount: false,
})

// ✅ Prevents refetch on mount for errored queries
useQuery({
  queryKey: ['data'],
  queryFn: failingFetch,
  refetchOnMount: false,
  retryOnMount: false,
  retry: 0,
})
```
