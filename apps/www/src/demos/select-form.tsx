"use client";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Icons } from "~/components/ui/icons";
import { Label } from "~/components/ui/label";
import { Select } from "~/components/ui/select";

const fruits = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Banana",
  },
  {
    id: 3,
    name: "Blueberry",
  },
  {
    id: 4,
    name: "Orange",
  },
  {
    id: 5,
    name: "Strawberry",
  },
  {
    id: 6,
    name: "Grapes",
  },
  {
    id: 7,
    name: "Mango",
  },
];

export default function SelectFormDemo() {
  return (
    <Form.Root
      className="space-y-6"
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
      <Select.Root aria-label="Fruits" isRequired name="fruits">
        <Label>Choose a fruit</Label>

        <Select.Trigger className="w-44" />

        <Select.Popover>
          <Select.Content items={fruits}>
            {(item) => (
              <Select.Item
                className="group flex items-center justify-between"
                id={item.id}
                textValue={item.name}
              >
                {item.name}
                <Icons.Check className="size-0 opacity-0 group-selected:size-4 group-selected:opacity-100" />
              </Select.Item>
            )}
          </Select.Content>
        </Select.Popover>
        <Form.Error />
      </Select.Root>

      <Button className="self-start" type="submit">
        Submit
      </Button>
    </Form.Root>
  );
}
