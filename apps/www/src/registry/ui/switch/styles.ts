import { compose, cva } from "~/registry/lib/cva";
import { LabelStyles } from "~/registry/ui/label";

export const SwitchStyles = {
  Root: compose(
    cva({
      base: ["group inline-flex touch-none items-center gap-2"],
    }),
    LabelStyles
  ),
  Thumb: cva({
    base: [
      "pointer-events-none block size-4 translate-x-0 rounded-full shadow-lg ring-0 transition-all",
      "group-selected:ml-4",
      "group-pressed:w-5",
      "group-selected:group-pressed:ml-3",

      "bg-background dark:bg-foreground dark:group-selected:bg-primary-foreground",
    ],
  }),
  Track: cva({
    base: [
      "group inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input shadow-xs transition",
      "group-focus-visible:ring-default",
      "group-invalid:ring-destructive",
      "group-disabled:cursor-not-allowed group-disabled:opacity-50",
      "group-selected:bg-primary",
    ],
  }),
};
