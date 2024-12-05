import { cva } from "~/lib/cva";

export const FocusButtonStyles = cva({
  base: [
    "outline outline-0 outline-ring outline-offset-2",
    "focus-visible:ring-2",
  ],
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
  },
});

export const FocusRingStyles = cva({
  base: [
    "outline-none focus:outline-none forced-colors:outline-1",
    "focus-visible:ring-2 focus-visible:ring-ring/20",
    "invalid:ring-2 invalid:ring-danger/20",
  ],
});
