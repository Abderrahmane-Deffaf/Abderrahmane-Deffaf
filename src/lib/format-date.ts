export function formatDate(dateString: Date): string {
  const date = new Date(dateString);

  // Format as "March 1, 2025"
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
