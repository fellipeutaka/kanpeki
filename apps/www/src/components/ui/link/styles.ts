import { cva } from "~/lib/cva";

export const LinkStyles = cva({
  base: [
    "relative outline outline-0 outline-primary outline-offset-2 transition-colors",
    "focus-visible:outline-2",
    "disabled:cursor-default disabled:opacity-60",
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
