"use client";

import { TrendingUpIcon } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card } from "~/registry/ui/card";
import { Chart, type ChartConfig } from "~/registry/ui/chart";

export const description = "A mixed bar chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--color-chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--color-chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--color-chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--color-chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--color-chart-5)",
  },
} satisfies ChartConfig;

export function ChartBarMixed() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Bar Chart - Mixed</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart.Root config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              axisLine={false}
              dataKey="browser"
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
              tickLine={false}
              tickMargin={10}
              type="category"
            />
            <XAxis dataKey="visitors" hide type="number" />
            <Chart.Tooltip
              content={<Chart.TooltipContent hideLabel />}
              cursor={false}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </Chart.Root>
      </Card.Content>
      <Card.Footer className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUpIcon className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </Card.Footer>
    </Card.Root>
  );
}
