# Offline Support

## Network Mode

Control query behavior when offline.

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'offlineFirst', // Use cache when offline
    },
  },
})

// Per-query override
useQuery({
  queryKey: ['local-data'],
  queryFn: fetchFromLocalAPI,
  networkMode: 'always', // Always try (for local/service worker APIs)
})
```

| Mode | Behavior | Use case |
|------|----------|----------|
| `online` (default) | Only fetch when online. Pauses when offline. | Standard APIs |
| `always` | Always attempt fetch regardless of network. | Local APIs, service workers |
| `offlineFirst` | Use cache first, fetch when online. | PWAs, offline-first apps |

## Detecting Paused State

When offline with `networkMode: 'online'`, queries pause instead of failing:

```tsx
const { data, isPending, fetchStatus } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
})

if (isPending && fetchStatus === 'paused') {
  return <div>Waiting for network...</div>
}
if (isPending) {
  return <div>Loading...</div>
}
```

`fetchStatus` values:
- `fetching` — actively fetching
- `paused` — query wants to fetch but is waiting for network
- `idle` — not fetching

## Query Persistence

Persist the query cache to storage for true offline support across sessions.

```bash
npm install @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```

```tsx
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours — must be >= persister maxAge
      staleTime: 1000 * 60 * 5,
    },
  },
})

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister, maxAge: 1000 * 60 * 60 * 24 }}
    >
      <YourApp />
    </PersistQueryClientProvider>
  )
}
```

**Important**: `gcTime` must be >= `maxAge` of the persister, otherwise data is garbage collected before it can be restored.

## Mutations While Offline

Mutations can be paused and resumed when back online:

```tsx
const mutation = useMutation({
  mutationFn: addTodo,
  networkMode: 'offlineFirst', // Queue mutation when offline
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```

For mutation persistence across page reloads, see the [official mutation persistence docs](https://tanstack.com/query/latest/docs/framework/react/plugins/persistQueryClient#mutations).
