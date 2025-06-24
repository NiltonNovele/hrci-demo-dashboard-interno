"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCriminalRecordRequests } from "../fetch"; // verifique o caminho
import { PreviewIcon } from "../icons";

export function CriminalRequestsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getCriminalRecordRequests();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="px-6 py-4 sm:px-7 sm:py-5 xl:px-8.5">
        <h2 className="text-2xl font-bold text-dark dark:text-white">
          Solicitações de Registo Criminal
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-t text-base [&>th]:py-3 sm:[&>th]:py-4.5">
            <TableHead>Nome do Candidato</TableHead>
            <TableHead>ID do Processo</TableHead>
            <TableHead>Data da Solicitação</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Resumo</TableHead>
            <TableHead className="text-right">Ação</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow
              className="text-base font-medium text-dark dark:text-white"
              key={item.requestId}
            >
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.requestId}</TableCell>
              <TableCell>
                {new Date(item.date).toLocaleDateString("pt-PT")}
              </TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    item.status === "Concluído"
                      ? "bg-green-100 text-green-700"
                      : item.status === "Pendente"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </TableCell>
              <TableCell>{item.summary}</TableCell>
              <TableCell className="text-right">
                <button
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  onClick={() => alert(`Detalhes: ${item.summary}`)}
                >
                  <PreviewIcon className="size-4" />
                  Ver Detalhes
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
