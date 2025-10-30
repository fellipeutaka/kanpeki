"use client";

import { composeRenderProps, Input as RACInput } from "react-aria-components";
import { InputStyles } from "./styles";

export interface InputProps extends React.ComponentProps<typeof RACInput> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <RACInput
      className={composeRenderProps(className, (className) =>
        InputStyles({ className })
      )}
      data-slot="input"
      {...props}
    />
  );
}
