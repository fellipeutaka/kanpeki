import { cva } from "~/registry/lib/cva";

export const ToggleGroupStyles = {
  Item: cva({
    base: [
      "min-w-0 flex-1 shrink-0 rounded-none shadow-none",
      "first:rounded-l-md last:rounded-r-md",
      "focus:z-10 focus-visible:z-10",
      "data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
    ],
  }),
  Root: cva({
    base: [
      "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
    ],
  }),
};
