import { ColumnDef } from "@tanstack/react-table";
import type { Transaction } from "@/assets/transactions";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "cardholder",
    header: "Cardholder",
  },
  {
    accessorKey: "statusDescription",
    header: "Status",
  },
  {
    accessorKey: "created",
    header: "Created",
  },
];
