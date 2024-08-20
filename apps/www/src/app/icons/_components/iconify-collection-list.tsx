"use client";

import { Icon } from "@iconify-icon/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

interface IconifyCollectionListProps {
  prefix: string;
  icons: string[];
}

export function IconifyCollectionList({
  prefix,
  icons,
}: IconifyCollectionListProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: icons.length,
    estimateSize: () => 48,
    getScrollElement: () => parentRef.current,
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: "400px",
        overflow: "auto", // Make it scroll!
      }}
    >
      {/* The large inner element to hold all of the items */}
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {/* Only the visible items in the virtualizer, manually positioned to be in view */}
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <Icon icon={`${prefix}:${icons[virtualItem.index]}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
