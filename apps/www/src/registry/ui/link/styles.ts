import { cva } from "~/registry/lib/cva";

export const LinkStyles = cva({
  defaultVariants: {
    variant: "default",
  },
  variants: {
    underline: {
      always: ["underline underline-offset-4"],
      hover: ["underline-offset-4 hover:underline"],
    },
    variant: {
      default: [
        "rounded-md current:font-normal outline-none transition-all",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",

        "current:text-foreground text-muted-foreground",
        "hover:text-foreground",
      ],
      foreground: [
        "rounded-md current:font-normal outline-none transition-all",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",

        "text-foreground",
        "hover:text-foreground/90 dark:hover:text-foreground/60",
      ],
      primary: [
        "rounded-md current:font-normal outline-none transition-all",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",

        "text-primary",
        "hover:text-primary/90 dark:hover:text-primary/60",
      ],
      unstyled: null,
    },
  },
});
