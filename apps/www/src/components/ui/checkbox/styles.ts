import { cva } from "~/lib/cva";

export const CheckboxStyles = {
  Provider: cva({
    base: [
      "group flex items-center gap-2 text-sm transition",
      "disabled:opacity-50",
    ],
  }),
  Root: cva({
    base: [
      "grid size-4 shrink-0 cursor-pointer place-content-center rounded border border-toggle bg-secondary text-bg transition",

      "group-data-selected:border-primary/70 group-data-selected:bg-primary group-data-selected:text-primary-fg",
      "group-data-selected:group-data-invalid:border-danger/70 group-data-selected:group-data-invalid:bg-danger group-data-selected:group-data-invalid:text-danger-fg",

      "group-data-focus-visible:border-primary/70 group-data-focus-visible:ring-4 group-data-focus-visible:ring-primary/20",
      "group-data-focus-visible:group-data-invalid:border-danger/70 group-data-focus-visible:group-data-invalid:text-danger-fg group-data-focus-visible:group-data-invalid:ring-danger/20",

      "group-data-invalid:border-danger/70 group-data-invalid:bg-danger/20 group-data-invalid:text-danger-fg group-data-invalid:ring-danger/20",
      "group-data-disabled:cursor-not-allowed",
    ],
  }),
  Indicator: cva({
    base: ["hidden size-3"],
  }),
};
