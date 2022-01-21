import { Grid } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

// Components
import Sidebar from 'components/Sidebar';

// Pages
import Membership from 'pages/Membership';
import Meals from 'pages/Meals';
import NotFound from 'pages/NotFound';

// Helpers
import { Routes } from 'helpers/constants';

const Home = (): JSX.Element => {
  return (
    <Grid container>
      <Grid item xs={1} sm={3} xl={2}>
        <Sidebar />
      </Grid>

      <Grid xs={11} sm={9} style={{ flexGrow: 1 }}>
        <Switch>
          <Route exact path={Routes.HOME} component={() => <div>Home</div>} />
          <Route exact path={Routes.USERS} component={() => <div>Users</div>} />
          <Route
            exact
            path={Routes.FOOD_MENUS}
            component={() => <div>Menus</div>}
          />
          <Route exact path={Routes.MEALS} component={Meals} />
          <Route exact path={Routes.MEMBERSHIP} component={Membership} />
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Home;
