import { ApiProperty } from '@nestjs/swagger';
import { UserRol } from './user-rol.enum';

export class CreateUserDto {
  @ApiProperty()
  fullname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty({
    description: 'The age of a user',
    minimum: 0,
    maximum: 100,
    default: 0,
  })
  age: number;

  @ApiProperty({ enum: UserRol, enumName: 'UserRol' })
  rol: UserRol;

  @ApiProperty()
  isActive: boolean;
}
