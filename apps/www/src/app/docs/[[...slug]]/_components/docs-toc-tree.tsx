"use client";

import type { TableOfContents } from "fumadocs-core/server";
import { ScrollProvider, TOCItem } from "fumadocs-core/toc";
import { useRef } from "react";
import { cx } from "~/lib/cva";

interface DocsTocTreeProps {
  tree: TableOfContents;
}

export function DocsTocTree({ tree }: DocsTocTreeProps) {
  const viewRef = useRef<HTMLUListElement>(null);

  return (
    <ScrollProvider containerRef={viewRef}>
      <ul ref={viewRef} className="space-y-2">
        {tree.map((item) => (
          <li key={item.url} className="space-y-2">
            <TOCItem
              href={item.url}
              style={
                {
                  "--indent": `${item.depth}rem`,
                } as React.CSSProperties
              }
              className={cx(
                "inline-block text-muted-fg text-sm leading-[1.2] no-underline transition-colors",
                "hover:text-fg",
                "data-[active=true]:font-medium data-[active=true]:text-fg",
                "pl-[calc(var(--indent)-2rem)]"
              )}
            >
              {item.title}
            </TOCItem>
          </li>
        ))}
      </ul>
    </ScrollProvider>
  );
}
