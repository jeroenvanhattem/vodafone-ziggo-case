import { apiFetch } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export const useQuotes = () => {
  return useQuery({
    queryKey: ['quotes'],
    queryFn: async () => {
      const response = await apiFetch('/quotes/random');
      return response;
    },
  });
};
