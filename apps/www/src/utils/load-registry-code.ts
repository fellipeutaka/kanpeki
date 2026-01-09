import { getRegistryItem } from "~/lib/registry";

export interface ComponentCode {
  preview?: string;
  source?: string;
  error?: string;
  files?: Array<{ path: string; content: string }>;
}

/**
 * Loads component code from the registry based on component name and type.
 *
 * @param name - Component name (e.g., "accordion-demo" or "accordion")
 * @param type - Type of code to load ("preview" for examples, "source" for implementation)
 * @returns Component code with preview/source content or error message
 *
 * @example
 * ```ts
 * const code = await loadComponentCode("accordion-demo", "preview");
 * // Returns: { preview: "import { Accordion } from ...", files: [...] }
 * ```
 */
export async function loadComponentCode(
  name: string,
  type: "preview" | "source"
): Promise<ComponentCode> {
  try {
    // For preview type, use the name directly (e.g., "accordion-demo")
    // For source type, extract the component name (e.g., "accordion-demo" -> "accordion")
    const registryName = type === "source" ? extractComponentName(name) : name;

    const item = await getRegistryItem(registryName);

    if (!item) {
      return {
        error: `Component '${registryName}' not found in registry`,
      };
    }

    const files = item.files ?? [];

    if (files.length === 0) {
      return {
        error: `No files found for component '${registryName}'`,
      };
    }

    // Combine all file contents
    const combinedContent = files
      .map((file) => {
        const content = file.content ?? "";
        if (files.length > 1) {
          // Add file header for multi-file components
          return `// File: ${file.path}\n\n${content}`;
        }
        return content;
      })
      .join("\n\n");

    return {
      [type]: combinedContent,
      files: files.map((file) => ({
        path: file.path,
        content: file.content ?? "",
      })),
    };
  } catch (error) {
    return {
      error: `Failed to load component '${name}': ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
}

// Regex patterns for extracting component names
const DEMO_SUFFIX_PATTERN = /-demo$/;
const EXAMPLE_SUFFIX_PATTERN = /-example$/;
const WITH_SUFFIX_PATTERN = /-with-.*$/;

/**
 * Extracts the base component name from a demo/example name.
 * Examples:
 * - "accordion-demo" -> "accordion"
 * - "button-with-icon" -> "button"
 * - "input-group-example" -> "input-group"
 */
function extractComponentName(name: string): string {
  // Remove common suffixes
  return name
    .replace(DEMO_SUFFIX_PATTERN, "")
    .replace(EXAMPLE_SUFFIX_PATTERN, "")
    .replace(WITH_SUFFIX_PATTERN, "");
}
