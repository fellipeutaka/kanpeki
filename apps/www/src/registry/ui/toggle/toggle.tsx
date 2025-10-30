"use client";

import type { VariantProps } from "cva";
import { ToggleButton } from "react-aria-components";
import { ToggleStyles } from "./styles";

export interface ToggleProps
  extends React.ComponentProps<typeof ToggleButton>,
    VariantProps<typeof ToggleStyles> {}

export function Toggle({ className, variant, size, ...props }: ToggleProps) {
  return (
    <ToggleButton
      className={ToggleStyles({ className, size, variant })}
      data-slot="toggle"
      {...props}
    />
  );
}
