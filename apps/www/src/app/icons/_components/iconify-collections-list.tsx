"use client";

import { Icon } from "@iconify-icon/react";
import { Card } from "@kanpeki/ui/card";
import Link from "next/link";
import type { getCollectionsGroupedByCategory } from "~/lib/iconify";

interface IconifyCollectionsListProps {
  collections: ReturnType<typeof getCollectionsGroupedByCategory>;
}

export function IconifyCollectionsList({
  collections,
}: IconifyCollectionsListProps) {
  return collections.map((group) => (
    <section key={group.category} className="my-24 space-y-2">
      <h2 className="scroll-m-20 font-semibold text-xl tracking-tight">
        {group.category}
      </h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {group.collections.map((value) => (
          <Link
            key={value.name}
            href={`/icons/${value.name}`}
            className="group"
          >
            <Card.Root className="relative transition group-hover:border-primary">
              <Card.Header>
                <Card.Title>{value.displayName}</Card.Title>
              </Card.Header>
              <Card.Content>
                <Card.Description>{value.author.name}</Card.Description>
                <Card.Description>{value.license.title}</Card.Description>
                <Card.Description>{value.total} icons</Card.Description>
              </Card.Content>
              <div className="absolute top-0 right-0 grid h-24 grid-cols-3 gap-4 p-6">
                {value.samples.map((sample) => (
                  <Icon key={sample} icon={`${value.name}:${sample}`} />
                ))}
              </div>
            </Card.Root>
          </Link>
        ))}
      </div>
    </section>
  ));
}
