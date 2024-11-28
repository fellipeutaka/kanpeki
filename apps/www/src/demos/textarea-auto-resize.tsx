"use client";

import { TextArea } from "~/components/ui/textarea";

export default function TextAreaAutoResizeDemo() {
  return (
    <TextArea
      className="max-h-[10lh] [field-sizing:content]"
      placeholder="Type your message here."
    />
  );
}
