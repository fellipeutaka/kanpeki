import { Label } from "~/registry/ui/label/label";
import { Textarea } from "~/registry/ui/textarea";
import { Textfield } from "~/registry/ui/textfield";

export function TextareaDemo() {
  return (
    <div className="flex w-full flex-col gap-10">
      <Textarea placeholder="Type your message here." />
      <Textarea aria-invalid="true" placeholder="Type your message here." />
      <Textfield>
        <Label>Label</Label>
        <Textarea placeholder="Type your message here." rows={6} />
      </Textfield>
      <div className="grid gap-3">
        <Label htmlFor="textarea-demo-message-2">
          With label and description
        </Label>
        <Textarea
          id="textarea-demo-message-2"
          placeholder="Type your message here."
          rows={6}
        />
        <div className="text-muted-foreground text-sm">
          Type your message and press enter to send.
        </div>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="textarea-demo-disabled">Disabled</Label>
        <Textarea
          disabled
          id="textarea-demo-disabled"
          placeholder="Type your message here."
        />
      </div>
    </div>
  );
}
