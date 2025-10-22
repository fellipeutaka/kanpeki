import { cva } from "~/lib/cva";

export const TooltipStyles = {
  Arrow: cva({
    base: [
      "group-placement-left:-rotate-90 fill-popover stroke-border group-placement-bottom:rotate-180 group-placement-right:rotate-90",
    ],
  }),
  Content: cva({
    base: [
      "group motion-duration-150 rounded-lg border bg-popover px-3 py-1.5 text-popover-fg text-sm will-change-transform dark:shadow-none",
      "entering:placement-left:motion-translate-x-in-[0.5rem]",
      "entering:placement-right:motion-translate-x-in-[-0.5rem]",
      "entering:placement-top:motion-translate-y-in-[0.5rem]",
      "entering:placement-bottom:motion-translate-y-in-[-0.5rem]",
      "entering:motion-opacity-in",
      "exiting:motion-opacity-out",
    ],
  }),
};
