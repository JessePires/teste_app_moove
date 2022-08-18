import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  constructor(name: string, email: string, phone: string) {
    super();
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
}
