import { User } from 'types';

export interface LogInResponse {
  readonly user: User;
  readonly accessToken: string;
  readonly refreshToken: string;
}
