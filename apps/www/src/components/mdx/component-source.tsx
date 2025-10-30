import { getRegistryFileMeta, getRegistryItem } from "~/lib/registry";
import { highlightCode } from "~/lib/shiki";
import { ScrollArea } from "~/registry/ui/scroll-area";
import { Tabs } from "~/registry/ui/tabs";
import { CodeBlock } from "./code-block";

interface ComponentSourceProps {
  name: string;
}

export async function ComponentSource({ name }: ComponentSourceProps) {
  const item = await getRegistryItem(name);
  const files = item?.files ?? [];

  if (!(item && files) || files.length === 0) {
    return null;
  }

  if (files.length === 1) {
    const file = files[0];
    const { language } = getRegistryFileMeta(file);

    const code = file.content ?? "";

    return <ComponentCode code={code} language={language} />;
  }

  return (
    <Tabs.Root>
      <Tabs.List>
        {files.map((file) => {
          const { title = name } = getRegistryFileMeta(file);

          return (
            <Tabs.Trigger id={file.path} key={file.path}>
              {title}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
      {files.map((file) => {
        const { language } = getRegistryFileMeta(file);
        const code = file.content ?? "";

        return (
          <Tabs.Content id={file.path} key={file.path}>
            <ComponentCode code={code} language={language} />
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}

interface ComponentCodeProps {
  code: string;
  language?: string;
}

async function ComponentCode({ code, language }: ComponentCodeProps) {
  const highlightedCode = await highlightCode(code, language);

  return (
    <CodeBlock.Root>
      <ScrollArea.Root>
        <CodeBlock.CopyButton commands={null} text={code} />

        <ScrollArea.Viewport className="max-h-160">
          {/*biome-ignore lint/security/noDangerouslySetInnerHtml: This is fine. */}
          <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </CodeBlock.Root>
  );
}
