export function formactDate(date: any) {
  // Ajusta o fuso horário para o Horário de Brasília (BRT)
  const adjustedDate = new Date(date);

  const formattedDate = adjustedDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
}
