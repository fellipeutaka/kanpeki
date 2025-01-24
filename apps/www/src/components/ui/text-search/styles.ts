import { cva } from "~/lib/cva";

export const TextSearchStyles = {
  Root: cva({
    base: ["group flex flex-col gap-y-1.5"],
  }),
  Icon: cva({
    base: ["ml-2.5 size-4 shrink-0 text-muted-fg group-disabled:text-muted-fg"],
  }),
  ClearButton: cva({
    base: [
      "mr-1 size-8 text-muted-fg hover:bg-transparent hover:text-fg group-empty:invisible data-pressed:bg-transparent data-pressed:text-fg",
    ],
  }),
};
