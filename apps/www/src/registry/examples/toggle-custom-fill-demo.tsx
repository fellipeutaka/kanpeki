import { ThumbsUpIcon } from "lucide-react";

import { Toggle } from "~/registry/ui/toggle/toggle";

export function ToggleCustomFillDemo() {
  return (
    <Toggle
      aria-label="Toggle book"
      className="selected:[&_svg]:fill-accent-foreground"
    >
      <ThumbsUpIcon className="fill-transparent transition duration-300" />
    </Toggle>
  );
}
