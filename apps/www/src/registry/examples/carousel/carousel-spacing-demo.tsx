import { Card } from "~/registry/ui/card";
import { Carousel } from "~/registry/ui/carousel";

export function CarouselSpacingDemo() {
  return (
    <Carousel.Root className="w-full max-w-sm">
      <Carousel.Content className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
          <Carousel.Item className="pl-1 md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="p-1">
              <Card.Root>
                <Card.Content className="flex aspect-square items-center justify-center p-6">
                  <span className="font-semibold text-2xl">{index + 1}</span>
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
