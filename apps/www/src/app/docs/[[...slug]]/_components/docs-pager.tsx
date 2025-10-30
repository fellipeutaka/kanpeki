import { findNeighbour } from "fumadocs-core/page-tree";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { source } from "~/lib/source";
import { LinkButton } from "~/registry/ui/link-button";

interface DocsPagerProps {
  url: string;
}

export function DocsPager({ url }: DocsPagerProps) {
  const neighbours = findNeighbour(source.pageTree, url);

  return (
    <div className="flex flex-row items-center justify-between">
      {neighbours.previous && (
        <LinkButton href={neighbours.previous.url} variant="outline">
          <ChevronLeftIcon className="size-4" />
          {neighbours.previous.name}
        </LinkButton>
      )}
      {neighbours.next && (
        <LinkButton
          className="ml-auto"
          href={neighbours.next.url}
          variant="outline"
        >
          {neighbours.next.name}
          <ChevronRightIcon className="size-4" />
        </LinkButton>
      )}
    </div>
  );
}
