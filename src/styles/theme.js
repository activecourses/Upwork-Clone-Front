import { createTheme } from '@mui/material';
import '@fontsource/rubik';
import { red, green } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Rubik',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          minHeight: '100vh',
        },
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: green[900],
          borderRadius: 17,
          '&:hover': { backgroundColor: green[700] },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: green[600],
          '&:hover': {
            color: green[900],
          },
          '&:visited': {
            color: red[900],
          },
        },
      },
    },
  },
});

export default theme;
