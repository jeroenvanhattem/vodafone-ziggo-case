import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Typography } from '@/components/Typography';
import { navigate } from '@/navigation';

export const Empty = () => {
  const onPress = () => {
    navigate('Home');
  };

  return (
    <Card>
      <Typography variant="body">
        It looks like you haven't added any quotes to your favorites.
      </Typography>

      <Button variant="primary" onPress={onPress}>
        Explore a random quote
      </Button>
    </Card>
  );
};
