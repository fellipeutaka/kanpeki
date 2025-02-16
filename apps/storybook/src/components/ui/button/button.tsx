"use client";

import { Button as ButtonPrimitive, Link } from "react-aria-components";
import type { VariantProps } from "~/lib/cva";
import { ButtonStyles } from "./styles";

export interface ButtonProps
  extends React.ComponentProps<typeof ButtonPrimitive>,
    VariantProps<typeof ButtonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      {...props}
      className={(values) =>
        ButtonStyles({
          variant,
          size,
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

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
      {...props}
      className={(values) =>
        ButtonStyles({
          variant,
          size,
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export { ButtonPrimitive };
