import { cva } from "~/registry/lib/cva";

export const LabelStyles = cva({
  base: [
    "flex select-none items-center gap-2 font-medium text-sm leading-none",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
    "group-disabled:pointer-events-none group-disabled:opacity-50",
  ],
});
