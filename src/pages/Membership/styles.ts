import { Theme, alpha } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

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
    header: {
      paddingBottom: '2rem',
    },
    name: {
      paddingBottom: theme.spacing(),
    },
    item: {
      paddingBottom: theme.spacing(),
    },
    chip: {
      // paddingRight: theme.spacing(),
    },
    weightChip: {
      backgroundColor: alpha(theme.palette.warning.main, 0.1),
      border: 'none',
      fontWeight: 700,
    },
  }),
);

export const useListStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '2rem',
    },
  }),
);
