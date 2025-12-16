import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { VariantProps } from "cva";
import { Group } from "react-aria-components";
import { Separator } from "~/registry/ui/separator";
import { ButtonGroupStyles } from "./styles";

export interface ButtonGroupRootProps
  extends React.ComponentProps<typeof Group>,
    VariantProps<typeof ButtonGroupStyles.Root> {}

export function ButtonGroupRoot({
  className,
  orientation,
  ...props
}: ButtonGroupRootProps) {
  return (
    <Group
      className={ButtonGroupStyles.Root({ orientation, className })}
      data-orientation={orientation}
      data-slot="button-group-root"
      {...props}
    />
  );
}

export interface ButtonGroupTextProps extends useRender.ComponentProps<"div"> {}

export function ButtonGroupText({
  render,
  className,
  ...props
}: ButtonGroupTextProps) {
  const defaultProps: useRender.ElementProps<"div"> = {
    className: ButtonGroupStyles.Text({ className }),
    ["data-slot" as string]: "button-group-text",
  };

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });
}

export interface ButtonGroupSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: ButtonGroupSeparatorProps) {
  return (
    <Separator
      className={ButtonGroupStyles.Separator({ className })}
      data-slot="button-group-separator"
      orientation={orientation}
      {...props}
    />
  );
}
