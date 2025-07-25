import { apiFetch } from '../../utils';
import { useQuery } from '@tanstack/react-query';

interface Props {
  id: number;
}

export const useQuote = ({ id }: Props) => {
  return useQuery({
    queryKey: ['quote', { id }],
    queryFn: async () => {
      const response = await apiFetch(`/quotes/${id}`);
      return response;
    },
  });
};
