import { Checkbox } from "@kanpeki/ui/checkbox";
import { Label } from "@kanpeki/ui/label";
import { useId } from "react";

export default function CheckboxDemo() {
  const id = useId();

  return (
    <div>
      <div className="flex items-center gap-2">
        <Checkbox.Root disabled id={id}>
          <Checkbox.Indicator />
        </Checkbox.Root>
        <Label htmlFor={id}>Accept terms and conditions</Label>
      </div>
    </div>
  );
}
