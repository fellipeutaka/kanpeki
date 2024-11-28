import { TextArea as TextAreaPrimitive } from "react-aria-components";
import { type VariantProps, cva } from "~/lib/cva";

export const TextAreaStyles = cva({
  base: [
    "flex min-h-20 w-full resize-none rounded-md border border-input bg-bg px-3 py-2 text-sm outline-none ring-offset-2 ring-offset-bg transition",
    "placeholder:text-muted-fg",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:ring-2 focus-visible:ring-ring",
  ],
});

export interface TextAreaProps
  extends React.ComponentProps<typeof TextAreaPrimitive>,
    VariantProps<typeof TextAreaStyles> {}

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <TextAreaPrimitive
      {...props}
      className={(values) =>
        TextAreaStyles({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}
