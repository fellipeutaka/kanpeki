"use client";

import { getLocalTimeZone, isToday } from "@internationalized/date";
import {
  type DateValue,
  RangeCalendar as RangeCalendarPrimitive,
  type RangeCalendarProps,
} from "react-aria-components";
import { compose, cva } from "~/lib/cva";
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarHeaderCell,
  CalendarMonth,
  CalendarNav,
  CalendarStyles,
} from "./calendar";

export const RangeCalendarStyles = {
  ...CalendarStyles,
  Cell: compose(
    CalendarStyles.Cell,
    cva({
      base: [
        "selection-start:rounded-md selection-start:bg-primary selection-start:text-primary-fg",
        "selection-end:rounded-md selection-end:bg-primary selection-end:text-primary-fg",
        "selected:rounded-none selected:bg-accent selected:text-accent-fg",
      ],
    })
  ),
};

export interface RangeCalendarRootProps<T extends DateValue>
  extends RangeCalendarProps<T> {}

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

export interface RangeCalendarHeaderProps
  extends React.ComponentProps<typeof CalendarHeader> {}
export const RangeCalendarHeader = CalendarHeader;

export interface RangeCalendarMonthProps
  extends React.ComponentProps<typeof CalendarMonth> {}
export const RangeCalendarMonth = CalendarMonth;

export interface RangeCalendarNavProps
  extends React.ComponentProps<typeof CalendarNav> {}
export const RangeCalendarNav = CalendarNav;

export interface RangeCalendarGridProps
  extends React.ComponentProps<typeof CalendarGrid> {}
export const RangeCalendarGrid = CalendarGrid;

export interface RangeCalendarGridHeaderProps
  extends React.ComponentProps<typeof CalendarGridHeader> {}
export const RangeCalendarGridHeader = CalendarGridHeader;

export interface RangeCalendarHeaderCellProps
  extends React.ComponentProps<typeof CalendarHeaderCell> {}
export const RangeCalendarHeaderCell = CalendarHeaderCell;

export interface RangeCalendarGridBodyProps
  extends React.ComponentProps<typeof CalendarGridBody> {}
export const RangeCalendarGridBody = CalendarGridBody;

export interface RangeCalendarCellProps
  extends React.ComponentProps<typeof CalendarCell> {}

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

export const RangeCalendar = Object.assign(
  {},
  {
    Root: RangeCalendarRoot,
    Header: RangeCalendarHeader,
    Month: RangeCalendarMonth,
    Nav: RangeCalendarNav,
    Grid: RangeCalendarGrid,
    GridHeader: RangeCalendarGridHeader,
    HeaderCell: RangeCalendarHeaderCell,
    GridBody: RangeCalendarGridBody,
    Cell: RangeCalendarCell,
  }
);
