import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('')
  findAll(
    @Query('page') page: number,
    @Query('name') name: string,
    @Query('email') email: string,
  ) {
    return this.usersService.findAll(page, name, email);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.usersService.findOne(id);
    } catch (exception) {
      throw new NotFoundException(exception.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return await this.usersService.update(id, updateUserDto);
    } catch (exception) {
      throw new NotFoundException(exception.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.usersService.remove(id);
    } catch (exception) {
      throw new NotFoundException(exception.message);
    }
  }
}
