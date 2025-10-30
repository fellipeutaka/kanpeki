import { SkeletonStyles } from "./styles";

export interface SkeletonProps extends React.ComponentProps<"div"> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={SkeletonStyles({ className })}
      data-slot="skeleton"
      {...props}
    />
  );
}
