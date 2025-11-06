import { Switch } from "~/registry/ui/switch";

export function SwitchDemo() {
  return (
    <Switch.Root>
      <Switch.Track>
        <Switch.Thumb />
      </Switch.Track>
      Airplane Mode
    </Switch.Root>
  );
}
