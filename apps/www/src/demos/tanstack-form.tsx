"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Label } from "~/components/ui/label";
import { TextField } from "~/components/ui/textfield";

const formSchema = z.object({
  username: z.string().min(2).max(16),
});

type FormSchema = z.output<typeof formSchema>;

export default function TanstackForm() {
  const form = useForm({
    defaultValues: {
      username: "",
    } satisfies FormSchema,
    validators: {
      onChange: formSchema,
    },
    onSubmit({ value }) {
      toast("You submitted the following values:", {
        description: (
          <pre className="mt-2 rounded-md p-4">
            <code className="font-mono text-sm">
              {JSON.stringify(value, null, 2)}
            </code>
          </pre>
        ),
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <Form.Root
      onSubmit={handleSubmit}
      validationBehavior="aria"
      className="w-full space-y-6"
    >
      <form.Field name="username">
        {(field) => (
          <TextField.Provider
            name={field.name}
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
            isInvalid={field.state.meta.errors.length > 0}
          >
            <Label>Username</Label>

            <TextField.Root>
              <TextField.Input placeholder="fellipeutaka" />
            </TextField.Root>

            <Form.Description>
              This is your public display name.
            </Form.Description>

            <Form.Error>
              {field.state.meta.errors.map((error) => error?.message)}
            </Form.Error>
          </TextField.Provider>
        )}
      </form.Field>

      <Button className="self-start" type="submit">
        Submit
      </Button>
    </Form.Root>
  );
}
