import { QuoteType } from '@/types';
import { apiFetch } from '@/utils';
import { MockQuote } from '../__mocks__/mock-quote';

jest.mock('@/utils', () => ({
  ...jest.requireActual('@/utils'),
  apiFetch: jest.fn(),
}));
const mockedApiFetch = apiFetch as jest.Mock;

describe('Quote flow with API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('get a random quote', async () => {
    mockedApiFetch.mockImplementationOnce(
      jest.requireActual('@/utils').apiFetch,
    );

    // Fetch a random quote
    const quote = (await apiFetch(`/quotes/random`)) as QuoteType;
    expect(quote).toBeDefined();
    expect(quote).toHaveProperty('id');
    expect(quote).toHaveProperty('body');
  });

  it('like a mocked quote, then unlike it', async () => {
    mockedApiFetch.mockImplementation((url: string, options?: RequestInit) => {
      if (url === '/quotes/random') {
        return Promise.resolve(MockQuote);
      }

      // All other calls: use real apiFetch
      return jest.requireActual('@/utils').apiFetch(url, options);
    });

    // Fetch a mocked quote
    const quote = (await apiFetch(`/quotes/random`)) as QuoteType;
    expect(quote).toBeDefined();
    expect(quote).toHaveProperty('id');
    expect(quote).toHaveProperty('body');

    // Like the quote
    await apiFetch(`/favorites`, {
      method: 'POST',
      body: JSON.stringify({ id: quote?.id }),
    });

    // Verify the quote is liked
    const likedQuotes = (await apiFetch(`/favorites`)) as QuoteType[];
    expect(likedQuotes).toBeDefined();
    expect(Array.isArray(likedQuotes)).toBe(true);
    expect(likedQuotes.length).toBeGreaterThan(0);
    // See if the liked quote is in the list
    const likedQuote = likedQuotes.find(
      (thisQuote: QuoteType) => thisQuote.id === quote?.id,
    );
    expect(likedQuote).toBeDefined();
    expect(likedQuote).toHaveProperty('isFavorite', true);
    expect(likedQuote).toHaveProperty('internalId');

    // Unlike the quote
    await apiFetch(`/favorites/${likedQuote?.internalId}`, {
      method: 'DELETE',
    });

    // Verify the quote is no longer liked
    const updatedLikedQuotes = (await apiFetch(`/favorites`)) as QuoteType[];
    expect(updatedLikedQuotes).toBeDefined();
    expect(Array.isArray(updatedLikedQuotes)).toBe(true);
    updatedLikedQuotes.forEach((thisQuote: QuoteType) => {
      expect(thisQuote.id).not.toBe(quote?.id);
    });
  });
});
