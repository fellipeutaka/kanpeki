import { Label } from "@kanpeki/ui/label";
import { Switch } from "@kanpeki/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch.Root id="airplane-mode">
        <Switch.Thumb />
      </Switch.Root>
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
