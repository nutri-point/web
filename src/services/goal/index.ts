import { api } from 'services';
import { ApiRoutes } from 'services/constants';
import { GoalGetResponse } from 'services/responses';

export default class GoalService {
  static getAllGoals = () => api.get<GoalGetResponse>(ApiRoutes.Goal);
}
