"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";

export function ToastDemo() {
  return (
    <Button onPress={() => toast("Event has been created")} variant="outline">
      Show Toast
    </Button>
  );
}
