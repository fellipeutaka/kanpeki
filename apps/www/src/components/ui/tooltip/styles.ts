import { cva } from "~/lib/cva";

export const TooltipStyles = cva({
  base: [
    "group rounded-lg border px-3 py-1.5 text-sm will-change-transform dark:shadow-none [&_strong]:font-medium",
    "entering:placement-left:slide-in-from-right-2 entering:placement-right:slide-in-from-left-2 entering:placement-top:slide-in-from-bottom-2 entering:placement-bottom:slide-in-from-top-2",

    "entering:fade-in entering:animate-in",
    "exiting:fade-out exiting:animate-out",
  ],
  variants: {
    intent: {
      default: [
        "bg-popover text-popover-fg [&_.arx]:fill-popover [&_.arx]:stroke-border",
      ],
      inverse: [
        "border-transparent bg-dark text-light dark:bg-light dark:text-dark [&_.arx]:fill-dark [&_.arx]:stroke-transparent dark:[&_.arx]:fill-light",
      ],
    },
  },
  defaultVariants: {
    intent: "default",
  },
});
