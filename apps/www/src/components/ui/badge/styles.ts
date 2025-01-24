import { cva } from "~/lib/cva";

export const BadgeStyles = cva({
  base: [
    "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold",
    "border-(--badge-border) bg-(--badge-bg) text-(--badge-fg) text-xs transition",
    "border-sky-100 bg-sky-50 text-sky-700 dark:border-sky-500/15 dark:bg-sky-500/10 dark:text-sky-300",
  ],
  variants: {
    variant: {
      default: [
        "[--badge-color-fg:var(--color-primary-fg)] [--badge-color:var(--color-primary)]",
      ],
      secondary: [
        "border-transparent bg-secondary text-secondary-fg",
        "hover:bg-secondary/80",
      ],
      danger: [
        "border-transparent bg-red-ui text-red-dim",
        "selection:bg-red-5 dark:selection:bg-reddark-5",
      ],
      outline: ["text-fg"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
