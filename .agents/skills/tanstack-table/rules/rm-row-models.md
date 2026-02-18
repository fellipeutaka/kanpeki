# Row Models

TanStack Table is modular — row model functions are imported separately and only included when needed. This keeps bundle size small.

## Import Only What You Need

```tsx
// ❌ Importing all row models when you only need sorting
import {
  getCoreRowModel, getSortedRowModel, getFilteredRowModel,
  getPaginationRowModel, getExpandedRowModel, getGroupedRowModel,
} from '@tanstack/react-table'

// ✅ Import only what you use
import { getCoreRowModel, getSortedRowModel } from '@tanstack/react-table'

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),     // always required
  getSortedRowModel: getSortedRowModel(), // only if client-side sorting
})
```

## Available Row Models

| Row Model | Purpose | When to Use |
|-----------|---------|-------------|
| `getCoreRowModel` | Base row model | **Always required** |
| `getSortedRowModel` | Client-side sorting | When not using `manualSorting` |
| `getFilteredRowModel` | Client-side filtering | When not using `manualFiltering` |
| `getPaginationRowModel` | Client-side pagination | When not using `manualPagination` |
| `getExpandedRowModel` | Expanding/sub-rows | When using expand feature |
| `getGroupedRowModel` | Grouping + aggregation | When using grouping feature |
| `getFacetedRowModel` | Faceted values | When showing faceted filter lists |
| `getFacetedUniqueValues` | Unique column values | For filter dropdowns |
| `getFacetedMinMaxValues` | Min/max column values | For range filter inputs |

## Pipeline Order

Row models are applied in this order:

`Core` → `Filtered` → `Grouped` → `Sorted` → `Expanded` → `Paginated` → `Rendered`

If a feature is disabled or uses `manual*`, the `getPre*RowModel` is used instead.

## Use getRowModel() for Rendering

`table.getRowModel()` is the final row model that applies all enabled features. Always use this for rendering.

```tsx
// ❌ Using getCoreRowModel directly — ignores sorting, filtering, pagination
{table.getCoreRowModel().rows.map(row => /* ... */)}

// ✅ Use getRowModel() — applies all features
{table.getRowModel().rows.map(row => (
  <tr key={row.id}>
    {row.getVisibleCells().map(cell => (
      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
    ))}
  </tr>
))}
```

## Row Model Data Formats

Each row model provides rows in 3 formats:

```tsx
table.getRowModel().rows       // array of rows (use for rendering)
table.getRowModel().flatRows   // all rows flattened (sub-rows at top level)
table.getRowModel().rowsById   // object keyed by row id (fast lookup)
```

## Don't Mix Client Row Models with Manual Options

```tsx
// ❌ Contradicts itself — imports client sorting but tells table to skip it
const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  manualSorting: true, // getSortedRowModel is wasted
})

// ✅ Server-side sorting — don't import getSortedRowModel
const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  manualSorting: true,
  state: { sorting },
  onSortingChange: setSorting,
})
```
