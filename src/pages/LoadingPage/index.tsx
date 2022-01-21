import { CircularProgress, Grid } from '@mui/material';
import { useStyles } from './styles';

const LoadingPage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <CircularProgress size="4rem" thickness={5} />
    </Grid>
  );
};

export default LoadingPage;
