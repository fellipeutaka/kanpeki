import { Icons } from "@kanpeki/ui/icons";
import { TextField } from "@kanpeki/ui/text-field";

export default function TextFieldWithIconDemo() {
  return (
    <TextField.Root className="max-w-80">
      <TextField.Slot>
        <Icons.User className="size-4 text-muted-foreground" />
      </TextField.Slot>
      <TextField.Input placeholder="Username" />
    </TextField.Root>
  );
}
