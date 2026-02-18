# Column Definitions

Column defs are the most important part of building a table. They define the data model, rendering, and behavior of each column.

## Column Types

- **Accessor Columns** — have a data model (sortable, filterable, groupable)
- **Display Columns** — no data model (actions, checkboxes, expanders)
- **Grouping Columns** — group other columns under a shared header

## Use createColumnHelper for Type Safety

```tsx
type Person = {
  firstName: string
  lastName: string
  age: number
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  // Accessor via object key
  columnHelper.accessor('firstName', {
    header: 'First Name',
    cell: (info) => info.getValue(),
  }),

  // Accessor via function (computed values)
  columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
    id: 'fullName', // required when using accessor function
    header: 'Full Name',
  }),

  // Display column (no data model)
  columnHelper.display({
    id: 'actions',
    cell: (props) => <button onClick={() => edit(props.row.original)}>Edit</button>,
  }),

  // Grouping column
  columnHelper.group({
    header: 'Info',
    columns: [
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('age', { header: 'Age' }),
    ],
  }),
]
```

## Alternative: Plain ColumnDef Objects

```tsx
const columns: ColumnDef<Person>[] = [
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'age', header: 'Age' },
  {
    id: 'fullName',
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    header: 'Full Name',
  },
]
```

## Column ID Rules

- `accessorKey` columns: the key itself is the column ID (dots replaced with underscores)
- `accessorFn` columns: must provide `id` OR a primitive string `header`
- Display columns: must provide `id`

```tsx
// ❌ Missing id — accessorFn without id or string header
{ accessorFn: (row) => row.firstName + row.lastName, header: () => <b>Name</b> }

// ✅ Provide id for accessorFn columns
{ id: 'fullName', accessorFn: (row) => row.firstName + row.lastName, header: 'Full Name' }
```

## Cell Rendering

Use `flexRender` to render header/cell/footer templates:

```tsx
import { flexRender } from '@tanstack/react-table'

// In your JSX
{flexRender(cell.column.columnDef.cell, cell.getContext())}
```

Custom cell formatting with access to value, row, and table:

```tsx
columnHelper.accessor('firstName', {
  cell: (props) => <span>{props.getValue().toUpperCase()}</span>,
})

// Access full row data
columnHelper.accessor('firstName', {
  cell: (props) => (
    <span>{`${props.row.original.id} - ${props.getValue()}`}</span>
  ),
})
```

## Accessor Values Must Be Primitives

Accessor functions should return primitive values for sorting/filtering to work correctly. Non-primitives require custom sort/filter functions.

```tsx
// ❌ Returns object — sorting/filtering won't work without custom functions
columnHelper.accessor((row) => ({ first: row.firstName, last: row.lastName }), {
  id: 'name',
})

// ✅ Returns primitive string
columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
  id: 'name',
})
```
