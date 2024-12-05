import { cva } from "~/lib/cva";

export const CollapsibleStyles = {
  Content: cva({
    base: ["overflow-hidden"],
    variants: {
      forceMount: {
        false: [
          "data-[state=closed]:animate-collapsible-up",
          "data-[state=open]:animate-collapsible-down",
        ],
      },
    },
    defaultVariants: {
      forceMount: false,
    },
  }),
};
