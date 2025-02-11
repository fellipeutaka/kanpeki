"use client";

import { ToggleButton } from "react-aria-components";
import type { VariantProps } from "~/lib/cva";
import { ToggleStyles } from "./styles";

export interface ToggleProps
  extends React.ComponentProps<typeof ToggleButton>,
    VariantProps<typeof ToggleStyles> {}

export function Toggle({ className, variant, size, ...props }: ToggleProps) {
  return (
    <ToggleButton
      {...props}
      className={(values) =>
        ToggleStyles({
          variant,
          size,
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}
