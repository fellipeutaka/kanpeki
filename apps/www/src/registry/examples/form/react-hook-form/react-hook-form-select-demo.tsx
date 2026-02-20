"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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

export function ReactHookFormSelectDemo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
    },
  });

  const onSubmit = form.handleSubmit((value) => {
    toast(JSON.stringify(value, null, 2));
  });

  return (
    <form className="flex w-full max-w-sm flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        control={form.control}
        name="country"
        render={({ field: { ref, disabled, ...field }, fieldState }) => (
          <Field.Root
            render={
              <Select.Root
                {...field}
                isInvalid={fieldState.invalid}
                isDisabled={disabled}
                placeholder="Select a country"
              />
            }
          >
            <Field.Label>Country</Field.Label>
            <Select.Trigger ref={ref} className="w-full">
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
            <Field.Error errors={[fieldState.error]} />
          </Field.Root>
        )}
      />
      <div className="flex gap-2">
        <Button onPress={() => form.reset()} type="reset" variant="outline">
          Reset
        </Button>
        <Button isDisabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
