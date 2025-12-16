"use client";

import { composeRenderProps, TextArea } from "react-aria-components";
import { TextareaStyles } from "./styles";

export interface TextareaProps extends React.ComponentProps<typeof TextArea> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <TextArea
      className={composeRenderProps(className, (className) =>
        TextareaStyles({ className })
      )}
      data-slot="textarea"
      {...props}
    />
  );
}
