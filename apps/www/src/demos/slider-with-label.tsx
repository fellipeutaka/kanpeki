import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";

export default function SliderWithLabelDemo() {
  return (
    <Slider.Root className="max-w-72">
      <Slider.Header>
        <Label>Volume</Label>
        <Slider.Output />
      </Slider.Header>

      <Slider.Track>
        <Slider.Filler />
        <Slider.Thumb />
      </Slider.Track>
    </Slider.Root>
  );
}
