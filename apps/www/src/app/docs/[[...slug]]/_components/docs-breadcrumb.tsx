import type { Docs as Doc } from "~:content";
import { Breadcrumb } from "@kanpeki/ui/breadcrumb";
import { Fragment } from "react";

interface DocsBreadcrumbProps {
  doc: Doc;
}

export function DocsBreadcrumb({ doc }: DocsBreadcrumbProps) {
  if (doc.title === "Introduction") {
    return null;
  }

  return (
    <Breadcrumb.Root className="mb-4">
      <Breadcrumb.List className="gap-1 sm:gap-1">
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        {doc.slugAsParams
          .split("/")
          .slice(0, -1)
          .map((link) => (
            <Fragment key={link}>
              <Breadcrumb.Item>
                <Breadcrumb.Link className="capitalize" href={`/docs/${link}`}>
                  {link}
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
            </Fragment>
          ))}
        <Breadcrumb.Item>
          <Breadcrumb.Page>{doc.title}</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
