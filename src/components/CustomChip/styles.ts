import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      fontWeight: 700,
      borderRadius: 20,
      padding: '0.5rem 1rem',
    },
    label: {
      fontWeight: 700,
      fontSize: '0.8rem',
      paddingLeft: theme.spacing(),
    },
  }),
);
