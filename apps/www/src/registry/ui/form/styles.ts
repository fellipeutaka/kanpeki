import { cva } from "~/registry/lib/cva";

export const FormStyles = {
  Description: cva({
    base: ["text-pretty text-muted-foreground text-sm"],
  }),
  Message: cva({
    base: ["text-pretty text-destructive text-sm"],
  }),
};
