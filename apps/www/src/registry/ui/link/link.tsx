"use client";

import type { VariantProps } from "cva";
import { composeRenderProps, Link as RACLink } from "react-aria-components";
import { LinkStyles } from "./styles";

export interface LinkProps
  extends React.ComponentProps<typeof RACLink>,
    VariantProps<typeof LinkStyles> {}

export function Link({ className, variant, underline, ...props }: LinkProps) {
  return (
    <RACLink
      className={composeRenderProps(className, (className) =>
        LinkStyles({ className, underline, variant })
      )}
      data-slot="link"
      {...props}
    />
  );
}

export { RACLink };
