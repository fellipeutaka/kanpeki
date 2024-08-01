import { tv } from "tailwind-variants";

export const SkeletonStyles = tv({
  base: ["animate-pulse rounded-md bg-muted"],
});

export type SkeletonProps = Omit<React.ComponentProps<"div">, "children">;

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
