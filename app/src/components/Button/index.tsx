import { useTheme } from '@/providers/theme';
import { COLORS, type ColorsType } from '@/providers/theme/colors';
import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Typography } from '../Typography';

interface Props {
  variant?: 'normal' | 'inverted';
  children: ReactNode;
  onPress: () => void;
}

export const Button = ({ variant = 'normal', children, onPress }: Props) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const textColor = {
    normal: colors[100],
    inverted: colors[100],
    primary: COLORS.default.white,
  };

  return (
    <Pressable onPress={onPress} style={[styles.button, styles[variant]]}>
      <Typography variant="body" color={textColor[variant]}>
        {children}
      </Typography>
    </Pressable>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      marginVertical: 8,
      padding: 16,
      borderWidth: 1,
    },
    normal: {
      backgroundColor: colors[800],
      borderColor: colors[400],
    },
    inverted: {
      borderColor: colors[200],
    },
  });
