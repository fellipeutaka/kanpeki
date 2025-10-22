import { lazy, Suspense } from "react";
import { Spinner } from "../ui/spinner/spinner";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "../ui/tabs";
import { CopyButton } from "./copy-button";

interface ComponentPreviewChildren {
  "data-rehype-pretty-code-figure"?: string;
  children?: React.ReactElement<{
    children?: React.ReactElement<{ text: string }>[];
  }>;
}

interface ComponentPreviewProps {
  name: string;
  children: React.ReactElement<ComponentPreviewChildren>;
}

function getCodeString(children: React.ReactElement<ComponentPreviewChildren>) {
  try {
    if (typeof children.props["data-rehype-pretty-code-figure"] === "string") {
      return children.props?.children?.props.children?.[0]?.props.text ?? "";
    }

    return "";
  } catch {
    return "";
  }
}

export function ComponentPreview({ children, name }: ComponentPreviewProps) {
  const Preview = lazy(() => import(`~/demos/${name}`));

  return (
    <TabsRoot className="mt-6" defaultSelectedKey="preview" variant="underline">
      <TabsList className="mb-3 orientation-horizontal:gap-x-0">
        <TabsTrigger className="px-4" id="preview">
          Preview
        </TabsTrigger>
        <TabsTrigger className="px-4" id="code">
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent id="preview">
        <div className="group rounded-md border">
          <CopyButton
            className="m-4 ml-auto flex"
            text={getCodeString(children)}
          />
          <div className="grid min-h-80 w-full max-w-full place-items-center p-10">
            <Suspense fallback={<Spinner className="size-5" />}>
              <Preview />
            </Suspense>
          </div>
        </div>
      </TabsContent>
      <TabsContent className="*:data-[figure=code]:mt-0" id="code">
        {children}
      </TabsContent>
    </TabsRoot>
  );
}
