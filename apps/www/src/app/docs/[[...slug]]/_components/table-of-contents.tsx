"use client";

import { useActiveItem } from "~/hooks/use-active-item";
import { cx } from "~/lib/cva";
import type { TocEntry } from "~/utils/mdx";

interface TableOfContentsProps {
  toc: TocEntry[];
  itemIds: string[];
  children?: React.ReactNode;
}

export function TableOfContents({
  toc,
  itemIds,
  children,
}: TableOfContentsProps) {
  const activeHeading = useActiveItem(itemIds);

  return (
    <div className="-mt-10 sticky top-16 space-y-4 pt-4">
      <p className="font-medium text-sm">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />

      {children}
    </div>
  );
}

interface TreeProps {
  tree: TocEntry[];
  level?: number;
  activeItem: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  if (level > 3) {
    return null;
  }

  return (
    <ul className={cx("space-y-2", { "pl-4": level !== 1 })}>
      {tree.map((item) => (
        <li key={item.url} className="space-y-2">
          <a
            href={item.url}
            className={cx(
              "inline-block text-sm leading-[1.2] no-underline transition-colors hover:text-fg",
              item.url === `#${activeItem}`
                ? "font-medium text-fg"
                : "text-muted-fg"
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
