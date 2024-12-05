"use client";

import { Toaster as ToasterPrimitive } from "sonner";

export interface ToasterProps
  extends React.ComponentProps<typeof ToasterPrimitive> {}

export function Toaster(props: ToasterProps) {
  return (
    <ToasterPrimitive
      toastOptions={{
        classNames: {
          toast: "bg-bg text-fg border-border shadow-lg gap-4",
          description: "text-muted-fg",
        },
      }}
      {...props}
    />
  );
}

export { toast } from "sonner";
