import { ArrowRightIcon, Loader2Icon, SendIcon } from "lucide-react";

import { Button } from "~/registry/ui/button/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>Button</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Danger</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">
          <SendIcon /> Send
        </Button>
        <Button variant="outline">
          Learn More <ArrowRightIcon />
        </Button>
        <Button isPending variant="outline">
          <Loader2Icon className="animate-spin" />
          Please wait
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button size="sm">Small</Button>
        <Button size="sm" variant="outline">
          Outline
        </Button>
        <Button size="sm" variant="ghost">
          Ghost
        </Button>
        <Button size="sm" variant="destructive">
          Danger
        </Button>
        <Button size="sm" variant="secondary">
          Secondary
        </Button>
        <Button size="sm" variant="link">
          Link
        </Button>
        <Button size="sm" variant="outline">
          <SendIcon /> Send
        </Button>
        <Button size="sm" variant="outline">
          Learn More <ArrowRightIcon />
        </Button>
        <Button isPending size="sm" variant="outline">
          <Loader2Icon className="animate-spin" />
          Please wait
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button size="lg">Large</Button>
        <Button size="lg" variant="outline">
          Outline
        </Button>
        <Button size="lg" variant="ghost">
          Ghost
        </Button>
        <Button size="lg" variant="destructive">
          Danger
        </Button>
        <Button size="lg" variant="secondary">
          Secondary
        </Button>
        <Button size="lg" variant="link">
          Link
        </Button>
        <Button size="lg" variant="outline">
          <SendIcon /> Send
        </Button>
        <Button size="lg" variant="outline">
          Learn More <ArrowRightIcon />
        </Button>
        <Button isPending size="lg" variant="outline">
          <Loader2Icon className="animate-spin" />
          Please wait
        </Button>
      </div>
    </div>
  );
}
