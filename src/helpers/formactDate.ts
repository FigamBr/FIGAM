export function formactDate(date: any): string {
  // Ajusta o fuso horário para o Horário de Brasília (BRT)
  const adjustedDate = new Date(date + "T00:00:00-03:00");

  const formattedDate = adjustedDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
}
