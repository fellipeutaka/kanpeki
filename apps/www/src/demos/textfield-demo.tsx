import { TextField } from "~/components/ui/textfield";

export default function TextFieldDemo() {
  return (
    <TextField.Root className="w-full max-w-80">
      <TextField.Input placeholder="Email" type="email" />
    </TextField.Root>
  );
}
