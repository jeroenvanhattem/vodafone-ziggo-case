import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavoriteQuotes } from '@/hooks/Quotes';
import { Loading } from '@/components/Loading';
import { Quote } from '@/components/Quote';
import { QuoteType } from '@/types';
import { FlatList, StyleSheet } from 'react-native';
import { Empty } from './Empty';
import { Typography } from '@/components/Typography';

export const Favorites = () => {
  const { data, isPending } = useFavoriteQuotes();

  if (!data && isPending) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Typography variant="h1">Favorites</Typography>
      <FlatList
        data={data as QuoteType[]}
        renderItem={({ item }) => <Quote quote={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatlistContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty />}
      />
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
