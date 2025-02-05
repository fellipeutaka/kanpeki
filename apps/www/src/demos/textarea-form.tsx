import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Label } from "~/components/ui/label";
import { TextArea } from "~/components/ui/textarea";
import { TextField } from "~/components/ui/textfield";

export default function TextAreaFormDemo() {
  return (
    <Form.Root className="w-full space-y-6">
      <TextField.Provider isRequired minLength={10}>
        <Label>Bio</Label>

        <TextArea placeholder="Tell us a little bit about yourself" />

        <Form.Description>
          You can <span>@mention</span> other users and organizations.
        </Form.Description>

        <Form.Error />
      </TextField.Provider>

      <Button className="self-start" type="submit">
        Submit
      </Button>
    </Form.Root>
  );
}
