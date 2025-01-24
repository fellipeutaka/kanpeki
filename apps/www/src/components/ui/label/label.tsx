"use client";

import { Label as LabelPrimitive } from "react-aria-components";
import { LabelStyles } from "./styles";

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive> {}

export function Label({ className, ...props }: LabelProps) {
  return <LabelPrimitive {...props} className={LabelStyles({ className })} />;
}
