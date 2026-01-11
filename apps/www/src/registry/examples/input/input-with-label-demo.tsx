import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label";

export function InputWithLabelDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="Email" type="email" />
    </div>
  );
}
