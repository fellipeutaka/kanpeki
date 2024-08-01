import { type VariantProps, tv } from "tailwind-variants";

export const TextAreaStyles = tv({
  base: [
    "flex min-h-20 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-2 ring-offset-background transition",
    "placeholder:text-muted-foreground",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:ring-2 focus-visible:ring-ring",
  ],
});

export type TextAreaProps = React.ComponentProps<"textarea"> &
  VariantProps<typeof TextAreaStyles>;

export function TextArea({ className, ...props }: TextAreaProps) {
  return <textarea {...props} className={TextAreaStyles({ className })} />;
}
