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

export const Search = () => {
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
          data={data as QuoteType[]}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Quote quote={item} />}
          ListEmptyComponent={query === '' ? null : <Empty query={query} />}
          contentContainerStyle={styles.flatlistContent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    gap: 16,
  },
  flatlistContent: {
    gap: 16,
    paddingBottom: 32,
  },
});
