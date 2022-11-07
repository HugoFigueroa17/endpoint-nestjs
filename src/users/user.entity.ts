import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRol } from './dto/user-rol.enum';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  fullname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'int' })
  age: number;

  @Column({
    type: 'enum',
    enum: UserRol,
    default: UserRol.EMPLOYEE,
  })
  rol: UserRol;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
