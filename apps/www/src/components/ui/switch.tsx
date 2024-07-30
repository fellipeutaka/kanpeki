"use client";

import { type AriaSwitchProps, useSwitch } from "@react-aria/switch";
import { useToggleState } from "@react-stately/toggle";
import { useRef } from "react";
import { tv } from "tailwind-variants";

export const SwitchStyles = {
  Root: tv({
    base: [
      "group inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input shadow-sm transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-checked:bg-primary",
    ],
  }),
  Thumb: tv({
    base: [
      "pointer-events-none block size-4 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-all",
      "group-aria-checked:ml-4",
      "group-aria-pressed:w-5",
      "group-aria-checked:group-aria-pressed:ml-3",
    ],
  }),
};

export type SwitchRootProps = React.ComponentProps<"input"> & AriaSwitchProps;

export function SwitchRoot({ className, ...props }: SwitchRootProps) {
  const state = useToggleState({
    ...props,
    isSelected: props.checked || props.isSelected,
  });
  const ref = useRef<HTMLInputElement>(null);
  const {
    inputProps,
    isDisabled,
    isPressed,
    isReadOnly,
    isSelected,
    labelProps,
  } = useSwitch(
    {
      ...props,
      isDisabled: props.disabled || props.isDisabled,
      isReadOnly: props.readOnly || props.isReadOnly,
    },
    state,
    ref,
  );

  return (
    <label {...labelProps}>
      <input {...inputProps} className="sr-only" />

      <button
        type="button"
        role="switch"
        disabled={isDisabled}
        aria-checked={state.isSelected}
        aria-readonly={isReadOnly}
        aria-pressed={isPressed}
        aria-selected={isSelected}
        className={SwitchStyles.Root({ className })}
      >
        {props.children}
      </button>
    </label>
  );
}

export type SwitchThumbProps = React.ComponentProps<"span">;

export function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  return <span {...props} className={SwitchStyles.Thumb({ className })} />;
}

export const Switch = Object.assign(
  {},
  {
    Root: SwitchRoot,
    Thumb: SwitchThumb,
  },
);
