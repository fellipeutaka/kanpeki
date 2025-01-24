import { cn } from "~/lib/cva";

export function Code({ className, ...props }: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-1 py-0.5 font-mono text-sm",
        className
      )}
      {...props}
    />
  );
}
