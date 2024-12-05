import { cva } from "~/lib/cva";

export const TableStyles = {
  Root: cva({
    base: [
      "group table w-full caption-bottom border-spacing-0 text-sm outline-none",
      "[&_[data-drop-target]]:border [&_[data-drop-target]]:border-primary",
    ],
  }),
  Header: cva({
    base: ["border-b"],
  }),
  Column: cva({
    base: [
      "relative allows-sorting:cursor-pointer dragging:cursor-grabbing whitespace-nowrap p-3 text-left font-medium outline-none",
      "[&:has([slot=selection])]:pr-0",
    ],
    variants: {
      isResizable: {
        true: ["overflow-hidden truncate"],
      },
    },
  }),
  ColumnResizer: cva({
    base: [
      "absolute top-0 right-0 bottom-0 grid w-px touch-none place-content-center px-1 [&[data-resizing]>div]:bg-primary",
      "&[data-resizable-direction=left]:cursor-e-resize &[data-resizable-direction=right]:cursor-w-resize [&[data-resizable-direction=both]]:cursor-ew-resize",
    ],
  }),
  Body: cva({
    base: ["[&_.tr:last-child]:border-0"],
  }),
  Row: cva({
    base: [
      "group relative cursor-default border-b selected:bg-accent text-fg/70 outline-none ring-primary selected:hover:bg-accent-subtle/50 focus-visible:ring-1 dark:selected:hover:bg-accent-subtle/60",
    ],
  }),
  Cell: cva({
    base: [
      "group whitespace-nowrap p-3 outline-none",
      "group-data-[resizable=true]:overflow-hidden group-data-[resizable=true]:truncate",
    ],
  }),
  SortIcon: cva({
    base: ["size-3.5 shrink-0 transition-transform duration-200"],
  }),
  // Footer: cva({
  //   base: ["bg-primary font-medium text-primary-fg"],
  // }),
  // Caption: cva({
  //   base: ["mt-4 text-muted-fg text-sm"],
  // }),
};
