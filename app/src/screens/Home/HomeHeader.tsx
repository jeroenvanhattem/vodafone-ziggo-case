import { useRandomQuote } from '@/hooks/Quotes';
import { Quote } from '@/components/Quote';
import { QuoteType } from '@/types';
import { Pressable, StyleSheet, View } from 'react-native';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { useTheme } from '@/providers/theme';
import { Moon, Sun } from 'react-native-feather';
import { ColorsType } from '@/providers/theme/colors';
import { useQueryClient } from '@tanstack/react-query';

export const HomeHeader = () => {
  const { colors, theme, toggleTheme } = useTheme();
  const styles = makeStyles(colors);

  const queryClient = useQueryClient();

  const { data } = useRandomQuote();

  const onNewQuote = () => {
    queryClient.invalidateQueries({ queryKey: ['randomQuote'] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Typography variant="h1">Quotes</Typography>

        <Pressable style={styles.themeToggle} onPress={toggleTheme}>
          {theme === 'light' ? (
            <Sun color={colors[300]} />
          ) : (
            <Moon color={colors[300]} />
          )}
        </Pressable>
      </View>

      <Typography variant="title">Quote of the day</Typography>
      <Quote quote={data as QuoteType} />

      <Button variant="normal" onPress={onNewQuote}>
        Get new quote
      </Button>

      <Typography variant="title">
        A (near) infinite source of inspiration
      </Typography>
    </View>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      gap: 8,
    },
    heading: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    themeToggle: {
      alignSelf: 'center',
      padding: 8,
      borderRadius: 8,
      backgroundColor: colors[800],
      borderWidth: 1,
      borderColor: colors[600],
    },
  });
