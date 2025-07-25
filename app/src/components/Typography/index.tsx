import { useTheme } from '@/providers/theme';
import { type ColorsType } from '@/providers/theme/colors';
import { ReactNode } from 'react';
import { Text } from 'react-native';

interface Props {
  variant: 'h1' | 'body' | 'title' | 'subtitle' | 'caption';
  children: ReactNode;
  color?: string;
}

export const Typography = ({ variant, children, color }: Props) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return <Text style={[styles[variant], color && { color }]}>{children}</Text>;
};

const makeStyles = (colors: ColorsType) => ({
  body: {
    fontSize: 16,
    color: colors[100],
  },
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors[100],
  },
  subtitle: {
    fontSize: 20,
    color: colors[200],
  },
  caption: {
    fontSize: 12,
    color: colors[300],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors[100],
  },
});
