import { cva } from "~/lib/cva";

export const RadioGroupStyles = {
  Item: cva({
    base: ["group flex items-center gap-1"],
  }),
  Root: cva({
    base: ["grid gap-2"],
  }),
};
