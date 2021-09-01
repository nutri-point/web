export interface UserGetResponse {
  readonly id: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly height: number;
  readonly weight: number;
  readonly dateOfBirth: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly isActive: boolean;
  readonly roleId: number;
}
