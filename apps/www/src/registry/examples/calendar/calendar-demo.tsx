"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "~/registry/ui/button/button";
import { Calendar } from "~/registry/ui/calendar";

export function CalendarDemo() {
  return (
    <Calendar.Root variant="outline">
      <Calendar.Header>
        <Calendar.Nav>
          <Button
            className="size-8 text-muted-foreground sm:size-7"
            size="icon"
            slot="previous"
            variant="outline"
          >
            <ChevronLeftIcon className="size-4" />
          </Button>

          <Calendar.Month />

          <Button
            className="size-8 text-muted-foreground sm:size-7"
            size="icon"
            slot="next"
            variant="outline"
          >
            <ChevronRightIcon className="size-4" />
          </Button>
        </Calendar.Nav>
      </Calendar.Header>

      <Calendar.Grid weekdayStyle="short">
        <Calendar.GridHeader>
          {(weekDay) => <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>}
        </Calendar.GridHeader>

        <Calendar.GridBody>
          {(date) => <Calendar.Cell date={date} shape="rounded" />}
        </Calendar.GridBody>
      </Calendar.Grid>
    </Calendar.Root>
  );
}
