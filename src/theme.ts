import { theme } from '@chakra-ui/core';

export default {
  breakpoints: ['30em', '48em', '62em', '80em'],
  colors: {
    ...theme.colors,
    gray: {
      50: '#eef1f7',
      100: '#cfd6e0',
      200: '#afbbcc',
      300: '#8ea0ba',
      400: '#6e85a8',
      500: '#556b8f',
      600: '#43536f',
      700: '#303c4e',
      800: '#1d242f',
      900: '#090c11',
    },
    green: {
      50: '#e1fded',
      100: '#bdf1d4',
      200: '#96e7ba',
      300: '#6edb9f',
      400: '#47d185',
      500: '#2eb86b',
      600: '#218f52',
      700: '#14663b',
      800: '#063e22',
      900: '#001607',
    },
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
};
