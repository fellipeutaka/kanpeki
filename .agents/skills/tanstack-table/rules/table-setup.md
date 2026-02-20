# Table Setup

TanStack Table is headless — `useReactTable` returns a table instance (not a `<table>` element) containing state and APIs. Two options are required: `columns` and `data`.

## Stable Data Reference

The `data` array must have a stable reference. Defining it inline or re-creating it every render causes infinite re-renders.

```tsx
// ❌ Inline data — creates new reference every render → infinite re-renders
function App() {
  const table = useReactTable({
    data: fetchData(), // new array every render
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
}

// ✅ Stable reference with useState
function App() {
  const [data, setData] = useState<User[]>([])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
}

// ✅ Stable reference with useMemo
const data = useMemo(() => rawData ?? [], [rawData])

// ✅ Defined outside component
const data: User[] = [/* ... */]
function App() {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
}

// ✅ TanStack Query (stable by default)
const { data = [] } = useQuery({ queryKey: ['users'], queryFn: fetchUsers })
```

## Stable Columns Reference

Column definitions must also be stable. Define outside the component or wrap in `useMemo`.

```tsx
// ❌ Columns inside component without memoization
function App() {
  const columns = [/* ... */] // new array every render
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
}

// ✅ Columns outside component
const columns: ColumnDef<User>[] = [/* ... */]
function App() {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
}
```

## Define TData Type

Use the same type for data, columns, and the column helper. This enables full type inference.

```tsx
type User = {
  id: string
  name: string
  age: number
}

const columnHelper = createColumnHelper<User>()
const columns = [
  columnHelper.accessor('name', { header: 'Name' }),
  columnHelper.accessor('age', { header: 'Age' }),
]

const [data] = useState<User[]>([])
const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
```

## Use getRowId for Stable Row IDs

By default, row IDs are the row index. This breaks row selection state across data re-fetches. Use `getRowId` to assign stable IDs.

```tsx
// ❌ Default row IDs (index-based) — selection breaks on re-fetch
const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

// ✅ Stable row IDs from your data
const table = useReactTable({
  data, columns,
  getRowId: (row) => row.id,
  getCoreRowModel: getCoreRowModel(),
})
```

## State Management Pattern

All features use the same controlled state pattern: `state.*` + `on*Change`.

```tsx
const [sorting, setSorting] = useState<SortingState>([])
const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  state: { sorting, pagination },
  onSortingChange: setSorting,
  onPaginationChange: setPagination,
})
```

Don't mix `initialState` and `state` for the same feature — `state` overrides `initialState`.
