import { Grid, Theme, useMediaQuery } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Membership from 'pages/Membership';
import NotFound from 'pages/NotFound';

// Helpers
import { Routes } from 'helpers/constants';

const Home = (): JSX.Element => {
  return (
    <Grid container>
      <Grid item xs={1} sm={3}>
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
          <Route exact path={Routes.MEALS} component={() => <div>Meals</div>} />
          <Route exact path={Routes.MEMBERSHIP} component={Membership} />
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Home;
