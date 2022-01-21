import { Theme, alpha } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({}));

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
    weightChip: {
      backgroundColor: alpha(theme.palette.warning.main, 0.1),
      border: 'none',
      fontWeight: 700,
    },
  }),
);
