import { Slider } from "~/registry/ui/slider";

export function SliderVerticalDemo() {
  return (
    <Slider.Root
      aria-label="Vertical slider"
      defaultValue={[50]}
      orientation="vertical"
    >
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb />
      </Slider.Track>
    </Slider.Root>
  );
}
