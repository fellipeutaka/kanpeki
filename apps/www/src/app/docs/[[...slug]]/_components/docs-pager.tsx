import type { Docs as Doc } from "~:content";
import { Icons } from "~/components/ui/icons";
import { LinkButton } from "~/components/ui/link-button";
import { type SidebarNavItem, docsConfig } from "~/config/docs";

function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex((link) => {
    return `/${doc.slug}` === link?.href;
  });
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;

  return {
    prev,
    next,
  };
}

function flatten(links: SidebarNavItem[]): SidebarNavItem[] {
  return links.reduce<SidebarNavItem[]>((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}

interface DocsPagerProps {
  doc: Doc;
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <LinkButton href={pager.prev.href} variant="outline">
          <Icons.ChevronLeft className="mr-2 size-4" />
          {pager.prev.title}
        </LinkButton>
      )}
      {pager?.next?.href && (
        <LinkButton
          href={pager.next.href}
          variant="outline"
          className="ml-auto"
        >
          {pager.next.title}
          <Icons.ChevronRight className="ml-2 size-4" />
        </LinkButton>
      )}
    </div>
  );
}
