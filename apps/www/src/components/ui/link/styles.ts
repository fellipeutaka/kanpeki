import { cva } from "~/lib/cva";

export const LinkStyles = cva({
  base: [
    "relative outline-none transition-colors",
    "data-focus-visible:ring-default",
    "data-disabled:cursor-default data-disabled:opacity-60",
    "data-disabled:data-focus-visible:outline-0",
  ],

  variants: {
    variant: {
      unstyled: ["text-current"],
      default: ["text-muted-fg transition-colors data-hovered:text-fg"],
      primary: ["text-primary data-hovered:text-primary/80"],
      danger: ["text-danger data-hovered:text-danger/80"],
      "lad/primary": [
        "text-fg data-hovered:text-primary dark:data-hovered:text-primary/80",
      ],
      secondary: ["text-secondary-fg data-hovered:text-secondary-fg/80"],
      underline: ["font-medium underline underline-offset-4"],
    },
  },
  defaultVariants: {
    variant: "unstyled",
  },
});
