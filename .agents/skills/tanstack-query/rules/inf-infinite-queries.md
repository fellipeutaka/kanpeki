# Infinite Queries

## Basic Setup

v5 requires `initialPageParam` — no more default `undefined`.

```tsx
// ❌ v4 — pageParam defaults to undefined
useInfiniteQuery({
  queryKey: ['posts'],
  queryFn: ({ pageParam = 0 }) => fetchPosts(pageParam),
  getNextPageParam: (lastPage) => lastPage.nextCursor,
})

// ✅ v5 — initialPageParam required
useInfiniteQuery({
  queryKey: ['posts'],
  queryFn: ({ pageParam }) => fetchPosts(pageParam),
  initialPageParam: 0,
  getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
})
```

Return `undefined` from `getNextPageParam` to signal no more pages.

## Loading Guards

Always check `isFetchingNextPage` before triggering fetch to prevent duplicate requests.

```tsx
function PostList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => fetchPosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  })

  return (
    <>
      {data?.pages.map((page) =>
        page.items.map((post) => <PostCard key={post.id} post={post} />)
      )}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading...' : hasNextPage ? 'Load More' : 'No more posts'}
      </button>
    </>
  )
}
```

## maxPages — Memory Optimization

Limit pages stored in cache. Requires bi-directional pagination.

```tsx
useInfiniteQuery({
  queryKey: ['posts'],
  queryFn: ({ pageParam }) => fetchPosts(pageParam),
  initialPageParam: 0,
  getNextPageParam: (lastPage) => lastPage.nextCursor,
  getPreviousPageParam: (firstPage) => firstPage.prevCursor, // Required with maxPages
  maxPages: 3, // Only keep 3 pages in memory
})
```

## infiniteQueryOptions Factory (v5)

Type-safe factory for infinite queries, parallel to `queryOptions`.

```tsx
import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query'

const postsInfiniteOptions = infiniteQueryOptions({
  queryKey: ['posts', 'infinite'],
  queryFn: ({ pageParam }) => fetchPostsPage(pageParam),
  initialPageParam: 0,
  getNextPageParam: (lastPage) => lastPage.nextCursor,
})

// Reuse across hooks
useInfiniteQuery(postsInfiniteOptions)
useSuspenseInfiniteQuery(postsInfiniteOptions)
queryClient.prefetchInfiniteQuery(postsInfiniteOptions)
```

## Intersection Observer Pattern

```tsx
const observerRef = useRef<IntersectionObserver>()
const loadMoreRef = useCallback(
  (node: HTMLElement | null) => {
    if (isFetchingNextPage) return
    if (observerRef.current) observerRef.current.disconnect()
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    })
    if (node) observerRef.current.observe(node)
  },
  [isFetchingNextPage, hasNextPage, fetchNextPage],
)

return (
  <>
    {data?.pages.map((page) =>
      page.items.map((post) => <PostCard key={post.id} post={post} />)
    )}
    <div ref={loadMoreRef} />
  </>
)
```
