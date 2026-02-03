import { Resizable } from "~/registry/ui/resizable";

export function ResizableHandleDemo() {
  return (
    <Resizable.Root
      className="min-h-50 max-w-md rounded-lg border md:min-w-112.5"
      orientation="horizontal"
    >
      <Resizable.Panel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </Resizable.Panel>
      <Resizable.Separator>
        <Resizable.Handle />
      </Resizable.Separator>
      <Resizable.Panel defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </Resizable.Panel>
    </Resizable.Root>
  );
}
