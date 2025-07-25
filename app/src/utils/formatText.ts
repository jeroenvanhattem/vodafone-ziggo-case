// if text contains <br> tags, replace them with newlines
export function formatText(text: string): string {
  if (!text) return '';

  // Replace <br> tags with newlines
  const formattedText = text.replace(/<br\s*\/?>/gi, '\n');

  // Remove any remaining HTML tags
  return formattedText.replace(/<\/?[^>]+(>|$)/g, '');
}
