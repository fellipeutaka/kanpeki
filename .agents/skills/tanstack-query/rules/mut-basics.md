# Mutation Basics

## Always Invalidate After Mutations

Every mutation that changes server state should invalidate related queries to keep the UI in sync.

```tsx
// ❌ No invalidation — UI shows stale data
const mutation = useMutation({ mutationFn: addTodo })

// ✅ Invalidate related queries
const mutation = useMutation({
  mutationFn: addTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```

## Use isPending for Loading States

```tsx
const { mutate, isPending } = useMutation({ mutationFn: addTodo })

<button onClick={() => mutate(newTodo)} disabled={isPending}>
  {isPending ? 'Adding...' : 'Add Todo'}
</button>
```

## Mutation Callbacks

Mutation callbacks (`onSuccess`, `onError`, `onSettled`) are still supported in v5 — they were only removed from **queries**.

### Callback Signature Change (v5.89+)

v5.89 added `onMutateResult` as a 4th parameter to callbacks:

```tsx
// ❌ v5.88 and earlier (3 params)
useMutation({
  mutationFn: addTodo,
  onMutate: async (variables) => {
    return { previousData } // this is "onMutateResult"
  },
  onSuccess: (data, variables, context) => {},
  onError: (error, variables, context) => {},
})

// ✅ v5.89+ (4 params)
useMutation({
  mutationFn: addTodo,
  onMutate: async (variables) => {
    return { previousData }
  },
  onSuccess: (data, variables, onMutateResult, context) => {
    // onMutateResult = return value from onMutate ({ previousData })
    // context = mutation function context (queryClient, etc.)
  },
  onError: (error, variables, onMutateResult, context) => {
    // Roll back using onMutateResult
    if (onMutateResult?.previousData) {
      queryClient.setQueryData(['todos'], onMutateResult.previousData)
    }
  },
})
```

## useMutationState — Cross-Component Tracking

Access mutation state from any component without prop drilling.

```tsx
import { useMutationState } from '@tanstack/react-query'

function GlobalSavingIndicator() {
  const pendingCount = useMutationState({
    filters: { status: 'pending' },
    select: (mutation) => mutation.state.variables,
  }).length

  if (pendingCount === 0) return null
  return <div>Saving {pendingCount} items...</div>
}

// Filter by mutation key
const todoMutations = useMutationState({
  filters: { mutationKey: ['addTodo'], status: 'pending' },
  select: (mutation) => mutation.state.variables as Todo, // Cast needed — types are unknown
})
```

**Known issue**: `mutation.state.variables` is typed as `unknown` due to fuzzy key matching. Always cast explicitly in the `select` callback.

## Error Handling in Mutations

```tsx
const mutation = useMutation({
  mutationFn: addTodo,
  onError: (error) => {
    toast.error(error.message)
  },
  // Or handle at call site
})

// Call-site error handling
mutation.mutate(newTodo, {
  onError: (error) => {
    toast.error(error.message)
  },
})

// With async/await
try {
  await mutation.mutateAsync(newTodo)
} catch (error) {
  // handle error
}
```

**Note**: Call-site callbacks run **in addition to** hook-level callbacks, not instead of.
