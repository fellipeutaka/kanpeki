export interface AspectRatioProps extends React.ComponentProps<"div"> {
  ratio?: number;
}

export function AspectRatio({
  ratio = 1 / 1,
  style,
  ...props
}: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio-wrapper"
      style={{
        paddingBottom: `${100 / ratio}%`,
        // ensures inner element is contained
        position: "relative",
        // ensures padding bottom trick maths works
        width: "100%",
      }}
    >
      <div
        {...props}
        data-slot="aspect-ratio"
        style={{
          ...style,
          bottom: 0,
          left: 0,
          // ensures children expand in ratio
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
    </div>
  );
}
