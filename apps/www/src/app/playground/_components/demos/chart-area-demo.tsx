"use client";

import { TrendingUpIcon } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card } from "~/registry/ui/card";
import { Chart, type ChartConfig } from "~/registry/ui/chart";

export const description = "A simple area chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaDemo() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Area Chart</Card.Title>
        <Card.Description>
          Showing total visitors for the last 6 months
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart.Root config={chartConfig}>
          <AreaChart
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
            <Chart.Tooltip
              content={<Chart.TooltipContent indicator="line" />}
              cursor={false}
            />
            <Area
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              type="natural"
            />
          </AreaChart>
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
              January - June 2024
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card.Root>
  );
}
