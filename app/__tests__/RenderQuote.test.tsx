import React from 'react';
import { render } from '@testing-library/react-native';
import { Quote } from '@/components/Quote';
import { MockQuote } from '../__mocks__/mock-quote';
import { Providers } from '@/providers';

jest.mock('react-native-safe-area-context', () => {
  return {
    SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
    useSafeAreaInsets: () => ({ top: 0, left: 0, right: 0, bottom: 0 }),
  };
});

describe('Quote component', () => {
  it('renders quote text and author', () => {
    const { getByTestId } = render(<Quote quote={MockQuote} />, {
      wrapper: Providers,
    });

    const quoteBody = getByTestId('quote-body');
    expect(quoteBody).toBeTruthy();
    expect(quoteBody.props.children).toBe(
      'This is my quote for performance testing',
    );

    const quoteAuthor = getByTestId('quote-author');
    expect(quoteAuthor).toBeTruthy();
    expect(quoteAuthor.props.children).toBe('Adina');
  });
});
