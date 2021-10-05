import { Theme, alpha } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      position: 'sticky',
      top: 0,
      borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      overflowY: 'scroll',

      [theme.breakpoints.down('sm')]: {
        borderRight: 'none',
      },
    },
  }),
);
