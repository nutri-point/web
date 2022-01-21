import { api } from 'services';
import { ApiRoutes } from 'services/constants';
import { MealGetResponse } from 'services/responses';

export default class MealService {
  static getAll = () => api.get<MealGetResponse[]>(ApiRoutes.Meal);
}
