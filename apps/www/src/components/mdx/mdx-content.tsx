// biome-ignore lint/style/noNamespaceImport: This is needed for MDX to work
import * as runtime from "react/jsx-runtime";
import { mdxComponents } from "./mdx-components";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return <Component components={mdxComponents} />;
}
