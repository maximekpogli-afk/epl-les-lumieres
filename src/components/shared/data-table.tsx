import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Column<T> {
  header: string
  accessor: string | ((row: T) => React.ReactNode)
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
}

export function DataTable<T>({ data, columns, loading }: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-muted-foreground">
        <p>Aucune donnée disponible</p>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, i) => (
              <TableHead key={i}>{col.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIdx) => (
            <TableRow key={rowIdx}>
              {columns.map((col, colIdx) => (
                <TableCell key={colIdx}>
                  {typeof col.accessor === "function"
                    ? col.accessor(row)
                    : (row as Record<string, unknown>)[col.accessor as string] !== undefined
                    ? String((row as Record<string, unknown>)[col.accessor as string])
                    : "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
