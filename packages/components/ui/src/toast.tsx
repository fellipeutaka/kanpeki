"use client";

import { type ToasterProps, Toaster as _Toaster } from "sonner";

export function Toaster(props: ToasterProps) {
  return (
    <_Toaster
      {...props}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  );
}

// biome-ignore lint/performance/noBarrelFile: It needs to export the `toast` function
export { toast } from "sonner";
