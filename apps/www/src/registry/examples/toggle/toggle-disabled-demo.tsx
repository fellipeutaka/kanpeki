import { ThumbsDownIcon } from "lucide-react";
import { Toggle } from "~/registry/ui/toggle/toggle";

export function ToggleDisabledDemo() {
  return (
    <Toggle aria-label="Toggle dislike" isDisabled variant="outline">
      <ThumbsDownIcon />
    </Toggle>
  );
}
