"use client";

import { Icon } from "@iconify-icon/react";
import { Virtuoso } from "react-virtuoso";

interface IconifyCollectionListProps {
  prefix: string;
  icons: string[];
}

export function IconifyCollectionList({
  prefix,
  icons,
}: IconifyCollectionListProps) {
  return (
    <Virtuoso
      components={{
        List: (props) => <div className="flex flex-wrap gap-4" {...props} />,
      }}
      data={icons}
      itemContent={(_, icon) => <Icon key={icon} icon={`${prefix}:${icon}`} />}
    />
  );
}
