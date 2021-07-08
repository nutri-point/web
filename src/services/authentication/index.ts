import { api } from 'services';
import { ApiRoutes } from 'services/constants';
import { LogInResponse } from 'services/responses';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';

export default class AuthenticationService {
  static logIn = async (email: string, password: string) => {
    const { data } = await api.post<LogInResponse>(ApiRoutes.LogIn, {
      email,
      password,
    });

    AuthenticationService.setAuthTokens(data.accessToken, data.refreshToken);
    return data.user;
  };

  static signOut = async () => {
    AuthenticationService.removeAuthTokens();
  };

  static setAuthTokens = (accesToken: string, refreshToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accesToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  };

  static removeAuthTokens = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  };

  static getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

  static getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
}
