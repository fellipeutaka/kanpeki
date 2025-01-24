import { cva } from "~/lib/cva";

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
  Cell: cva({
    base: [
      "grid size-8 place-content-center whitespace-nowrap rounded-md p-0 text-accent-fg text-sm transition-colors",
      "data-hover:bg-accent data-hover:text-accent-fg",
      "data-disabled:cursor-not-allowed data-disabled:opacity-50",
      "data-selected:bg-primary data-selected:text-primary-fg",
    ],
    variants: {
      isToday: {
        true: "bg-accent text-accent-fg",
      },
    },
  }),
};
