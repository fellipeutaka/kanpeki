import { cva } from "~/lib/cva";

export const TabsStyles = {
  Root: cva({
    base: [
      "group flex w-full gap-4",
      "data-[orientation=horizontal]:flex-col",
      "data-[orientation=vertical]:flex-row",
    ],
  }),
  List: cva({
    base: [
      "flex",
      "data-[orientation=horizontal]:flex-row",
      "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-y-4 data-[orientation=vertical]:border-l",
    ],
    variants: {
      variant: {
        default: [
          "items-center justify-center rounded-lg bg-muted p-1 text-muted-fg data-[orientation=horizontal]:h-9",
        ],
        underline: [
          "data-[orientation=horizontal]:gap-x-5 data-[orientation=horizontal]:border-border data-[orientation=horizontal]:border-b",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Trigger: cva({
    base: [
      "relative flex cursor-pointer items-center whitespace-nowrap font-medium text-sm outline-hidden transition",
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
          "group-data-[orientation=vertical]:w-full group-data-[orientation=vertical]:py-0 group-data-[orientation=vertical]:pr-2 group-data-[orientation=vertical]:pl-4",
          "group-data-[orientation=horizontal]:pb-3",

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
          "group-data-[orientation=horizontal]:-bottom-px group-data-[orientation=horizontal]:inset-x-0 group-data-[orientation=horizontal]:h-0.5 group-data-[orientation=horizontal]:w-full",
          "group-data-[orientation=vertical]:top-0 group-data-[orientation=vertical]:left-0 group-data-[orientation=vertical]:h-full group-data-[orientation=vertical]:w-0.5 group-data-[orientation=vertical]:transform",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Content: cva({
    base: ["flex-1 text-fg text-sm focus-visible:outline-hidden"],
  }),
};
