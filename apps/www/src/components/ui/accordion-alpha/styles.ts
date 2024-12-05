import { cva } from "~/lib/cva";

export const AccordionStyles = {
  Item: cva({
    base: ["group border-b"],
  }),
  Trigger: cva({
    base: [
      "flex w-full flex-1 items-center justify-between py-4 text-left font-medium text-sm outline-none transition-all hover:underline",
    ],
  }),
  TriggerIcon: cva({
    base: [
      "size-4 shrink-0 text-muted-fg transition-transform duration-200 group-data-[expanded=true]:rotate-180",
    ],
  }),
  Content: cva({
    base: [
      "grid grid-rows-[0] overflow-hidden text-sm transition-all duration-500 group-data-[expanded=true]:grid-rows-1",
    ],
  }),
};
