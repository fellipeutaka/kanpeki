import { cva } from "~/lib/cva";

export const SkeletonStyles = cva({
  base: ["animate-pulse rounded-md bg-muted"],
});

export interface SkeletonProps
  extends Omit<React.ComponentProps<"div">, "children"> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      {...props}
      aria-busy="true"
      aria-live="polite"
      className={SkeletonStyles({ className })}
    />
  );
}
