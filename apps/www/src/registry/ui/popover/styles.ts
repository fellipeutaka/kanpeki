import { cva } from "~/registry/lib/cva";

export const PopoverStyles = {
  Arrow: cva({
    base: [
      "block fill-popover stroke-border",
      "group-placement-left:-rotate-90 group-placement-bottom:rotate-180 group-placement-right:rotate-90",
    ],
  }),
  Content: cva({
    base: [
      "z-50 overflow-hidden shadow-md outline-hidden",

      "motion-duration-150",
      "entering:motion-opacity-in entering:motion-ease-out",
      "entering:placement-left:motion-translate-x-in-[0.25rem]",
      "entering:placement-right:motion-translate-x-in-[-0.25rem]",
      "entering:placement-top:motion-translate-y-in-[0.25rem]",
      "entering:placement-bottom:motion-translate-y-in-[-0.25rem]",

      "exiting:motion-opacity-out exiting:motion-ease-in",
      "exiting:placement-left:motion-translate-x-out-[0.25rem]",
      "exiting:placement-right:motion-translate-x-out-[-0.25rem]",
      "exiting:placement-top:motion-translate-y-out-[0.25rem]",
      "exiting:placement-bottom:motion-translate-y-out-[-0.25rem]",
    ],
    variants: {
      isMenu: {
        false: [
          "min-w-72 rounded-md border bg-popover p-4 text-popover-foreground",
        ],
        true: [
          "min-w-(--trigger-width) *:data-[slot=listbox-root]:max-h-[inherit]",
        ],
      },
    },
  }),
};
