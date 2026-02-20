export interface ComponentReference {
  match: string;
  name: string;
  type: "preview" | "source";
}

/**
 * Extracts component references from MDX content.
 * Finds <ComponentPreview /> and <ComponentSource /> tags and extracts their name props.
 *
 * @param mdx - Raw MDX content
 * @returns Array of component references with type, name, and original match string
 *
 * @example
 * ```ts
 * const refs = extractComponentReferences('<ComponentPreview name="accordion-demo" />');
 * // Returns: [{ type: 'preview', name: 'accordion-demo', match: '<ComponentPreview name="accordion-demo" />' }]
 * ```
 */
export function extractComponentReferences(mdx: string): ComponentReference[] {
  const references: ComponentReference[] = [];

  // Pattern for ComponentPreview tags
  const previewPattern = /<ComponentPreview\s+name=["']([^"']+)["']\s*\/?\s*>/g;

  // Pattern for ComponentSource tags
  const sourcePattern = /<ComponentSource\s+name=["']([^"']+)["']\s*\/?\s*>/g;

  // Extract preview references
  for (const match of mdx.matchAll(previewPattern)) {
    references.push({
      type: "preview",
      name: match[1],
      match: match[0],
    });
  }

  // Extract source references
  for (const match of mdx.matchAll(sourcePattern)) {
    references.push({
      type: "source",
      name: match[1],
      match: match[0],
    });
  }

  return references;
}
