"use client";

import {
  FieldError,
  Form as FormPrimitive,
  Text,
  type TextProps,
} from "react-aria-components";
import { FormStyles } from "./styles";

export interface FormRootProps
  extends React.ComponentProps<typeof FormPrimitive> {}
export const FormRoot = FormPrimitive;

interface FormDescriptionProps extends Omit<TextProps, "slot"> {
  isWarning?: boolean;
}

export function FormDescription({
  className,
  isWarning,
  ...props
}: FormDescriptionProps) {
  return (
    <Text
      {...props}
      slot="description"
      className={FormStyles.Description({
        className: isWarning ? "text-warning" : className,
      })}
    />
  );
}

export interface FormErrorProps
  extends React.ComponentProps<typeof FieldError> {}

export function FormError({ className, ...props }: FormErrorProps) {
  return (
    <FieldError
      {...props}
      className={(values) =>
        FormStyles.Error({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}
