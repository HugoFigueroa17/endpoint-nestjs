import { UserRol } from './user-rol.enum';

export class UpdateUserDto {
  fullname?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  age?: number;
  rol?: UserRol;
  isActive?: boolean;
}
