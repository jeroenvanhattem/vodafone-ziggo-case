import { apiFetch } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export const useFavoriteQuotes = () => {
  return useQuery({
    queryKey: ['favoriteQuotes'],
    queryFn: async () => {
      const response = await apiFetch('/favorites');
      return response;
    },
  });
};
