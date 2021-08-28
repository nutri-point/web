import { Grid, Typography } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import ThemeToggle from 'components/ThemeToggle';
import MenuButton from 'components/MenuButton';
import NotFound from 'components/NotFound';

// Icons
import {
  RiGroupLine as UsersIcon,
  RiBookOpenLine as FoodMenuIcon,
  RiRestaurant2Line as MealIcon,
} from 'react-icons/ri';

// Helpers
import { Routes } from 'helpers/constants';
import { useStyles } from './styles';

const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.menuContainer}
      >
        <Grid container item xs={3} style={{ maxWidth: 'none' }}>
          <Grid container justifyContent="center" alignItems="center">
            <Typography variant="h3" style={{ fontWeight: 700 }}>
              NutriApp
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={9}
          style={{ maxWidth: 'none' }}
          direction="column"
          justifyContent="center"
        >
          <MenuButton path={Routes.USERS} title="Users" icon={UsersIcon} />
          <MenuButton
            path={Routes.FOOD_MENUS}
            title="Menus"
            icon={FoodMenuIcon}
          />
          <MenuButton path={Routes.MEALS} title="Meals" icon={MealIcon} />
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <ThemeToggle />

        <Switch>
          <Route exact path={Routes.USERS} component={() => <div />} />
          <Route exact path={Routes.FOOD_MENUS} component={() => <div />} />
          <Route exact path={Routes.MEALS} component={() => <div />} />
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Home;
