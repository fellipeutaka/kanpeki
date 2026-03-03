import { CodeBlock } from "~/components/mdx/code-block";
import { LanguageIcon } from "~/components/mdx/language-icon";
import { Pre } from "~/components/mdx/pre";
import { ScrollArea } from "~/registry/ui/scroll-area";
import { highlightInlineCode } from "~/utils/highlight-inline-code";

const installCommand =
  "npx shadcn@latest add https://kanpeki.vercel.app/r/button.json";

const codeExample = `import { Button } from "~/components/ui/button"

export function Example() {
  return (
    <Button
      onPress={() => console.log("Pressed!")}
    >
      Click me
    </Button>
  )
}`;

export async function CodeSectionBlocks() {
  const [installHtml, exampleHtml] = await Promise.all([
    highlightInlineCode(installCommand, "bash"),
    highlightInlineCode(codeExample, "tsx"),
  ]);

  return (
    <div className="flex flex-col gap-4">
      {/* Install command */}
      <CodeBlock.Root>
        <CodeBlock.Header>
          <LanguageIcon language="bash" title="bash" />
          <CodeBlock.Title>Terminal</CodeBlock.Title>
          <CodeBlock.CopyButton
            className="static"
            commands={null}
            text={installCommand}
          />
        </CodeBlock.Header>
        <ScrollArea.Root>
          <ScrollArea.Viewport>
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output is safe */}
            <Pre dangerouslySetInnerHTML={{ __html: installHtml }} />
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </CodeBlock.Root>

      {/* Usage example */}
      <CodeBlock.Root>
        <CodeBlock.Header>
          <LanguageIcon language="tsx" title="example.tsx" />
          <CodeBlock.Title>example.tsx</CodeBlock.Title>
          <CodeBlock.CopyButton
            className="static"
            commands={null}
            text={codeExample}
          />
        </CodeBlock.Header>
        <ScrollArea.Root>
          <ScrollArea.Viewport>
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output is safe */}
            <Pre dangerouslySetInnerHTML={{ __html: exampleHtml }} />
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </CodeBlock.Root>
    </div>
  );
}
