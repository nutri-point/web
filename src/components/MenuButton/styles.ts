import { Theme, alpha } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { ThemeMode } from 'hooks/ThemeMode';

export const useStyles = makeStyles((theme: Theme) => {
  const isDark = theme.palette.mode === ThemeMode.Dark;

  return createStyles({
    container: {
      paddingTop: '0.5rem',
    },
    button: {
      padding: 20,
      borderRadius: 20,
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none',
      transition: `all 0.2s ease-in-out`,
      border: `1px solid ${alpha(theme.palette.primary.main, 0)}`,
    },
    buttonActive: {
      backgroundColor: `${alpha(theme.palette.primary.main, 0.15)}`,
      border: `1px solid ${alpha(theme.palette.primary.main, isDark ? 1 : 0)}`,
    },
    link: {
      textDecoration: 'none',
    },
  });
});
