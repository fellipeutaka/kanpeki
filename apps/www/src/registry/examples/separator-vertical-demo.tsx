import { Separator } from "~/registry/ui/separator";

export function SeparatorVerticalDemo() {
  return (
    <main className="grid size-full place-content-center">
      <div className="flex items-center gap-6">
        <h1 className="font-medium text-2xl">404</h1>
        <Separator orientation="vertical" />
        <h2 className="text-sm">This page could not be found.</h2>
      </div>
    </main>
  );
}
