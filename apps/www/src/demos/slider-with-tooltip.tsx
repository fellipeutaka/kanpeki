import { ButtonPrimitive } from "~/components/ui/button";
import { Slider } from "~/components/ui/slider";
import { Tooltip } from "~/components/ui/tooltip";

export default function SliderWithTooltipDemo() {
  return (
    <Slider.Root aria-label="Volume" className="max-w-72">
      <Slider.Track>
        <Slider.Filler />

        <Tooltip.Root delay={500}>
          <ButtonPrimitive>
            <Slider.Thumb />
          </ButtonPrimitive>

          <Tooltip.Content placement="top">
            <Slider.Output />
          </Tooltip.Content>
        </Tooltip.Root>
      </Slider.Track>
    </Slider.Root>
  );
}
