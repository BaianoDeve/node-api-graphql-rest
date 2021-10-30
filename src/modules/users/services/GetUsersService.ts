import { prismaClient } from '@/prisma';
import { injectable } from 'tsyringe';

@injectable()
export class GetUsersService {
  async execute() {
    const users = await prismaClient.user.findMany();
    return users;
  }
}
