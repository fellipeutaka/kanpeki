# Sorting

TanStack Table supports client-side and server-side sorting with multi-column support.

## Client-Side Sorting

```tsx
import { useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table'

const [sorting, setSorting] = useState<SortingState>([])

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: { sorting },
  onSortingChange: setSorting,
})
```

## Server-Side Sorting

```tsx
// Don't import getSortedRowModel for server-side sorting
const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  manualSorting: true, // data is already sorted by server
  state: { sorting },
  onSortingChange: setSorting,
})
// Use `sorting` state to pass to your API query
```

## Sorting UI

Use `getToggleSortingHandler` on column headers:

```tsx
<th onClick={header.column.getToggleSortingHandler()} style={{ cursor: 'pointer' }}>
  {flexRender(header.column.columnDef.header, header.getContext())}
  {{ asc: ' 🔼', desc: ' 🔽' }[header.column.getIsSorted() as string] ?? ''}
</th>
```

## Built-in Sort Functions

| Function | Use Case |
|----------|----------|
| `alphanumeric` | Mixed alphanumeric (case-insensitive). Slower, more accurate |
| `text` | Text only (case-insensitive). Faster |
| `datetime` | Date objects |
| `basic` | `a > b ? 1 : -1 : 0`. Fastest |

```tsx
columnHelper.accessor('birthday', { sortingFn: 'datetime' })
columnHelper.accessor('name', { sortingFn: 'text' })
```

## Custom Sort Function

```tsx
const mySort: SortingFn<User> = (rowA, rowB, columnId) => {
  // Return -1, 0, or 1 (ascending). Desc is handled automatically.
  return rowA.original.rank - rowB.original.rank
}

columnHelper.accessor('rank', { sortingFn: mySort })

// Or register globally
const table = useReactTable({
  sortingFns: { mySort },
  // ...
})
columnHelper.accessor('rank', { sortingFn: 'mySort' })
```

## Multi-Sorting

Enabled by default when using `getToggleSortingHandler` — user holds `Shift` to multi-sort.

```tsx
const table = useReactTable({
  // ...
  enableMultiSort: false,              // disable multi-sort entirely
  maxMultiSortColCount: 3,             // limit to 3 columns
  isMultiSortEvent: (e) => true,       // all clicks trigger multi-sort
  enableSortingRemoval: false,         // once sorted, can't unsort (always asc ↔ desc)
})
```

## Disable Sorting

```tsx
// Per column
columnHelper.accessor('id', { enableSorting: false })

// Entire table
const table = useReactTable({ enableSorting: false })
```

## Sort Undefined Values

```tsx
columnHelper.accessor('rank', {
  sortUndefined: 'last',  // 'first' | 'last' | false | -1 | 1
})
```

## Initial Sort State

```tsx
const table = useReactTable({
  initialState: {
    sorting: [{ id: 'name', desc: true }],
  },
})
```
