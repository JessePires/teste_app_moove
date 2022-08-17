import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  findAll(page: number, name: string, email: string) {
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

    return this.prisma.user.findMany({
      take: 2,
      skip: 2 * (page - 1),
      where: whereClause,
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
