"use client";

import type { TableOfContents } from "fumadocs-core/toc";
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
      <ul className="space-y-2" ref={viewRef}>
        {tree.map((item) => (
          <li className="space-y-2" key={item.url}>
            <TOCItem
              className={cx(
                "inline-block text-muted-fg text-sm leading-[1.2] no-underline transition-colors",
                "hover:text-fg",
                "data-[active=true]:font-medium data-[active=true]:text-fg",
                "pl-[calc(var(--indent)-2rem)]"
              )}
              href={item.url}
              style={
                {
                  "--indent": `${item.depth}rem`,
                } as React.CSSProperties
              }
            >
              {item.title}
            </TOCItem>
          </li>
        ))}
      </ul>
    </ScrollProvider>
  );
}
