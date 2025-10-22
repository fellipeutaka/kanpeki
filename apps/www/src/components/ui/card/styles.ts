import { cva } from "~/lib/cva";

export const CardStyles = {
  Content: cva({
    base: ["p-6 pt-0"],
  }),
  Description: cva({
    base: ["text-muted-fg text-sm"],
  }),
  Footer: cva({
    base: ["flex items-center p-6 pt-0"],
  }),
  Header: cva({
    base: ["flex flex-col space-y-1.5 p-6"],
  }),
  Root: cva({
    base: ["rounded-xl border bg-card text-card-fg shadow-sm"],
  }),
  Title: cva({
    base: ["font-semibold text-base leading-none tracking-tight"],
  }),
};
