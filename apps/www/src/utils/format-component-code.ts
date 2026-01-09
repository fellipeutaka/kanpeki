import type { ComponentCode } from "./load-registry-code";

/**
 * Formats component code into a markdown section for LLM consumption.
 *
 * @param componentName - Name of the component
 * @param code - Component code loaded from registry
 * @param type - Type of code ("preview" or "source")
 * @returns Formatted markdown string
 *
 * @example
 * ```ts
 * const formatted = formatComponentCode("accordion-demo", { preview: "..." }, "preview");
 * // Returns:
 * // ## Component Preview: accordion-demo
 * //
 * // ```tsx
 * // [code here]
 * // ```
 * ```
 */
export function formatComponentCode(
  componentName: string,
  code: ComponentCode,
  type: "preview" | "source"
): string {
  // Handle errors
  if (code.error) {
    return `## Component ${type === "preview" ? "Preview" : "Source"}: ${componentName}

> ⚠️ ${code.error}
`;
  }

  const content = type === "preview" ? code.preview : code.source;

  if (!content) {
    return `## Component ${type === "preview" ? "Preview" : "Source"}: ${componentName}

> ⚠️ No content available
`;
  }

  const heading =
    type === "preview"
      ? `## Component Preview: ${componentName}`
      : `## Component Source: ${componentName}`;

  return `${heading}

\`\`\`tsx
${content.trim()}
\`\`\`
`;
}
