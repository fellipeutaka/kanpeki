import { highlightInlineCode } from "~/utils/highlight-inline-code";
import { PropsTableClient } from "./props-table-client";

interface PropsTableProps {
  data: {
    name: string;
    required?: boolean;
    default?: string | boolean;
    type?: string;
    typeSimple: string;
    description?: string | React.ReactNode;
  }[];
}

export async function PropsTable({ data }: PropsTableProps) {
  const highlightedData = await Promise.all(
    data.map(async (item) => ({
      ...item,
      nameHtml: await highlightInlineCode(item.name),
      typeSimpleHtml: await highlightInlineCode(item.typeSimple),
      typeHtml: item.type ? await highlightInlineCode(item.type) : undefined,
      defaultHtml: item.default
        ? await highlightInlineCode(String(item.default))
        : undefined,
    }))
  );

  return <PropsTableClient data={highlightedData} />;
}
