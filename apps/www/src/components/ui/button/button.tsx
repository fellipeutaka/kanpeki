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
          className:
            typeof className === "function" ? className(values) : className,
          size,
          variant,
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
          className:
            typeof className === "function" ? className(values) : className,
          size,
          variant,
        })
      }
    />
  );
}

export { ButtonPrimitive };
