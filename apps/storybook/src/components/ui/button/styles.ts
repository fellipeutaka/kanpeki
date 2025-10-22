import { cva } from "~/lib/cva";

export const ButtonStyles = cva({
  base: [
    "inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-md font-medium text-sm outline-hidden ring-offset-2 ring-offset-bg transition",
    "focus-visible:ring-1",
    "pending:cursor-wait pending:opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
    "pressed:scale-95",
  ],
  defaultVariants: {
    size: "default",
    variant: "default",
  },

  variants: {
    size: {
      default: ["h-9 px-4 py-2"],
      icon: ["size-9"],
      lg: ["h-10 rounded-md px-8"],
      sm: ["h-8 rounded-md px-3 text-xs"],
    },
    variant: {
      danger: [
        "bg-danger text-danger-fg shadow-xs",
        "hover:bg-danger/90",
        "focus-visible:ring-danger",
      ],
      default: [
        "bg-primary text-primary-fg shadow-sm",
        "hover:bg-primary/90",
        "focus-visible:ring-primary",
      ],
      ghost: [
        "hover:bg-accent hover:text-accent-fg",
        "focus-visible:ring-accent",
      ],
      link: [
        "text-primary underline-offset-4",
        "hover:underline",
        "focus-visible:ring-ring",
      ],
      outline: [
        "border border-input bg-bg shadow-xs",
        "hover:bg-accent hover:text-accent-fg",
        "focus-visible:ring-accent",
      ],
      secondary: [
        "bg-secondary text-secondary-fg shadow-xs",
        "hover:bg-secondary/80",
        "focus-visible:ring-secondary",
      ],
      success: [
        "bg-success text-success-fg shadow-xs",
        "hover:bg-success/90",
        "focus-visible:ring-success",
      ],
      unset: null,
      warning: [
        "bg-warning text-warning-fg shadow-xs",
        "hover:bg-warning/90",
        "focus-visible:ring-warning",
      ],
    },
  },
});
