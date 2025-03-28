"use client";

import { Radio, RadioGroup } from "react-aria-components";
import { Icons } from "../icons";
import { RadioGroupStyles } from "./styles";

export interface RadioGroupRootProps
  extends React.ComponentProps<typeof RadioGroup> {}

export function RadioGroupRoot({ className, ...props }: RadioGroupRootProps) {
  return (
    <RadioGroup
      {...props}
      data-slot="radio-group-root"
      className={(values) =>
        RadioGroupStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface RadioGroupItemProps
  extends React.ComponentProps<typeof Radio> {}

export function RadioGroupItem({
  className,
  children,
  ...props
}: RadioGroupItemProps) {
  return (
    <Radio
      {...props}
      className={(values) =>
        RadioGroupStyles.Item({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
      data-slot="radio-group-item"
    >
      {(values) => (
        <>
          <Icons.Circle
            data-slot="icon"
            className="size-3.5 fill-transparent transition group-selected:fill-primary"
          />
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </Radio>
  );
}
