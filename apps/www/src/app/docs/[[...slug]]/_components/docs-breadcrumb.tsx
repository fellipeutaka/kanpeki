import { getBreadcrumbItems } from "fumadocs-core/breadcrumb";
import { Fragment } from "react";
import { source } from "~/lib/source";
import { Breadcrumb } from "~/registry/ui/breadcrumb";
import { Link } from "~/registry/ui/link";

interface DocsBreadcrumbProps {
  url: string;
}

export function DocsBreadcrumb({ url }: DocsBreadcrumbProps) {
  const items = getBreadcrumbItems(url, source.pageTree, {
    includePage: true,
  });

  return (
    <Breadcrumb.Root className="mb-4 gap-1 sm:gap-1">
      <Breadcrumb.Item>
        <Link href="/docs">Docs</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      {items.map((item, index) => {
        const url = item.url ?? "/docs/components";

        return (
          <Fragment key={url}>
            <Breadcrumb.Item>
              {index === items.length - 1 ? (
                <Link>{item.name}</Link>
              ) : (
                <Link href={url}>{item.name}</Link>
              )}
            </Breadcrumb.Item>
            {index < items.length - 1 && <Breadcrumb.Separator />}
          </Fragment>
        );
      })}
    </Breadcrumb.Root>
  );
}
