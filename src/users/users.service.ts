import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: {
        username: user.username,
      },
    });

    if (userFound) {
      return new HttpException('¡El usuario ya existe!', HttpStatus.CONFLICT);
    }

    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  } //createUser

  getUsers() {
    return this.userRepository.find();
  } //getUsers

  async getUser(id: number) {
    const userFound = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      return new HttpException('¡El usuario no existe!', HttpStatus.NOT_FOUND);
    }

    return userFound;
  } //getUser

  async deleteUser(id: number) {
    const result = await this.userRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('¡El usuario no existe!', HttpStatus.NOT_FOUND);
    }

    return result;
  } //deleteUser

  async updateUser(id: number, user: UpdateUserDto) {

    const userFound = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      return new HttpException('¡El usuario no existe!', HttpStatus.NOT_FOUND);
    }

    const userUpdated = Object.assign(userFound, user);

    return this.userRepository.save(userUpdated);
  } //updateUser
}
