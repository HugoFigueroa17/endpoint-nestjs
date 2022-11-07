import { UserRol } from './user-rol.enum';

export class CreateUserDto {
  fullname: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  age: number;
  rol: UserRol;
  isActive: boolean;
}
