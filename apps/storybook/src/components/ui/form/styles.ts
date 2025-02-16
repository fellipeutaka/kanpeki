import { cva } from "~/lib/cva";

export const FormStyles = {
  Description: cva({
    base: ["text-pretty text-muted-fg text-sm sm:text-xs"],
  }),
  Error: cva({
    base: ["text-danger text-sm sm:text-xs"],
  }),
};
