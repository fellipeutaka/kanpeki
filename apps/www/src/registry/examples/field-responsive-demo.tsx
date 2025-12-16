import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { Switch } from "~/registry/ui/switch";
import { TextField } from "~/registry/ui/text-field";

export function FieldResponsiveDemo() {
  return (
    <Field.Set>
      <Field.Legend>Account Settings</Field.Legend>
      <Field.Group>
        <Field.Root orientation="responsive" render={<TextField />}>
          <Field.Label>Display name</Field.Label>
          <Field.Content>
            <Input placeholder="John Doe" />
            <Field.Description>
              This is your public display name.
            </Field.Description>
          </Field.Content>
        </Field.Root>
        <Field.Root
          orientation="responsive"
          render={<TextField type="email" />}
        >
          <Field.Label>Email</Field.Label>
          <Field.Content>
            <Input placeholder="john@example.com" />
            <Field.Description>
              We'll use this for account notifications.
            </Field.Description>
          </Field.Content>
        </Field.Root>
        <Field.Root orientation="responsive">
          <Field.Content>
            <Field.Title>Two-factor authentication</Field.Title>
            <Field.Description>
              Add an extra layer of security to your account.
            </Field.Description>
          </Field.Content>
          <Switch.Root>
            <Switch.Track>
              <Switch.Thumb />
            </Switch.Track>
          </Switch.Root>
        </Field.Root>
      </Field.Group>
    </Field.Set>
  );
}
