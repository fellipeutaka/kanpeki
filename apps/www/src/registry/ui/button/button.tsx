"use client";

import type { VariantProps } from "cva";
import { composeRenderProps, Button as RACButton } from "react-aria-components";
import { ButtonStyles } from "./styles";

export interface ButtonProps
  extends React.ComponentProps<typeof RACButton>,
    VariantProps<typeof ButtonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <RACButton
      className={composeRenderProps(className, (className) =>
        ButtonStyles({ className, size, variant })
      )}
      data-slot="button"
      {...props}
    />
  );
}

export { RACButton };
