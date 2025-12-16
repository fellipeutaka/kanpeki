"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { DateField } from "~/registry/ui/date-field";
import { InputStyles } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label";

export function DateFieldDemo() {
  return (
    <DateField.Root minValue={today(getLocalTimeZone())}>
      <Label>Event date</Label>
      <DateField.Input className={InputStyles()}>
        {(segment) => <DateField.Segment segment={segment} />}
      </DateField.Input>
    </DateField.Root>
  );
}
