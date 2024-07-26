import { cn } from "~/utils/cn";

export function Pre({ className, ...props }: React.ComponentProps<"pre">) {
  return <pre {...props} className={cn("", className)} />;
}
