"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";

export function ToastStatusDemo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <ToastSuccess />
      <ToastInfo />
      <ToastWarning />
      <ToastError />
    </div>
  );
}

function ToastSuccess() {
  return (
    <Button
      onPress={() => toast.success("Event has been created")}
      variant="outline"
    >
      Success
    </Button>
  );
}

function ToastInfo() {
  return (
    <Button
      onPress={() =>
        toast.info("Be at the area 10 minutes before the event time")
      }
      variant="outline"
    >
      Info
    </Button>
  );
}

function ToastWarning() {
  return (
    <Button
      onPress={() =>
        toast.warning("Event start time cannot be earlier than 8am")
      }
      variant="outline"
    >
      Warning
    </Button>
  );
}

function ToastError() {
  return (
    <Button
      onPress={() => toast.error("Event has not been created")}
      variant="outline"
    >
      Error
    </Button>
  );
}
