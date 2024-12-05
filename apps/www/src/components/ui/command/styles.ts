import { cva } from "~/lib/cva";

export const CommandStyles = {
  Root: cva({
    base: [
      "flex w-full flex-col overflow-hidden rounded-md bg-popover text-popover-fg",
    ],
  }),
  Dialog: cva({
    base: [
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-fg [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3",
    ],
  }),
  Input: cva({
    base: [
      "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none",
      "placeholder:text-muted-fg",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  }),
  List: cva({
    base: ["max-h-[300px] overflow-y-auto overflow-x-hidden"],
  }),
  Empty: cva({
    base: ["py-6 text-center text-sm"],
  }),
  Group: cva({
    base: [
      "overflow-hidden p-1 text-fg",
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium",
      "[&_[cmdk-group-heading]]:text-muted-fg [&_[cmdk-group-heading]]:text-xs",
    ],
  }),
  Separator: cva({
    base: ["-mx-1 my-1 h-px bg-border"],
  }),
  Item: cva({
    base: [
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "aria-selected:bg-accent aria-selected:text-accent-fg",
      "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    ],
  }),
  Shortcut: cva({
    base: ["ml-auto text-muted-fg text-xs tracking-widest"],
  }),
};
