import { Grid, Typography } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import ThemeToggle from 'components/ThemeToggle';
import MenuButton from 'components/MenuButton';
import Membership from 'pages/Membership';
import NotFound from 'pages/NotFound';

// Icons
import {
  RiGroupLine as UsersIcon,
  RiBookOpenLine as FoodMenuIcon,
  RiRestaurant2Line as MealIcon,
  RiMedalLine as MembershipIcon,
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
          <MenuButton
            path={Routes.MEMBERSHIP}
            title="Membership"
            icon={MembershipIcon}
          />
        </Grid>
      </Grid>
      <div style={{ flexGrow: 1 }}>
        <ThemeToggle />

        <Switch>
          <Route exact path={Routes.HOME} component={() => <div>Home</div>} />
          <Route exact path={Routes.USERS} component={() => <div>Users</div>} />
          <Route
            exact
            path={Routes.FOOD_MENUS}
            component={() => <div>Menus</div>}
          />
          <Route exact path={Routes.MEALS} component={() => <div>Meals</div>} />
          <Route exact path={Routes.MEMBERSHIP} component={Membership} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Grid>
  );
};

export default Home;
