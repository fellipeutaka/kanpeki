"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  composeRenderProps,
  DatePicker,
  type DateValue,
} from "react-aria-components";
import { DatePickerStyles } from "./styles";

export interface DatePickerRootProps<T extends DateValue>
  extends React.ComponentProps<typeof DatePicker<T>> {}

export function DatePickerRoot<T extends DateValue>({
  className,
  ...props
}: DatePickerRootProps<T>) {
  return (
    <DatePicker
      className={composeRenderProps(className, (className) =>
        DatePickerStyles.Root({ className })
      )}
      data-slot="date-picker-root"
      {...props}
    />
  );
}

export interface DatePickerIconProps
  extends Omit<React.ComponentProps<"span">, "children"> {}

export function DatePickerIcon({ className, ...props }: DatePickerIconProps) {
  return (
    <span
      aria-hidden="true"
      className={DatePickerStyles.Icon({ className })}
      data-slot="date-picker-icon"
      {...props}
    >
      <ChevronDownIcon className="size-4 text-muted-foreground transition group-open:rotate-180" />
    </span>
  );
}
