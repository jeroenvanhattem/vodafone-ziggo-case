import { Typography } from '@/components/Typography';

interface EmptyProps {
  query: string;
}

export const Empty = ({ query }: EmptyProps) => {
  return (
    <Typography variant="body">
      There's no quotes found for "{query}"
    </Typography>
  );
};
