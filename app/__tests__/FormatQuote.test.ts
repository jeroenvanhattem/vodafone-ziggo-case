import { formatText } from '@/utils/formatText';

describe('formatQuote', () => {
  it('should replace <br> with a newline', () => {
    const quote = {
      body: 'This is a quote.<br>It has a line break.',
    };

    const formattedQuote = formatText(quote.body);
    expect(formattedQuote).toBe('This is a quote.\nIt has a line break.');
  });
});
