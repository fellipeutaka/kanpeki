"use client";

import { Label } from "~/components/ui/label";
import { TextArea } from "~/components/ui/textarea";
import { TextFieldProvider } from "~/components/ui/textfield";

export default function TextAreaWithLabelDemo() {
  return (
    <TextFieldProvider className="w-full">
      <Label>Message</Label>

      <TextArea placeholder="Type your message here." />
    </TextFieldProvider>
  );
}
