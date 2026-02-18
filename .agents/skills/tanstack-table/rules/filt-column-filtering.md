# Column Filtering

Column filtering applies a filter to a single column's accessor value. TanStack Table supports both client-side and server-side column filtering.

## Client-Side Column Filtering

```tsx
import { useReactTable, getCoreRowModel, getFilteredRowModel } from '@tanstack/react-table'

const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: { columnFilters },
  onColumnFiltersChange: setColumnFilters,
})
```

## Server-Side Column Filtering

```tsx
const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  manualFiltering: true, // data is already filtered by server
  state: { columnFilters },
  onColumnFiltersChange: setColumnFilters,
})
// Use `columnFilters` state to pass to your API query
```

## Filter Input UI

```tsx
// Per-column filter input
<input
  value={(column.getFilterValue() as string) ?? ''}
  onChange={(e) => column.setFilterValue(e.target.value)}
  placeholder={`Filter ${column.id}...`}
/>
```

## Built-in Filter Functions

| Function | Description |
|----------|-------------|
| `includesString` | Case-insensitive string inclusion (default) |
| `includesStringSensitive` | Case-sensitive string inclusion |
| `equalsString` | Case-insensitive string equality |
| `arrIncludes` | Item inclusion in array |
| `arrIncludesAll` | All items in array |
| `arrIncludesSome` | Some items in array |
| `equals` | `Object.is` / `===` equality |
| `inNumberRange` | Number range `[min, max]` |

```tsx
columnHelper.accessor('name', { filterFn: 'includesString' })
columnHelper.accessor('age', { filterFn: 'inNumberRange' })
```

## Custom Filter Function

```tsx
const startsWithFilter: FilterFn<User> = (row, columnId, filterValue) => {
  return row.getValue<string>(columnId).toLowerCase().startsWith(filterValue.toLowerCase())
}

// Attach utilities
startsWithFilter.autoRemove = (val) => !val // remove filter when empty
startsWithFilter.resolveFilterValue = (val) => val.toString().toLowerCase().trim()

columnHelper.accessor('name', { filterFn: startsWithFilter })

// Or register globally
const table = useReactTable({
  filterFns: { startsWith: startsWithFilter },
})
columnHelper.accessor('name', { filterFn: 'startsWith' })
```

## Disable Column Filtering

```tsx
// Per column
columnHelper.accessor('id', { enableColumnFilter: false })

// Entire table
const table = useReactTable({ enableColumnFilters: false })

// Disable all filtering (column + global)
const table = useReactTable({ enableFilters: false })
```

## Filtering Sub-Rows

```tsx
const table = useReactTable({
  // ...
  filterFromLeafRows: true,    // search through sub-rows (default: parent-down)
  maxLeafRowFilterDepth: 0,    // 0 = only filter root rows, preserving all sub-rows
})
```

## Column Filter State Shape

```tsx
type ColumnFiltersState = Array<{
  id: string      // column id
  value: unknown  // filter value
}>
// Example: [{ id: 'name', value: 'John' }, { id: 'age', value: [18, 65] }]
```
