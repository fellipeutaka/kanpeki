"use client";

import {
  ToggleButton as ToggleButtonPrimitive,
  type ToggleButtonProps as ToggleButtonPrimitiveProps,
} from "react-aria-components";
import type { VariantProps } from "~/lib/cva";
import { ToggleButtonStyles } from "./styles";

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
