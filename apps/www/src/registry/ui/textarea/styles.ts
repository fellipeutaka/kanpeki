import { cva } from "~/registry/lib/cva";

export const TextareaStyles = cva({
  base: [
    "field-sizing-content flex min-h-16 w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs",
    "outline-none transition-[color,box-shadow] placeholder:text-muted-foreground",
    "focus:border-ring focus:ring-[3px] focus:ring-ring/50",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
  ],
});
