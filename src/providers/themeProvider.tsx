import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { FC, ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    gold: Palette['primary'];
    red: Palette['primary'];
    green: Palette['primary'];
    eggshellBlue: Palette['primary'];
    lagoonBlue: Palette['primary'];
    siren: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    white?: Palette['primary'];
    gold?: PaletteOptions['primary'];
    red?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
    eggshellBlue?: PaletteOptions['primary'];
    lagoonBlue?: PaletteOptions['primary'];
    siren?: PaletteOptions['primary'];
  }
}

// Update the Fab's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

// Update the Fab's color prop options
declare module '@mui/material/Fab' {
  interface FabPropsColorOverrides {
    gold: true;
    red: true;
    green: true;
    eggshellBlue: true;
    lagoonBlue: true;
    siren: true;
  }
}

const theme = createTheme({
  palette: {
    action: {
      disabledBackground: 'action.disabledBackground',
    },
    background: {
      default: '#f4f4f4',
      paper: '#f4f4f4',
    },
    white: {
      main: '#fff',
      contrastText: 'black',
      dark: '#fff',
      light: '#fff',
    },

    gold: {
      main: '#FFB400',
      dark: '#FFB400',
      contrastText: '#fff',
    },
    red: {
      main: '#f95d60',
      dark: '#f95d60',
      contrastText: '#fff',
    },
    green: {
      main: '#88e26e',
      dark: '#88e26e',
      contrastText: '#fff',
    },
    eggshellBlue: {
      main: '#02d1be',
      dark: '#02d1be',
      contrastText: '#fff',
    },
    lagoonBlue: {
      main: '#007c86',
      dark: '#007c86',
      contrastText: '#fff',
    },
    siren: {
      main: '#7c0051',
      dark: '#7c0051',
      contrastText: '#fff',
    },
  },
});

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
