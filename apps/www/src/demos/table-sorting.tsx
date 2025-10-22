"use client";

import { useAsyncList } from "@react-stately/data";
import { ButtonStyles } from "~/components/ui/button/styles";
import { Card } from "~/components/ui/card";
import { Table } from "~/components/ui/table";

const invoices: {
  invoice: string;
  paymentStatus: "Pending" | "Unpaid" | "Paid";
  totalAmount: number;
  paymentMethod: "Credit Card" | "PayPal" | "Bank Transfer";
}[] = [
  {
    invoice: "INV001",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    totalAmount: 250,
  },
  {
    invoice: "INV002",
    paymentMethod: "PayPal",
    paymentStatus: "Pending",
    totalAmount: 150,
  },
  {
    invoice: "INV003",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Unpaid",
    totalAmount: 350,
  },
  {
    invoice: "INV004",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    totalAmount: 450,
  },
  {
    invoice: "INV005",
    paymentMethod: "PayPal",
    paymentStatus: "Paid",
    totalAmount: 550,
  },
  {
    invoice: "INV006",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Pending",
    totalAmount: 200,
  },
  {
    invoice: "INV007",
    paymentMethod: "Credit Card",
    paymentStatus: "Unpaid",
    totalAmount: 300,
  },
];

const amountFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});
const formatAmount = (amount: number) => amountFormatter.format(amount);

export default function TableSortingDemo() {
  const list = useAsyncList({
    load: async () => ({
      items: invoices,
    }),
    sort: async ({ items, sortDescriptor }) => ({
      items: items.sort((a, b) => {
        if (sortDescriptor.direction === "ascending") {
          return a.totalAmount - b.totalAmount;
        }

        if (sortDescriptor.direction === "descending") {
          return b.totalAmount - a.totalAmount;
        }

        return 0;
      }),
    }),
  });

  return (
    <Card.Root className="w-full">
      <Table.Root
        aria-label="Invoices"
        onSortChange={list.sort}
        sortDescriptor={list.sortDescriptor}
      >
        <Table.Header>
          <Table.Column className="w-[100px]" isRowHeader>
            Invoice
          </Table.Column>
          <Table.Column>Status</Table.Column>
          <Table.Column>Method</Table.Column>
          <Table.Column allowsSorting className="group">
            <div
              className={ButtonStyles({
                className: "ml-auto flex w-max gap-2",
                variant: "ghost",
              })}
            >
              Amount
              <Table.SortIcon className="group-sort-ascending:rotate-180" />
            </div>
          </Table.Column>
        </Table.Header>
        <Table.Body items={list.items}>
          {(invoice) => (
            <Table.Row className="last:border-b-0" id={invoice.invoice}>
              <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
              <Table.Cell>{invoice.paymentStatus}</Table.Cell>
              <Table.Cell>{invoice.paymentMethod}</Table.Cell>
              <Table.Cell className="text-right">
                {formatAmount(invoice.totalAmount)}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Card.Root>
  );
}
