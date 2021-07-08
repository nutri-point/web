import { UserGetResponse } from './userResponses';

export interface LogInResponse {
  readonly user: UserGetResponse;
  readonly accessToken: string;
  readonly refreshToken: string;
}
