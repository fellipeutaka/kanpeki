"use client";

import { Button } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { toast } from "~/components/ui/toast";

export default function ToastCustomDemo() {
  return (
    <Button
      variant="outline"
      onPress={() =>
        toast.custom((t) => (
          <div>
            <Button
              variant="unset"
              className="transform-(--toast-close-button-transform) absolute top-0 left-0 grid size-5 pressed:scale-95 cursor-pointer place-content-center rounded-full border bg-bg p-0 transition"
              onPress={() => toast.dismiss(t)}
            >
              <Icons.X className="size-3" />
            </Button>
            <div className="font-medium">Event has been created</div>
            <div className="text-muted-fg">Monday, January 3rd at 6:00pm</div>
          </div>
        ))
      }
    >
      Show Toast
    </Button>
  );
}
