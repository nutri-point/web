import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import SignIn from 'components/SignIn';
import Home from 'components/Home';
import {
  withAuthentication,
  WithAuthenticationProps,
} from 'components/Session';

// Helpers
import { Routes } from 'helpers/constants';
import { RootState } from 'types';
import { selectAuthUser, selectThemeMode } from './selectors';
import NotFound from 'components/NotFound';

interface OwnProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  WithAuthenticationProps;

const App = ({ authUser }: Props): JSX.Element => {
  return (
    <div>
      <Switch>
        {authUser && <Redirect from={Routes.SIGN_IN} to={Routes.HOME} />}
        {!authUser && <Redirect exact from={Routes.HOME} to={Routes.SIGN_IN} />}

        <Route path={Routes.SIGN_IN} component={SignIn} />
        <Route exact path={Routes.HOME} component={Home} />
        <Route component={NotFound} />
      </Switch>

      <ToastContainer limit={3} position="bottom-right" />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    theme: selectThemeMode(state),
    authUser: selectAuthUser(state),
  };
};

const mapDispatchToProps = {};

export default withAuthentication(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
