import { Button } from "~/registry/ui/button";
import { Input } from "~/registry/ui/input";

export function InputWithButtonDemo() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input placeholder="Email" type="email" />
      <Button type="submit" variant="outline">
        Subscribe
      </Button>
    </div>
  );
}
