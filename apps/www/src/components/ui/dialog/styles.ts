import { cva } from "~/lib/cva";

export const DialogStyles = {
  Overlay: cva({
    base: [
      "fixed inset-0 z-50",
      "data-entering:motion-opacity-in data-entering:motion-duration-500",
      "data-exiting:motion-opacity-out data-exiting:motion-duration-300",
      "has-[[data-side=center]]:motion-duration-150!",
    ],
    variants: {
      isBlurred: {
        true: ["backdrop-blur"],
        false: ["bg-black/15 dark:bg-black/60"],
      },
    },
    defaultVariants: {
      isBlurred: false,
    },
  }),
  Modal: cva({
    base: [
      "data-[side=center]:motion-duration-150! fixed z-50 w-full bg-bg p-6 shadow-lg outline-none",
      "data-entering:motion-opacity-in data-entering:motion-duration-500",
      "data-exiting:motion-opacity-out data-exiting:motion-duration-300",
      "sm:rounded-lg",
    ],
    variants: {
      side: {
        top: [
          "inset-x-0 top-0 left-0 border-b",
          "data-entering:-motion-translate-y-in-100",
          "data-exiting:-motion-translate-y-out-100",
        ],
        bottom: [
          "inset-x-0 bottom-0 border-t ease-in-out",
          "data-entering:motion-translate-y-in-100",
          "data-exiting:motion-translate-y-out-100",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r ease-in-out sm:max-w-sm",
          "data-entering:-motion-translate-x-in-100",
          "data-exiting:-motion-translate-x-out-100",
        ],
        right: [
          "inset-y-0 right-0 h-full w-3/4 border-l ease-in-out sm:max-w-sm",
          "data-entering:motion-translate-x-in-100",
          "data-exiting:motion-translate-x-out-100",
        ],
        center: [
          "-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 grid max-w-lg gap-4 border",
          "data-entering:motion-scale-in-95",
          "data-exiting:motion-scale-out-95",
        ],
      },
    },
    defaultVariants: {
      side: "center",
    },
  }),
  Content: cva({
    base: ["outline-none"],
  }),
  Close: cva({
    base: [
      "absolute top-4 right-4 size-4 rounded-sm opacity-70 outline-none ring-offset-bg transition",
      "hover:opacity-100",
      "data-focus-visible:ring-2 data-focus-visible:ring-ring data-focus-visible:ring-offset-2",
      "data-disabled:pointer-events-none",
    ],
  }),
  Header: cva({
    base: ["flex flex-col space-y-1.5 text-center", "sm:text-left"],
  }),
  Footer: cva({
    base: ["flex flex-col-reverse", "sm:flex-row sm:justify-end sm:space-x-2"],
  }),
  Title: cva({
    base: ["font-semibold text-lg leading-none tracking-tight"],
  }),
  Description: cva({
    base: ["text-muted-fg text-sm"],
  }),
};
