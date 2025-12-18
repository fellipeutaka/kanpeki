"use client";

import { getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { type DateValue, Group } from "react-aria-components";
import { cn } from "~/registry/lib/cva";
import { Button } from "~/registry/ui/button/button";
import { Calendar } from "~/registry/ui/calendar";
import { DateField } from "~/registry/ui/date-field";
import { DatePicker } from "~/registry/ui/date-picker";
import { DialogContent } from "~/registry/ui/dialog/dialog";
import { Popover } from "~/registry/ui/popover";

export function DatePickerDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <Simple />
      <DatePickerSimple />
      {/* <DatePicker.WithRange /> */}
    </div>
  );
}

function Simple() {
  return (
    <DatePicker.Root aria-label="Date Picker">
      <Group>
        <Button className="font-normal" variant="outline">
          <CalendarIcon className="size-4 shrink-0 text-muted-foreground" />
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
          <DatePicker.Icon />
        </Button>
      </Group>
      <Popover.Content>
        <DialogContent className="bg-popover">
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
                {(weekDay) => (
                  <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>
                )}
              </Calendar.GridHeader>

              <Calendar.GridBody>
                {(date) => <Calendar.Cell date={date} />}
              </Calendar.GridBody>
            </Calendar.Grid>
          </Calendar.Root>
        </DialogContent>
      </Popover.Content>
    </DatePicker.Root>
  );
}

function DatePickerSimple() {
  const [date, setDate] = useState<DateValue>();

  return (
    <Popover.Root>
      <Button
        className={cn(
          "min-w-[200px] justify-start px-2 font-normal",
          !date && "text-muted-foreground"
        )}
        variant="outline"
      >
        <CalendarIcon className="text-muted-foreground" />
        {date ? (
          date.toDate(getLocalTimeZone()).toLocaleDateString(undefined, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        ) : (
          <span>Pick a date</span>
        )}
      </Button>
      <Popover.Content className="min-w-auto p-3" placement="bottom start">
        <Calendar.Root onChange={setDate} value={date}>
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
              {(weekDay) => (
                <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>
              )}
            </Calendar.GridHeader>

            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>
        </Calendar.Root>
      </Popover.Content>
    </Popover.Root>
  );
}

// function DatePicker.WithRange() {
//   const [date, setDate] = useState<DateRange | undefined>({
//     from: new Date(new Date().getFullYear(), 0, 20),
//     to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
//   });

//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           id="date"
//           variant={"outline"}
//           className={cn(
//             "w-fit justify-start px-2 font-normal",
//             !date && "text-muted-foreground"
//           )}
//         >
//           <CalendarIcon className="text-muted-foreground" />
//           {date?.from ? (
//             date.to ? (
//               <>
//                 {format(date.from, "LLL dd, y")} -{" "}
//                 {format(date.to, "LLL dd, y")}
//               </>
//             ) : (
//               format(date.from, "LLL dd, y")
//             )
//           ) : (
//             <span>Pick a date</span>
//           )}
//         </Button>
//       </PopoverTrigger>
//       <Popover.Content className="w-auto p-0" align="start">
//         <Calendar.
//           initialFocus
//           mode="range"
//           defaultMonth={date?.from}
//           selected={date}
//           onSelect={setDate}
//           numberOfMonths={2}
//         />
//       </Popover.Content>
//     </Popover>
//   );
// }
