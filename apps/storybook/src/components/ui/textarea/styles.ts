import { cva } from "~/lib/cva";

export const TextAreaStyles = cva({
  base: [
    "flex min-h-20 w-full resize-none rounded-md border border-input bg-bg px-3 py-2 text-sm outline-hidden ring-offset-2 ring-offset-bg transition",
    "placeholder:text-muted-fg",
    "disabled:cursor-not-allowed disabled:opacity-50",

    "focus:border-ring/85 focus:ring-4 focus:ring-ring/20",
    "group-invalid:border-danger group-invalid:focus:border-danger group-invalid:focus:ring-4 group-invalid:focus:ring-danger/20",
  ],
});
