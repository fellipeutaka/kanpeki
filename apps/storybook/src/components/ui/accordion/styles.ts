import { cva } from "~/lib/cva";

export const AccordionStyles = {
  Item: cva({
    base: ["group border-b"],
  }),
  Trigger: cva({
    base: [
      "flex w-full flex-1 items-center justify-between py-4 text-left font-medium text-sm outline-hidden transition-all hover:underline",
    ],
  }),
  TriggerIcon: cva({
    base: [
      "size-4 shrink-0 text-muted-fg transition-transform duration-200 group-expanded:rotate-180",
    ],
  }),
  Content: cva({
    base: [
      "overflow-hidden text-sm transition-all transition-discrete [interpolate-size:allow-keywords] group-expanded:h-auto aria-hidden:h-0",
    ],
  }),
};
