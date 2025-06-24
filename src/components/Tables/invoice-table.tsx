import { TrashIcon } from "@/assets/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getBackgroundCheckRequests } from "./fetch";
import { DownloadIcon, PreviewIcon } from "./icons";

export async function BackgroundCheckTable() {
  const data = await getBackgroundCheckRequests();

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">
        Solicitações de Verificação
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-sm [&>th]:text-dark [&>th]:dark:text-white">
            <TableHead>Empresa</TableHead>
            <TableHead>Candidato</TableHead>
            <TableHead>Nº do Processo</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className="border-[#eee] dark:border-dark-3">
              <TableCell>{item.company}</TableCell>

              <TableCell className="font-medium text-dark dark:text-white">
                {item.candidateName}
              </TableCell>

              <TableCell>{item.processNumber}</TableCell>

              <TableCell>
                <span
                  className={cn(
                    "rounded-full px-3.5 py-1 text-sm font-medium",
                    {
                      "bg-[#219653]/[0.08] text-[#219653]":
                        item.status === "Concluído",
                      "bg-[#FFA70B]/[0.08] text-[#FFA70B]":
                        item.status === "Pendente",
                      "bg-[#D34053]/[0.08] text-[#D34053]":
                        item.status === "Rejeitado",
                    },
                  )}
                >
                  {item.status}
                </span>
              </TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-x-3.5">
                  <button className="hover:text-primary">
                    <span className="sr-only">Visualizar Relatório</span>
                    <PreviewIcon />
                  </button>

                  <button className="hover:text-primary">
                    <span className="sr-only">Descarregar Relatório</span>
                    <DownloadIcon />
                  </button>

                  <button className="hover:text-primary">
                    <span className="sr-only">Eliminar Solicitação</span>
                    <TrashIcon />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
