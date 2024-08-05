import { Label } from "@kanpeki/ui/label";
import { TextArea } from "@kanpeki/ui/text-area";

export default function TextAreaWithLabelDemo() {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your message</Label>
      <TextArea placeholder="Type your message here." id="message" />
    </div>
  );
}
