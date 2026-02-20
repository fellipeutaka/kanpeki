"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Form } from "~/registry/ui/form";
import { Listbox } from "~/registry/ui/list-box";
import { Popover } from "~/registry/ui/popover";
import { Select } from "~/registry/ui/select";

export function ReactAriaFormSelectDemo() {
  return (
    <Form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        toast(JSON.stringify(data, null, 2));
        (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      <Field.Root
        render={
          <Select.Root
            isRequired
            name="country"
            placeholder="Select a country"
          />
        }
      >
        <Field.Label>Country</Field.Label>
        <Select.Trigger className="w-full">
          <Select.Value />
        </Select.Trigger>
        <Popover.Content>
          <Listbox.Root>
            <Listbox.Item id="us">United States</Listbox.Item>
            <Listbox.Item id="uk">United Kingdom</Listbox.Item>
            <Listbox.Item id="ca">Canada</Listbox.Item>
            <Listbox.Item id="au">Australia</Listbox.Item>
            <Listbox.Item id="de">Germany</Listbox.Item>
            <Listbox.Item id="fr">France</Listbox.Item>
            <Listbox.Item id="br">Brazil</Listbox.Item>
          </Listbox.Root>
        </Popover.Content>
        <Field.Description>
          Select the country where you are based.
        </Field.Description>
        <Field.Error />
      </Field.Root>
      <div className="flex gap-2">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
