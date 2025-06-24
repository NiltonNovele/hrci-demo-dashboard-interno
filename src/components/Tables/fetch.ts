import * as logos from "@/assets/logos";

export async function getCriminalRecordRequests() {
  // Simula atraso
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    {
      name: "Carlos Mucavele",
      requestId: "CR-2024-001",
      date: "2024-05-12",
      status: "Concluído",
      summary: "Nenhum registo criminal encontrado.",
    },
    {
      name: "Elsa Muchanga",
      requestId: "CR-2024-002",
      date: "2024-06-01",
      status: "Pendente",
      summary: "Solicitação em análise pelas autoridades.",
    },
    {
      name: "Joaquim Tamele",
      requestId: "CR-2024-003",
      date: "2024-06-15",
      status: "Rejeitado",
      summary: "Dados insuficientes para emissão do certificado.",
    },
    {
      name: "Tatiana Ussene",
      requestId: "CR-2024-004",
      date: "2024-06-10",
      status: "Concluído",
      summary: "Certidão emitida sem ocorrências.",
    },
    {
      name: "Nelson Malate",
      requestId: "CR-2024-005",
      date: "2024-06-09",
      status: "Pendente",
      summary: "Em fila de verificação manual.",
    },
    {
      name: "Ivone Massango",
      requestId: "CR-2024-006",
      date: "2024-06-02",
      status: "Concluído",
      summary: "Sem antecedentes criminais.",
    },
    {
      name: "Luís Cossa",
      requestId: "CR-2024-007",
      date: "2024-06-03",
      status: "Rejeitado",
      summary: "Informações inconsistentes no BI.",
    },
    {
      name: "Márcia Zavale",
      requestId: "CR-2024-008",
      date: "2024-06-04",
      status: "Pendente",
      summary: "Aguardando validação documental.",
    },
    {
      name: "Eduardo Maposse",
      requestId: "CR-2024-009",
      date: "2024-06-05",
      status: "Concluído",
      summary: "Nenhuma ocorrência registrada.",
    },
    {
      name: "Sandra Mulungo",
      requestId: "CR-2024-010",
      date: "2024-06-06",
      status: "Pendente",
      summary: "Processamento em andamento.",
    },
    {
      name: "Henrique Jossias",
      requestId: "CR-2024-011",
      date: "2024-06-07",
      status: "Concluído",
      summary: "Certidão emitida com sucesso.",
    },
    {
      name: "Salvador Tivane",
      requestId: "CR-2024-012",
      date: "2024-06-08",
      status: "Rejeitado",
      summary: "Nome incompatível com registos nacionais.",
    },
    {
      name: "Ângela Nhassengo",
      requestId: "CR-2024-013",
      date: "2024-06-11",
      status: "Pendente",
      summary: "Aguardando resposta da base de dados nacional.",
    },
    {
      name: "Celso Manjate",
      requestId: "CR-2024-014",
      date: "2024-06-12",
      status: "Concluído",
      summary: "Verificação finalizada, sem registos.",
    },
    {
      name: "Lídia Malengane",
      requestId: "CR-2024-015",
      date: "2024-06-13",
      status: "Pendente",
      summary: "Documentos enviados para revisão.",
    },
    {
      name: "Manuel Gove",
      requestId: "CR-2024-016",
      date: "2024-06-14",
      status: "Concluído",
      summary: "Nada consta.",
    },
    {
      name: "Isabel Chissano",
      requestId: "CR-2024-017",
      date: "2024-06-16",
      status: "Rejeitado",
      summary: "Falta de comprovativo de residência.",
    },
    {
      name: "Tomás Sitoe",
      requestId: "CR-2024-018",
      date: "2024-06-17",
      status: "Concluído",
      summary: "Certificado limpo.",
    },
    {
      name: "Cátia Banze",
      requestId: "CR-2024-019",
      date: "2024-06-18",
      status: "Pendente",
      summary: "Em verificação cruzada com registros internacionais.",
    },
    {
      name: "Daniel Cuambe",
      requestId: "CR-2024-020",
      date: "2024-06-19",
      status: "Concluído",
      summary: "Nenhuma pendência criminal.",
    },
    {
      name: "Jéssica Nhampossa",
      requestId: "CR-2024-021",
      date: "2024-06-20",
      status: "Pendente",
      summary: "Solicitação recebida e em processamento.",
    },
    {
      name: "Filipe Nhantumbo",
      requestId: "CR-2024-022",
      date: "2024-06-21",
      status: "Rejeitado",
      summary: "Dados divergentes entre BI e requerimento.",
    },
    {
      name: "Dina Salomão",
      requestId: "CR-2024-023",
      date: "2024-06-22",
      status: "Concluído",
      summary: "Nada encontrado nos registros criminais.",
    },
  ];
}


export async function getBackgroundCheckRequests() {
  // Simula atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));

   return [
    {
      company: "Banco Nacional de Moçambique",
      candidateName: "Carlos Mucavele",
      processNumber: "BG-2024-0012",
      status: "Concluído",
    },
    {
      company: "Vodacom Moçambique",
      candidateName: "Elsa Muchanga",
      processNumber: "BG-2024-0037",
      status: "Pendente",
    },
    {
      company: "Standard Bank",
      candidateName: "Joaquim Tamele",
      processNumber: "BG-2024-0020",
      status: "Rejeitado",
    },
    {
      company: "Millennium BIM",
      candidateName: "Ana Lemos",
      processNumber: "BG-2024-0041",
      status: "Concluído",
    },
    {
      company: "CDM - Cervejas de Moçambique",
      candidateName: "Manuel Nhantumbo",
      processNumber: "BG-2024-0042",
      status: "Pendente",
    },
    {
      company: "Petromoc",
      candidateName: "Sara Alface",
      processNumber: "BG-2024-0043",
      status: "Concluído",
    },
    {
      company: "Movitel",
      candidateName: "Celso Mabjaia",
      processNumber: "BG-2024-0044",
      status: "Rejeitado",
    },
    {
      company: "Electricidade de Moçambique",
      candidateName: "Paula Zavale",
      processNumber: "BG-2024-0045",
      status: "Concluído",
    },
    {
      company: "INCM",
      candidateName: "Felisberto Cossa",
      processNumber: "BG-2024-0046",
      status: "Pendente",
    },
    {
      company: "Empresa Moçambicana de Seguros",
      candidateName: "Lucília Manjate",
      processNumber: "BG-2024-0047",
      status: "Concluído",
    },
    {
      company: "CTA - Confederação das Associações Económicas",
      candidateName: "Sidónio Uamusse",
      processNumber: "BG-2024-0048",
      status: "Rejeitado",
    },
    {
      company: "Millennium BIM",
      candidateName: "Inácio Matsinhe",
      processNumber: "BG-2024-0049",
      status: "Pendente",
    },
    {
      company: "KPMG Moçambique",
      candidateName: "Anabela Machava",
      processNumber: "BG-2024-0050",
      status: "Concluído",
    },
    {
      company: "PricewaterhouseCoopers (PwC)",
      candidateName: "Jorge Buque",
      processNumber: "BG-2024-0051",
      status: "Pendente",
    },
    {
      company: "TotalEnergies Moçambique",
      candidateName: "Ivone Sitoe",
      processNumber: "BG-2024-0052",
      status: "Concluído",
    },
    {
      company: "ENH - Empresa Nacional de Hidrocarbonetos",
      candidateName: "Henrique Mabunda",
      processNumber: "BG-2024-0053",
      status: "Rejeitado",
    },
    {
      company: "Mozabanco",
      candidateName: "Cremilda Langa",
      processNumber: "BG-2024-0054",
      status: "Concluído",
    },
    {
      company: "FNB Moçambique",
      candidateName: "Pedro Munguambe",
      processNumber: "BG-2024-0055",
      status: "Pendente",
    },
    {
      company: "Absa Bank Moçambique",
      candidateName: "Tatiana Zimba",
      processNumber: "BG-2024-0056",
      status: "Concluído",
    },
    {
      company: "Banco Único",
      candidateName: "Nelson Mavume",
      processNumber: "BG-2024-0057",
      status: "Rejeitado",
    },
    {
      company: "Anadarko Moçambique",
      candidateName: "Lúcia Mbanze",
      processNumber: "BG-2024-0058",
      status: "Concluído",
    },
    {
      company: "Apolinário Advocacia",
      candidateName: "Renato Machatine",
      processNumber: "BG-2024-0059",
      status: "Pendente",
    },
    {
      company: "Techmoz Solutions",
      candidateName: "Neusa Machava",
      processNumber: "BG-2024-0060",
      status: "Concluído",
    },
  ];
}

export async function getTopChannels() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    {
      name: "SyncTechX",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.google,
    },
    {
      name: "X.com",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.x,
    },
    {
      name: "Vodacom",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.github,
    },
    {
      name: "Vimeo",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.vimeo,
    },
    {
      name: "Facebook",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.facebook,
    },
  ];
}
