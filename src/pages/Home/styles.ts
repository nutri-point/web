import { Theme, alpha } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuContainer: {
      height: '100vh',
      borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      width: '20rem',
    },
  }),
);
