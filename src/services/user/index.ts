import { api } from 'services';
import { ApiRoutes } from 'services/constants';
import { UserGetResponse } from 'services/responses';

export default class UserService {
  static getMyUser = () => api.get<UserGetResponse>(`${ApiRoutes.User}/me`);
}
