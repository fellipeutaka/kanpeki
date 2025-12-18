import { Label } from "~/registry/ui/label";
import { Textarea } from "~/registry/ui/textarea";

export function TextareaWithLabelDemo() {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  );
}
