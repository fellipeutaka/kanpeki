import { Slider } from "~/registry/ui/slider";

export function SliderMultipleDemo() {
  return (
    <Slider.Root
      aria-label="Multiple value slider"
      defaultValue={[25, 50]}
      maxValue={100}
      step={1}
    >
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb />
      </Slider.Track>
    </Slider.Root>
  );
}
