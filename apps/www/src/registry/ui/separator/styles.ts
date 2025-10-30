import { cva } from "~/registry/lib/cva";

export const SeparatorStyles = cva({
  base: [
    "shrink-0 bg-border",
    "orientation-horizontal:h-px orientation-horizontal:w-full",
    "orientation-vertical:h-full orientation-vertical:w-px",
  ],
  // TODO: Think about this
  // variants: {
  //   variant: {
  //     menu: "-mx-1 my-1",
  //   },
  // },
});
