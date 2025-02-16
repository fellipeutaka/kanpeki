import { cva } from "~/lib/cva";

export const AlertStyles = {
  Root: cva({
    base: [
      "relative w-full rounded-lg border px-4 py-3 text-sm",
      "[&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-fg [&>svg~*]:pl-7",
    ],

    variants: {
      variant: {
        default: ["bg-bg text-fg"],
        danger: [
          "border-danger/50 text-danger",
          "dark:border-datext-danger",
          "[&>svg]:text-danger",
        ],
        warning: [
          "border-warning/50 text-warning",
          "dark:border-warning",
          "[&>svg]:text-warning",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Title: cva({
    base: ["mb-1 font-medium leading-none tracking-tight"],
  }),
  Description: cva({
    base: ["text-sm", "[&_p]:leading-relaxed"],
  }),
};
