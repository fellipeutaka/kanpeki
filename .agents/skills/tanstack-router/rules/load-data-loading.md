# Data Loading

Route loaders fetch data before rendering. This prevents waterfalls, enables preloading, and keeps components focused on rendering.

## Basic Loader

```tsx
export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params }) => {
    const post = await fetchPost(params.postId)
    return post
  },
  component: PostComponent,
})

function PostComponent() {
  const post = Route.useLoaderData() // Typed from loader return
  return <h1>{post.title}</h1>
}
```

## loaderDeps — Depend on Search Params

By default, loaders only re-run when path params change. Use `loaderDeps` to also depend on search params:

```tsx
export const Route = createFileRoute('/posts')({
  validateSearch: (search) => ({
    page: Number(search.page) || 1,
    sort: (search.sort as string) || 'newest',
  }),
  loaderDeps: ({ search }) => ({
    page: search.page,
    sort: search.sort,
  }),
  loader: async ({ deps }) => {
    return fetchPosts({ page: deps.page, sort: deps.sort })
  },
})
```

Without `loaderDeps`, the loader won't re-run when search params change.

## Abort Signal

Loaders receive an `abortController` for cancelling in-flight requests:

```tsx
loader: async ({ params, abortController }) => {
  const res = await fetch(`/api/posts/${params.postId}`, {
    signal: abortController.signal,
  })
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}
```

## Parallel Loading

Nested route loaders run in parallel automatically. Parent and child loaders don't wait for each other.

```
/posts/$postId/comments
  ├── posts.tsx loader         ─┐
  ├── posts.$postId.tsx loader ─┤ All run in parallel
  └── posts.$postId.comments.tsx loader ─┘
```

Within a single loader, use `Promise.all` for parallel fetches:

```tsx
loader: async ({ params }) => {
  const [post, comments] = await Promise.all([
    fetchPost(params.postId),
    fetchComments(params.postId),
  ])
  return { post, comments }
}
```

## Pending UI

Show loading state after a delay to avoid flash for fast loads:

```tsx
export const Route = createFileRoute('/posts/$postId')({
  loader: ({ params }) => fetchPost(params.postId),
  pendingComponent: () => <PostSkeleton />,
  pendingMs: 500,     // Wait 500ms before showing pending UI
  pendingMinMs: 300,  // Show pending UI for at least 300ms (prevents flash)
})
```

## Stale-While-Revalidate

By default, loaders use a stale-while-revalidate pattern: show cached data immediately and refetch in the background. Configure with `staleTime`:

```tsx
export const Route = createFileRoute('/posts')({
  loader: () => fetchPosts(),
  staleTime: 1000 * 60 * 5, // Data is fresh for 5 min — no refetch on navigation
})
```

- `staleTime: 0` (default) — always refetch in background
- `staleTime: Infinity` — never refetch (use with TanStack Query for cache management)

## Don't Fetch in Components

```tsx
// ❌ Fetching in component — causes waterfalls, no preloading
function PostComponent() {
  const [post, setPost] = useState(null)
  useEffect(() => { fetchPost(id).then(setPost) }, [id])
}

// ✅ Fetch in loader — parallel loading, preloading, no waterfalls
export const Route = createFileRoute('/posts/$postId')({
  loader: ({ params }) => fetchPost(params.postId),
  component: () => {
    const post = Route.useLoaderData()
    return <h1>{post.title}</h1>
  },
})
```
