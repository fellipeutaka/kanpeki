import { cva } from "~/lib/cva";

export const TextSearchStyles = {
  ClearButton: cva({
    base: [
      "mr-1 size-8 pressed:bg-transparent pressed:text-fg text-muted-fg hover:bg-transparent hover:text-fg group-empty:invisible",
    ],
  }),
  Icon: cva({
    base: ["ml-2.5 size-4 shrink-0 text-muted-fg group-disabled:text-muted-fg"],
  }),
  Root: cva({
    base: ["group flex flex-col gap-y-1.5"],
  }),
};
