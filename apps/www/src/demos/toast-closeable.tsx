"use client";

import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/toast";

export default function ToastCloseableDemo() {
  return (
    <Button
      variant="outline"
      onPress={() =>
        toast.message("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
          closeButton: true,
          duration: Number.POSITIVE_INFINITY,
        })
      }
    >
      Show Toast
    </Button>
  );
}
