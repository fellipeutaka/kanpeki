import { compose, cva } from "~/lib/cva";
import { FocusRingStyles } from "~/styles/focus-ring";

export const BadgeStyles = compose(
  FocusRingStyles,
  cva({
    base: [
      "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold",
      "text-xs transition",
    ],
    variants: {
      variant: {
        default: [
          "border-transparent bg-amber-ui text-amber-dim",
          "selection:bg-amber-5 dark:selection:bg-amberdark-5",
        ],
        secondary: [
          "border-transparent bg-secondary text-secondary-fg",
          "hover:bg-secondary/80",
        ],
        danger: [
          "border-transparent bg-red-ui text-red-dim",
          "selection:bg-red-5 dark:selection:bg-reddark-5",
        ],
        outline: ["text-fg"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  })
);
