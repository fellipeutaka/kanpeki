import { Card } from "~/registry/ui/card";
import { Skeleton } from "~/registry/ui/skeleton";

export function SkeletonCard() {
  return (
    <Card.Root className="@md:w-auto w-full @md:min-w-sm">
      <Card.Header>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </Card.Header>
      <Card.Content>
        <Skeleton className="aspect-square w-full" />
      </Card.Content>
    </Card.Root>
  );
}
