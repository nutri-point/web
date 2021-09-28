import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { ThemeMode } from 'hooks/ThemeMode';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/featured/?nutrition)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.mode === ThemeMode.Light
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(0, 0, 2),
    },
    copyright: {
      margin: theme.spacing(5, 0),
    },
  }),
);
