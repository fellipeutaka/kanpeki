import { cva } from "~/lib/cva";

export const CalendarStyles = {
  Cell: cva({
    base: [
      "mt-2 grid size-8 cursor-pointer select-none place-content-center whitespace-nowrap rounded-md text-accent-fg text-sm outline-hidden transition",
      "hover:bg-accent hover:text-accent-fg",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "selected:bg-primary selected:text-primary-fg",
      "focus-visible:ring-1 focus-visible:ring-primary",
    ],
    variants: {
      isToday: {
        true: "bg-accent text-accent-fg",
      },
    },
  }),
  Header: cva({
    base: ["flex w-full justify-center gap-1 px-1 pb-5 sm:pb-4"],
  }),
  HeaderCell: cva({
    base: ["font-semibold text-muted-fg text-sm lg:text-xs"],
  }),
  Heading: cva({
    base: ["font-medium tracking-tight"],
  }),
  Nav: cva({
    base: ["flex items-center gap-1"],
  }),
};
