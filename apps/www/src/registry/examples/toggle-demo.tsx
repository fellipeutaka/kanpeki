import {
  BoldIcon,
  BookmarkIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

import { Toggle } from "~/registry/ui/toggle/toggle";

export function ToggleDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Toggle aria-label="Toggle italic">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="default">
        <UnderlineIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" isDisabled variant="default">
        Disabled
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="outline">
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle
        aria-label="Toggle book"
        className="selected:[&_svg]:fill-accent-foreground"
      >
        <BookmarkIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" size="sm" variant="outline">
        Small
      </Toggle>
      <Toggle aria-label="Toggle italic" size="lg" variant="outline">
        Large
      </Toggle>
    </div>
  );
}
