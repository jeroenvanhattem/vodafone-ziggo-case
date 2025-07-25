import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, waitFor } from '@testing-library/react-native';
import { Home } from '@/screens/Home';
import { MockQuote } from './mocks';

const queryClient = new QueryClient();

describe('Home with real useQuotes', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MockQuote),
      }),
    ) as jest.Mock;
  });

  it('renders quote from mocked fetch', async () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
    );

    await waitFor(() => expect(getByText('Mocked quote')).toBeTruthy());
  });
});
