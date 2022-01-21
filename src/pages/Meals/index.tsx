import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Grid } from '@mui/material';
import LoadingIndicator from 'components/LoadingIndicator';

import { MealGetResponse, MealService } from 'services';
import MealCard from './MealCard';

type Props = {};

const Meals = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState<MealGetResponse[]>([]);

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await MealService.getAll();
      setMeals(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <Grid container>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        meals.map((meal) => <MealCard key={meal.id} meal={meal} />)
      )}
    </Grid>
  );
};

export default Meals;
