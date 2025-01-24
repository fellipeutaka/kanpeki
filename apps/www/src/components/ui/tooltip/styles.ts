import { cva } from "~/lib/cva";

export const TooltipStyles = {
  Content: cva({
    base: [
      "group motion-duration-150 rounded-lg border bg-popover px-3 py-1.5 text-popover-fg text-sm will-change-transform dark:shadow-none",
      "data-entering:data-[placement=left]:motion-translate-x-in-[0.5rem]",
      "data-entering:data-[placement=right]:motion-translate-x-in-[-0.5rem]",
      "data-entering:data-[placement=top]:motion-translate-y-in-[0.5rem]",
      "data-entering:data-[placement=bottom]:motion-translate-y-in-[-0.5rem]",
      "data-entering:motion-opacity-in",
      "data-exiting:motion-opacity-out",
    ],
  }),
  Arrow: cva({
    base: [
      "group-placement-left:-rotate-90 fill-popover stroke-border group-placement-bottom:rotate-180 group-placement-right:rotate-90",
    ],
  }),
};
