import { create } from '@storybook/theming';
import { GlobalStyles, ThemeProvider } from '@thiago_brolly/styles';

const lightTheme = create({
  base: 'light',
  brandTitle: 'PAYLIVRE UI',
  backgrounds: {
    default: 'light',
  },
  //brandUrl: 'https://example.com',
  //brandImage: 'https://place-hold.it/350x150',
});

const darkTheme = create({
  base: 'dark',
  brandTitle: 'PAYLIVRE UI',
  backgrounds: {
    default: 'dark',
  },
  //brandUrl: 'https://example.com',
  //brandImage: 'https://place-hold.it/350x150',
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
