"use client";

import { TextField as RACTextField } from "react-aria-components";

export interface TextFieldProps
  extends React.ComponentProps<typeof RACTextField> {}

export function TextField(props: TextFieldProps) {
  return <RACTextField data-slot="TextField" {...props} />;
}
