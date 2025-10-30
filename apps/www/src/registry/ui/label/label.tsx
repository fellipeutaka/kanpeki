"use client";

import { Label as RACLabel } from "react-aria-components";
import { LabelStyles } from "./styles";

export interface LabelProps extends React.ComponentProps<typeof RACLabel> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <RACLabel
      className={LabelStyles({ className })}
      data-slot="label"
      {...props}
    />
  );
}
