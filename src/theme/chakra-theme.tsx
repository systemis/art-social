import {
    Colors,
    extendTheme,
    ThemeComponents,
    ThemeConfig,
    withDefaultColorScheme,
    withDefaultSize,
  } from '@chakra-ui/react';
  
  const fonts = {
    heading: 'CircularStd',
    body: 'Poppins',
  };
  const colors: Colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
      },
  };
  const fontSizes = {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5625rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '2.5rem',
    '6xl': '3.75rem',
    '7xl': '4.375rem',
    '8xl': '5rem',
    '9xl': '5.625rem',
  };
  const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
  };
  
  const components: ThemeComponents = {
    Button: {
      baseStyle: {
        borderRadius: 10,
      },
      sizes: {
        sm: {
          minW: 50,
        },
      },
    },
    Text: {
      defaultProps: {
        size: 'md',
      },
    },
  };
  
  const sizes = {
    container: {
      xl: '1350px'
    }};
  export const uiTheme = extendTheme(
    {colors, config, components, fonts, sizes, fontSizes},
    withDefaultColorScheme({colorScheme: 'easeMobile'}),
    withDefaultSize({size: 'lg'}),
  );