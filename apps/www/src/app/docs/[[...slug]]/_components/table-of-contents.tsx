"use client";

import type { Docs } from "~:content";
import { useActiveItem } from "@kanpeki/hooks/use-active-item";
import { cn } from "@kanpeki/utils/cn";

interface TableOfContentsProps {
  toc: Docs["toc"];
  itemIds: string[];
}

export function TableOfContents({ toc, itemIds }: TableOfContentsProps) {
  console.log(JSON.stringify(itemIds));

  const activeHeading = useActiveItem(itemIds);

  return (
    <div className="-mt-10 sticky top-16 space-y-4 pt-4">
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  );
}

interface TreeProps {
  tree: Docs["toc"];
  level?: number;
  activeItem: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  if (level > 3) {
    return null;
  }

  return (
    <ul className={cn("space-y-2", { "pl-4": level !== 1 })}>
      {tree.map((item) => (
        <li key={item.url} className="space-y-2">
          <a
            href={item.url}
            className={cn(
              "inline-block no-underline transition-colors hover:text-foreground",
              item.url === `#${activeItem}`
                ? "font-medium text-foreground"
                : "text-muted-foreground",
            )}
          >
            {item.title}
          </a>
          {item.items?.length > 0 && (
            <Tree tree={item.items} level={level + 1} activeItem={activeItem} />
          )}
        </li>
      ))}
    </ul>
  );
}
