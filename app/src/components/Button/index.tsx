import { useTheme } from '@/providers/theme';
import { COLORS, type ColorsType } from '@/providers/theme/colors';
import { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { Typography } from '../Typography';

interface Props {
  variant?: 'normal' | 'inverted' | 'primary';
  children: ReactNode;
  onPress: () => void;
}

export const Button = ({ variant = 'normal', children, onPress }: Props) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const textColor = {
    normal: colors[900],
    inverted: colors[100],
    primary: COLORS.default.white,
  };

  return (
    <Pressable onPress={onPress} style={styles[variant]}>
      <Typography variant="body" color={textColor[variant]}>
        {children}
      </Typography>
    </Pressable>
  );
};

const makeStyles = (colors: ColorsType) => ({
  normal: {
    backgroundColor: colors[50],
    padding: 16,
    borderRadius: 8,
  },
  inverted: {
    borderColor: colors[200],
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: COLORS.accent[900],
    padding: 16,
    borderRadius: 8,
  },
});
