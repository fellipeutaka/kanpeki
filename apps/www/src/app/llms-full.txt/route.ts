import { source } from "~/lib/source";
import { getLLMText } from "~/utils/get-llm-text";

export const dynamic = "force-static";

export async function GET() {
  const scan = source.getPages().map((page) =>
    getLLMText(page, {
      includeSources: true,
    })
  );
  const scanned = await Promise.all(scan);

  return new Response(scanned.join("\n\n"));
}
