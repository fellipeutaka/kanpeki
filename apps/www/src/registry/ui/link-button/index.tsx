"use client";

import type { VariantProps } from "cva";
import { composeRenderProps, Link } from "react-aria-components";
import { ButtonStyles } from "../button";

export interface LinkButtonProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof ButtonStyles> {}

export function LinkButton({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={composeRenderProps(className, (className) =>
        ButtonStyles({ className, size, variant })
      )}
      data-slot="link"
      {...props}
    />
  );
}
