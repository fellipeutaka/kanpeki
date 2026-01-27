import { cva } from "~/registry/lib/cva";

export const ButtonGroupStyles = {
  Root: cva({
    base: "flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group-root]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",

    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }),
  Text: cva({
    base: "flex items-center gap-2 rounded-md border bg-muted px-4 font-medium text-sm shadow-xs [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
  }),
  Separator: cva({
    base: "relative m-0! orientation-vertical:h-auto self-stretch bg-input",
  }),
};
