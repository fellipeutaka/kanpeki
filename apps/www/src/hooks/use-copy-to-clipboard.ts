import { useState } from "react";
import { type ExternalToast, toast } from "sonner";

interface CopyOptions {
  errorMessage?: React.ReactNode;
  onCopy?: () => void;
  timeout?: number;
}

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  async function copyToClipboard(
    text: string,
    options?: CopyOptions,
    toastOptions?: ExternalToast
  ) {
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

    const { errorMessage, onCopy, timeout = 2000 } = options ?? {};

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      onCopy?.();

      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    } catch {
      toast.error(
        errorMessage ?? "Unable to copy to clipboard. Please try again.",
        toastOptions
      );
    }
  }

  return { isCopied, copyToClipboard };
}
