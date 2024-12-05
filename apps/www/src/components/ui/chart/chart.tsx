"use client";

import { createContext, useContext, useId, useMemo } from "react";
import {
  Legend,
  type LegendProps,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { cn } from "~/lib/cva";

interface Theme {
  readonly light: string;
  readonly dark: string;
}

const Themes: Theme = { light: "", dark: ".dark" };

export interface ChartConfig {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<keyof Theme, string>;
  };
}

const ChartContext = createContext<{ config: ChartConfig } | null>(null);

const useChart = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <Chart />");
  }
  return context;
};

interface ChartProps extends React.ComponentProps<"div"> {
  config: ChartConfig;
  children: React.ReactElement;
}

export function ChartRoot({
  id,
  className,
  children,
  config,
  ...props
}: ChartProps) {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "cks flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-fg [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-bg-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <Style id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

interface StyleProps {
  id: string;
  config: ChartConfig;
}

const Style = ({ id, config }: StyleProps) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  );
  if (colorConfig.length === 0) {
    return null;
  }

  return (
    <style
      // biome-ignore lint/security/noDangerouslySetInnerHtml: ignore
      dangerouslySetInnerHTML={{
        __html: Object.entries(Themes)
          .map(
            ([theme, prefix]) => `
            ${prefix} [data-chart=${id}] {
              ${colorConfig
                .map(([key, itemConfig]) => {
                  const color =
                    itemConfig.theme?.[
                      theme as keyof typeof itemConfig.theme
                    ] || itemConfig.color;
                  return color ? `--color-${key}: ${color};` : null;
                })
                .filter(Boolean)
                .join("\n")}
            }
          `
          )
          .join("\n"),
      }}
    />
  );
};

export interface ChartTooltipProps
  extends React.ComponentProps<typeof Tooltip> {}
export const ChartTooltip = Tooltip;

interface ChartTooltipContentProps<
  TValue extends ValueType,
  TName extends NameType,
> extends React.ComponentProps<typeof Tooltip<TValue, TName>>,
    Omit<React.ComponentProps<"div">, "content"> {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
}

export function ChartTooltipContent<
  TValue extends ValueType,
  TName extends NameType,
>({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
  ref,
}: ChartTooltipContentProps<TValue, TName>) {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey || item.dataKey || item.name || "value"}`;
    const itemConfig = resolvePayloadConfig(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    return value ? (
      <div className={cn("font-medium", labelClassName)}>{value}</div>
    ) : null;
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!(active && payload) || payload?.length === 0) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      ref={ref}
      className={cn(
        "grid min-w-[10rem] items-start gap-1.5 rounded-lg border border-border/60 bg-popover px-2.5 py-1.5 text-popover-fg text-xs shadow-xl",
        className
      )}
    >
      {nestLabel ? null : tooltipLabel}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = resolvePayloadConfig(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;

          return (
            <div
              key={item.dataKey}
              className={cn(
                "flex w-full flex-wrap items-stretch gap-2 [&>[data-slot=icon]]:size-2.5 [&>[data-slot=icon]]:text-muted-fg",
                indicator === "dot" && "items-center"
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                          {
                            "size-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          }
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-fg">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="font-medium font-mono text-fg tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export interface ChartLegendProps extends React.ComponentProps<typeof Legend> {}
export const ChartLegend = Legend;

interface ChartLegendContentProps
  extends React.ComponentProps<"div">,
    Pick<LegendProps, "payload" | "verticalAlign"> {
  hideIcon?: boolean;
  nameKey?: string;
}

export function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: ChartLegendContentProps) {
  const { config } = useChart();

  if (!payload || payload.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = resolvePayloadConfig(config, item, key);

        return (
          <div
            key={item.value}
            className={cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-fg"
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

const resolvePayloadConfig = (
  config: ChartConfig,
  payload: unknown,
  key: string
) => {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const nestedPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    nestedPayload &&
    key in nestedPayload &&
    typeof nestedPayload[key as keyof typeof nestedPayload] === "string"
  ) {
    configLabelKey = nestedPayload[key as keyof typeof nestedPayload] as string;
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config];
};
