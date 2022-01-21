import React from 'react';

import { Grid, Paper, Typography } from '@mui/material';
import { MealGetResponse } from 'services';

import { useCardStyles } from './styles';

type Props = {
  readonly meal: MealGetResponse;
};

const MealCard = ({ meal }: Props) => {
  const classes = useCardStyles();

  // TODO: meal image
  // TODO: expand card to see recipe and more meal components
  return (
    <Paper variant="outlined" className={classes.card}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2">{meal.name}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MealCard;
