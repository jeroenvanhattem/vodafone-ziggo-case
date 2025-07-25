import { apiFetch } from '@/utils';
import { useMutation } from '@tanstack/react-query';

export const useRemoveFavoriteQuote = () => {
  return useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      const response = await apiFetch(`/favorites/${id}`, {
        method: 'DELETE',
      });
      return response;
    },
  });
};
