import { Label } from "~/components/ui/label";
import { TextArea } from "~/components/ui/textarea";
import { TextField } from "~/components/ui/textfield";

export default function TextAreaWithLabelDemo() {
  return (
    <TextField.Provider className="w-full">
      <Label>Message</Label>

      <TextArea placeholder="Type your message here." />
    </TextField.Provider>
  );
}
