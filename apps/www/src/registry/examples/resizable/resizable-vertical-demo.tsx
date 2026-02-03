import { Resizable } from "~/registry/ui/resizable";

export function ResizableVerticalDemo() {
  return (
    <Resizable.Root
      className="min-h-50 max-w-md rounded-lg border md:min-w-112.5"
      orientation="vertical"
    >
      <Resizable.Panel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </Resizable.Panel>
      <Resizable.Separator />
      <Resizable.Panel defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </Resizable.Panel>
    </Resizable.Root>
  );
}
