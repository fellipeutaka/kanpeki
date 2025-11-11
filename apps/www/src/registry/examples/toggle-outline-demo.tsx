import { ItalicIcon } from "lucide-react";

import { Toggle } from "~/registry/ui/toggle/toggle";

export function ToggleOutlineDemo() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <ItalicIcon />
      Italic
    </Toggle>
  );
}
