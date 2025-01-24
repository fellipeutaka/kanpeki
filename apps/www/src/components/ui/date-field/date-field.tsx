"use client";

import {
  DateField as DateFieldPrimitive,
  type DateFieldProps as DateFieldPrimitiveProps,
  DateInput as DateInputPrimitive,
  DateSegment,
  type DateValue,
} from "react-aria-components";
import { DateFieldStyles } from "./styles";

export interface DateFieldRootProps<T extends DateValue>
  extends DateFieldPrimitiveProps<T> {}

export function DateFieldRoot<T extends DateValue>({
  className,
  ...props
}: DateFieldRootProps<T>) {
  return (
    <DateFieldPrimitive
      {...props}
      className={(values) =>
        DateFieldStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface DateFieldInputProps
  extends React.ComponentProps<typeof DateInputPrimitive> {}

export function DateFieldInput({ className, ...props }: DateFieldInputProps) {
  return (
    <DateInputPrimitive
      {...props}
      className={(values) =>
        DateFieldStyles.Input({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface DateFieldSegmentProps
  extends React.ComponentProps<typeof DateSegment> {}

export function DateFieldSegment({
  className,
  ...props
}: DateFieldSegmentProps) {
  return (
    <DateSegment
      {...props}
      className={(values) =>
        DateFieldStyles.Segment({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}
