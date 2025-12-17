import { Textarea } from "~/registry/ui/textarea";

export function TextareaAutoResizeDemo() {
  return (
    <Textarea
      className="field-sizing-content max-h-[10lh]"
      placeholder="Add a comment..."
    />
  );
}
