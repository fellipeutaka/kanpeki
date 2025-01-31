"use client";

import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/toast";

export default function ToastDemo() {
  return (
    <Button variant="outline" onPress={() => toast("Event has been created")}>
      Show Toast
    </Button>
  );
}
