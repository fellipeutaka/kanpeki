import { highlightCode } from "./highlight-code";

export async function highlightInlineCode(code: string, lang = "ts") {
  const html = await highlightCode(code, lang);

  // Extract inner content from <pre><code>...</code></pre>
  const match = html.match(CODE_CONTENT_REGEX);
  return match?.[1] ?? escapeHtml(code);
}

const CODE_CONTENT_REGEX = /<code[^>]*>([\s\S]*?)<\/code>/;

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
