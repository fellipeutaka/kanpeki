"use client";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { DateField } from "~/components/ui/date-field";
import { Form } from "~/components/ui/form";
import { Label } from "~/components/ui/label";

export default function DateFieldFormDemo() {
  return (
    <Form.Root
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        toast("You submitted the following values:", {
          description: (
            <pre className="mt-2 rounded-md p-4">
              <code className="font-mono text-sm">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });
      }}
      className="space-y-2"
    >
      <DateField.Root isRequired name="birthdate">
        <Label>Birthdate</Label>
        <DateField.Input>
          {(segment) => <DateField.Segment segment={segment} />}
        </DateField.Input>

        <Form.Error />
      </DateField.Root>

      <Button type="submit">Submit</Button>
    </Form.Root>
  );
}
