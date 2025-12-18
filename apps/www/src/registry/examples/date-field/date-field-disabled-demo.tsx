"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { DateField } from "~/registry/ui/date-field";
import { InputStyles } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label";

export function DateFieldDisabledDemo() {
  return (
    <DateField.Root isDisabled minValue={today(getLocalTimeZone())}>
      <Label>Event date</Label>
      <DateField.Input className={InputStyles()}>
        {(segment) => <DateField.Segment segment={segment} />}
      </DateField.Input>
    </DateField.Root>
  );
}
