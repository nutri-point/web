import { MealComponentGetResponse } from './mealComponentResponses';

export interface MealGetResponse {
  readonly id: string;
  readonly name: string;
  readonly recipe?: string;
  readonly components?: MealComponentGetResponse[];
}
