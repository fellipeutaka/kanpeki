import { cva } from "~/lib/cva";

export const CardStyles = {
  Root: cva({
    base: ["rounded-xl border bg-card text-card-fg shadow"],
  }),
  Header: cva({
    base: ["flex flex-col space-y-1.5 p-6"],
  }),
  Title: cva({
    base: ["font-semibold text-base leading-none tracking-tight"],
  }),
  Description: cva({
    base: ["text-muted-fg text-sm"],
  }),
  Content: cva({
    base: ["p-6 pt-0"],
  }),
  Footer: cva({
    base: ["flex items-center p-6 pt-0"],
  }),
};
