import { Label } from "~/registry/ui/label";
import { Slider } from "~/registry/ui/slider";

export function SliderCustomSteppingDemo() {
  return (
    <Slider.Root
      aria-label="Rating"
      className="max-w-1/2"
      defaultValue={[0]}
      maxValue={5}
      step={0.5}
    >
      <Slider.Header>
        <Label>Rating</Label>

        <Slider.Output />
      </Slider.Header>
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb />
      </Slider.Track>
    </Slider.Root>
  );
}
