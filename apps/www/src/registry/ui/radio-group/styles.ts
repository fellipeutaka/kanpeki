import { compose, cva } from "~/registry/lib/cva";
import { LabelStyles } from "../label";

export const RadioGroupStyles = {
  Indicator: cva({
    base: [
      "grid aspect-square size-4 shrink-0 place-content-center rounded-full border border-input text-primary",
      "shadow-xs outline-none transition",
      "group-focus-visible:border-ring group-focus-visible:ring-[3px] group-focus-visible:ring-ring/50",
      "group-disabled:cursor-not-allowed group-disabled:opacity-50",
      "group-aria-invalid:border-destructive group-aria-invalid:ring-destructive/20",
      "group-dark:bg-input/30 group-dark:aria-invalid:ring-destructive/40",
    ],
  }),
  Item: compose(
    LabelStyles,
    cva({
      base: ["group flex w-fit items-center gap-3"],
    })
  ),
  Root: cva({
    base: ["grid gap-3"],
  }),
};
