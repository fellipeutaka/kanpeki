"use client";

import { Switch } from "~/components/ui/switch";

export default function SwitchDemo() {
  return (
    <Switch.Root className="gap-2">
      <Switch.Track>
        <Switch.Thumb />
      </Switch.Track>
      Airplane Mode
    </Switch.Root>
  );
}
