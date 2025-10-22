import { cva } from "~/lib/cva";

export const ListBoxStyles = {
  Item: cva({
    base: "relative cursor-pointer rounded-[calc(var(--radius)-1px)] p-2 text-base outline-hidden lg:text-sm",
    variants: {
      isDisabled: {
        true: "cursor-default text-muted-fg opacity-70",
      },
      isDragging: { true: "cursor-grabbing bg-secondary text-secondary-fg" },
      isFocusVisible: {
        true: "bg-secondary text-secondary-fg [&:focus-visible_[slot=description]]:text-accent-fg/70 [&:focus-visible_[slot=label]]:text-accent-fg",
      },
      isHovered: {
        true: "bg-accent/60 text-accent-fg [&:hover_[slot=description]]:text-accent-fg/70 [&:hover_[slot=label]]:text-accent-fg [&_.text-muted-fg]:text-accent-fg/80",
      },
      isSelected: {
        true: "bg-accent text-accent-fg **:data-[slot=icon]:text-accent-fg **:data-[slot=label]:text-accent-fg [&_.text-muted-fg]:text-accent-fg/80",
      },
    },
  }),
  Picker: cva({
    base: ["max-h-72 overflow-auto p-1 outline-hidden"],
  }),
  Root: cva({
    base: [
      "flex max-h-96 w-full min-w-72 flex-col gap-y-1 overflow-y-auto rounded-xl border p-1 shadow-lg outline-hidden [scrollbar-width:thin] [&::-webkit-scrollbar]:size-0.5",
    ],
  }),
  Section: cva({
    base: [
      "first:-mt-1 flex flex-col gap-y-0.5 after:block after:h-1 after:content-['']",
    ],
  }),
  SectionHeader: cva({
    base: [
      "-top-1.5 -mb-0.5 -mx-1 sticky z-10 min-w-(--trigger-width) truncate border-y bg-bg px-4 py-2 font-medium text-muted-fg text-sm supports-[-moz-appearance:none]:bg-bg [&+*]:mt-1",
    ],
  }),
};
