import { cva } from "~/registry/lib/cva";

export const EmptyStyles = {
  Root: cva({
    base: [
      "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4",
      "text-balance rounded-xl border-dashed p-6 text-center",
    ],
  }),
  Header: cva({
    base: ["flex max-w-sm flex-col items-center gap-2"],
  }),
  Media: cva({
    base: [
      "mb-2 flex shrink-0 items-center justify-center",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    variants: {
      variant: {
        default: "bg-transparent",
        icon: [
          "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground",
          "[&_svg:not([class*='size-'])]:size-4",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Title: cva({
    base: ["font-medium text-sm tracking-tight"],
  }),
  Description: cva({
    base: [
      "text-muted-foreground text-sm/relaxed",
      "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
    ],
  }),
  Content: cva({
    base: [
      "flex w-full min-w-0 max-w-sm flex-col items-center gap-2.5 text-balance text-sm",
    ],
  }),
};
