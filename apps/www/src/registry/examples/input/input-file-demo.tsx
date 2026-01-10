import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label";

export function InputFileDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
}
