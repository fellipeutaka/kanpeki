"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";

async function promise() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (Math.random() > 0.5) {
    throw new Error("Failed to add toast");
  }

  return {
    name: "Sonner",
  };
}

export function ToastPromiseDemo() {
  return (
    <Button
      onPress={() =>
        toast.promise(promise, {
          loading: "Loading...",
          success: (data) => `${data.name} toast has been added`,
          error: (err) => `Error: ${err.message}`,
        })
      }
      variant="outline"
    >
      Promise
    </Button>
  );
}
