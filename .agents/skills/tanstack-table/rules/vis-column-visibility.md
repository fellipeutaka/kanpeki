# Column Visibility

Column visibility allows columns to be hidden or shown dynamically at runtime.

## Setup

```tsx
const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  state: { columnVisibility },
  onColumnVisibilityChange: setColumnVisibility,
})
```

## Hide Columns by Default

```tsx
const table = useReactTable({
  initialState: {
    columnVisibility: {
      id: false,     // hidden
      email: false,  // hidden
      name: true,    // visible (default)
    },
  },
})
```

## Column Visibility Toggle UI

```tsx
{table.getAllColumns().map((column) => (
  <label key={column.id}>
    <input
      type="checkbox"
      checked={column.getIsVisible()}
      disabled={!column.getCanHide()}
      onChange={column.getToggleVisibilityHandler()}
    />
    {column.columnDef.header as string}
  </label>
))}
```

## Prevent Hiding Specific Columns

```tsx
columnHelper.accessor('name', {
  enableHiding: false, // this column cannot be hidden
})
```

## Use Visibility-Aware APIs for Rendering

Always use the "visible" variants of APIs when rendering:

```tsx
// ❌ Ignores column visibility
{table.getAllLeafColumns().map(col => /* ... */)}
{row.getAllCells().map(cell => /* ... */)}

// ✅ Respects column visibility
{table.getVisibleLeafColumns().map(col => /* ... */)}
{row.getVisibleCells().map(cell => /* ... */)}
```

Header Group APIs (`table.getHeaderGroups()`) already account for column visibility.

## Useful APIs

- `column.getIsVisible()` — current visibility state
- `column.getCanHide()` — whether the column can be toggled
- `column.toggleVisibility(value?)` — toggle or set visibility
- `column.getToggleVisibilityHandler()` — event handler for checkbox inputs
- `table.getVisibleLeafColumns()` — all visible leaf columns
- `row.getVisibleCells()` — cells for visible columns only
