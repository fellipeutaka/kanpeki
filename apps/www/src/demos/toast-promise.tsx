"use client";

import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/toast";

async function promise() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (Math.random() > 0.5) {
    throw new Error("Failed to add toast");
  }

  return {
    name: "Sonner",
  };
}

export default function ToastPromiseDemo() {
  return (
    <Button
      onPress={() =>
        toast.promise(promise, {
          error: (err) => `Error: ${err.message}`,
          loading: "Loading...",
          success: (data) => `${data.name} toast has been added`,
        })
      }
      variant="outline"
    >
      Promise
    </Button>
  );
}
