# Column Sizing & Resizing

TanStack Table provides column width state and drag-to-resize APIs.

## Default Column Sizes

```tsx
// Defaults: { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER }

const table = useReactTable({
  defaultColumn: {
    size: 200,    // default column width
    minSize: 50,  // enforced during resizing
    maxSize: 500, // enforced during resizing
  },
})

// Per-column override
columnHelper.accessor('name', { size: 300 })
columnHelper.accessor('id', { size: 60, minSize: 40, maxSize: 80 })
```

## Apply Column Sizes to Markup

```tsx
<th style={{ width: `${header.getSize()}px` }}>
  {flexRender(header.column.columnDef.header, header.getContext())}
</th>
<td style={{ width: `${cell.column.getSize()}px` }}>
  {flexRender(cell.column.columnDef.cell, cell.getContext())}
</td>
```

## Column Resizing

### Resize Mode

```tsx
const table = useReactTable({
  columnResizeMode: 'onChange', // immediate resize (default: 'onEnd')
  columnResizeDirection: 'ltr', // 'ltr' | 'rtl'
})
```

- `'onEnd'` (default) — column size updates after drag finishes. Better for complex tables in React.
- `'onChange'` — column size updates during drag. Smoother but may lag on complex tables.

### Resize Handle

```tsx
<div
  onMouseDown={header.getResizeHandler()}
  onTouchStart={header.getResizeHandler()}
  className={`resize-handle ${header.column.getIsResizing() ? 'resizing' : ''}`}
/>
```

### Disable Resizing

```tsx
// Per column
columnHelper.accessor('id', { enableResizing: false })

// Entire table
const table = useReactTable({ enableColumnResizing: false })
```

## Performance Tips for Resizing

For smooth 60fps resizing in React:

1. **Don't call `column.getSize()` on every cell** — compute all widths once, memoized
2. **Memoize table body** while resizing is in progress
3. **Use CSS variables** to communicate column widths to cells

```tsx
// Calculate all column sizes once
const columnSizeVars = useMemo(() => {
  const headers = table.getFlatHeaders()
  const sizes: Record<string, number> = {}
  for (const header of headers) {
    sizes[`--header-${header.id}-size`] = header.getSize()
    sizes[`--col-${header.column.id}-size`] = header.column.getSize()
  }
  return sizes
}, [table.getState().columnSizingInfo, table.getState().columnSizing])

// Apply as CSS variables on table
<table style={{ ...columnSizeVars }}>

// Use in cells
<th style={{ width: `calc(var(--header-${header.id}-size) * 1px)` }}>
```

## Resize Indicator

```tsx
<div
  style={{
    transform: header.column.getIsResizing()
      ? `translateX(${table.getState().columnSizingInfo.deltaOffset}px)`
      : '',
  }}
/>
```
