import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mdxComponents } from "~/components/mdx/mdx-components";
import { source } from "~/lib/source";
import { Contribute } from "./_components/contribute";
import { DocsHeader } from "./_components/docs-header";
import { DocsPager } from "./_components/docs-pager";
import { TableOfContents } from "./_components/table-of-contents";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
      url: page.slugs.join("/"),
    },
  };
}

export function generateStaticParams() {
  return source.generateParams();
}

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const { body: MDXContent, toc } = await page.data.load();

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsHeader page={page} />
        <div className="mdx flex w-full max-w-full flex-col pt-8 pb-12">
          <MDXContent components={mdxComponents} />
        </div>
        <DocsPager url={page.url} />
      </div>
      {toc.length > 0 && (
        <div className="hidden text-sm xl:block">
          <TableOfContents toc={toc}>
            <Contribute url={page.url} path={`docs/${page.file.path}`} />
          </TableOfContents>
        </div>
      )}
    </main>
  );
}
