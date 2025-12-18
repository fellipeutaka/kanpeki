"use client";

import { useId } from "react";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { Switch } from "~/registry/ui/switch";
import { TextField } from "~/registry/ui/text-field";

export function FieldResponsiveDemo() {
  const switchId = useId();

  return (
    <Field.Set className="w-full">
      <Field.Legend>Account Settings</Field.Legend>
      <Field.Separator />
      <Field.Group>
        <Field.Root orientation="responsive" render={<TextField />}>
          <Field.Content>
            <Field.Label>Display name</Field.Label>
            <Field.Description>
              This is your public display name.
            </Field.Description>
          </Field.Content>
          <Input placeholder="John Doe" />
        </Field.Root>
        <Field.Separator />
        <Field.Root
          orientation="responsive"
          render={<TextField type="email" />}
        >
          <Field.Content>
            <Field.Label>Email</Field.Label>
            <Field.Description>
              We'll use this for account notifications.
            </Field.Description>
          </Field.Content>
          <Input placeholder="john@example.com" />
        </Field.Root>
        <Field.Separator />
        <Field.Root orientation="responsive">
          <Field.Content>
            <Field.Label htmlFor={switchId}>
              Two-factor authentication
            </Field.Label>
            <Field.Description>
              Add an extra layer of security to your account.
            </Field.Description>
          </Field.Content>
          <Switch.Root id={switchId}>
            <Switch.Track>
              <Switch.Thumb />
            </Switch.Track>
          </Switch.Root>
        </Field.Root>
      </Field.Group>
    </Field.Set>
  );
}
