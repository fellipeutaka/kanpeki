import { notFound } from "next/navigation";
import { source } from "~/lib/source";
import { getLLMText } from "~/utils/get-llm-text";

export const dynamic = "force-static";

export async function GET(
  _req: Request,
  { params }: RouteContext<"/docs/llms.mdx/[[...slug]]">
) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) {
    notFound();
  }

  return new Response(await getLLMText(page), {
    headers: {
      "Content-Type": "text/markdown",
    },
  });
}

export function generateStaticParams() {
  return source.generateParams();
}
