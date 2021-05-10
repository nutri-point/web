import { Component as ReactComponent, ComponentType } from 'react';
import { connect } from 'react-redux';

// Actions
import { setAuthUser } from 'actions/session';
import { localStorageKey } from './constants';

export type WithAuthenticationProps = typeof mapDispatchToProps;

interface IPassTroughProps {}

const withAuthentication = <Props extends IPassTroughProps>(
  Component: ComponentType<Props>,
) => {
  class WithAuthentication extends ReactComponent<WithAuthenticationProps> {
    constructor(props: WithAuthenticationProps) {
      super(props);

      const storedUser = localStorage.getItem(localStorageKey);
      if (storedUser) {
        this.props.setAuthUser(JSON.parse(storedUser));
      }
    }

    // TODO
    componentDidMount() {
      // this.unsubscribe = this.props.firebase.onAuthUserListener(
      //   (authUser) => {
      //     // TODO: Remove all use of localStorage and test
      //     localStorage.setItem(localStorageKey, JSON.stringify(authUser));
      //     this.props.setAuthUser(authUser);
      //   },
      //   () => {
      //     localStorage.removeItem(localStorageKey);
      //     this.props.setAuthUser(null);
      //   }
      // );
    }

    // TODO
    componentWillUnmount() {
      // this.unsubscribe && this.unsubscribe();
    }

    render() {
      const { setAuthUser, ...otherProps } = this.props;

      return <Component {...(otherProps as Props)} />;
    }
  }

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

const mapDispatchToProps = { setAuthUser };

export default withAuthentication;
