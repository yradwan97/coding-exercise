import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table"
  
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import { Badge } from "./ui/badge"
import { ReactNode } from "react"
  
  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

  const getBadgeBackgroundColor = (status: string): string => {
    switch (status) {
      case "Failed":
          return "bg-red-500";
      case "Canceled":
          return "bg-red-500";
      case "Succeeded": 
          return "bg-green-400"
      case "Pending": 
          return "bg-yellow-300"
      case "Refunded": 
          return "bg-orange-400"
      case "Disputed": 
          return "bg-orange-400"
      
      default:
        return "bg-pink-700"
    }
  }
  
  
  function formatCell(cell: unknown): ReactNode {
    const value = cell.getValue()
    const column = cell.column.id
    if (value instanceof Date) {
      return value.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    }

    if (typeof value === "string" && !isNaN(Date.parse(value))) {
      const date = new Date(value)
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    }

    if (column && column === "amount") {
      return Intl.NumberFormat("en-US",  {
        style: "currency",
        currency: cell.getContext().row.getVisibleCells()[1].getValue()
      }).format(value)
    }
    
    if (column === "statusDescription") {
      return <Badge className={`${getBadgeBackgroundColor(value)}`} variant={"secondary"}>{value}</Badge>
    }
  
    return value
  }
  
  export default function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
  
    return (
      <div className="rounded-md border">
        <Table className="w-full text-center">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-center font-semibold py-2 px-4"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-gray-50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="text-center py-2 px-4"
                    >
                      {formatCell(cell) as ReactNode}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    )
  }
  