import { cva } from "~/lib/cva";

export const SeparatorStyles = cva({
  base: ["shrink-0 bg-border"],
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
});

export interface SeparatorProps extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

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
