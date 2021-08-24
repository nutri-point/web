import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeMode } from 'hooks/ThemeMode';
import { ThemeOptions } from '@material-ui/core/styles/createTheme';

import colors from './colors';

export const getTheme = (mode: ThemeMode) => {
  return mode === ThemeMode.Light ? lightTheme : darkTheme;
};

const commonTheme: ThemeOptions = {
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiTextField: {
      root: {
        borderRadius: 4,
      },
    },
  },
};

const commonPalette = {
  success: {
    main: colors.success,
  },
  error: {
    main: colors.error,
  },
  warning: {
    main: colors.warning,
  },
  info: {
    main: colors.info,
  },
};

const commonOverrides = {
  MuiSvgIcon: {
    fontSizeLarge: {
      fontSize: '3rem',
    },
    fontSizeInherit: {
      fontSize: '2rem',
    },
    fontSizeSmall: {
      fontSize: '1rem',
    },
  },
};

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    icon: {
      border: string;
    };
    postCard: PaletteColor;
    postCardBorder: PaletteColor;
    link: PaletteColor;
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    icon?: {
      border?: string;
    };
    postCard?: PaletteColorOptions;
    postCardBorder?: PaletteColorOptions;
    link?: PaletteColorOptions;
  }
}

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      type: ThemeMode.Light,
      background: {
        default: colors.white,
        // paper: colors.white,
      },
      primary: {
        main: colors.black,
      },
      secondary: {
        main: colors.darkPastelGreen,
      },
      icon: {
        border: colors.black,
      },
      ...commonPalette,
    },
    overrides: {
      ...commonOverrides,
    },
    ...commonTheme,
  }),
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      type: ThemeMode.Dark,
      background: {
        default: colors.black,
        // paper: colors.black,
      },
      primary: {
        main: colors.darkPastelGreen,
      },
      secondary: {
        main: colors.black,
      },
      icon: {
        border: colors.white,
      },
      ...commonPalette,
    },
    overrides: {
      ...commonOverrides,
    },
    ...commonTheme,
  }),
);
