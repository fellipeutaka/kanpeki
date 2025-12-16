import { Card } from "~/registry/ui/card";
import { Carousel } from "~/registry/ui/carousel";

export function CarouselDemo() {
  return (
    <div className="@4xl:flex hidden w-full flex-col items-center gap-4">
      <Carousel.Root className="max-w-sm *:data-[slot=carousel.-next]:hidden *:data-[slot=carousel.-previous]:hidden *:data-[slot=carousel.-next]:md:inline-flex *:data-[slot=carousel.-previous]:md:inline-flex">
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

      <Carousel.Root
        className="max-w-sm *:data-[slot=carousel.-next]:hidden *:data-[slot=carousel.-previous]:hidden *:data-[slot=carousel.-next]:md:inline-flex *:data-[slot=carousel.-previous]:md:inline-flex"
        opts={{
          align: "start",
        }}
      >
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
            <Carousel.Item className="md:basis-1/2 lg:basis-1/3" key={index}>
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

      <Carousel.Root className="max-w-sm *:data-[slot=carousel.-next]:hidden *:data-[slot=carousel.-previous]:hidden *:data-[slot=carousel.-next]:md:inline-flex *:data-[slot=carousel.-previous]:md:inline-flex">
        <Carousel.Content className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
            <Carousel.Item className="pl-1 md:basis-1/2" key={index}>
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
    </div>
  );
}
