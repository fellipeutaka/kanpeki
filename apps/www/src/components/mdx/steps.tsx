import { cn } from "@kanpeki/utils/cn";

export function Steps({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "steps mb-12 ml-4 border-l pl-8 [counter-reset:step]",
        className,
      )}
    />
  );
}

export function Step({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      {...props}
      className={cn(
        "heading mt-8 scroll-m-20 font-semibold text-xl tracking-tight",
        className,
      )}
    />
  );
}
