import { compose, cva } from "~/registry/lib/cva";
import { CollapsibleStyles } from "~/registry/ui/collapsible";

export const AccordionStyles = {
  Content: compose(
    CollapsibleStyles.Content,
    cva({
      base: ["*:pb-4"],
    })
  ),
  Icon: cva({
    base: [
      "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-expanded:rotate-180",
    ],
  }),
  Item: cva({
    base: ["group border-b last:border-b-0"],
  }),
  Trigger: cva({
    base: [
      "flex w-full flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all",
      "hover:underline",
      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      "disabled:pointer-events-none disabled:opacity-50",
    ],
  }),
};
