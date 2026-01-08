"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Card } from "~/registry/ui/card";
import { Carousel } from "~/registry/ui/carousel";

export function CarouselPluginDemo() {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel.Root
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <Carousel.Content>
        {Array.from({ length: 5 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
          <Carousel.Item key={index}>
            <div className="p-1">
              <Card.Root>
                <Card.Content className="flex aspect-square items-center justify-center p-6">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </Card.Content>
              </Card.Root>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
  );
}
