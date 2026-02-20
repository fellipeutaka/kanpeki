# Pagination

TanStack Table supports both client-side and server-side pagination with built-in page state management.

## Client-Side Pagination

```tsx
import { useReactTable, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table'

const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  state: { pagination },
  onPaginationChange: setPagination,
})
```

## Server-Side Pagination

```tsx
const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  manualPagination: true,
  rowCount: serverData.totalRows, // tell table total rows for page count calculation
  // or: pageCount: serverData.totalPages,
  state: { pagination },
  onPaginationChange: setPagination,
})
// Use `pagination` state (pageIndex, pageSize) to fetch the right page from server
```

If you don't know total rows/pages, pass `pageCount: -1` (but `getCanNextPage` will always return `true`).

## Pagination UI

```tsx
<button onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
  {'<<'}
</button>
<button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
  {'<'}
</button>
<button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
  {'>'}
</button>
<button onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
  {'>>'}
</button>

<span>
  Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
</span>

<select
  value={table.getState().pagination.pageSize}
  onChange={(e) => table.setPageSize(Number(e.target.value))}
>
  {[10, 20, 50].map((size) => (
    <option key={size} value={size}>{size}</option>
  ))}
</select>
```

## Auto Reset Page Index

By default, `pageIndex` resets to 0 when data changes (filters, sorting, etc.). Disable with:

```tsx
const table = useReactTable({
  autoResetPageIndex: false, // keep current page when data changes
})
```

Be careful: disabling this may show empty pages after filtering reduces total rows.

## Initial Pagination State

```tsx
// Using initialState (if not controlling state externally)
const table = useReactTable({
  initialState: {
    pagination: { pageIndex: 2, pageSize: 25 },
  },
})
```

Don't use both `initialState.pagination` and `state.pagination` — `state` overrides `initialState`.

## Virtualization as Alternative

For very large datasets, consider [TanStack Virtual](https://tanstack.com/virtual) instead of pagination — render all rows but only DOM-render what's visible in the viewport.
