import { Separator } from "@kanpeki/ui/separator";

export default function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="font-medium text-sm leading-none">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <p>Blog</p>
        <Separator orientation="vertical" />
        <p>Docs</p>
        <Separator orientation="vertical" />
        <p>Source</p>
      </div>
    </div>
  );
}
