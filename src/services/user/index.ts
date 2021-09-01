import { api } from 'services';
import { ApiRoutes, Role } from 'services/constants';
import { UserGetResponse } from 'services/responses';

export default class UserService {
  static getMyUser = () => api.get<UserGetResponse>(`${ApiRoutes.User}/me`);

  static getAll = () => api.get<UserGetResponse[]>(ApiRoutes.User);

  static updateUserRole = (userId: number, role: Role) =>
    api.put(`${ApiRoutes.User}/${userId}/${role}`);
}
