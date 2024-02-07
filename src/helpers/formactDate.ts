export function formactDate(date: any): string {
  const formattedLastPublicationDate = new Date(date).toLocaleDateString(
    "pt-br",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  return formattedLastPublicationDate;
}
