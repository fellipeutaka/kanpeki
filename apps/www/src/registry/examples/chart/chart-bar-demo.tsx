"use client";

import { TrendingUpIcon } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card } from "~/registry/ui/card";
import { Chart, type ChartConfig } from "~/registry/ui/chart";

export const description = "A multiple bar chart";

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

export function ChartBarDemo() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Bar Chart - Multiple</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart.Root config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="month"
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={10}
            />
            <Chart.Tooltip
              content={<Chart.TooltipContent indicator="dashed" />}
              cursor={false}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
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
