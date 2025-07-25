export interface ColorsType {
  [key: string]: string;
}

export const COLORS = {
  light: {
    50: '#121212',
    100: '#3D3D3D',
    200: '#6B6B6B',
    300: '#949494',
    400: '#B1B1B1',
    500: '#CFCFCF',
    600: '#E0E0E0',
    700: '#EDEDED',
    800: '#F5F5F5',
    900: '#FAFAFA',
  },
  dark: {
    50: '#E5E5E5',
    100: '#D1D1D1',
    200: '#A1A1A1',
    300: '#7D7D7D',
    400: '#5A5A5A',
    500: '#3D3D3D',
    600: '#2A2A2A',
    700: '#1E1E1E',
    800: '#121212',
    900: '#000000',
  },
  default: {
    white: '#FFFFFF',
    black: '#000000',
  },
  functional: {
    love: '#FF6B6B',
    dislike: '#6C757D',
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
    info: '#17A2B8',
  },
};
