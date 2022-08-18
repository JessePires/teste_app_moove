import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return await this.prisma.user.create({ data });
  }

  async findAll(page: number, name: string, email: string) {
    // Mounting the Where clause for filtering name and/or email
    let whereClause = {};

    if (name !== null && email !== null) {
      whereClause = { name: { contains: name }, email: { contains: email } };
    }
    if (name !== null && email === null) {
      whereClause = { name: { contains: name } };
    } else if (name === null && email !== null) {
      whereClause = { email: { contains: email } };
    }

    return await this.prisma.user.findMany({
      take: 2,
      skip: 2 * (page - 1),
      where: whereClause,
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) throw Error('User not found!');

    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const userToBeUpdated = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userToBeUpdated) throw Error('User not found!');

    return await this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: string) {
    const userToBeRemoved = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userToBeRemoved) throw Error('User not found!');

    return await this.prisma.user.delete({ where: { id } });
  }
}
