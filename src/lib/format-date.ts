export function formatDate(dateString: Date): string {
  const date = new Date(dateString);

  // Format as "March 1, 2025"
  const formmater = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });
  return formmater.format(date).toString();
}
