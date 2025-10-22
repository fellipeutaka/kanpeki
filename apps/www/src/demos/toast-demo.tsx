"use client";

import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/toast";

export default function ToastDemo() {
  return (
    <Button onPress={() => toast("Event has been created")} variant="outline">
      Show Toast
    </Button>
  );
}
