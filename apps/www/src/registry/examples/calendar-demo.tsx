"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "~/registry/ui/button/button";
import { Calendar } from "~/registry/ui/calendar";

export function CalendarDemo() {
  return (
    <div className="flex @md:flex-row flex-col flex-wrap items-start gap-2">
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

      <Calendar.Range
        isDateUnavailable={(date) =>
          date.compare(today(getLocalTimeZone())) > 0
        }
        variant="outline"
        visibleDuration={{ months: 2 }}
      >
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

        <div className="flex gap-2">
          <Calendar.Grid weekdayStyle="short">
            <Calendar.GridHeader>
              {(weekDay) => (
                <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>
              )}
            </Calendar.GridHeader>

            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>

          <Calendar.Grid offset={{ months: 1 }} weekdayStyle="short">
            <Calendar.GridHeader>
              {(weekDay) => (
                <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>
              )}
            </Calendar.GridHeader>

            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>
        </div>
      </Calendar.Range>
    </div>
  );
}
