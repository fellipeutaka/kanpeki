import { cva } from "~/lib/cva";

export const SwitchStyles = {
  Root: cva({
    base: ["group inline-flex touch-none items-center lg:text-sm"],
  }),
  Track: cva({
    base: [
      "group inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input shadow-xs transition",
      "group-data-focus-visible:ring-default",
      "group-data-invalid:ring-danger",
      "group-data-disabled:cursor-not-allowed group-data-disabled:opacity-50",
      "group-data-selected:bg-primary",
    ],
  }),
  Thumb: cva({
    base: [
      "pointer-events-none block size-4 translate-x-0 rounded-full bg-bg shadow-lg ring-0 transition-all dark:bg-fg",
      "group-data-selected:ml-4",
      "group-data-pressed:w-5",
      "group-data-selected:group-data-pressed:ml-3",
    ],
  }),
};
