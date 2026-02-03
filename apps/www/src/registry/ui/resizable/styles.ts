import { cva } from "~/registry/lib/cva";

export const ResizableStyles = {
  Root: cva({
    base: ["flex h-full w-full aria-[orientation=vertical]:flex-col"],
  }),
  Separator: cva({
    base: [
      "relative flex w-px items-center justify-center bg-border",
      "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
      "focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
      "aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full",
      "aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full",
      "aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2",
      "[&[aria-orientation=horizontal]>div]:rotate-90",
    ],
  }),
  Handle: cva({
    base: [
      "z-10 flex h-4 w-3 items-center justify-center rounded-xs border bg-border",
    ],
  }),
};
