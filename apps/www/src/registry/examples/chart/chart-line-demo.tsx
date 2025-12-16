"use client";

import { TrendingUpIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card } from "~/registry/ui/card";
import { Chart, type ChartConfig } from "~/registry/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { desktop: 186, mobile: 80, month: "January" },
  { desktop: 305, mobile: 200, month: "February" },
  { desktop: 237, mobile: 120, month: "March" },
  { desktop: 73, mobile: 190, month: "April" },
  { desktop: 209, mobile: 130, month: "May" },
  { desktop: 214, mobile: 140, month: "June" },
];

const chartConfig = {
  desktop: {
    color: "var(--chart-1)",
    label: "Desktop",
  },
  mobile: {
    color: "var(--chart-2)",
    label: "Mobile",
  },
} satisfies ChartConfig;

export function ChartLineDemo() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Line Chart - Multiple</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart.Root config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="month"
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={8}
            />
            <Chart.Tooltip content={<Chart.TooltipContent />} cursor={false} />
            <Line
              dataKey="desktop"
              dot={false}
              stroke="var(--color-desktop)"
              strokeWidth={2}
              type="monotone"
            />
            <Line
              dataKey="mobile"
              dot={false}
              stroke="var(--color-mobile)"
              strokeWidth={2}
              type="monotone"
            />
          </LineChart>
        </Chart.Root>
      </Card.Content>
      <Card.Footer>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month{" "}
              <TrendingUpIcon className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground leading-none">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card.Root>
  );
}
