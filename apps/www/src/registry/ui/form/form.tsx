"use client";

import {
  composeRenderProps,
  FieldError,
  Form,
  Text,
} from "react-aria-components";
import { FormStyles } from "./styles";

export interface FormRootProps extends React.ComponentProps<typeof Form> {}
export function FormRoot(props: FormRootProps) {
  return <Form {...props} data-slot="form-root" />;
}

export interface FormDescriptionProps
  extends Omit<React.ComponentProps<typeof Text>, "slot"> {}

export function FormDescription({ className, ...props }: FormDescriptionProps) {
  return (
    <Text
      {...props}
      className={FormStyles.Description({
        className,
      })}
      data-slot="form-description"
      slot="description"
    />
  );
}

export interface FormMessageProps
  extends React.ComponentProps<typeof FieldError> {}

export function FormMessage({ className, ...props }: FormMessageProps) {
  return (
    <FieldError
      {...props}
      className={composeRenderProps(className, (className) =>
        FormStyles.Message({
          className,
        })
      )}
      data-slot="form-message"
    />
  );
}
