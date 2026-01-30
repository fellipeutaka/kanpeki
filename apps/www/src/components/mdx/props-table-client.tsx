/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: This components renders Shiki HTML */
"use client";

import { InfoIcon, MinusIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { Popover } from "~/registry/ui/popover";
import { Table } from "~/registry/ui/table";
import { Code } from "./code";

interface PropsTableClientProps {
  data: {
    name: string;
    nameHtml: string;
    required?: boolean;
    default?: string | boolean;
    defaultHtml?: string;
    type?: string;
    typeHtml?: string;
    typeSimple: string;
    typeSimpleHtml: string;
    description?: string | React.ReactNode;
  }[];
}

export function PropsTableClient({ data }: PropsTableClientProps) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border">
      <Table.Root aria-label="Component props">
        <Table.Header className="bg-muted">
          <Table.Row>
            <Table.Head>Prop</Table.Head>
            <Table.Head>Type</Table.Head>
            <Table.Head>Default</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row className="last:border-none" key={item.name}>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Code dangerouslySetInnerHTML={{ __html: item.nameHtml }} />

                  {item.description && (
                    <Popover.Root>
                      <Button className="size-6" size="icon" variant="ghost">
                        <InfoIcon className="size-4" />
                      </Button>

                      <Popover.Content
                        className="text-sm"
                        placement="top"
                        style={{ maxWidth: 350 }}
                      >
                        {item.description}
                      </Popover.Content>
                    </Popover.Root>
                  )}
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Code
                    dangerouslySetInnerHTML={{ __html: item.typeSimpleHtml }}
                  />

                  {item.type && item.typeHtml && (
                    <Popover.Root>
                      <Button className="size-6" size="icon" variant="ghost">
                        <InfoIcon className="size-4" />
                      </Button>

                      <Popover.Content
                        className="text-sm"
                        placement="top"
                        style={{ maxWidth: 350 }}
                      >
                        <Code
                          className="bg-transparent"
                          dangerouslySetInnerHTML={{ __html: item.typeHtml }}
                        />
                      </Popover.Content>
                    </Popover.Root>
                  )}
                </div>
              </Table.Cell>
              <Table.Cell>
                {item.default && item.defaultHtml ? (
                  <Code
                    dangerouslySetInnerHTML={{ __html: item.defaultHtml }}
                  />
                ) : (
                  <MinusIcon className="size-4 text-muted-foreground" />
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
