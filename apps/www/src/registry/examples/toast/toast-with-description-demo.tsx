"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";

export function ToastWithDescriptionDemo() {
  return (
    <Button
      onPress={() =>
        toast.message("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
      variant="outline"
    >
      Show Toast
    </Button>
  );
}
