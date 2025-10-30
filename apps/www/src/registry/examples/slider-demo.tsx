"use client";

import { useState } from "react";
import { Label } from "~/registry/ui/label/label";
import { Slider } from "~/registry/ui/slider";

export function SliderDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col flex-wrap gap-6 md:flex-row">
      <Slider.Root
        aria-label="Single value slider"
        defaultValue={[50]}
        maxValue={100}
        step={1}
      >
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Root>

      <Slider.Root
        aria-label="Double value slider"
        defaultValue={[25, 50]}
        maxValue={100}
        step={1}
      >
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Root>

      <Slider.Root
        aria-label="Step slider"
        defaultValue={[10, 20]}
        maxValue={100}
        step={10}
      >
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Root>

      <div className="flex w-full items-center gap-6">
        <Slider.Root
          aria-label="Vertical slider 1"
          defaultValue={[50]}
          maxValue={100}
          orientation="vertical"
          step={1}
        >
          <Slider.Track>
            <Slider.Range />
            <Slider.Thumb />
          </Slider.Track>
        </Slider.Root>

        <Slider.Root
          aria-label="Vertical slider 2"
          defaultValue={[25]}
          maxValue={100}
          orientation="vertical"
          step={1}
        >
          <Slider.Track>
            <Slider.Range />
            <Slider.Thumb />
          </Slider.Track>
        </Slider.Root>
      </div>

      <SliderControlled />
    </div>
  );
}

function SliderControlled() {
  const [value, setValue] = useState([0.3, 0.7]);

  return (
    <Slider.Root
      aria-label="Temperature slider"
      maxValue={1}
      minValue={0}
      onChange={setValue}
      step={0.1}
      value={value}
    >
      <Slider.Header>
        <Label>Temperature</Label>

        <Slider.Output className="text-muted-foreground text-sm">
          {({ state }) =>
            state.values.map((_, i) => state.getThumbValueLabel(i)).join(", ")
          }
        </Slider.Output>
      </Slider.Header>
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb />
      </Slider.Track>
    </Slider.Root>
  );
}
