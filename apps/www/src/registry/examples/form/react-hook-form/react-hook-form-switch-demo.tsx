"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Switch } from "~/registry/ui/switch";

const formSchema = z.object({
  marketing: z.boolean(),
});

export function ReactHookFormSwitchDemo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marketing: false,
    },
  });

  const onSubmit = form.handleSubmit((value) => {
    toast(JSON.stringify(value, null, 2));
  });

  return (
    <form className="flex w-full max-w-sm flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        control={form.control}
        name="marketing"
        render={({ field }) => (
          <Field.Root orientation="horizontal">
            <Field.Content>
              <Field.Title>
                <Field.Label>Marketing emails</Field.Label>
              </Field.Title>
              <Field.Description>
                Receive emails about new products and features.
              </Field.Description>
            </Field.Content>
            <Switch.Root
              isSelected={field.value}
              name={field.name}
              onChange={field.onChange}
            >
              <Switch.Track>
                <Switch.Thumb />
              </Switch.Track>
            </Switch.Root>
          </Field.Root>
        )}
      />
      <div className="flex gap-2">
        <Button onPress={() => form.reset()} type="reset" variant="outline">
          Reset
        </Button>
        <Button isDisabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Saving..." : "Save"} preferences
        </Button>
      </div>
    </form>
  );
}
