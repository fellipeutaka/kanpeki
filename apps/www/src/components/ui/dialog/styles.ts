import { cva } from "~/lib/cva";

export const DialogStyles = {
  Close: cva({
    base: [
      "absolute top-4 right-4 size-4 rounded-sm opacity-70 outline-none ring-offset-bg transition",
      "hover:opacity-100",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none",
    ],
  }),
  Content: cva({
    base: ["outline-none"],
  }),
  Description: cva({
    base: ["text-muted-fg text-sm"],
  }),
  Footer: cva({
    base: ["flex flex-col-reverse", "sm:flex-row sm:justify-end sm:space-x-2"],
  }),
  Header: cva({
    base: ["flex flex-col space-y-1.5 text-center", "sm:text-left"],
  }),
  Modal: cva({
    base: [
      "data-[side=center]:motion-duration-150! fixed z-50 w-full bg-bg p-6 shadow-lg outline-none",
      "entering:motion-opacity-in entering:motion-duration-500",
      "exiting:motion-opacity-out exiting:motion-duration-300",
      "sm:rounded-lg",
    ],
    defaultVariants: {
      side: "center",
    },
    variants: {
      side: {
        bottom: [
          "inset-x-0 bottom-0 border-t ease-in-out",
          "entering:motion-translate-y-in-100",
          "exiting:motion-translate-y-out-100",
        ],
        center: [
          "-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 grid max-w-lg gap-4 border",
          "entering:motion-scale-in-95",
          "exiting:motion-scale-out-95",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r ease-in-out sm:max-w-sm",
          "entering:-motion-translate-x-in-100",
          "exiting:-motion-translate-x-out-100",
        ],
        right: [
          "inset-y-0 right-0 h-full w-3/4 border-l ease-in-out sm:max-w-sm",
          "entering:motion-translate-x-in-100",
          "exiting:motion-translate-x-out-100",
        ],
        top: [
          "inset-x-0 top-0 left-0 border-b",
          "entering:-motion-translate-y-in-100",
          "exiting:-motion-translate-y-out-100",
        ],
      },
    },
  }),
  Overlay: cva({
    base: [
      "fixed inset-0 z-50",
      "entering:motion-opacity-in entering:motion-duration-500",
      "exiting:motion-opacity-out exiting:motion-duration-300",
      "has-[[data-side=center]]:motion-duration-150!",
    ],
    defaultVariants: {
      isBlurred: false,
    },
    variants: {
      isBlurred: {
        false: ["bg-black/15 dark:bg-black/60"],
        true: ["backdrop-blur"],
      },
    },
  }),
  Title: cva({
    base: ["font-semibold text-lg leading-none tracking-tight"],
  }),
};
