import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      500: '#2B6CB0',
      600: '#2C5282',
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary',
      },
      variants: {
        solid: {
          bg: 'primary.500',
          _pressed: {
            bg: 'primary.600',
          },
        },
      },
    },
  },
});
