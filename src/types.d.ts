import { StateType } from 'typesafe-actions';
import rootReducer from 'reducers';

export type RootState = StateType<typeof rootReducer>;

interface User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly height: number;
  readonly weight: number;
  readonly dateOfBirth: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly isActive: boolean;
  readonly role?: UserRole;
}

interface UserRole {
  readonly id: number;
  readonly name: string;
  readonly rank: number;
}
