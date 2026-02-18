# Expanding

Expanding allows showing additional data related to a row — either sub-rows (hierarchical data) or custom detail panels.

## Setup

```tsx
import { getExpandedRowModel } from '@tanstack/react-table'

const [expanded, setExpanded] = useState<ExpandedState>({})

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  state: { expanded },
  onExpandedChange: setExpanded,
})
```

`ExpandedState` is `true` (all expanded) or `Record<string, boolean>` (specific rows).

## Sub-Rows (Hierarchical Data)

Use `getSubRows` to tell the table where child rows live:

```tsx
type Person = {
  id: number
  name: string
  children?: Person[]
}

const table = useReactTable({
  data, columns,
  getSubRows: (row) => row.children,
  getCoreRowModel: getCoreRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
})
```

## Custom Detail Panels

For non-hierarchical expanded content (detail panels, sub-tables):

```tsx
const table = useReactTable({
  getRowCanExpand: () => true, // all rows can expand
  getCoreRowModel: getCoreRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
})

// Rendering
{table.getRowModel().rows.map((row) => (
  <Fragment key={row.id}>
    <tr>
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
      ))}
    </tr>
    {row.getIsExpanded() && (
      <tr>
        <td colSpan={row.getVisibleCells().length}>
          {/* Your custom expanded content */}
          <DetailPanel data={row.original} />
        </td>
      </tr>
    )}
  </Fragment>
))}
```

## Expand Toggle UI

Add an expand button in a column definition:

```tsx
columnHelper.display({
  id: 'expand',
  cell: ({ row }) =>
    row.getCanExpand() ? (
      <button onClick={row.getToggleExpandedHandler()}>
        {row.getIsExpanded() ? '▼' : '▶'}
      </button>
    ) : null,
})
```

For sub-rows with indentation:

```tsx
columnHelper.accessor('name', {
  cell: ({ row, getValue }) => (
    <div style={{ paddingLeft: `${row.depth * 20}px` }}>
      {row.getCanExpand() && (
        <button onClick={row.getToggleExpandedHandler()}>
          {row.getIsExpanded() ? '▼' : '▶'}
        </button>
      )}
      {getValue()}
    </div>
  ),
})
```

## Filtering Expanded Rows

```tsx
const table = useReactTable({
  filterFromLeafRows: true,    // filter from child rows up (include parent if child matches)
  maxLeafRowFilterDepth: 1,    // limit filter depth
})
```

## Pagination with Expanded Rows

```tsx
const table = useReactTable({
  paginateExpandedRows: false, // expanded rows stay on parent's page (may exceed pageSize)
})
```

## Server-Side Expanding

```tsx
const table = useReactTable({
  manualExpanding: true, // table won't process expanding; you handle it in your data
})
```
