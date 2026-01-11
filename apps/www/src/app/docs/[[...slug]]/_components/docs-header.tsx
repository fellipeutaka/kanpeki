import { ExternalLinkIcon } from "lucide-react";
import { Icons } from "~/components/icons";
import type { source } from "~/lib/source";
import { BadgeStyles } from "~/registry/ui/badge/styles";
import { LinkButton } from "~/registry/ui/link-button";
import { DocsBreadcrumb } from "./docs-breadcrumb";
import { DocsCopyPage } from "./docs-copy-page";

interface DocsHeaderProps {
  page: NonNullable<ReturnType<(typeof source)["getPage"]>>;
  llmText: string;
}

export function DocsHeader({ page, llmText }: DocsHeaderProps) {
  const { data, url } = page;

  return (
    <>
      <DocsBreadcrumb url={url} />
      <div className="grid grid-cols-2 gap-2">
        <h1 className="wrap-break-word scroll-m-20 font-bold text-3xl tracking-tight max-sm:col-span-full">
          {data.title}
        </h1>
        <DocsCopyPage page={llmText} url={url} />
        <p className="col-span-full text-balance text-base text-muted-foreground">
          {data.description}
        </p>
      </div>
      {data.links && (
        <div className="mt-4 flex items-center gap-x-2">
          {data.links?.docs && (
            <LinkButton
              className={BadgeStyles({
                className: "h-auto gap-1.5",
                variant: "secondary",
              })}
              href={data.links.docs}
              rel="noopener noreferrer"
              target="_blank"
            >
              <DocsLinkIcon link={data.links.docs} />
              Docs
              <ExternalLinkIcon className="size-3" />
            </LinkButton>
          )}
          {data.links?.api && (
            <LinkButton
              className={BadgeStyles({
                className: "h-auto gap-1.5",
                variant: "secondary",
              })}
              href={data.links.api}
              rel="noopener noreferrer"
              target="_blank"
            >
              API Reference
              <ExternalLinkIcon className="size-3" />
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
  if (link.startsWith("https://react-aria.adobe.com")) {
    return <Icons.Adobe className="size-3" />;
  }

  if (link.startsWith("https://base-ui.com")) {
    return <Icons.BaseUI className="size-3" />;
  }

  if (link.startsWith("https://ui.shadcn.com")) {
    return <Icons.Shadcn className="size-3" />;
  }

  return null;
}
