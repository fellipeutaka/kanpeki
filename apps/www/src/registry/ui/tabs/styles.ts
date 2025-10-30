import { cva } from "~/registry/lib/cva";

export const TabsStyle = {
  Content: cva({
    base: ["flex-1 outline-none"],
  }),
  List: cva({
    base: [
      "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground",
    ],
  }),
  Root: cva({
    base: ["flex flex-col gap-2"],
  }),
  Trigger: cva({
    base: [
      "inline-flex h-[calc(100%-1px)] flex-1 select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md border",
      "border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow]",
      "focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      "disabled:pointer-events-none disabled:opacity-50",
      "selected:bg-background selected:shadow-sm",
      "dark:selected:border-input dark:selected:bg-input/30 dark:selected:text-foreground dark:text-muted-foreground",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
  }),
};
