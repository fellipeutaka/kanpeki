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
    paymentStatus: "Paid",
    totalAmount: 250,
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: 150,
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: 350,
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: 450,
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: 550,
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: 200,
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: 300,
    paymentMethod: "Credit Card",
  },
];

const amountFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const formatAmount = (amount: number) => amountFormatter.format(amount);

export default function TableSortingDemo() {
  const list = useAsyncList({
    load: async () => ({
      items: invoices,
    }),
    sort: async ({ items, sortDescriptor }) => {
      return {
        items: items.sort((a, b) => {
          if (sortDescriptor.direction === "ascending") {
            return a.totalAmount - b.totalAmount;
          }

          if (sortDescriptor.direction === "descending") {
            return b.totalAmount - a.totalAmount;
          }

          return 0;
        }),
      };
    },
  });

  return (
    <Card.Root className="w-full">
      <Table.Root
        aria-label="Invoices"
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
      >
        <Table.Header>
          <Table.Column className="w-[100px]" isRowHeader>
            Invoice
          </Table.Column>
          <Table.Column>Status</Table.Column>
          <Table.Column>Method</Table.Column>
          <Table.Column className="group" allowsSorting>
            <div
              className={ButtonStyles({
                variant: "ghost",
                className: "ml-auto flex w-max gap-2",
              })}
            >
              Amount
              <Table.SortIcon className="group-sort-ascending:rotate-180" />
            </div>
          </Table.Column>
        </Table.Header>
        <Table.Body items={list.items}>
          {(invoice) => (
            <Table.Row id={invoice.invoice} className="last:border-b-0">
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
