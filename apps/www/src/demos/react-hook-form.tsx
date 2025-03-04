"use client";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Controller, useForm } from "react-hook-form";
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

export default function ReactHookForm() {
  const form = useForm<FormSchema>({
    defaultValues: {
      username: "",
    },
    resolver: standardSchemaResolver(formSchema),
  });

  const handleSubmit = form.handleSubmit(
    (data) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="mt-2 rounded-md p-4">
            <code className="font-mono text-sm">
              {JSON.stringify(data, null, 2)}
            </code>
          </pre>
        ),
      });
    },
    (err) => console.log(err)
  );

  return (
    <Form.Root
      onSubmit={handleSubmit}
      validationBehavior="aria"
      className="w-full space-y-6"
    >
      <Controller
        name="username"
        control={form.control}
        render={({ field: { ref, ...field }, fieldState }) => (
          <TextField.Provider {...field} isInvalid={fieldState.invalid}>
            <Label>Username</Label>

            <TextField.Root>
              <TextField.Input placeholder="fellipeutaka" ref={ref} />
            </TextField.Root>

            <Form.Description>
              This is your public display name.
            </Form.Description>

            <Form.Error>{fieldState.error?.message}</Form.Error>
          </TextField.Provider>
        )}
      />

      <Button className="self-start" type="submit">
        Submit
      </Button>
    </Form.Root>
  );
}
