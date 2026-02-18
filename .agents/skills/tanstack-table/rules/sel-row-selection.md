# Row Selection

TanStack Table provides APIs for single and multi-row selection with checkbox or click-based UIs.

## Setup

```tsx
const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  state: { rowSelection },
  onRowSelectionChange: setRowSelection,
  getRowId: (row) => row.id, // important: use stable IDs, not index
})
```

## Checkbox Column

```tsx
columnHelper.display({
  id: 'select',
  header: ({ table }) => (
    <input
      type="checkbox"
      checked={table.getIsAllRowsSelected()}
      ref={(el) => { if (el) el.indeterminate = table.getIsSomeRowsSelected() }}
      onChange={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: ({ row }) => (
    <input
      type="checkbox"
      checked={row.getIsSelected()}
      disabled={!row.getCanSelect()}
      onChange={row.getToggleSelectedHandler()}
    />
  ),
})
```

## Click-to-Select Rows

```tsx
<tr
  key={row.id}
  className={row.getIsSelected() ? 'selected' : ''}
  onClick={row.getToggleSelectedHandler()}
>
  {row.getVisibleCells().map(cell => (
    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
  ))}
</tr>
```

## Single Row Selection (Radio)

```tsx
const table = useReactTable({
  enableMultiRowSelection: false, // only one row at a time
})
```

## Conditional Selection

```tsx
const table = useReactTable({
  enableRowSelection: (row) => row.original.age >= 18, // only adults
})

// In UI, check with row.getCanSelect()
```

## Use Stable Row IDs

Without `getRowId`, row IDs default to index. This breaks selection across data re-fetches.

```tsx
// ❌ Selection state uses indices — breaks when data changes
// { "0": true, "1": false }

// ✅ Use getRowId for stable IDs
getRowId: (row) => row.uuid
// { "13e79140-...": true, "f3e2a5c0-...": false }
```

## Access Selected Rows

```tsx
table.getState().rowSelection           // { id: boolean } map
table.getSelectedRowModel().rows        // full selected Row objects
table.getFilteredSelectedRowModel().rows // selected rows after filtering
```

**Note**: With `manualPagination`, `getSelectedRowModel` only returns selected rows on the current page (since the table only knows about current page data).

## Sub-Row Selection

By default, selecting a parent selects all sub-rows. Disable with:

```tsx
const table = useReactTable({
  enableSubRowSelection: false,
})
```
