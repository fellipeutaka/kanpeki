import { cva } from "~/lib/cva";

export const LinkStyles = cva({
  base: [
    "relative outline-none transition-colors",
    "focus-visible:ring-default",
    "disabled:cursor-not-allowed disabled:opacity-60",
    "disabled:focus-visible:outline-0",
  ],

  variants: {
    variant: {
      unstyled: ["text-current"],
      default: ["text-muted-fg transition-colors hover:text-fg"],
      primary: ["text-primary hover:text-primary/80"],
      danger: ["text-danger hover:text-danger/80"],
      "lad/primary": ["text-fg hover:text-primary dark:hover:text-primary/80"],
      secondary: ["text-secondary-fg hover:text-secondary-fg/80"],
      underline: ["font-medium underline underline-offset-4"],
    },
  },
  defaultVariants: {
    variant: "unstyled",
  },
});
