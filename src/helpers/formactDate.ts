export function formactDate(date: Date): string {
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
