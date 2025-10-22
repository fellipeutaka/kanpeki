import { cva } from "~/lib/cva";

export const LinkStyles = cva({
  base: [
    "relative outline-none transition-colors",
    "focus-visible:ring-default",
    "disabled:cursor-not-allowed disabled:opacity-60",
    "disabled:focus-visible:outline-0",
  ],
  defaultVariants: {
    variant: "unstyled",
  },

  variants: {
    variant: {
      danger: ["text-danger hover:text-danger/80"],
      default: ["text-muted-fg transition-colors hover:text-fg"],
      "lad/primary": ["text-fg hover:text-primary dark:hover:text-primary/80"],
      primary: ["text-primary hover:text-primary/80"],
      secondary: ["text-secondary-fg hover:text-secondary-fg/80"],
      underline: ["font-medium underline underline-offset-4"],
      unstyled: ["text-current"],
    },
  },
});
