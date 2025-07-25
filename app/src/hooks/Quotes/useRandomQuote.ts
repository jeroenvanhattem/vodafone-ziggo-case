import { apiFetch } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export const useRandomQuote = () => {
  return useQuery({
    queryKey: ['randomQuote'],
    queryFn: async () => {
      const response = await apiFetch('/quotes/random');
      return response;
    },
  });
};
