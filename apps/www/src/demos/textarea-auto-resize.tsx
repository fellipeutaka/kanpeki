import { TextArea } from "~/components/ui/textarea";

export default function TextAreaAutoResizeDemo() {
  return (
    <TextArea
      className="field-sizing-content max-h-[10lh]"
      placeholder="Type your message here."
    />
  );
}
