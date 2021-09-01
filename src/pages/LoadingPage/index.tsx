import { CircularProgress, Grid } from '@material-ui/core';
import { useStyles } from './styles';

interface Props {}

const LoadingPage = (props: Props) => {
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
