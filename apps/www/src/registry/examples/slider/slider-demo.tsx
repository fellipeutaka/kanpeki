import { Slider } from "~/registry/ui/slider";

export function SliderDemo() {
  return (
    <Slider.Root aria-label="Single value slider" defaultValue={[50]}>
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb />
      </Slider.Track>
    </Slider.Root>
  );
}
