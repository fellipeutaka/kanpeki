"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Icons } from "../ui/icons";
import { Popover } from "../ui/popover";
import { Table } from "../ui/table";
import { Code } from "./code";

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

export function PropsTable({ data }: PropsTableProps) {
  return (
    <Card.Root className="mt-5 overflow-hidden">
      <Table.Root aria-label="Component props">
        <Table.Header className="bg-muted">
          <Table.Row>
            <Table.Column isRowHeader>Prop</Table.Column>
            <Table.Column>Type</Table.Column>
            <Table.Column>Default</Table.Column>
          </Table.Row>
        </Table.Header>
        <Table.Body items={data}>
          {(item) => (
            <Table.Row className="last:border-none" id={item.name}>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Code className="text-[#0550AE] dark:text-[#79C0FF]">
                    {item.name}
                  </Code>

                  {item.description && (
                    <Popover.Root>
                      <Button size="icon" variant="ghost" className="size-6">
                        <Icons.Info className="size-4" />
                      </Button>

                      <Popover.Content
                        placement="top"
                        style={{ maxWidth: 350 }}
                        className="text-sm"
                      >
                        {item.description}
                      </Popover.Content>
                    </Popover.Root>
                  )}
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Code>{item.typeSimple}</Code>

                  {item.type && (
                    <Popover.Root>
                      <Button size="icon" variant="ghost" className="size-6">
                        <Icons.Info className="size-4" />
                      </Button>

                      <Popover.Content
                        placement="top"
                        style={{ maxWidth: 350 }}
                        className="text-sm"
                      >
                        <Code className="bg-transparent">{item.type}</Code>
                      </Popover.Content>
                    </Popover.Root>
                  )}
                </div>
              </Table.Cell>
              <Table.Cell>
                {item.default ? (
                  <Code>{item.default}</Code>
                ) : (
                  <Icons.Minus className="size-4 text-muted-fg" />
                )}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Card.Root>
  );
}
