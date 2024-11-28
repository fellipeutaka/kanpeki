"use client";

import {
  DateField as DateFieldPrimitive,
  type DateFieldProps as DateFieldPrimitiveProps,
  DateInput as DateInputPrimitive,
  DateSegment,
  type DateValue,
} from "react-aria-components";
import { compose, cva } from "~/lib/cva";
import { TextFieldStyles } from "./textfield";

export const DateFieldStyles = {
  Root: cva({
    base: ["flex flex-col"],
  }),
  Input: compose(
    TextFieldStyles.Root,
    cva({
      base: [
        "block w-full min-w-sm px-2.5 py-2 text-base uppercase",
        "disabled:bg-secondary",
        "lg:text-sm/[1.4rem]",
      ],
    })
  ),
  Segment: cva({
    base: [
      "inline shrink-0 rounded p-0.5 type-literal:px-0 text-fg tabular-nums tracking-wider caret-transparent outline outline-0",
      "lg:text-sm",
      "focus:bg-primary focus:text-primary-fg",
      "disabled:text-fg/50",
      "placeholder-shown:text-muted-fg",
      "invalid:bg-danger invalid:text-danger-fg",
    ],
  }),
};

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

export const DateField = Object.assign(
  {},
  {
    Root: DateFieldRoot,
    Input: DateFieldInput,
    Segment: DateFieldSegment,
  }
);
