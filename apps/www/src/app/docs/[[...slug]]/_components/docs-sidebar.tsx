"use client";

import { Badge } from "@kanpeki/ui/badge";
import { ScrollArea } from "@kanpeki/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tv } from "tailwind-variants";
import { type NavLink, docsConfig } from "~/config/docs";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-2 fixed top-14 z-30 hidden h-[calc(100dvh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea.Root className="h-full py-6 pr-6 [mask-image:linear-gradient(black_80%,transparent)] lg:py-8">
        <ScrollArea.Viewport>
          {docsConfig.sidebarNav.map(({ title, items }) => (
            <div key={title} className="mb-4">
              <h4 className="mb-1 rounded-md px-2 py-1 font-semibold text-sm">
                {title}
              </h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {items?.map((item) => (
                  <DocsSidebarLink
                    key={item.href}
                    item={item}
                    pathname={pathname}
                  />
                ))}
              </div>
            </div>
          ))}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </aside>
  );
}

const SidebarLinkStyles = tv({
  base: [
    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-muted-foreground",
    "hover:underline",
    "aria-disabled:cursor-not-allowed aria-disabled:select-none aria-disabled:opacity-50",
  ],
  variants: {
    active: {
      true: ["font-medium text-foreground"],
    },
  },
});

interface DocsSidebarLinkProps {
  item: NavLink;
  pathname: string;
}

function DocsSidebarLink({ item, pathname }: DocsSidebarLinkProps) {
  if (item.label === "Planned") {
    return null;
  }

  if (item.disabled) {
    return (
      <span aria-disabled className={SidebarLinkStyles()}>
        {item.title}

        {item.label && (
          <Badge
            variant="secondary"
            className="ml-2 border-none px-1.5 py-0.5 text-muted-foreground leading-none"
          >
            {item.label}
          </Badge>
        )}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      className={SidebarLinkStyles({ active: pathname.includes(item.href) })}
    >
      {item.title}

      {item.label && (
        <Badge className="ml-2 border-none px-1.5 py-0.5 leading-none">
          {item.label}
        </Badge>
      )}
    </Link>
  );
}
