import { createStyles, Theme, makeStyles, alpha } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuContainer: {
      height: '100vh',
      borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      width: '20rem',
    },
  }),
);
