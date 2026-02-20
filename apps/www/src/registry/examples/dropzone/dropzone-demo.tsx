"use client";

import { UploadIcon } from "lucide-react";
import { toast } from "sonner";
import { Dropzone } from "~/registry/ui/dropzone";

export function DropzoneDemo() {
  return (
    <Dropzone.Provider
      onDrop={(e) => {
        const items = e.items.filter((file) => file.kind !== "text");

        toast.info(
          `Dropped items: ${items.map((item) => item.name).join(", ")}`
        );
      }}
    >
      <Dropzone.Root className="min-h-32 w-96">
        <div className="flex items-center gap-2">
          <UploadIcon className="size-4" />
          <Dropzone.Label>Upload files</Dropzone.Label>
        </div>
      </Dropzone.Root>
    </Dropzone.Provider>
  );
}
