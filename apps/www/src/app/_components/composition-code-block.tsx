import { CodeBlock } from "~/components/mdx/code-block";
import { LanguageIcon } from "~/components/mdx/language-icon";
import { Pre } from "~/components/mdx/pre";
import { ScrollArea } from "~/registry/ui/scroll-area";
import { highlightInlineCode } from "~/utils/highlight-inline-code";

const compositionCode = `<Switch.Root>
  <Switch.Track>
    <Switch.Thumb />
  </Switch.Track>
</Switch.Root>`;

export async function CompositionCodeBlock() {
  const html = await highlightInlineCode(compositionCode, "tsx");

  return (
    <CodeBlock.Root className="mt-auto">
      <CodeBlock.Header>
        <LanguageIcon language="tsx" title="dialog.tsx" />
        <CodeBlock.Title>switch.tsx</CodeBlock.Title>
        <CodeBlock.CopyButton
          className="static"
          commands={null}
          text={compositionCode}
        />
      </CodeBlock.Header>
      <ScrollArea.Root>
        <ScrollArea.Viewport>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output is safe */}
          <Pre dangerouslySetInnerHTML={{ __html: html }} />
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </CodeBlock.Root>
  );
}
