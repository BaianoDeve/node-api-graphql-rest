import { prismaClient } from '@/prisma';
import { injectable } from 'tsyringe';

type CreateUserRequest = {
  name: string;
  username: string;
};

@injectable()
export class CreateUserSevice {
  async execute({ name, username }: CreateUserRequest) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        username,
      },
    });

    return user;
  }
}
