import { Checkbox } from "@kanpeki/ui/checkbox";
import { Label } from "@kanpeki/ui/label";

export default function CheckboxDemo() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Checkbox.Root id="terms">
          <Checkbox.Indicator />
        </Checkbox.Root>
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
