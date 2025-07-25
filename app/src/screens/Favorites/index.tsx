import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavoriteQuotes } from '@/hooks/Quotes';
import { Loading } from '@/components/Loading';
import { Quote } from '@/components/Quote';
import { QuoteType } from '@/types';
import { FlatList, StyleSheet } from 'react-native';
import { Empty } from './Empty';
import { Typography } from '@/components/Typography';
import { useTheme } from '@/providers/theme';
import { ColorsType } from '@/providers/theme/colors';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useScroll } from '@/hooks/Utils';

export const Favorites = () => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const { data, isPending } = useFavoriteQuotes();
  const { ref, isVisible, handleScroll } = useScroll();

  if (!data && isPending) {
    return (
      <SafeAreaView style={styles.container}>
        <Loading />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Typography variant="h1">Favorites</Typography>
      <FlatList
        ref={ref}
        data={data as QuoteType[]}
        renderItem={({ item }) => <Quote quote={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatlistContent}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty />}
      />

      <ScrollToTop listRef={ref} isVisible={isVisible} />
    </SafeAreaView>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      gap: 16,
      backgroundColor: colors[900],
    },
    flatlistContent: {
      gap: 16,
      paddingBottom: 32,
    },
  });
