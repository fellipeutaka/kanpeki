"use client";

import { useActionState } from "react";
import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Form } from "~/registry/ui/form";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

interface ActionState {
  errors?: Record<string, string | string[]>;
}

async function loginAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const username = formData.get("username") as string;

  if (username === "admin") {
    return { errors: { username: "Sorry, this username is taken." } };
  }

  toast(`Welcome, ${username}!`);
  return { errors: {} };
}

export function ReactAriaFormServerValidationDemo() {
  const [{ errors }, formAction, isPending] = useActionState(loginAction, {});

  return (
    <Form
      action={formAction}
      className="flex w-full max-w-sm flex-col gap-4"
      validationErrors={errors}
    >
      <Field.Root render={<TextField isRequired name="username" />}>
        <Field.Label>Username</Field.Label>
        <Input placeholder="Enter your username" />
        <Field.Error />
      </Field.Root>
      <Field.Root
        render={<TextField isRequired name="password" type="password" />}
      >
        <Field.Label>Password</Field.Label>
        <Input placeholder="Enter your password" />
        <Field.Error />
      </Field.Root>
      <div className="flex gap-2">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button isDisabled={isPending} type="submit">
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </Form>
  );
}
