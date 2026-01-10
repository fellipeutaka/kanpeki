import { ChartAreaDemo } from "~/registry/examples/chart/chart-area-demo";
import { ChartBarDemo } from "~/registry/examples/chart/chart-bar-demo";
import { ChartBarMixedDemo } from "~/registry/examples/chart/chart-bar-mixed-demo";
import { ChartLineDemo } from "~/registry/examples/chart/chart-line-demo";

export function ChartDemo() {
  return (
    <div className="grid w-full max-w-screen-2xl @2xl:grid-cols-2 @6xl:grid-cols-3 gap-4 *:data-[slot=card]:flex-1">
      <ChartAreaDemo />
      <ChartBarDemo />
      <ChartBarMixedDemo />
      <div className="@6xl:hidden">
        <ChartLineDemo />
      </div>
    </div>
  );
}
