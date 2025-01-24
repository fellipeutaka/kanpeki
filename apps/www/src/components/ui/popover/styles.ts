import { cva } from "~/lib/cva";

export const PopoverStyles = {
  Content: cva({
    base: [
      "z-50 min-w-(--trigger-width) rounded-md border bg-popover bg-clip-padding p-4 text-popover-fg shadow-xs",
      "[scrollbar-width:thin] dark:backdrop-blur-2xl dark:backdrop-saturate-200 [&::-webkit-scrollbar]:size-0.5",

      "motion-duration-150",
      "data-entering:motion-opacity-in data-entering:motion-ease-out",
      "data-entering:data-[placement=left]:motion-translate-x-in-[0.25rem]",
      "data-entering:data-[placement=right]:motion-translate-x-in-[-0.25rem]",
      "data-entering:data-[placement=top]:motion-translate-y-in-[0.25rem]",
      "data-entering:data-[placement=bottom]:motion-translate-y-in-[-0.25rem]",

      "data-exiting:motion-opacity-out data-exiting:motion-ease-in",
      "data-exiting:data-[placement=left]:motion-translate-x-out-[0.25rem]",
      "data-exiting:data-[placement=right]:motion-translate-x-out-[-0.25rem]",
      "data-exiting:data-[placement=top]:motion-translate-y-out-[0.25rem]",
      "data-exiting:data-[placement=bottom]:motion-translate-y-out-[-0.25rem]",
    ],
    variants: {
      isMenu: {
        true: ["p-0.5"],
      },
    },
  }),
  Arrow: cva({
    base: [
      "block fill-popover stroke-border",
      "group-data-[placement=left]:-rotate-90 group-data-[placement=bottom]:rotate-180 group-data-[placement=right]:rotate-90",
    ],
  }),
};
