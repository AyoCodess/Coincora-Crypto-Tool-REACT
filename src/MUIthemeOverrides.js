import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'DaxlinePro',
    body1: {
      fontWeight: 300,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
        font-family: 'DaxlinePro';
        font-weight: 700;
        src: local('DaxlinePro'), url('./Fonts/DaxlinePro-Bold.woff') format('woff');
        }

        @font-face {
        font-family: 'DaxlinePro';
        font-weight: 900;
        src: local('DaxlinePro'),
            url('./Fonts/DaxlinePro-ExtraBold.woff') format('woff');
        }

        @font-face {
        font-family: 'DaxlinePro';
        font-weight: 300;
        src: local('DaxlinePro'), url('./Fonts/DaxlinePro-Light.woff') format('woff');
        }

        @font-face {
        font-family: 'DaxlinePro';
        font-weight: 500;
        src: local('DaxlinePro'), url('./Fonts/DaxlinePro-Medium.woff') format('woff');
        }

        @font-face {
        font-family: 'DaxlinePro';
        src: local('DaxlinePro'), url('./Fonts/DaxlinePro.woff') format('woff');
        }
      `,
    },
  },
});

export default theme;
