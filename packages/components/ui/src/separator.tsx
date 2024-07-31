import { tv } from "tailwind-variants";

export const SeparatorStyles = tv({
  base: ["shrink-0 bg-border"],
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
});

export type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
} & React.ComponentProps<"div">;

export function Separator({
  ref,
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  const semanticProps = decorative
    ? { role: "none" }
    : { "aria-orientation": orientation, role: "separator" };

  return (
    <div
      ref={ref}
      className={SeparatorStyles({ className, orientation })}
      {...semanticProps}
      {...props}
    />
  );
}
