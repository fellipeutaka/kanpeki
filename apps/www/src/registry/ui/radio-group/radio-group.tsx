"use client";

import { CircleIcon } from "lucide-react";
import {
  composeRenderProps,
  RadioGroup as RACRadioGroup,
  Radio,
} from "react-aria-components";
import { RadioGroupStyles } from "./styles";

export interface RadioGroupRootProps
  extends React.ComponentProps<typeof RACRadioGroup> {}

export function RadioGroupRoot({ className, ...props }: RadioGroupRootProps) {
  return (
    <RACRadioGroup
      className={composeRenderProps(className, (className) =>
        RadioGroupStyles.Root({ className })
      )}
      data-slot="radio-group-root"
      {...props}
    />
  );
}

export interface RadioGroupItemProps
  extends React.ComponentProps<typeof Radio> {}

export function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  return (
    <Radio
      className={composeRenderProps(className, (className) =>
        RadioGroupStyles.Item({ className })
      )}
      data-slot="radio-group-item"
      {...props}
    />
  );
}

export interface RadioGroupIndicatorProps
  extends Omit<React.ComponentProps<"span">, "children"> {}

export function RadioGroupIndicator({
  className,
  ...props
}: RadioGroupIndicatorProps) {
  return (
    <span
      {...props}
      aria-hidden="true"
      className={RadioGroupStyles.Indicator({ className })}
      data-slot="radio-group-indicator"
    >
      <CircleIcon className="size-2 fill-primary opacity-0 transition group-selected:opacity-100" />
    </span>
  );
}
