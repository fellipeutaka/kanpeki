"use client";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Form } from "~/components/ui/form";
import { toast } from "~/components/ui/toast";

export default function CheckboxForm() {
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
      <Checkbox.Provider name="terms">
        <Checkbox.Root>
          <Checkbox.Indicator />
        </Checkbox.Root>
        Accept terms and conditions
      </Checkbox.Provider>
      <Form.Error />

      <Button type="submit">Submit</Button>
    </Form.Root>
  );
}
