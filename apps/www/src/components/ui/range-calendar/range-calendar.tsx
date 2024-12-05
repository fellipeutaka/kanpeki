"use client";

import { getLocalTimeZone, isToday } from "@internationalized/date";
import {
  CalendarCell,
  type DateValue,
  RangeCalendar as RangeCalendarPrimitive,
} from "react-aria-components";
import {
  Calendar,
  type CalendarCellProps,
  type CalendarGridBodyProps,
  type CalendarGridHeaderProps,
  type CalendarGridProps,
  type CalendarHeaderCellProps,
  type CalendarHeaderProps,
  type CalendarMonthProps,
  type CalendarNavProps,
} from "../calendar";
import { RangeCalendarStyles } from "./styles";

export interface RangeCalendarRootProps<T extends DateValue>
  extends React.ComponentProps<typeof RangeCalendarPrimitive<T>> {}

export function RangeCalendarRoot<T extends DateValue>({
  className,
  ...props
}: RangeCalendarRootProps<T>) {
  return (
    <RangeCalendarPrimitive
      {...props}
      className={(values) =>
        RangeCalendarStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface RangeCalendarHeaderProps extends CalendarHeaderProps {}
export const RangeCalendarHeader = Calendar.Header;

export interface RangeCalendarMonthProps extends CalendarMonthProps {}
export const RangeCalendarMonth = Calendar.Month;

export interface RangeCalendarNavProps extends CalendarNavProps {}
export const RangeCalendarNav = Calendar.Nav;

export interface RangeCalendarGridProps extends CalendarGridProps {}
export const RangeCalendarGrid = Calendar.Grid;

export interface RangeCalendarGridHeaderProps extends CalendarGridHeaderProps {}
export const RangeCalendarGridHeader = Calendar.GridHeader;

export interface RangeCalendarHeaderCellProps extends CalendarHeaderCellProps {}
export const RangeCalendarHeaderCell = Calendar.HeaderCell;

export interface RangeCalendarGridBodyProps extends CalendarGridBodyProps {}
export const RangeCalendarGridBody = Calendar.GridBody;

export interface RangeCalendarCellProps extends CalendarCellProps {}

export function RangeCalendarCell({
  className,
  ...props
}: RangeCalendarCellProps) {
  return (
    <CalendarCell
      {...props}
      className={(values) =>
        RangeCalendarStyles.Cell({
          isToday: isToday(values.date, getLocalTimeZone()),
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}
