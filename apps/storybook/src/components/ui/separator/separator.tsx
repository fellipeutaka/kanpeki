import { SeparatorStyles } from "./styles";

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
