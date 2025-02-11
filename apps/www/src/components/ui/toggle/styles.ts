import { cva } from "~/lib/cva";

export const ToggleStyles = cva({
  base: [
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-medium text-sm outline-hidden ring-offset-bg transition-colors",
    "hover:bg-muted hover:text-muted-fg",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "selected:bg-accent selected:text-accent-fg [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: ["bg-transparent"],
      outline: [
        "border border-input bg-transparent",
        "hover:bg-accent hover:text-accent-fg",
      ],
    },
    size: {
      default: ["h-9 min-w-9 px-2"],
      sm: ["h-8 min-w-8 px-1.5"],
      lg: ["h-10 min-w-10 px-2.5"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
