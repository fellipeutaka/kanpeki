import { cva } from "~/registry/lib/cva";

export const SelectStyles = {
  Trigger: cva({
    base: [
      "group flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent",
      "px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow]",
      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "group-invalid:border-destructive group-invalid:ring-destructive/20",
      "dark:bg-input/30 dark:group-invalid:ring-destructive/40 dark:hover:bg-input/50",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    defaultVariants: {
      size: "default",
    },
    variants: {
      size: {
        default: "min-h-9",
        sm: "min-h-8",
      },
    },
  }),
  Value: cva({
    base: [
      "line-clamp-1 flex items-center gap-2 data-placeholder:text-muted-foreground",
    ],
  }),
};
