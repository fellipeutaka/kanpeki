"use client";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Icons } from "~/components/ui/icons";

export default function CalendarDemo() {
  return (
    <Calendar.Root className="rounded-md border p-3 shadow">
      <Calendar.Header>
        <Calendar.Nav className="w-full justify-between">
          <Button
            size="icon"
            variant="outline"
            className="size-8 text-muted-fg sm:size-7"
            slot="previous"
          >
            <Icons.ChevronLeft className="size-4" />
          </Button>

          <Calendar.Month />

          <Button
            size="icon"
            variant="outline"
            className="size-8 text-muted-fg sm:size-7"
            slot="next"
          >
            <Icons.ChevronRight className="size-4" />
          </Button>
        </Calendar.Nav>
      </Calendar.Header>

      <Calendar.Grid weekdayStyle="short">
        <Calendar.GridHeader>
          {(weekDay) => <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>}
        </Calendar.GridHeader>

        <Calendar.GridBody>
          {(date) => <Calendar.Cell date={date} />}
        </Calendar.GridBody>
      </Calendar.Grid>
    </Calendar.Root>
  );
}
