"use client";

import { TrendingUpIcon } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card } from "~/registry/ui/card";
import { Chart, type ChartConfig } from "~/registry/ui/chart";

export const description = "A mixed bar chart";

const chartData = [
  { browser: "chrome", fill: "var(--color-chrome)", visitors: 275 },
  { browser: "safari", fill: "var(--color-safari)", visitors: 200 },
  { browser: "firefox", fill: "var(--color-firefox)", visitors: 187 },
  { browser: "edge", fill: "var(--color-edge)", visitors: 173 },
  { browser: "other", fill: "var(--color-other)", visitors: 90 },
];

const chartConfig = {
  chrome: {
    color: "var(--chart-1)",
    label: "Chrome",
  },
  edge: {
    color: "var(--chart-4)",
    label: "Edge",
  },
  firefox: {
    color: "var(--chart-3)",
    label: "Firefox",
  },
  other: {
    color: "var(--chart-5)",
    label: "Other",
  },
  safari: {
    color: "var(--chart-2)",
    label: "Safari",
  },
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig;

export function ChartBarMixedDemo() {
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
