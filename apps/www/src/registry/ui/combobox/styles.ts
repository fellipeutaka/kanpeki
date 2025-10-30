import { cva } from "~/registry/lib/cva";

export const ComboboxStyles = {
  Icon: cva({
    base: ["text-muted-foreground"],
  }),
  Input: cva({
    base: ["size-full flex-1 bg-transparent py-2 outline-none"],
  }),
  Root: cva({
    base: ["[&_[data-slot=combobox-trigger]]:w-full"],
  }),
  Trigger: cva({
    base: [
      "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm outline-none",
      "transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      "pending:opacity-50 disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
      "*:first:pl-4 *:last:pr-4",
    ],
  }),
};
