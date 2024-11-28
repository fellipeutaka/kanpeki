"use client";

import {
  ToggleButton as ToggleButtonPrimitive,
  type ToggleButtonProps as ToggleButtonPrimitiveProps,
} from "react-aria-components";
import { type VariantProps, cva } from "~/lib/cva";

export const ToggleButtonStyles = cva({
  base: [
    "inline-flex items-center justify-center gap-2 rounded-md font-medium text-sm outline-none ring-offset-bg transition-colors",
    "hover:bg-muted hover:text-muted-fg",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "selected:bg-accent selected:text-accent-fg [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: ["bg-transparent"],
      outline: [
        "border border-input bg-transparent",
        "hover:bg-accent hover:text-accent-fg",
      ],
    },
    size: {
      default: ["h-10 min-w-10 px-3"],
      sm: ["h-9 min-w-9 px-2.5"],
      lg: ["h-11 min-w-11 px-5"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ToggleButtonProps
  extends ToggleButtonPrimitiveProps,
    VariantProps<typeof ToggleButtonStyles> {}

export function ToggleButton({
  className,
  variant,
  size,
  ...props
}: ToggleButtonProps) {
  return (
    <ToggleButtonPrimitive
      {...props}
      className={(values) =>
        ToggleButtonStyles({
          variant,
          size,
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}
