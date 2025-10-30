"use client";

import { composeRenderProps, TextField } from "react-aria-components";
import { TextfieldStyles } from "./styles";

export interface TextfieldProps
  extends React.ComponentProps<typeof TextField> {}

export function Textfield({ className, ...props }: TextfieldProps) {
  return (
    <TextField
      className={composeRenderProps(className, (className) =>
        TextfieldStyles({ className })
      )}
      data-slot="textfield"
      {...props}
    />
  );
}
