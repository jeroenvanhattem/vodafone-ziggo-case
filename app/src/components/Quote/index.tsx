import { QuoteType } from '@/types';
import { Pressable, StyleSheet, View } from 'react-native';
import { Typography } from '../Typography';
import { useTheme } from '@/providers/theme';
import { COLORS } from '@/providers/theme/colors';
import { formatText } from '@/utils/formatText';
import { useAddFavoriteQuote, useRemoveFavoriteQuote } from '@/hooks/Quotes';
import { Heart } from 'react-native-feather';
import { useQueryClient } from '@tanstack/react-query';
import { Card } from '../Card';
import { navigate } from '@/navigation';

interface Props {
  quote: QuoteType;
}

export const Quote = ({ quote }: Props) => {
  const { colors } = useTheme();
  const queryClient = useQueryClient();

  const { mutate: addFavoriteQuote } = useAddFavoriteQuote();
  const { mutate: removeFavoriteQuote } = useRemoveFavoriteQuote();

  const handlePress = () => {
    if (quote.isFavorite && quote.internalId) {
      removeFavoriteQuote(
        { id: quote.internalId },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['favoriteQuotes'] });
          },
        },
      );
    } else {
      addFavoriteQuote(
        { id: quote.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['randomQuote'] });
            queryClient.invalidateQueries({ queryKey: ['favoriteQuotes'] });
            navigate('Favorites');
          },
        },
      );
    }
  };

  return (
    <Card>
      <View style={styles.content}>
        <Typography variant="body">{formatText(quote.body)}</Typography>
        <Typography variant="caption">{quote.author}</Typography>
      </View>

      <View style={styles.actions}>
        <Pressable onPress={handlePress}>
          <Heart
            color={quote.isFavorite ? COLORS.functional.love : colors[400]}
            strokeWidth={2}
            stroke={quote.isFavorite ? COLORS.functional.love : colors[400]}
            fill={quote.isFavorite ? COLORS.functional.love : 'transparent'}
          />
        </Pressable>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 8,
    padding: 32,
    width: '100%',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});
