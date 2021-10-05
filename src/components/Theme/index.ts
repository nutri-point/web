import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeMode } from 'hooks/ThemeMode';
import { ThemeOptions } from '@mui/material/styles/createTheme';

import colors from './colors';

export const getTheme = (mode: ThemeMode) => {
  return mode === ThemeMode.Light ? lightTheme : darkTheme;
};

const commonTheme: ThemeOptions = {
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    h2: {
      fontSize: '1.5rem',
      fontWeight: 900,
    },
    body2: {
      color: '#707070',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1900,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
};

const defaultTheme = createTheme();

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
  neutral: defaultTheme.palette.augmentColor({
    color: { main: colors.lightBlue },
    name: 'neutral',
  }),
};

const commonOverrides = {
  MuiSvgIcon: {
    styleOverrides: {
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
  },
};

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: ThemeMode.Light,
      background: {
        default: colors.white,
        // paper: colors.white,
      },
      primary: {
        main: colors.red,
      },
      secondary: {
        main: colors.green,
      },
      // icon: {
      //   border: colors.black,
      // },
      ...commonPalette,
    },
    components: {
      ...commonOverrides,
    },
    ...commonTheme,
  }),
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: ThemeMode.Dark,
      background: {
        default: colors.black,
        // paper: colors.black,
      },
      primary: {
        main: colors.purple,
      },
      secondary: {
        main: colors.blue,
      },
      // icon: {
      //   border: colors.white,
      // },
      ...commonPalette,
    },
    components: {
      ...commonOverrides,
    },
    ...commonTheme,
  }),
);
