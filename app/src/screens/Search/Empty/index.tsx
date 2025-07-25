import { Typography } from '@/components/Typography';

interface EmptyProps {
  query: string;
}

export const Empty = ({ query }: EmptyProps) => {
  return <Typography variant="body">No quotes found for "{query}"</Typography>;
};
