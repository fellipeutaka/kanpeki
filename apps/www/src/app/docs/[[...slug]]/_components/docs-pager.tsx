import { findNeighbour } from "fumadocs-core/page-tree";
import { LinkButton } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { source } from "~/lib/source";

interface DocsPagerProps {
  url: string;
}

export function DocsPager({ url }: DocsPagerProps) {
  const neighbours = findNeighbour(source.pageTree, url);

  return (
    <div className="flex flex-row items-center justify-between">
      {neighbours.previous && (
        <LinkButton href={neighbours.previous.url} variant="outline">
          <Icons.ChevronLeft className="mr-2 size-4" />
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
          <Icons.ChevronRight className="ml-2 size-4" />
        </LinkButton>
      )}
    </div>
  );
}
