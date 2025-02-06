import { Slider } from "~/components/ui/slider";

export default function SliderDemo() {
  return (
    <Slider.Root aria-label="Volume" className="max-w-72">
      <Slider.Track>
        <Slider.Filler />
        <Slider.Thumb />
      </Slider.Track>
    </Slider.Root>
  );
}
