import { SkeletonStyles } from "./styles";

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
