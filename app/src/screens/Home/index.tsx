import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuotes } from '@/hooks/Quotes';
import { Loading } from '@/components/Loading';
import { Quote } from '@/components/Quote';
import { QuoteType } from '@/types';
import { StyleSheet } from 'react-native';
import { Typography } from '@/components/Typography';

export const Home = () => {
  const { data, isPending } = useQuotes();

  if (!data && isPending) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Typography variant="h1">Today's quote</Typography>
      <Quote quote={data as QuoteType} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    gap: 16,
  },
});
