import { StyleSheet, View } from 'react-native';
import { Navigation } from '@/navigation';
import { Providers } from '@/providers';

function App() {
  return (
    <View style={styles.container}>
      <Providers>
        <Navigation />
      </Providers>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
