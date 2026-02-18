"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Listbox } from "~/registry/ui/list-box";
import { Popover } from "~/registry/ui/popover";
import { Select } from "~/registry/ui/select";

const formSchema = z.object({
  country: z.string().min(1, "Please select a country."),
});

export function TanstackFormSelectDemo() {
  const form = useForm({
    defaultValues: {
      country: "",
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: ({ value }) => {
      toast(JSON.stringify(value, null, 2));
    },
  });

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field
        children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field.Root
              render={
                <Select.Root
                  isInvalid={isInvalid}
                  name={field.name}
                  onChange={(key) => field.handleChange(key as string)}
                  placeholder="Select a country"
                  value={field.state.value || null}
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
              <Field.Error errors={field.state.meta.errors} />
            </Field.Root>
          );
        }}
        name="country"
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button isDisabled={!canSubmit} type="submit">
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        )}
      />
    </form>
  );
}
