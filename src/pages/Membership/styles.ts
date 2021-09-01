import { createStyles, Theme, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tab: {
      [theme.breakpoints.up('xs')]: {
        minWidth: '0px',
      },
    },
    bigTab: {
      width: '15rem',
    },
  }),
);

export const useCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: '2rem',
    },
  }),
);
