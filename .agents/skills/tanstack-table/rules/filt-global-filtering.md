# Global Filtering

Global filtering applies a single filter value across all columns. Useful for search bars.

## Client-Side Global Filtering

```tsx
import { useReactTable, getCoreRowModel, getFilteredRowModel } from '@tanstack/react-table'

const [globalFilter, setGlobalFilter] = useState('')

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: { globalFilter },
  onGlobalFilterChange: setGlobalFilter,
})
```

## Server-Side Global Filtering

```tsx
const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  manualFiltering: true,
  state: { globalFilter },
  onGlobalFilterChange: setGlobalFilter,
})
// Use `globalFilter` state to pass to your API query
```

## Search Input UI

TanStack Table does not provide any UI — add your own search input above the table:

```tsx
<input
  value={globalFilter ?? ''}
  onChange={(e) => table.setGlobalFilter(String(e.target.value))}
  placeholder="Search all columns..."
/>
```

## Global Filter Function

By default, `includesString` is used. Override with `globalFilterFn`:

```tsx
const table = useReactTable({
  // ...
  globalFilterFn: 'includesString', // built-in
  // or custom function
  globalFilterFn: (row, columnId, filterValue) => {
    return row.getValue<string>(columnId).toLowerCase().includes(filterValue.toLowerCase())
  },
})
```

## Disable Global Filtering Per Column

```tsx
// Exclude specific columns from global filtering
columnHelper.accessor('id', { enableGlobalFilter: false })

// Disable global filtering entirely
const table = useReactTable({ enableGlobalFilter: false })
```

## Fuzzy Filtering

A popular pattern is using fuzzy filtering for global search. Install a fuzzy matching library and use it as a custom `globalFilterFn`:

```tsx
import { rankItem } from '@tanstack/match-sorter-utils'

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)
  addMeta({ itemRank })
  return itemRank.passed
}

const table = useReactTable({
  // ...
  globalFilterFn: fuzzyFilter,
})
```
