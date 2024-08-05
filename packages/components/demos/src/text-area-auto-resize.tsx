import { TextArea } from "@kanpeki/ui/text-area";

export default function TextAreaAutoResizeDemo() {
  return (
    <TextArea
      placeholder="Add a comment here."
      className="max-h-[10lh] [field-sizing:content]"
    />
  );
}
