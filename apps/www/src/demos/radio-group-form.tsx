"use client";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Label } from "~/components/ui/label";
import { RadioGroup } from "~/components/ui/radio-group";

export default function RadioGroupFormDemo() {
  return (
    <Form.Root
      className="w-2/3 space-y-6"
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
    >
      <RadioGroup.Root isRequired name="pet">
        <Label>Favorite pet</Label>

        <RadioGroup.Item value="dogs">Dog</RadioGroup.Item>
        <RadioGroup.Item value="cats">Cat</RadioGroup.Item>
        <RadioGroup.Item value="dragon">Dragon</RadioGroup.Item>

        <Form.Error />
      </RadioGroup.Root>

      <Button type="submit">Submit</Button>
    </Form.Root>
  );
}
