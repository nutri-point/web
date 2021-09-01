import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import { CssBaseline } from '@material-ui/core';
import SignIn from 'pages/SignIn';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import LoadingPage from 'pages/LoadingPage';
import {
  withAuthentication,
  WithAuthenticationProps,
} from 'components/Session';

// Helpers
import { Routes } from 'helpers/constants';
import { RootState } from 'types';
import { selectAuthUser, selectIsLoadingAuthUser } from './selectors';

interface OwnProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  WithAuthenticationProps;

const App = ({ authUser, isLoadingAuthUser }: Props): JSX.Element => {
  console.log(`authUser`, authUser);
  return (
    <main>
      <CssBaseline />
      {/* <Helmet>
        <title>Nutri App</title>
      </Helmet> */}

      {isLoadingAuthUser ? (
        <LoadingPage />
      ) : (
        <Switch>
          {authUser && <Redirect from={Routes.SIGN_IN} to={Routes.HOME} />}
          {!authUser && <Redirect to={Routes.SIGN_IN} />}

          <Route path={Routes.SIGN_IN} component={SignIn} />
          <Route path={Routes.HOME} component={Home} />
          <Route component={NotFound} />
        </Switch>
      )}
      <ToastContainer limit={3} position="bottom-right" />
    </main>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    authUser: selectAuthUser(state),
    isLoadingAuthUser: selectIsLoadingAuthUser(state),
  };
};

const mapDispatchToProps = {};

export default withAuthentication(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
