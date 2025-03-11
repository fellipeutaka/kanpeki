import { compose, cva } from "~/lib/cva";
import { SeparatorStyles } from "../separator/styles";

export const DropdownMenuStyles = {
  Content: cva({
    base: [
      "overflow-auto rounded-xl p-1 outline-hidden",
      "[clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",
      "sm:max-h-[inherit]",
    ],
  }),
  Item: cva({
    base: [
      "group relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors",
      "hover:bg-accent hover:text-accent-fg",
      "disabled:opacity-50",

      "data-[danger=true]:text-danger",
      "focus:bg-accent focus:text-accent-fg",
      "focus:data-[danger=true]:bg-danger focus:data-[danger=true]:text-danger-fg",
    ],
    variants: {
      type: {
        checkbox: ["relative pl-8"],
        radio: ["relative pl-8"],
        default: [""],
      },
    },
  }),
  Shortcut: cva({
    base: ["ml-auto text-xs tracking-widest opacity-60"],
  }),
  Separator: compose(
    SeparatorStyles,
    cva({
      base: ["my-1"],
    })
  ),
  Header: cva({
    base: ["px-2 py-1.5 font-semibold text-sm"],
  }),
  CheckboxIcon: cva({
    base: [
      "absolute left-2 grid size-4 shrink-0 place-content-center opacity-0 transition-opacity",
      "group-aria-checked:opacity-100",
    ],
  }),
  ItemDetails: cva({
    base: ["flex flex-col gap-y-1"],
  }),
};
