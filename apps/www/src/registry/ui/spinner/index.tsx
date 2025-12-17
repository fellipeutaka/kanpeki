import { cx } from "cva";
import { cn } from "~/registry/lib/cva";

export interface SpinnerProps
  extends Omit<React.ComponentProps<"div">, "children"> {}

const bars = Array.from({ length: 12 }, (_, i) => ({
  id: i,
}));

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div
      className={cn("size-4 text-current", className)}
      data-slot="spinner"
      {...props}
    >
      <div className="relative top-1/2 left-1/2 h-[inherit] w-[inherit]">
        {bars.map((bar) => (
          <div
            aria-hidden="true"
            className={cx(
              "motion-opacity-loop-5/reset motion-duration-1200 motion-ease-linear absolute -top-[3.9%] -left-[10%] h-[8%] w-[24%] rounded-md bg-current"
            )}
            data-slot="spinner-bar"
            key={bar.id}
            style={{
              animationDelay: `-${1.3 - bar.id * 0.1}s`,
              transform: `rotate(${30 * bar.id}deg) translate(146%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
