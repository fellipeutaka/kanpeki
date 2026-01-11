"use client";

import { usePathname } from "next/navigation";
import { docsConfig, type NavLink } from "~/config/docs";
import { cva } from "~/registry/lib/cva";
import { Badge } from "~/registry/ui/badge";
import { Link } from "~/registry/ui/link/link";
import { ScrollArea } from "~/registry/ui/scroll-area";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100dvh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea.Root className="py-6 pr-6 lg:py-8">
        <ScrollArea.Viewport scrollFade>
          {docsConfig.sidebarNav.map(({ title, items }) => (
            <div className="mb-4" key={title}>
              <h4 className="mb-1 rounded-md px-2 py-1 font-semibold text-sm">
                {title}
              </h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {items?.map((item) => (
                  <DocsSidebarLink
                    item={item}
                    key={item.href}
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

const SidebarLinkStyles = cva({
  base: [
    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-muted-foreground",
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

/**
 * Determines if a sidebar link should be active based on the current pathname
 *
 * For component routes (/docs/components/*):
 * - Only exact matches are considered active to avoid false positives
 *   (e.g., /docs/components/input shouldn't match /docs/components/input-group)
 *
 * For non-component routes (e.g., /docs/dark-mode):
 * - Matches if pathname starts with href, allowing sub-routes
 *   (e.g., /docs/dark-mode/next matches /docs/dark-mode)
 */
function isLinkActive(pathname: string, href: string): boolean {
  // Check if this is a component route
  const isComponentRoute = href.startsWith("/docs/components/");

  if (isComponentRoute) {
    // For components, require exact match
    return pathname === href;
  }

  // For non-component routes, match if pathname starts with href
  // This allows sub-routes like /docs/dark-mode/next to match /docs/dark-mode
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DocsSidebarLink({ item, pathname }: DocsSidebarLinkProps) {
  if (item.label === "Planned") {
    return null;
  }

  const isActive = isLinkActive(pathname, item.href);

  return (
    <Link
      className={SidebarLinkStyles({ active: isActive })}
      href={item.href}
      isDisabled={item.disabled}
    >
      <span className="underline decoration-transparent transition group-hover:decoration-current">
        {item.title}
      </span>

      {item.label && (
        <Badge className="ml-2 border-none px-1.5 py-0.5 leading-none">
          {item.label}
        </Badge>
      )}
    </Link>
  );
}
