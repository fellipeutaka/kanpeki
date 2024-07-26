import { useFocusRing } from "@react-aria/focus";
import { type AriaLinkOptions, useLink } from "@react-aria/link";
import { useRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { mergeProps } from "~/utils/merge-props";
import { mergeRefs } from "~/utils/merge-refs";
import { ButtonStyles } from "./button";

export type LinkButtonProps = React.ComponentProps<"a"> &
  VariantProps<typeof ButtonStyles> &
  AriaLinkOptions & {
    disabled?: boolean;
  };

export function LinkButton({
  className,
  variant,
  size,
  onPress,
  onPressStart,
  onPressEnd,
  onPressChange,
  onPressUp,
  isDisabled,
  ref: forwardedRef,
  ...props
}: LinkButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const { linkProps, isPressed } = useLink(
    {
      ...props,
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
    <a
      {...mergeProps(linkProps, focusProps, props)}
      ref={mergeRefs([ref, forwardedRef])}
      data-pressed={isPressed}
      data-focused={isFocusVisible}
      className={ButtonStyles({ className, variant, size })}
    />
  );
}
