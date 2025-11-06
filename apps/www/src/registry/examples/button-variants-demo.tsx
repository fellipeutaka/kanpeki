import { Button } from "~/registry/ui/button/button";

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Danger</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
