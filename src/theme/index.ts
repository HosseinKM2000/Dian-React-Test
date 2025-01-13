import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Example primary color for light mode
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Example primary color for dark mode
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

export { lightTheme, darkTheme };
