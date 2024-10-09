"use client";

import { type AriaCheckboxProps, useCheckbox } from "@react-aria/checkbox";
import { useToggleState } from "@react-stately/toggle";
import { useRef } from "react";
import { tv } from "tailwind-variants";
import { type IconProps, Icons } from "./icons";

export const CheckboxStyles = {
  Root: tv({
    base: [
      "peer group flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary shadow transition",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-checked:bg-primary aria-checked:text-primary-foreground",
    ],
  }),
  Icon: tv({
    base: "size-4 opacity-0 transition group-aria-checked:opacity-100",
  }),
};

export type CheckboxRootProps = React.ComponentProps<"input"> &
  AriaCheckboxProps;

export function CheckboxRoot({ className, ...props }: CheckboxRootProps) {
  const state = useToggleState({
    ...props,
    isSelected: props.checked || props.isSelected,
  });
  const ref = useRef<HTMLInputElement>(null);
  const {
    inputProps,
    isDisabled,
    isInvalid,
    isPressed,
    isReadOnly,
    isSelected,
    labelProps,
  } = useCheckbox(
    {
      ...props,
      isDisabled: props.disabled || props.isDisabled,
      isReadOnly: props.readOnly || props.isReadOnly,
    },
    state,
    ref
  );

  return (
    <label {...labelProps}>
      <input {...inputProps} className="sr-only" />

      <button
        // biome-ignore lint/a11y/useSemanticElements: This is a button that is used to style the checkbox
        role="checkbox"
        type="button"
        disabled={isDisabled}
        aria-checked={state.isSelected}
        aria-invalid={isInvalid}
        aria-readonly={isReadOnly}
        aria-pressed={isPressed}
        aria-selected={isSelected}
        className={CheckboxStyles.Root({ className })}
      >
        {props.children}
      </button>
    </label>
  );
}

export type CheckboxIndicatorProps = IconProps;

export function CheckboxIndicator({
  className,
  ...props
}: CheckboxIndicatorProps) {
  return (
    <Icons.Check
      aria-hidden={true}
      {...props}
      className={CheckboxStyles.Icon({ className })}
    />
  );
}

export const Checkbox = Object.assign(
  {},
  {
    Root: CheckboxRoot,
    Indicator: CheckboxIndicator,
  }
);
