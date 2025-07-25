import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { navigate } from '@/navigation';

export const Empty = () => {
  const onPress = () => {
    navigate('Home');
  };

  return (
    <>
      <Typography variant="body">
        It looks like you haven't added any quotes to your favorites.
      </Typography>

      <Button variant="normal" onPress={onPress}>
        Explore a random quote
      </Button>
    </>
  );
};
