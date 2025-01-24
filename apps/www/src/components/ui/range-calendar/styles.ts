import { compose, cva } from "~/lib/cva";
import { CalendarStyles } from "../calendar/styles";

export const RangeCalendarStyles = {
  ...CalendarStyles,
  Cell: compose(
    CalendarStyles.Cell,
    cva({
      base: [
        "selection-start:rounded-md selection-start:bg-primary selection-start:text-primary-fg",
        "selection-end:rounded-md selection-end:bg-primary selection-end:text-primary-fg",
        "data-selected:rounded-none data-selected:bg-accent data-selected:text-accent-fg",
      ],
    })
  ),
};
