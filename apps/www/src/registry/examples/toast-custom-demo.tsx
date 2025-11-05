"use client";

import { XIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "~/registry/ui/button";

export function ToastCustomDemo() {
  return (
    <Button
      onPress={() =>
        toast.custom((t) => (
          <div className="flex w-full items-center rounded-lg border bg-popover p-4 shadow-lg md:max-w-[364px]">
            <div className="flex flex-1 items-center">
              <div className="w-full">
                <p className="font-medium text-sm">Event has been created</p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Monday, January 3rd at 6:00pm
                </p>
              </div>
            </div>

            <Button
              className="transform-(--toast-close-button-transform) absolute top-0 left-0 grid size-5 pressed:scale-95 cursor-pointer place-content-center rounded-full"
              onPress={() => toast.dismiss(t)}
              size="icon"
              variant="secondary"
            >
              <XIcon className="size-3" />
            </Button>
          </div>
        ))
      }
      variant="outline"
    >
      Show Toast
    </Button>
  );
}
