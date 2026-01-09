import type { InferPageType } from "fumadocs-core/source";
import type { source } from "~/lib/source";
import { processMDXForLLM } from "./process-mdx-for-llm";

export interface GetLLMTextOptions {
  /**
   * Whether to include component source code from the registry.
   * When enabled, replaces <ComponentPreview /> and <ComponentSource /> tags
   * with actual implementation code.
   *
   * @default false
   */
  includeSources?: boolean;
}

/**
 * Generates LLM-optimized text from a documentation page.
 *
 * @param page - Fumadocs page object
 * @param options - Configuration options
 * @returns Formatted text suitable for LLM consumption
 *
 * @example
 * ```ts
 * // Without sources (default)
 * const text = await getLLMText(page);
 *
 * // With component sources included
 * const textWithSources = await getLLMText(page, { includeSources: true });
 * ```
 */
export async function getLLMText(
  page: InferPageType<typeof source>,
  options: GetLLMTextOptions = {}
) {
  const raw = await page.data.getText("raw");

  const processedContent = options.includeSources
    ? await processMDXForLLM(raw, true)
    : raw;

  // console.info({
  //   page: page.url,
  //   includedSources: options.includeSources,
  //   originalLength: raw.length,
  //   processedLength: processedContent.length,
  // });

  return `# ${page.data.title} (${page.url})

${processedContent}`;
}
