import { TextField } from "@kanpeki/ui/text-field";

export default function TextFieldDemo() {
  return (
    <TextField.Root className="max-w-80">
      <TextField.Input type="email" placeholder="Email" />
    </TextField.Root>
  );
}
