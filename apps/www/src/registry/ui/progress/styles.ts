import { cva } from "~/registry/lib/cva";

export const ProgressStyles = {
  Indicator: cva({
    base: [
      "size-full flex-1 bg-primary transition-transform duration-700 will-change-transform",
    ],
  }),
  Root: cva({
    base: ["relative h-2 w-full overflow-hidden rounded-full bg-primary/20"],
  }),
};
