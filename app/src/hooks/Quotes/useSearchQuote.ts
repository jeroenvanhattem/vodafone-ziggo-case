import { apiFetch } from '@/utils';
import { useQuery } from '@tanstack/react-query';

interface Props {
  query: string;
}

export const useSearchQuote = ({ query }: Props) => {
  return useQuery({
    queryKey: ['quote', { query }],
    queryFn: async () => {
      const response = await apiFetch(`/quotes/search/${query}`);
      return response;
    },
    enabled: !!query,
  });
};
