import React from 'react';
import { CircularProgress, Grid } from '@mui/material';

const LoadingIndicator = () => {
  return (
    <Grid container justifyContent="center" style={{ paddingTop: '2rem' }}>
      <Grid item>
        <CircularProgress size="3rem" thickness={5} />
      </Grid>
    </Grid>
  );
};

export default LoadingIndicator;
