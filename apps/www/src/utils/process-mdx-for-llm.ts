import { formatComponentCode } from "./format-component-code";
import { loadComponentCode } from "./load-registry-code";
import { extractComponentReferences } from "./parse-mdx-components";

/**
 * Processes MDX content for LLM consumption by replacing component tags with actual source code.
 *
 * @param rawMDX - Raw MDX content from the documentation
 * @param includeSources - Whether to include component sources
 * @returns Processed MDX with component tags replaced by actual code
 *
 * @example
 * ```ts
 * const mdx = '<ComponentPreview name="accordion-demo" />';
 * const processed = await processMDXForLLM(mdx, true);
 * // Returns MDX with the tag replaced by actual component code
 * ```
 */
export async function processMDXForLLM(
  rawMDX: string,
  includeSources: boolean
): Promise<string> {
  if (!includeSources) {
    return rawMDX;
  }

  // Extract all component references
  const references = extractComponentReferences(rawMDX);

  if (references.length === 0) {
    return rawMDX;
  }

  // Load all component codes in parallel
  const codePromises = references.map((ref) =>
    loadComponentCode(ref.name, ref.type)
  );

  const codes = await Promise.all(codePromises);

  // Replace each reference with formatted code
  let processedMDX = rawMDX;

  for (let i = 0; i < references.length; i++) {
    const ref = references[i];
    const code = codes[i];

    const formattedCode = formatComponentCode(ref.name, code, ref.type);

    // Replace the original tag with formatted code
    processedMDX = processedMDX.replace(ref.match, formattedCode);
  }

  return processedMDX;
}
