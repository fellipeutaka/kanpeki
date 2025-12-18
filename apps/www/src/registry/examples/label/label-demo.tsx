import {
  CheckboxIndicator,
  CheckboxProvider,
  CheckboxRoot,
} from "~/registry/ui/checkbox/checkbox";
import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label/label";
import { Textarea } from "~/registry/ui/textarea";

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <div className="flex items-center gap-3">
        <CheckboxProvider>
          <CheckboxRoot>
            <CheckboxIndicator />
          </CheckboxRoot>
          Accept terms and conditions
        </CheckboxProvider>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="label-demo-username">Username</Label>
        <Input id="label-demo-username" placeholder="Username" />
      </div>
      <div className="group grid gap-3" data-disabled={true}>
        <Label htmlFor="label-demo-disabled">Disabled</Label>
        <Input disabled id="label-demo-disabled" placeholder="Disabled" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="label-demo-message">Message</Label>
        <Textarea id="label-demo-message" placeholder="Message" />
      </div>
    </div>
  );
}
