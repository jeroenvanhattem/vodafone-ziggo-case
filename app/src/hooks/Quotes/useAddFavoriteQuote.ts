import { apiFetch } from '@/utils';
import { useMutation } from '@tanstack/react-query';

export const useAddFavoriteQuote = () => {
  return useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      const response = await apiFetch(`/favorites`, {
        method: 'POST',
        body: JSON.stringify({ id }),
      });
      return response;
    },
  });
};
