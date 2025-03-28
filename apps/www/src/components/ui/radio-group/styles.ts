import { cva } from "~/lib/cva";

export const RadioGroupStyles = {
  Root: cva({
    base: ["grid gap-2"],
  }),
  Item: cva({
    base: ["group flex items-center gap-1"],
  }),
};
