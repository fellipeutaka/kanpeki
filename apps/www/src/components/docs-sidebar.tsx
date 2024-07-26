"use client";

import { usePathname } from "next/navigation";
import { sidebarNav } from "~/config/docs";
import { cn } from "~/utils/cn";
import { ScrollArea } from "./ui/scroll-area";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside
      id="docs-sidebar"
      className="-ml-2 fixed top-16 z-30 hidden h-[calc(100dvh-3.5rem)] w-full shrink-0 md:sticky md:block"
    >
      <ScrollArea.Root className="py-6 pr-6 lg:py-8">
        <ScrollArea.Viewport>
          {sidebarNav.map(({ title, items }) => (
            <div key={title} className="pb-4">
              <h4 className="mb-1 rounded-md px-2 py-1 font-semibold text-sm">
                {title}
              </h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    data-active={pathname === item.href}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-muted-foreground",
                      "hover:underline",
                      "data-[active=true]:font-medium data-[active=true]:text-foreground",
                    )}
                  >
                    {item.title}
                  </a>
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
