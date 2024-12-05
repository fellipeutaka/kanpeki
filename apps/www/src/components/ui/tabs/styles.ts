import { cva } from "~/lib/cva";

export const TabsStyles = {
  Root: cva({
    base: [
      "group flex w-full gap-4",
      "orientation-horizontal:flex-col",
      "orientation-vertical:flex-row",
    ],
  }),
  List: cva({
    base: [
      "flex",
      "orientation-horizontal:flex-row",
      "orientation-vertical:flex-col orientation-vertical:items-start orientation-vertical:gap-y-4 orientation-vertical:border-l",
    ],
    variants: {
      variant: {
        default: [
          "orientation-horizontal:h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-fg",
        ],
        underline: [
          "orientation-horizontal:gap-x-5 orientation-horizontal:border-border orientation-horizontal:border-b",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Trigger: cva({
    base: [
      "relative flex cursor-pointer items-center whitespace-nowrap font-medium text-sm outline-none transition",
    ],
    variants: {
      variant: {
        default: [
          "w-full justify-center rounded-md px-3 py-1",
          "selected:text-fg",
          "disabled:cursor-not-allowed disabled:opacity-50",
        ],
        underline: [
          "rounded-full hover:text-fg",
          "group-orientation-vertical:w-full group-orientation-vertical:py-0 group-orientation-vertical:pr-2 group-orientation-vertical:pl-4",
          "group-orientation-horizontal:pb-3",

          "selected:text-fg text-muted-fg",
          "ring-0 focus:text-fg",
          "disabled:cursor-not-allowed disabled:text-muted-fg/50",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Indicator: cva({
    base: ["absolute"],
    variants: {
      variant: {
        default: ["inset-0 z-10 rounded-md bg-bg text-fg mix-blend-difference"],
        underline: [
          "rounded bg-primary",
          "group-orientation-horizontal:-bottom-px group-orientation-horizontal:inset-x-0 group-orientation-horizontal:h-0.5 group-orientation-horizontal:w-full",
          "group-orientation-vertical:top-0 group-orientation-vertical:left-0 group-orientation-vertical:h-full group-orientation-vertical:w-0.5 group-orientation-vertical:transform",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Content: cva({
    base: ["flex-1 text-fg text-sm focus-visible:outline-none"],
  }),
};
