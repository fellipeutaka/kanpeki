import { cva } from "~/lib/cva";

export const TextFieldStyles = {
  Provider: cva({
    base: ["group flex flex-col gap-y-1.5"],
  }),
  Root: cva({
    base: [
      "group flex h-10 items-center gap-2 overflow-hidden rounded-lg border border-input bg-bg px-2.5 text-base transition",
      "lg:text-sm",
      "focus-within:border-ring/85 focus-within:ring-4 focus-within:ring-ring/20",
      "group-invalid:border-danger group-invalid:focus-within:border-danger group-invalid:focus-within:ring-4 group-invalid:focus-within:ring-danger/20",
      "disabled:bg-secondary disabled:opacity-50",
    ],
  }),
  Input: cva({
    base: [
      "size-full min-w-0 select-none bg-transparent text-fg placeholder-muted-fg outline-none",
      "[&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden",
    ],
  }),
  Slot: cva({
    base: ["relative z-10 flex shrink-0 items-center text-muted-fg"],
  }),
};
