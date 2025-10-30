import { cva } from "~/registry/lib/cva";

export const PaginationStyles = {
  Content: cva({
    base: ["flex flex-row items-center gap-1"],
  }),
  Ellipsis: cva({
    base: ["flex size-9 items-center justify-center"],
  }),
  Navigation: cva({
    base: ["gap-1 px-2.5"],
    variants: {
      variant: {
        next: ["sm:pr-2.5"],
        previous: ["sm:pl-2.5"],
      },
    },
  }),
  Root: cva({
    base: ["mx-auto flex w-full justify-center"],
  }),
};
