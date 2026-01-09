import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mdxComponents } from "~/components/mdx/mdx-components";
import { source } from "~/lib/source";
import { getLLMText } from "~/utils/get-llm-text";
import { Contribute } from "./_components/contribute";
import { DocsHeader } from "./_components/docs-header";
import { DocsPager } from "./_components/docs-pager";
import { TableOfContents } from "./_components/table-of-contents";

export async function generateMetadata({
  params,
}: PageProps<"/docs/[[...slug]]">): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    return {};
  }

  return {
    description: page.data.description,
    openGraph: {
      description: page.data.description,
      title: page.data.title,
      type: "article",
      url: page.slugs.join("/"),
    },
    title: page.data.title,
  };
}

export function generateStaticParams() {
  return source.generateParams();
}

export default async function Page({ params }: PageProps<"/docs/[[...slug]]">) {
  const { slug } = await params;

  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const [llmText, { body: MDXContent, toc }] = await Promise.all([
    getLLMText(page, { includeSources: true }),
    page.data.load(),
  ]);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsHeader llmText={llmText} page={page} />
        <div className="mdx flex w-full max-w-full flex-col pt-8 pb-12">
          <MDXContent components={mdxComponents} />
        </div>
        <DocsPager url={page.url} />
      </div>
      {toc.length > 0 && (
        <div className="hidden text-sm xl:block">
          <TableOfContents toc={toc}>
            <Contribute path={`docs/${page.path}`} url={page.url} />
          </TableOfContents>
        </div>
      )}
    </main>
  );
}
