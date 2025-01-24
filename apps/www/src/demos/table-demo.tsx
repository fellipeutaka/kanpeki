"use client";

import { Table } from "~/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
] as const satisfies {
  invoice: string;
  paymentStatus: "Pending" | "Unpaid" | "Paid";
  totalAmount: string;
  paymentMethod: "Credit Card" | "PayPal" | "Bank Transfer";
}[];

export default function TableDemo() {
  return (
    <Table.Root aria-label="Invoices">
      <Table.Header>
        <Table.Column className="w-[100px]" isRowHeader>
          Invoice
        </Table.Column>
        <Table.Column>Status</Table.Column>
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
  );
}
