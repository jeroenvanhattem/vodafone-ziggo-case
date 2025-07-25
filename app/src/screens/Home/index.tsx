import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuotes } from '@/hooks/Quotes';
import { Loading } from '@/components/Loading';
import { Quote } from '@/components/Quote';
import { QuoteType } from '@/types';
import { FlatList, StyleSheet, View } from 'react-native';
import { Typography } from '@/components/Typography';
import { useTheme } from '@/providers/theme';
import { ColorsType } from '@/providers/theme/colors';
import { useMemo } from 'react';
import { HomeHeader } from './HomeHeader';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useScroll } from '@/hooks/Utils';

export const Home = () => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const { ref, isVisible, handleScroll } = useScroll();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useQuotes({ page: 1 });

  const quotes = useMemo(() => {
    return data?.pages.flatMap((page: unknown) => page as QuoteType[]) ?? [];
  }, [data]);

  if (!data && isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Loading />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          ref={ref}
          data={quotes}
          renderItem={({ item }) => <Quote quote={item} />}
          keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
          contentContainerStyle={styles.flatlistContent}
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage) fetchNextPage();
          }}
          onEndReachedThreshold={0.5}
          onScroll={handleScroll}
          ListHeaderComponent={<HomeHeader />}
          ListEmptyComponent={
            <Typography variant="body">No quotes available</Typography>
          }
        />
      </View>

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
      justifyContent: 'space-between',
    },
    content: {
      flexGrow: 1,
      gap: 16,
    },
    flatlistContent: {
      gap: 16,
      paddingBottom: 32,
    },
  });
