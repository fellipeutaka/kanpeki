import { cva } from "~/registry/lib/cva";

export const CalendarStyles = {
  Cell: cva({
    base: [
      "relative grid size-8 select-none place-content-center whitespace-nowrap text-accent-foreground text-sm outline-hidden transition",
      "hover:bg-accent hover:text-accent-foreground",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",

      "selected:bg-primary selected:text-primary-foreground",
      "group-data-[slot=range-calendar-root]:selected:bg-accent group-data-[slot=range-calendar-root]:selected:text-accent-foreground",
      "group-data-[slot=range-calendar-root]:selection-start:bg-primary group-data-[slot=range-calendar-root]:selection-start:text-primary-foreground",
      "group-data-[slot=range-calendar-root]:selection-end:bg-primary group-data-[slot=range-calendar-root]:selection-end:text-primary-foreground",
    ],
    defaultVariants: {
      shape: "default",
    },
    variants: {
      isToday: {
        true: [
          "after:absolute after:start-1/2 after:bottom-1 after:z-10 after:-translate-x-1/2",
          "after:size-[3px] after:rounded-full after:bg-current",
        ],
      },
      shape: {
        default: [
          "rounded-md group-data-[slot=range-calendar-root]:not-selection-start:not-selection-end:selected:rounded-none",
        ],
        rounded: "rounded-full",
      },
    },
  }),
  Grid: cva({
    base: [
      "w-full",
      "[&_tr]:mt-2 [&_tr]:flex [&_tr]:w-full [&_tr]:justify-between",

      "[&_tr_td[aria-selected=true]]:bg-accent",
      "[&_tr_td[aria-selected=true]:has([data-selection-start])]:rounded-l-md",
      "[&_tr_td[aria-selected=true]:has([data-selection-end])]:rounded-r-md",
      "group-data-[slot=calendar-root]:[&_tr_td[aria-selected=true]]:rounded-md",

      "[&_tr_td[aria-selected=true]:has([data-selection-start][data-shape=rounded])]:rounded-l-full",
      "[&_tr_td[aria-selected=true]:has([data-selection-end][data-shape=rounded])]:rounded-r-full",
      "group-data-[slot=calendar-root]:[&_tr_td:has([data-shape=rounded])[aria-selected=true]]:rounded-full",
    ],
  }),
  Header: cva({
    base: ["flex w-full justify-center gap-1 px-1 pb-5 sm:pb-4"],
  }),
  HeaderCell: cva({
    base: ["w-8 rounded-md font-normal text-[0.8rem] text-muted-foreground"],
  }),
  Heading: cva({
    base: ["font-medium text-sm"],
  }),
  Nav: cva({
    base: ["flex w-full items-center justify-between gap-1"],
  }),
  Root: cva({
    base: ["group"],
    variants: {
      variant: {
        outline: "rounded-md border p-3 shadow-sm",
      },
    },
  }),
};
