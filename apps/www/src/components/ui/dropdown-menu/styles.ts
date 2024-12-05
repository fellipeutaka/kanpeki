import { compose, cva } from "~/lib/cva";
import { SeparatorStyles } from "../separator/styles";

export const DropdownMenuStyles = {
  Content: cva({
    base: [
      "overflow-auto rounded-xl p-1 outline outline-0",
      "[clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",
      "sm:max-h-[inherit]",
    ],
  }),
  Item: cva({
    base: [
      "group relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors [&>svg]:size-4 [&>svg]:shrink-0",
    ],
    variants: {
      isDisabled: {
        true: "text-muted-fg",
      },
      isFocused: {
        false: "data-[danger=true]:text-danger",
        true: [
          "bg-accent text-accent-fg",
          "data-[danger=true]:bg-danger data-[danger=true]:text-danger-fg",
        ],
      },
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
      "absolute left-2 grid size-4 shrink-0 place-content-center opacity-0 transition-opacity group-aria-checked:opacity-100",
    ],
  }),
  ItemDetails: cva({
    base: ["flex flex-col gap-y-1"],
  }),
};
