"use client";

import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/toast";

export default function ToastWithDescriptionDemo() {
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
