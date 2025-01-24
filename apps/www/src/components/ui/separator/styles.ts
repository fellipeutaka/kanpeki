import { cva } from "~/lib/cva";

export const SeparatorStyles = cva({
  base: ["shrink-0 bg-border"],
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
});
