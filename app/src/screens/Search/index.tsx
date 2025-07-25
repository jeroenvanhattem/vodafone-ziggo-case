import { SafeAreaView } from 'react-native-safe-area-context';
import { useSearchQuote } from '@/hooks/Quotes';
import { Loading } from '@/components/Loading';
import { Quote } from '@/components/Quote';
import { QuoteType } from '@/types';
import { FlatList, StyleSheet } from 'react-native';
import { Search as SearchInput } from '@/components/Search';
import { Typography } from '@/components/Typography';
import { useState } from 'react';
import { Empty } from './Empty';
import { useTheme } from '@/providers/theme';
import { ColorsType } from '@/providers/theme/colors';
import { useScroll } from '@/hooks/Utils';
import { ScrollToTop } from '@/components/ScrollToTop';

export const Search = () => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const { ref, isVisible, handleScroll } = useScroll();

  const [query, setQuery] = useState<string>('');
  const { data, isPending } = useSearchQuote({ query });

  return (
    <SafeAreaView style={styles.container}>
      <Typography variant="h1">Search</Typography>
      <SearchInput onSearch={setQuery} />
      {isPending && query !== '' ? (
        <Loading />
      ) : (
        <FlatList
          ref={ref}
          data={data as QuoteType[]}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Quote quote={item} />}
          ListEmptyComponent={query === '' ? null : <Empty query={query} />}
          contentContainerStyle={styles.flatlistContent}
          onScroll={handleScroll}
        />
      )}
      {data ? <ScrollToTop listRef={ref} isVisible={isVisible} /> : null}
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
