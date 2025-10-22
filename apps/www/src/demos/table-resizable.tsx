"use client";

import { Card } from "~/components/ui/card";
import { Table } from "~/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
  },
  {
    invoice: "INV002",
    paymentMethod: "PayPal",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
  },
  {
    invoice: "INV003",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
  },
  {
    invoice: "INV004",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
  },
  {
    invoice: "INV005",
    paymentMethod: "PayPal",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
  },
  {
    invoice: "INV006",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
  },
  {
    invoice: "INV007",
    paymentMethod: "Credit Card",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
  },
] as const satisfies {
  invoice: string;
  paymentStatus: "Pending" | "Unpaid" | "Paid";
  totalAmount: string;
  paymentMethod: "Credit Card" | "PayPal" | "Bank Transfer";
}[];

export default function TableResizableDemo() {
  return (
    <Card.Root className="w-full max-w-full overflow-hidden">
      <Table.Root allowResize aria-label="Invoices">
        <Table.Header>
          <Table.Column isResizable isRowHeader maxWidth={180}>
            Invoice
            <Table.ColumnResizer />
          </Table.Column>
          <Table.Column isResizable maxWidth={120}>
            Status <Table.ColumnResizer />
          </Table.Column>
          <Table.Column>Method</Table.Column>
          <Table.Column className="text-right">Amount</Table.Column>
        </Table.Header>
        <Table.Body items={invoices}>
          {(invoice) => (
            <Table.Row id={invoice.invoice}>
              <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
              <Table.Cell>{invoice.paymentStatus}</Table.Cell>
              <Table.Cell>{invoice.paymentMethod}</Table.Cell>
              <Table.Cell className="text-right">
                {invoice.totalAmount}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Card.Root>
  );
}
