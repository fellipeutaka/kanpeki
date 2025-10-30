"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import { ComboBox, composeRenderProps, Input } from "react-aria-components";
import { Button } from "../button/button";
import { ComboboxStyles } from "./styles";

export interface ComboboxRootProps<T extends object>
  extends React.ComponentProps<typeof ComboBox<T>> {}

export function ComboboxRoot<T extends object>({
  className,
  ...props
}: ComboboxRootProps<T>) {
  return (
    <ComboBox
      {...props}
      className={composeRenderProps(className, (className) =>
        ComboboxStyles.Root({ className })
      )}
      data-slot="combobox-root"
    />
  );
}

export interface ComboboxTriggerProps extends React.ComponentProps<"div"> {}

export function ComboboxTrigger({ className, ...props }: ComboboxTriggerProps) {
  return (
    <div
      {...props}
      className={ComboboxStyles.Trigger({ className })}
      data-slot="combobox-trigger"
    />
  );
}

export interface ComboboxInputProps
  extends React.ComponentProps<typeof Input> {}

export function ComboboxInput({ className, ...props }: ComboboxInputProps) {
  return (
    <Input
      {...props}
      className={composeRenderProps(className, (className) =>
        ComboboxStyles.Input({ className })
      )}
      data-slot="combobox-input"
    />
  );
}

export interface ComboboxIcon extends React.ComponentProps<"svg"> {}

export function ComboboxIcon({ className, ...props }: ComboboxIcon) {
  return (
    <Button variant="unstyled">
      <ChevronsUpDownIcon
        {...props}
        className={ComboboxStyles.Icon({ className })}
      />
    </Button>
  );
}
