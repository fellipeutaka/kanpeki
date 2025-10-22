import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Label } from "~/components/ui/label";
import { TextField } from "~/components/ui/textfield";

export default function TextFieldFormDemo() {
  return (
    <Form.Root className="w-full space-y-6">
      <TextField.Provider isRequired maxLength={16} minLength={2}>
        <Label>Username</Label>

        <TextField.Root>
          <TextField.Input placeholder="fellipeutaka" />
        </TextField.Root>

        <Form.Description>This is your public display name.</Form.Description>

        <Form.Error />
      </TextField.Provider>

      <Button className="self-start" type="submit">
        Submit
      </Button>
    </Form.Root>
  );
}
