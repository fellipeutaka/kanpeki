import { cn } from "~/registry/lib/cva";

export interface PreProps extends React.ComponentProps<"pre"> {}

export function Pre({ className, ...props }: PreProps) {
  return (
    <pre
      className={cn("shiki shiki-themes py-4", className)}
      tabIndex={-1}
      {...props}
    />
  );
}
