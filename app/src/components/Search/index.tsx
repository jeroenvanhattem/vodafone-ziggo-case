import { useTheme } from '@/providers/theme';
import { type ColorsType } from '@/providers/theme/colors';
import { useRef } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { X } from 'react-native-feather';

interface Props {
  onSearch: (value: string) => void;
}

export const Search = ({ onSearch }: Props) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const inputRef = useRef<TextInput>(null);

  const onChange = (value: string) => {
    setTimeout(() => {
      onSearch(value);
    }, 500);
  };

  const onClear = () => {
    inputRef.current?.clear();
    onSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Search quotes..."
        placeholderTextColor={colors[600]}
        onChangeText={onChange}
        autoCapitalize="sentences"
        autoFocus
      />

      <Pressable style={styles.clear} onPress={onClear}>
        <X color={colors[600]} />
      </Pressable>
    </View>
  );
};

const makeStyles = (colors: ColorsType) => ({
  container: {
    flexDirection: 'row',
    backgroundColor: colors[900],
    borderColor: colors[600],
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    color: colors[100],
    fontSize: 16,
  },
  clear: {
    padding: 8,
  },
});
