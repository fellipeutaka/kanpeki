"use client";

import {
  composeRenderProps,
  NumberField as RACNumberField,
} from "react-aria-components";
import { NumberFieldStyles } from "./styles";

export interface NumberFieldProps
  extends React.ComponentProps<typeof RACNumberField> {}

export function NumberField({ className, ...props }: NumberFieldProps) {
  return (
    <RACNumberField
      className={composeRenderProps(className, (className) =>
        NumberFieldStyles({ className })
      )}
      data-slot="number-field"
      {...props}
    />
  );
}
