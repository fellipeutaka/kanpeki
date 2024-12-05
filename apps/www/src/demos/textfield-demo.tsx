import { TextField } from "~/components/ui/textfield";

export default function TextFieldDemo() {
  return (
    <TextField.Root className="w-full max-w-80">
      <TextField.Input type="email" placeholder="Email" />
    </TextField.Root>
  );
}
