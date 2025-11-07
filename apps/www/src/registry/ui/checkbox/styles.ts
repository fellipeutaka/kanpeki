import { cva } from "~/registry/lib/cva";

export const CheckboxStyles = {
  Indicator: cva({
    base: ["hidden size-3"],
  }),
  Provider: cva({
    base: [
      "group flex items-center gap-3 font-medium text-sm leading-none transition",
      "disabled:opacity-50",
    ],
  }),
  Root: cva({
    base: [
      "grid size-4 shrink-0 place-content-center rounded-sm border border-toggle bg-secondary text-background transition",

      "group-selected:border-primary/70 group-selected:bg-primary group-selected:text-primary-foreground",
      "group-selected:group-invalid:border-destructive/70 group-selected:group-invalid:bg-destructive group-selected:group-invalid:text-destructive-foreground",

      "group-focus-visible:border-primary/70 group-focus-visible:ring-4 group-focus-visible:ring-primary/20",
      "group-focus-visible:group-invalid:border-destructive/70 group-focus-visible:group-invalid:text-destructive-foreground group-focus-visible:group-invalid:ring-destructive/20",

      "group-invalid:border-destructive/70 group-invalid:bg-destructive/20 group-invalid:text-destructive-foreground group-invalid:ring-destructive/20",
      "group-disabled:cursor-not-allowed",
    ],
  }),
};
