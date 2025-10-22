"use client";

import { getLocalTimeZone, isToday } from "@internationalized/date";
import {
  CalendarCell as CalendarCellPrimitive,
  CalendarGridBody as CalendarGridBodyPrimitive,
  CalendarGridHeader as CalendarGridHeaderPrimitive,
  CalendarGrid as CalendarGridPrimitive,
  CalendarHeaderCell as CalendarHeaderCellPrimitive,
  Calendar as CalendarPrimitive,
  type DateValue,
  Heading,
} from "react-aria-components";
import { CalendarStyles } from "./styles";

export interface CalendarRootProps<T extends DateValue>
  extends React.ComponentProps<typeof CalendarPrimitive<T>> {}
export const CalendarRoot = CalendarPrimitive;

export interface CalendarHeaderProps extends React.ComponentProps<"header"> {}

export function CalendarHeader({ className, ...props }: CalendarHeaderProps) {
  return <header className={CalendarStyles.Header({ className })} {...props} />;
}

export interface CalendarMonthProps
  extends React.ComponentProps<typeof Heading> {}

export function CalendarMonth({ className, ...props }: CalendarMonthProps) {
  return (
    <Heading {...props} className={CalendarStyles.Heading({ className })} />
  );
}

export interface CalendarNavProps extends React.ComponentProps<"nav"> {}

export function CalendarNav({ className, ...props }: CalendarNavProps) {
  return <nav {...props} className={CalendarStyles.Nav({ className })} />;
}

export interface CalendarGridProps
  extends React.ComponentProps<typeof CalendarGridPrimitive> {}
export const CalendarGrid = CalendarGridPrimitive;

export interface CalendarGridHeaderProps
  extends React.ComponentProps<typeof CalendarGridHeaderPrimitive> {}
export const CalendarGridHeader = CalendarGridHeaderPrimitive;

export interface CalendarHeaderCellProps
  extends React.ComponentProps<typeof CalendarHeaderCellPrimitive> {}

export function CalendarHeaderCell({
  className,
  ...props
}: CalendarHeaderCellProps) {
  return (
    <CalendarHeaderCellPrimitive
      {...props}
      className={CalendarStyles.HeaderCell({ className })}
    />
  );
}

export interface CalendarGridBodyProps
  extends React.ComponentProps<typeof CalendarGridBodyPrimitive> {}
export const CalendarGridBody = CalendarGridBodyPrimitive;

export interface CalendarCellProps
  extends React.ComponentProps<typeof CalendarCellPrimitive> {}

export function CalendarCell({
  className,
  ...props
}: React.ComponentProps<typeof CalendarCellPrimitive>) {
  return (
    <CalendarCellPrimitive
      {...props}
      className={(values) =>
        CalendarStyles.Cell({
          className:
            typeof className === "function" ? className(values) : className,
          isToday: isToday(values.date, getLocalTimeZone()),
        })
      }
    />
  );
}
