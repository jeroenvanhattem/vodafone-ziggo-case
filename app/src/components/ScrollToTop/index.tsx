import { useTheme } from '@/providers/theme';
import { ColorsType } from '@/providers/theme/colors';
import React, { RefObject } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowUp } from 'react-native-feather';

type Props = {
  listRef: RefObject<any>;
  isVisible: boolean;
};

export const ScrollToTop: React.FC<Props> = ({ listRef, isVisible }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const scrollToTop = () => {
    listRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  if (!isVisible) return null;

  return (
    <TouchableOpacity style={styles.button} onPress={scrollToTop}>
      <ArrowUp color={colors[100]} />
    </TouchableOpacity>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 30,
      right: 30,
      backgroundColor: colors[800],
      borderColor: colors[300],
      borderWidth: 1,
      padding: 8,
      borderRadius: 30,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
  });
