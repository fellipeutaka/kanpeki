import { cva } from "~/registry/lib/cva";

export const BreadcrumbStyles = {
  Ellipsis: cva({
    base: ["flex size-9 items-center justify-center"],
  }),
  Item: cva({
    base: ["inline-flex items-center gap-1.5"],
  }),
  Root: cva({
    base: [
      "flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5",
    ],
  }),
  Separator: cva({
    base: ["[&>svg]:size-3.5"],
  }),
};
