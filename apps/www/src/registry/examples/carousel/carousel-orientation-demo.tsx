import { Card } from "~/registry/ui/card";
import { Carousel } from "~/registry/ui/carousel";

export function CarouselOrientationDemo() {
  return (
    <Carousel.Root
      className="w-full max-w-xs"
      opts={{
        align: "start",
      }}
      orientation="vertical"
    >
      <Carousel.Content className="-mt-1 h-50">
        {Array.from({ length: 5 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
          <Carousel.Item className="pt-1 md:basis-1/2" key={index}>
            <div className="p-1">
              <Card.Root>
                <Card.Content className="flex items-center justify-center p-6">
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
  );
}
