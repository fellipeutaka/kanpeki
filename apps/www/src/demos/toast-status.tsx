"use client";

import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/toast";

export default function ToastStatusDemo() {
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
      variant="outline"
      onPress={() => toast.success("Event has been created")}
    >
      Success
    </Button>
  );
}

function ToastInfo() {
  return (
    <Button
      variant="outline"
      onPress={() =>
        toast.info("Be at the area 10 minutes before the event time")
      }
    >
      Info
    </Button>
  );
}

function ToastWarning() {
  return (
    <Button
      variant="outline"
      onPress={() =>
        toast.warning("Event start time cannot be earlier than 8am")
      }
    >
      Warning
    </Button>
  );
}

function ToastError() {
  return (
    <Button
      variant="outline"
      onPress={() => toast.error("Event has not been created")}
    >
      Error
    </Button>
  );
}
