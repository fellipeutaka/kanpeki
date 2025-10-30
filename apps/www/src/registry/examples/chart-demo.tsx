import { ChartAreaDemo } from "~/registry/examples/chart-area-demo";
import { ChartBarDemo } from "~/registry/examples/chart-bar-demo";
import { ChartBarMixed } from "~/registry/examples/chart-bar-mixed";
import { ChartLineDemo } from "~/registry/examples/chart-line-demo";

export function ChartDemo() {
  return (
    <div className="grid w-full max-w-screen-2xl @2xl:grid-cols-2 @6xl:grid-cols-3 gap-4 *:data-[slot=card]:flex-1">
      <ChartAreaDemo />
      <ChartBarDemo />
      <ChartBarMixed />
      <div className="@6xl:hidden">
        <ChartLineDemo />
      </div>
    </div>
  );
}
