"use client";

import { useEffect, useState } from "react";
import { Card } from "~/registry/ui/card";
import { Carousel, type CarouselApi } from "~/registry/ui/carousel";

export function CarouselApiDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="space-y-2">
      <Carousel.Root className="w-full max-w-sm" setApi={setApi}>
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
            <Carousel.Item key={index}>
              <div className="p-1">
                <Card.Root>
                  <Card.Content className="flex aspect-square items-center justify-center p-6">
                    <span className="font-semibold text-3xl">{index + 1}</span>
                  </Card.Content>
                </Card.Root>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel.Root>
      <div className="py-2 text-center text-muted-foreground text-sm">
        Slide {current} of {count}
      </div>
    </div>
  );
}
