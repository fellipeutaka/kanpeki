import { ScrollArea } from "~/registry/ui/scroll-area";

const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
] as const satisfies {
  artist: string;
  art: string;
}[];

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea.Root>
      <ScrollArea.Viewport className="w-96 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {works.map((artwork) => (
            <figure className="shrink-0" key={artwork.artist}>
              <div className="overflow-hidden rounded-md">
                <img
                  alt={`Art by ${artwork.artist}`}
                  className="aspect-3/4 h-fit w-fit object-cover"
                  height={400}
                  src={artwork.art}
                  width={300}
                />
              </div>
              <figcaption className="pt-2 text-muted-fg text-xs">
                Photo by{" "}
                <span className="font-semibold text-fg">{artwork.artist}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
