import React from 'react';
import { connect } from 'react-redux';
import Routes from 'Routes';
import { withTheme } from 'emotion-theming';
import { theme, ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import myTheme from 'theme';

const customTheme = {
  ...theme,
  ...myTheme,
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <Routes />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default connect((state: Object) => state)(withTheme(App));
