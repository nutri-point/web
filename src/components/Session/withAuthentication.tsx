import { Component as ReactComponent, ComponentType } from 'react';
import { connect } from 'react-redux';

// Actions
import { setAuthUser, setIsLoadingAuthUser } from 'actions/session';
import { AuthenticationService, UserService } from 'services';

export type WithAuthenticationProps = typeof mapDispatchToProps;

interface IPassTroughProps {}

const withAuthentication = <Props extends IPassTroughProps>(
  Component: ComponentType<Props>,
) => {
  class WithAuthentication extends ReactComponent<WithAuthenticationProps> {
    async componentDidMount() {
      const accessToken = AuthenticationService.getAccessToken();

      if (accessToken) {
        this.props.setIsLoadingAuthUser(true);
        try {
          const { data } = await UserService.getMyUser();
          this.props.setAuthUser(data);
        } catch {
        } finally {
          this.props.setIsLoadingAuthUser(false);
        }
      }
    }

    render() {
      const { setAuthUser, setIsLoadingAuthUser, ...otherProps } = this.props;

      return <Component {...(otherProps as Props)} />;
    }
  }

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

const mapDispatchToProps = { setAuthUser, setIsLoadingAuthUser };

export default withAuthentication;
