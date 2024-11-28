"use client";

import { Button as ButtonPrimitive, Link } from "react-aria-components";
import { type VariantProps, cva } from "~/lib/cva";

export const ButtonStyles = cva({
  base: [
    "inline-flex select-none items-center justify-center whitespace-nowrap rounded-md font-medium text-sm outline-none ring-offset-2 ring-offset-bg transition",
    "focus-visible:ring-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "pressed:scale-95",
  ],

  variants: {
    variant: {
      default: [
        "bg-primary text-primary-fg shadow",
        "hover:bg-primary/90",
        "focus-visible:ring-primary",
      ],
      success: [
        "bg-success text-success-fg shadow-sm",
        "hover:bg-success/90",
        "focus-visible:ring-success",
      ],
      warning: [
        "bg-warning text-warning-fg shadow-sm",
        "hover:bg-warning/90",
        "focus-visible:ring-warning",
      ],
      danger: [
        "bg-danger text-danger-fg shadow-sm",
        "hover:bg-danger/90",
        "focus-visible:ring-danger",
      ],
      outline: [
        "border border-input bg-bg shadow-sm",
        "hover:bg-accent hover:text-accent-fg",
        "focus-visible:ring-accent",
      ],
      secondary: [
        "bg-secondary text-secondary-fg shadow-sm",
        "hover:bg-secondary/80",
        "focus-visible:ring-secondary",
      ],
      ghost: [
        "hover:bg-accent hover:text-accent-fg",
        "focus-visible:ring-accent",
      ],
      link: [
        "text-primary underline-offset-4",
        "hover:underline",
        "focus-visible:ring-ring",
      ],
      unset: null,
    },
    size: {
      default: ["h-9 px-4 py-2"],
      sm: ["h-8 rounded-md px-3 text-xs"],
      lg: ["h-10 rounded-md px-8"],
      icon: ["size-9"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

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
