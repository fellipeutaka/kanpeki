import { Toaster as ToasterPrimitive } from "sonner";

export interface ToasterProps
  extends React.ComponentProps<typeof ToasterPrimitive> {}

export function Toaster(props: ToasterProps) {
  return (
    <ToasterPrimitive
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex items-center w-(--width) h-(--front-toast-height) gap-1.5 bg-bg text-fg border shadow-lg p-4 rounded-xl text-sm font-sans",
          description: "text-muted-fg!",
          closeButton: "bg-bg! text-fg! !border-border",
        },
      }}
      {...props}
    />
  );
}
