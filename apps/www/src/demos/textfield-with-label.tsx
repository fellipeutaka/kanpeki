import { Label } from "~/components/ui/label";
import { TextField } from "~/components/ui/textfield";

export default function TextFieldWithLabelDemo() {
  return (
    <TextField.Provider className="w-full max-w-80" type="email">
      <Label>Email</Label>

      <TextField.Root>
        <TextField.Input placeholder="Email" />
      </TextField.Root>
    </TextField.Provider>
  );
}
