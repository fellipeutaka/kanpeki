import { Label as LabelPrimitive } from "react-aria-components";
import { cva } from "~/lib/cva";

export const LabelStyles = cva({
  base: [
    "w-fit cursor-default font-medium text-secondary-fg text-sm",
    "group-required:after:ml-0.5 group-required:after:text-danger group-required:after:content-['*']",
  ],
});

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive> {}

export function Label({ className, ...props }: LabelProps) {
  return <LabelPrimitive {...props} className={LabelStyles({ className })} />;
}
