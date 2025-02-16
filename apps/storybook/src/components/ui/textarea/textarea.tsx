"use client";

import { TextArea as TextAreaPrimitive } from "react-aria-components";
import type { VariantProps } from "~/lib/cva";
import { TextAreaStyles } from "./styles";

export interface TextAreaProps
  extends React.ComponentProps<typeof TextAreaPrimitive>,
    VariantProps<typeof TextAreaStyles> {}

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <TextAreaPrimitive
      {...props}
      className={(values) =>
        TextAreaStyles({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}
