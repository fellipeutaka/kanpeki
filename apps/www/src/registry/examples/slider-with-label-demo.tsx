import { Label } from "~/registry/ui/label";
import { Slider } from "~/registry/ui/slider";

export function SliderWithLabelDemo() {
  return (
    <Slider.Root
      aria-label="Volume"
      formatOptions={{
        style: "unit",
        unit: "percent",
        maximumFractionDigits: 0,
      }}
    >
      <Slider.Header>
        <Label>Volume</Label>

        <Slider.Output />
      </Slider.Header>
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb />
      </Slider.Track>
    </Slider.Root>
  );
}
