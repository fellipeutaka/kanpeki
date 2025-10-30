import { cva } from "~/registry/lib/cva";

export const InputOTPStyles = {
  Container: cva({
    base: ["flex items-center gap-2 has-disabled:opacity-50"],
  }),
  Group: cva({
    base: ["flex items-center"],
  }),
  Root: cva({
    base: ["disabled:cursor-not-allowed"],
  }),
  Slot: cva({
    base: [
      "relative flex size-9 items-center justify-center border-input border-y border-r text-sm shadow-xs outline-none transition-all",
      "first:rounded-l-md first:border-l",
      "last:rounded-r-md",
      "aria-invalid:border-destructive",
      "data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50",
      "data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20",
      "dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
    ],
  }),
};
