import { MailIcon } from "lucide-react";
import { Field } from "~/registry/ui/field";
import { InputGroup } from "~/registry/ui/input-group";
import { TextField } from "~/registry/ui/text-field";

export function TextfieldWithIconDemo() {
  return (
    <Field.Root render={<TextField type="email" />}>
      <Field.Label>Email</Field.Label>
      <InputGroup.Root>
        <InputGroup.Addon>
          <MailIcon className="size-4 text-muted-foreground" />
        </InputGroup.Addon>
        <InputGroup.Input placeholder="john@example.com" />
      </InputGroup.Root>
    </Field.Root>
  );
}
