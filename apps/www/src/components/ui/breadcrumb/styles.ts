import { cva } from "~/lib/cva";

export const BreadcrumbStyles = {
  Ellipsis: cva({
    base: ["grid size-9 place-content-center"],
  }),
  Item: cva({
    base: ["inline-flex items-center gap-1.5"],
  }),
  Page: cva({
    base: ["font-normal text-fg"],
  }),
  Root: cva({
    base: [
      "flex flex-wrap items-center gap-1.5 break-words text-muted-fg text-sm",
      "sm:gap-2.5",
    ],
  }),
};
