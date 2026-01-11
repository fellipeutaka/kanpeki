"use client";

import type { VariantProps } from "cva";
import { createContext, use } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-aria-components";
import type { ToggleStyles } from "~/registry/ui/toggle";
import { ToggleGroupStyles } from "./styles";

interface ToggleGroupContextValue extends VariantProps<typeof ToggleStyles> {
  spacing?: number;
}

const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: "default",
  variant: "default",
  spacing: 0,
});

export interface ToggleGroupRootProps
  extends React.ComponentProps<typeof ToggleButtonGroup>,
    ToggleGroupContextValue {}

export function ToggleGroupRoot({
  className,
  variant,
  size,
  spacing = 0,
  ...props
}: ToggleGroupRootProps) {
  return (
    <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
      <ToggleButtonGroup
        className={ToggleGroupStyles.Root({ className })}
        data-size={size}
        data-slot="toggle-group-root"
        data-variant={variant}
        style={{ "--gap": spacing } as React.CSSProperties}
        {...props}
      />
    </ToggleGroupContext.Provider>
  );
}

export interface ToggleGroupItemProps
  extends React.ComponentProps<typeof ToggleButton>,
    VariantProps<typeof ToggleStyles> {}

export function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: ToggleGroupItemProps) {
  const context = use(ToggleGroupContext);
  const _variant = context.variant ?? variant;
  const _size = context.size ?? size;
  const _spacing = context.spacing ?? 0;

  return (
    <ToggleButton
      className={ToggleGroupStyles.Item({
        variant: _variant,
        size: _size,
        className,
      })}
      data-size={_size}
      data-slot="toggle-group-item"
      data-spacing={_spacing}
      data-variant={_variant}
      {...props}
    >
      {children}
    </ToggleButton>
  );
}
