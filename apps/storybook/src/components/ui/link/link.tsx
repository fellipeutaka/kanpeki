"use client";

import {
  Link as LinkPrimitive,
  type LinkProps as LinkPrimitiveProps,
} from "react-aria-components";
import type { VariantProps } from "~/lib/cva";
import { LinkStyles } from "./styles";

export interface LinkProps
  extends LinkPrimitiveProps,
    VariantProps<typeof LinkStyles> {}

export function Link({ className, variant, ...props }: LinkProps) {
  return (
    <LinkPrimitive
      {...props}
      className={(values) =>
        LinkStyles({
          variant,
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export { LinkPrimitive };
