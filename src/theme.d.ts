import '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
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

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    neutral: true;
  }
}
