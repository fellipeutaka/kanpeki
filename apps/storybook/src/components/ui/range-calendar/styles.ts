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
        "selected:rounded-none selected:bg-accent selected:text-accent-fg",
      ],
    })
  ),
};
