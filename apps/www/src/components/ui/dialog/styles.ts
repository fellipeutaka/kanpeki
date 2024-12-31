import { cva } from "~/lib/cva";

export const DialogStyles = {
  Overlay: cva({
    base: [
      "fixed inset-0 z-50",
      "entering:fade-in-0 entering:animate-in entering:duration-500",
      "exiting:fade-out-0 exiting:animate-out exiting:duration-300",
      "[&:has([data-side='center'])]:duration-150",
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
      "fixed z-50 w-full bg-bg p-6 shadow-lg outline-none",
      "entering:fade-in-0 entering:animate-in",
      "exiting:fade-out-0 exiting:animate-out",
      "sm:rounded-lg",
    ],
    variants: {
      side: {
        top: [
          "inset-x-0 top-0 left-0 border-b entering:duration-500",
          "entering:slide-in-from-top",
          "exiting:slide-out-to-top exiting:duration-300",
        ],
        bottom: [
          "inset-x-0 bottom-0 border-t ease-in-out",
          "entering:slide-in-from-bottom",
          "exiting:slide-out-to-bottom",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r ease-in-out sm:max-w-sm",
          "entering:slide-in-from-left",
          "exiting:slide-out-to-left",
        ],
        right: [
          "inset-y-0 right-0 h-full w-3/4 border-l ease-in-out sm:max-w-sm",
          "entering:slide-in-from-right",
          "exiting:slide-out-to-right",
        ],
        center: [
          "-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 grid max-w-lg gap-4 border",
          "entering:slide-in-from-left-1/2 entering:slide-in-from-top-1/2 entering:zoom-in-95",
          "exiting:slide-out-to-left-1/2 exiting:slide-out-to-top-1/2 exiting:zoom-out-95",
        ],
      },
      isSheet: {
        true: ["entering:duration-500", "exiting:duration-300"],
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
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none",
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
