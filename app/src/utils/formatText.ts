// if text contains <br> tags, replace them with newlines
export function formatText(text: string): string {
  if (!text) return '';

  const formattedText = text.replace(/<br\s*\/?>/gi, '\n');

  return formattedText.replace(/<\/?[^>]+(>|$)/g, '');
}
