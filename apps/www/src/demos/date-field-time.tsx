"use client";

import { DateField } from "~/components/ui/date-field";
import { Label } from "~/components/ui/label";

export default function DateFieldTimeDemo() {
  return (
    <DateField.Root granularity="minute">
      <Label>Event date</Label>
      <DateField.Input>
        {(segment) => <DateField.Segment segment={segment} />}
      </DateField.Input>
    </DateField.Root>
  );
}
