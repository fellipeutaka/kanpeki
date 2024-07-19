import { type AriaButtonProps, useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { useRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { mergeProps } from "~/utils/merge-props";
import { mergeRefs } from "~/utils/merge-refs";

export const ButtonStyles = tv({
  base: [
    "inline-flex select-none items-center justify-center whitespace-nowrap rounded-md font-medium text-sm outline-none ring-offset-2 ring-offset-background transition",
    "data-[focused=true]:ring-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[pressed=true]:scale-95",
  ],

  variants: {
    variant: {
      default: [
        "bg-primary text-primary-foreground shadow",
        "hover:bg-primary/90",
        "data-[focused=true]:ring-primary",
      ],
      destructive: [
        "bg-destructive text-destructive-foreground shadow-sm",
        "hover:bg-destructive/90",
        "data-[focused=true]:ring-destructive",
      ],
      outline: [
        "border border-input bg-background shadow-sm",
        "hover:bg-accent hover:text-accent-foreground",
        "data-[focused=true]:ring-accent",
      ],
      secondary: [
        "bg-secondary text-secondary-foreground shadow-sm",
        "hover:bg-secondary/80",
        "data-[focused=true]:ring-secondary",
      ],
      ghost: [
        "hover:bg-accent hover:text-accent-foreground",
        "data-[focused=true]:ring-accent",
      ],
      link: [
        "text-primary underline-offset-4",
        "hover:underline",
        "data-[focused=true]:ring-ring",
      ],
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

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof ButtonStyles> &
  AriaButtonProps;

export function Button({
  className,
  variant,
  size,
  type = "button",
  onPress,
  onPressStart,
  onPressEnd,
  onPressChange,
  onPressUp,
  isDisabled,
  ref: forwardedRef,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const { buttonProps, isPressed } = useButton(
    {
      ...props,
      type,
      onPress,
      onPressStart,
      onPressEnd,
      onPressChange,
      onPressUp,
      isDisabled: isDisabled ?? props.disabled,
    },
    ref,
  );

  const { focusProps, isFocusVisible } = useFocusRing({
    isTextInput: false,
    autoFocus: props.autoFocus,
  });

  return (
    <button
      {...mergeProps(buttonProps, focusProps, props)}
      ref={mergeRefs([ref, forwardedRef])}
      data-pressed={isPressed}
      data-focused={isFocusVisible}
      className={ButtonStyles({ className, variant, size })}
    />
  );
}

Button.displayName = "Button";
