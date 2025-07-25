import { apiFetch } from '@/utils';
import { useInfiniteQuery } from '@tanstack/react-query';

interface Props {
  page?: number;
}

export const useQuotes = ({ page }: Props) => {
  return useInfiniteQuery({
    queryKey: ['quotes', { page }],
    queryFn: async () => {
      const response = await apiFetch(`/quotes?page=${page}`);
      return response;
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return (lastPage as { length: number })?.length > 0
        ? nextPage
        : undefined;
    },
    initialPageParam: page || 1,
  });
};
