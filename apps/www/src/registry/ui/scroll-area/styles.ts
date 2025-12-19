import { cva } from "~/registry/lib/cva";

export const ScrollAreaStyles = {
  Root: cva({
    base: ["size-full min-h-0"],
  }),
  Scrollbar: cva({
    base: [
      "m-1 flex opacity-0 transition-opacity delay-300",
      "data-hovering:opacity-100 data-scrolling:opacity-100",
      "data-hovering:delay-0 data-scrolling:delay-0",
      "data-hovering:duration-100 data-scrolling:duration-100",
    ],
    variants: {
      orientation: {
        horizontal: ["h-1.5 flex-col"],
        vertical: ["w-1.5"],
      },
    },
  }),
  Thumb: cva({
    base: ["relative flex-1 rounded-full bg-foreground/20"],
  }),
  Viewport: cva({
    base: [
      "h-full overscroll-contain rounded-[inherit] outline-none transition-shadows",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    ],
    variants: {
      scrollFade: {
        true: [
          "mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))]",
          "mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))]",
          "mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))]",
          "mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))]",
          "[--fade-size:1.5rem]",
        ],
        false: [],
      },
      scrollbarGutter: {
        true: ["data-has-overflow-y:pe-2.5 data-has-overflow-x:pb-2.5"],
        false: [],
      },
    },
    defaultVariants: {
      scrollFade: false,
      scrollbarGutter: false,
    },
  }),
};
