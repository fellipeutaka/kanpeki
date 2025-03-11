import { getBreadcrumbItems } from "fumadocs-core/breadcrumb";
import { Fragment } from "react";
import { Breadcrumb } from "~/components/ui/breadcrumb";
import { source } from "~/lib/source";

interface DocsBreadcrumbProps {
  url: string;
}

export function DocsBreadcrumb({ url }: DocsBreadcrumbProps) {
  const items = getBreadcrumbItems(url, source.pageTree);

  return (
    <Breadcrumb.Root className="mb-4 gap-1 sm:gap-1">
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      {items.map((item, index) => {
        const url = item.url ?? "/docs/components";

        return (
          <Fragment key={url}>
            <Breadcrumb.Item>
              {index === items.length - 1 ? (
                <Breadcrumb.Page>{item.name}</Breadcrumb.Page>
              ) : (
                <Breadcrumb.Link href={url}>{item.name}</Breadcrumb.Link>
              )}
            </Breadcrumb.Item>
            {index < items.length - 1 && <Breadcrumb.Separator />}
          </Fragment>
        );
      })}
    </Breadcrumb.Root>
  );
}
