import { api } from 'services';
import { ApiRoutes, Role } from 'services/constants';
import { UserGetResponse } from 'services/responses';

export default class UserService {
  static getMyUser = () => api.get<UserGetResponse>(`${ApiRoutes.User}/me`);

  static getAll = () => api.get<UserGetResponse[]>(ApiRoutes.User);

  static updateUserRole = (userId: string, roleId: Role) =>
    api.put(`${ApiRoutes.User}/${userId}/role`, { roleId });

  static setMemberRole = (userId: string) =>
    UserService.updateUserRole(userId, Role.Member);

  static setGuestRole = (userId: string) =>
    UserService.updateUserRole(userId, Role.Guest);
}
