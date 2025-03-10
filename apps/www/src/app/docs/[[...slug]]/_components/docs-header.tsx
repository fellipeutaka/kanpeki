import { BadgeStyles } from "~/components/ui/badge/styles";
import { LinkButton } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import type { source } from "~/lib/source";
import { DocsBreadcrumb } from "./docs-breadcrumb";

interface DocsHeaderProps {
  page: NonNullable<ReturnType<(typeof source)["getPage"]>>;
}

export function DocsHeader({ page }: DocsHeaderProps) {
  const { data, url } = page;

  return (
    <>
      <DocsBreadcrumb url={url} />
      <div className="space-y-2">
        <h1 className="scroll-m-20 break-words font-bold text-3xl tracking-tight">
          {data.title}
        </h1>
        <p className="text-balance text-base text-muted-fg">
          {data.description}
        </p>
      </div>
      {data.links && (
        <div className="mt-4 flex items-center gap-x-2">
          {data.links?.docs && (
            <LinkButton
              href={data.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className={BadgeStyles({
                variant: "secondary",
                className: "h-auto gap-1.5",
              })}
            >
              <DocsLinkIcon link={data.links.docs} />
              Docs
              <Icons.ExternalLink className="size-3" />
            </LinkButton>
          )}
          {data.links?.api && (
            <LinkButton
              href={data.links.api}
              target="_blank"
              rel="noopener noreferrer"
              className={BadgeStyles({
                variant: "secondary",
                className: "h-auto gap-1.5",
              })}
            >
              API Reference
              <Icons.ExternalLink className="size-3" />
            </LinkButton>
          )}
        </div>
      )}
    </>
  );
}

interface DocsLinkIconProps {
  link: string;
}

function DocsLinkIcon({ link }: DocsLinkIconProps) {
  if (link.startsWith("https://react-spectrum.adobe.com")) {
    return <Icons.Adobe className="size-3" />;
  }

  if (link.startsWith("https://www.radix-ui.com")) {
    return <Icons.RadixUI className="size-3" />;
  }

  return null;
}
