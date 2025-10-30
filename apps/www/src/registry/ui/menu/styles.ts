import { cva } from "~/registry/lib/cva";

export const MenuStyles = {
  Content: cva({
    base: [
      "z-50 min-w-32 overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none",
    ],
    variants: {
      variant: {
        command: [
          "max-h-[300px] border-none",
          "**:data-[slot=menu-item]:py-3",
          "**:data-[slot=menu-label]:text-muted-foreground **:data-[slot=menu-label]:text-xs",
        ],
      },
    },
  }),
  Empty: cva({
    base: ["py-6 text-center text-sm"],
  }),
  Item: cva({
    base: [
      "group relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
      "outline-hidden focus:bg-accent focus:text-accent-foreground",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    variants: {
      inset: {
        true: "pl-8",
      },
      variant: {
        destructive: [
          "*:[svg]:!text-destructive text-destructive focus:bg-destructive/10",
          "focus:text-destructive dark:focus:bg-destructive/20",
        ],
      },
    },
  }),
};
