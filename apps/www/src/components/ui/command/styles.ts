import { cva } from "~/lib/cva";
import { DropdownMenuStyles } from "../dropdown-menu";

export const CommandStyles = {
  Empty: cva({
    base: ["p-4 text-center text-muted-fg text-sm"],
  }),
  Header: (props?: { className?: string }) =>
    DropdownMenuStyles.Header({
      className: ["font-medium text-muted-fg text-xs", props?.className],
    }),
  Shortcut: cva({
    base: ["ml-auto text-muted-fg text-xs tracking-widest"],
  }),
  // Root: cva({
  //   base: [
  //     "flex w-full flex-col overflow-hidden rounded-md bg-popover text-popover-fg",
  //   ],
  // }),
  // Dialog: cva({
  //   base: [
  //     "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-fg [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3",
  //   ],
  // }),
  // Input: cva({
  //   base: [
  //     "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden",
  //     "placeholder:text-muted-fg",
  //     "disabled:cursor-not-allowed disabled:opacity-50",
  //   ],
  // }),
  // List: cva({
  //   base: ["max-h-[300px] overflow-y-auto overflow-x-hidden"],
  // }),
  // Group: cva({
  //   base: [
  //     "overflow-hidden p-1 text-fg",
  //     "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium",
  //     "[&_[cmdk-group-heading]]:text-muted-fg [&_[cmdk-group-heading]]:text-xs",
  //   ],
  // }),
  // Separator: cva({
  //   base: ["-mx-1 my-1 h-px bg-border"],
  // }),
};
