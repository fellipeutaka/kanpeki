import { cx } from "cva";
import { Toaster as ToasterPrimitive } from "sonner";

export interface ToasterProps
  extends React.ComponentProps<typeof ToasterPrimitive> {}

export function Toaster(props: ToasterProps) {
  return (
    <ToasterPrimitive
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: cx(
            "flex items-center gap-1.5 rounded-xl border bg-bg p-4 font-sans text-fg text-sm shadow-lg",
            "h-(--front-toast-height) w-(--width)"
          ),
          description: "text-muted-fg",
          closeButton: cx(
            "absolute top-0 left-0 grid size-5 cursor-pointer place-content-center rounded-full border bg-bg text-fg transition",
            "transform-(--toast-close-button-transform)"
          ),
          icon: cx(
            "relative flex size-4 shrink-0 items-center",
            "mr-(--toast-icon-margin-end) ml-(--toast-icon-margin-start)",
            "*:mr-(--toast-svg-margin-start) *:ml-(--toast-svg-margin-start) *:size-5"
          ),
        },
      }}
      {...props}
    />
  );
}
