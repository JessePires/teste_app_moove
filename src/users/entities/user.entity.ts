import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  name: string;
  email: string;
  phone: string;
}
