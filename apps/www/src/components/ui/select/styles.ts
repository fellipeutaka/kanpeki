import { cva } from "~/lib/cva";

export const SelectStyles = {
  Trigger: cva({
    base: [
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-hidden ring-offset-bg transition",
      "placeholder:text-muted-fg focus-visible:ring-1 focus-visible:ring-ring [&>span]:line-clamp-1",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "group-invalid:border-danger group-invalid:focus:border-danger group-invalid:focus:ring-4 group-invalid:focus:ring-danger/20",
    ],
  }),
};
