"use client";

import { NumberField as RACNumberField } from "react-aria-components";

export interface NumberFieldProps
  extends React.ComponentProps<typeof RACNumberField> {}

export function NumberField(props: NumberFieldProps) {
  return <RACNumberField data-slot="number-field" {...props} />;
}
