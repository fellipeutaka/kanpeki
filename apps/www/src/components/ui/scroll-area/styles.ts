import { cva } from "~/lib/cva";

export const ScrollAreaStyles = {
  Root: cva({
    base: ["relative overflow-hidden"],
  }),
  Viewport: cva({
    base: ["size-full rounded-[inherit]"],
  }),
  Scrollbar: cva({
    base: ["flex touch-none select-none transition-colors"],
    variants: {
      orientation: {
        vertical: ["h-full w-2.5 border-l border-l-transparent p-px"],
        horizontal: ["h-2.5 flex-col border-t border-t-transparent p-px"],
      },
    },
  }),
  Thumb: cva({
    base: ["relative flex-1 rounded-full bg-border"],
  }),
};
