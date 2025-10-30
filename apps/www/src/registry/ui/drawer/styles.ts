import { cva } from "~/registry/lib/cva";

export const DrawerStyles = {
  Body: cva({
    base: ["flex-1 overflow-auto p-4"],
  }),
  Content: cva({
    base: [
      "group relative flex flex-col overflow-hidden outline-none",
      "h-full max-h-full",
    ],
    defaultVariants: {
      side: "bottom",
    },
    variants: {
      side: {
        bottom: ["mx-auto w-full max-w-lg"],
        left: ["h-full"],
        right: ["h-full"],
        top: ["mx-auto w-full max-w-lg"],
      },
    },
  }),
  Description: cva({
    base: ["text-muted-foreground text-sm"],
  }),
  Footer: cva({
    base: ["flex flex-col-reverse p-4 sm:flex-row sm:justify-end sm:space-x-2"],
  }),
  Header: cva({
    base: ["flex flex-col space-y-1.5 p-4 text-center sm:text-left"],
  }),
  Modal: cva({
    base: [
      "fixed z-50 flex touch-none flex-col gap-4 bg-background shadow-lg will-change-transform",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:duration-300 data-[state=open]:duration-500",
    ],
    compoundVariants: [
      {
        className: "inset-x-2 top-2 rounded-lg border",
        isFloat: true,
        side: "top",
      },
      {
        className: "inset-y-2 right-2 rounded-lg border",
        isFloat: true,
        side: "right",
      },
      {
        className: "inset-x-2 bottom-2 rounded-lg border",
        isFloat: true,
        side: "bottom",
      },
      {
        className: "inset-y-2 left-2 rounded-lg border",
        isFloat: true,
        side: "left",
      },
    ],
    defaultVariants: {
      isFloat: false,
      side: "bottom",
    },
    variants: {
      isFloat: {
        false: "",
        true: "",
      },
      side: {
        bottom: [
          "inset-x-0 bottom-0 rounded-t-lg border-t",
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        ],
        right: [
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        ],
        top: [
          "inset-x-0 top-0 rounded-b-lg border-b",
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        ],
      },
    },
  }),
  Notch: cva({
    base: ["mx-auto h-2 w-[100px] rounded-full bg-muted"],
    defaultVariants: {
      side: "bottom",
    },
    variants: {
      side: {
        bottom: ["my-4"],
        left: [],
        right: [],
        top: ["order-last mb-4"],
      },
    },
  }),
  Overlay: cva({
    base: [
      "fixed inset-0 z-50 bg-black/15 dark:bg-black/60",
      "entering:motion-opacity-in motion-duration-200 motion-ease exiting:motion-opacity-out",
    ],
  }),
  Title: cva({
    base: ["font-semibold text-lg leading-none tracking-tight"],
  }),
};
