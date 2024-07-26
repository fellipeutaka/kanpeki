import { type SidebarNav, sidebarNav } from "~/config/docs";
import { cn } from "~/utils/cn";
import { ScrollArea } from "./ui/scroll-area";

interface DocsSidebarNavProps {
  url: URL;
}

export function DocsSidebarNav({ url }: DocsSidebarNavProps) {
  const pathname = url.pathname;

  return (
    <ScrollArea.Root className="py-6 pr-6 lg:py-8">
      <ScrollArea.Viewport>
        {sidebarNav.map(({ title, items }) => (
          <div key={title} className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 font-semibold text-sm">
              {title}
            </h4>
            <SidebarItem items={items} pathname={pathname} />
          </div>
        ))}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

interface SidebarItemProps {
  items: SidebarNav[number]["items"];
  pathname: string;
}

function SidebarItem({ items, pathname }: SidebarItemProps) {
  return (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          data-active={pathname === item.href}
          className={cn(
            "group flex w-full items-center rounded-md border border-transparent px-2 py-1 font-medium text-foreground",
            "data-[active=false]:text-muted-foreground",
            "hover:underline",
          )}
        >
          {item.title}
          {item.label && (
            <span
              className={cn(
                "ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-[#000000] text-xs leading-none no-underline",
                "group-hover:no-underline",
              )}
            >
              {item.label}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
