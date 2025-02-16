import { cva } from "~/lib/cva";

export const SelectStyles = {
  Trigger: cva({
    base: [
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-hidden",
      "ring-offset-bg placeholder:text-muted-fg focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
    ],
  }),
};
