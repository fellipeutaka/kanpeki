import { BoldIcon } from "lucide-react";

import { Toggle } from "~/registry/ui/toggle/toggle";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <BoldIcon />
    </Toggle>
  );
}
