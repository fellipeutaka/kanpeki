"use client";

import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox, composeRenderProps } from "react-aria-components";
import { CheckboxStyles } from "./styles";

export interface CheckboxProviderProps
  extends React.ComponentProps<typeof Checkbox> {}

export function CheckboxProvider({
  className,
  ...props
}: CheckboxProviderProps) {
  return (
    <Checkbox
      {...props}
      className={composeRenderProps(className, (className) =>
        CheckboxStyles.Provider({ className })
      )}
      data-slot="checkbox-provider"
    />
  );
}

export interface CheckboxRootProps extends React.ComponentProps<"div"> {}

export function CheckboxRoot({ className, ...props }: CheckboxRootProps) {
  return (
    <div
      {...props}
      className={CheckboxStyles.Root({ className })}
      data-slot="checkbox-root"
    />
  );
}

export interface CheckboxIndicatorProps extends React.ComponentProps<"svg"> {}

export function CheckboxIndicator({
  className,
  ...props
}: CheckboxIndicatorProps) {
  return (
    <>
      <MinusIcon
        {...props}
        className={CheckboxStyles.Indicator({
          className: [className, "group-indeterminate:block"],
        })}
        data-slot="checkbox-indicator"
      />

      <CheckIcon
        {...props}
        className={CheckboxStyles.Indicator({
          className: [className, "group-selected:block"],
        })}
        data-slot="checkbox-indicator"
      />
    </>
  );
}
