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
import { compose, cva } from "~/lib/cva";
import { FocusRingStyles } from "~/styles/focus-ring";

export const CalendarStyles = {
  Root: cva({
    base: ["max-w-[17.5rem] sm:max-w-[15.8rem]"],
  }),
  Header: cva({
    base: ["flex w-full justify-center gap-1 px-1 pb-5 sm:pb-4"],
  }),
  Heading: cva({
    base: ["mr-2 flex-1 text-left font-medium text-muted-fg tracking-tight"],
  }),
  Nav: cva({
    base: ["flex items-center gap-1"],
  }),
  HeaderCell: cva({
    base: ["font-semibold text-muted-fg text-sm lg:text-xs"],
  }),
  Grid: cva({
    base: ["w-full [&_td]:border-collapse [&_td]:px-0"],
  }),
  Cell: compose(
    FocusRingStyles,
    cva({
      base: [
        "grid size-8 place-content-center whitespace-nowrap rounded-md p-0 text-accent-fg text-sm transition-colors",
        "hover:bg-accent hover:text-accent-fg",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "selected:bg-primary selected:text-primary-fg",
      ],
      variants: {
        isToday: {
          true: "bg-accent text-accent-fg",
        },
      },
    })
  ),
};

export interface CalendarRootProps<T extends DateValue>
  extends React.ComponentProps<typeof CalendarPrimitive<T>> {}

export function CalendarRoot<T extends DateValue>({
  className,
  ...props
}: CalendarRootProps<T>) {
  return (
    <CalendarPrimitive
      {...props}
      className={(values) =>
        CalendarStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

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

export function CalendarGrid({ className, ...props }: CalendarGridProps) {
  return (
    <CalendarGridPrimitive
      {...props}
      className={CalendarStyles.Grid({ className })}
    />
  );
}

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
          isToday: isToday(values.date, getLocalTimeZone()),
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export const Calendar = Object.assign(
  {},
  {
    Root: CalendarRoot,
    Header: CalendarHeader,
    Month: CalendarMonth,
    Nav: CalendarNav,
    Grid: CalendarGrid,
    GridHeader: CalendarGridHeader,
    HeaderCell: CalendarHeaderCell,
    GridBody: CalendarGridBody,
    Cell: CalendarCell,
  }
);
