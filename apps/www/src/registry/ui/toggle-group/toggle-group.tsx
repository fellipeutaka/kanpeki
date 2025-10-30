"use client";

import type { VariantProps } from "cva";
import { createContext, useContext } from "react";
import {
  composeRenderProps,
  ToggleButton,
  ToggleButtonGroup,
} from "react-aria-components";
import { ToggleStyles } from "~/registry/ui/toggle";
import { ToggleGroupStyles } from "./styles";

const ToggleGroupContext = createContext<VariantProps<typeof ToggleStyles>>({
  size: "default",
  variant: "default",
});

export type ToggleGroupRootProps = React.ComponentProps<
  typeof ToggleButtonGroup
> &
  VariantProps<typeof ToggleStyles>;

export function ToggleGroupRoot({
  className,
  variant,
  size,
  ...props
}: ToggleGroupRootProps) {
  return (
    <ToggleGroupContext.Provider value={{ size, variant }}>
      <ToggleButtonGroup
        className={composeRenderProps(className, (className) =>
          ToggleGroupStyles.Root({ className })
        )}
        data-size={size}
        data-slot="toggle-group-root"
        data-variant={variant}
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
  variant,
  size,
  ...props
}: ToggleGroupItemProps) {
  const context = useContext(ToggleGroupContext);
  const _variant = context.variant ?? variant;
  const _size = context.size ?? size;

  return (
    <ToggleButton
      className={composeRenderProps(className, (className) =>
        ToggleStyles({
          className: ToggleGroupStyles.Item({ className }),
          size: _size,
          variant: _variant,
        })
      )}
      data-size={_size}
      data-slot="toggle-group-item"
      data-variant={_variant}
      {...props}
    />
  );
}
