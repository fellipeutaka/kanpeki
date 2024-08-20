import { ScrollArea } from "@kanpeki/ui/scroll-area";
import { Separator } from "@kanpeki/ui/separator";
import { Fragment } from "react";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea.Root>
      <ScrollArea.Viewport className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 font-medium text-sm leading-none">Tags</h4>
          {tags.map((tag) => (
            <Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </Fragment>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
