import { useState } from "react";
import { type ExternalToast, toast } from "sonner";

interface CopyOptions {
  errorMessage?: React.ReactNode;
  text: string;
  timeout?: number;
}

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (options: CopyOptions, toastOptions?: ExternalToast) => {
    if (isCopied) {
      return;
    }

    if (!navigator?.clipboard) {
      toast.error(
        "Unable to access clipboard. Please grant permission to enable clipboard access.",
        toastOptions
      );
      return;
    }

    const { text, timeout, errorMessage } = options;

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, timeout ?? 2000);
    } catch {
      toast.error(
        errorMessage ?? "Unable to copy to clipboard. Please try again.",
        toastOptions
      );
    }
  };

  return [copy, isCopied] as const;
}
