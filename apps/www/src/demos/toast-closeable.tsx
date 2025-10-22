"use client";

import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/toast";

export default function ToastCloseableDemo() {
  return (
    <Button
      onPress={() =>
        toast.message("Event has been created", {
          closeButton: true,
          description: "Monday, January 3rd at 6:00pm",
          duration: Number.POSITIVE_INFINITY,
        })
      }
      variant="outline"
    >
      Show Toast
    </Button>
  );
}
