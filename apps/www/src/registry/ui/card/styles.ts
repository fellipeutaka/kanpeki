import { cva } from "~/registry/lib/cva";

export const CardStyles = {
  Action: cva({
    base: ["col-start-2 row-span-2 row-start-1 self-start justify-self-end"],
  }),
  Content: cva({
    base: ["px-6"],
  }),
  Description: cva({
    base: ["text-muted-foreground text-sm"],
  }),
  Footer: cva({
    base: ["flex items-center px-6 [.border-t]:pt-6"],
  }),
  Header: cva({
    base: [
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
    ],
  }),
  Root: cva({
    base: [
      "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
    ],
  }),
  Title: cva({
    base: ["font-semibold leading-none"],
  }),
};
