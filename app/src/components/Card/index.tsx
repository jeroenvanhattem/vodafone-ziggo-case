import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/providers/theme';
import { ColorsType } from '@/providers/theme/colors';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Card = ({ children }: Props) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return <View style={styles.container}>{children}</View>;
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      margin: 4,
      display: 'flex',
      padding: 16,
      backgroundColor: colors[800],
      borderRadius: 8,
      height: 'auto',
      alignItems: 'center',
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      gap: 8,
    },
  });
