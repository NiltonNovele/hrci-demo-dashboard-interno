import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CriminalRequestsSkeleton() {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="px-4 py-6 text-2xl font-bold text-dark dark:text-white md:px-6 xl:px-9">
        Solicitações de Registo Criminal
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-t text-base [&>th]:py-3 sm:[&>th]:py-4.5">
            <TableHead>Nome do Candidato</TableHead>
            <TableHead>ID do Processo</TableHead>
            <TableHead>Data da Solicitação</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Resumo</TableHead>
            <TableHead>Ação</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell colSpan={6}>
                <Skeleton className="h-8" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
