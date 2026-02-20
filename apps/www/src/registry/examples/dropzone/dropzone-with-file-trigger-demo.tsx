"use client";

import { ImageIcon, UploadIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { FileTrigger } from "react-aria-components";
import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Dropzone, type DropzoneProviderProps } from "~/registry/ui/dropzone";

const MAX_SIZE_IN_MB = 5;
const ACCEPTED_FILE_TYPES = [
  "image/svg+xml",
  "image/png",
  "image/jpeg",
  "image/gif",
];
export function DropzoneWithFileTriggerDemo() {
  const [file, setFile] = useState<File | null>();
  const previewUrl = file ? URL.createObjectURL(file) : null;

  const onDrop: DropzoneProviderProps["onDrop"] = async (e) => {
    const file = await e.items.find((item) => item.kind === "file")?.getFile();

    if (!file) {
      setFile(null);
      return;
    }

    if (file.size > MAX_SIZE_IN_MB * 1024 * 1024) {
      toast.error(
        `File size exceeds ${MAX_SIZE_IN_MB}MB. Please select a smaller file.`
      );
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      toast.error(
        "Unsupported file type. Please upload an image (SVG, PNG, JPG, GIF)."
      );
      return;
    }

    setFile(file);
  };

  const onFileSelect = (e: FileList | null) => {
    const file = e?.item(0);

    if (file && file.size > MAX_SIZE_IN_MB * 1024 * 1024) {
      toast.error(
        `File size exceeds ${MAX_SIZE_IN_MB}MB. Please select a smaller file.`
      );
      return;
    }

    setFile(file);
  };

  return (
    <Dropzone.Provider onDrop={onDrop}>
      <Dropzone.Root className="min-h-52 w-96 text-center">
        {previewUrl ? (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img
              alt={file?.name || "Uploaded image"}
              className="mx-auto max-h-full rounded object-contain"
              src={previewUrl}
            />
          </div>
        ) : (
          <div className="space-y-2">
            <div
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center justify-self-center rounded-full border bg-background"
            >
              <ImageIcon className="size-4 opacity-60" />
            </div>
            <Dropzone.Label>Drop your image here</Dropzone.Label>
            <p className="text-muted-foreground text-xs">
              SVG, PNG, JPG or GIF (max. {MAX_SIZE_IN_MB}MB)
            </p>
            <FileTrigger
              acceptedFileTypes={ACCEPTED_FILE_TYPES}
              onSelect={onFileSelect}
            >
              <Button className="mt-2" variant="outline">
                <UploadIcon
                  aria-hidden="true"
                  className="-ms-1 size-4 opacity-60"
                />
                Select image
              </Button>
            </FileTrigger>
          </div>
        )}

        {previewUrl && (
          <div className="absolute top-4 right-4">
            <Button
              aria-label="Remove image"
              className="size-8 rounded-full"
              onPress={() => setFile(null)}
              size="icon"
              variant="ghost"
            >
              <XIcon aria-hidden="true" />
            </Button>
          </div>
        )}
      </Dropzone.Root>
    </Dropzone.Provider>
  );
}
