import { container } from 'tsyringe';
import { ObjectType, Field, Query, Resolver, ID } from 'type-graphql';
import { GetUsersService } from '../services/GetUsersService';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  username: string;

  @Field()
  createAt: Date;
}

@Resolver(User)
export class UserResolver {
  @Query((returns) => User)
  async allUsers() {
    const getUsersService = container.resolve(GetUsersService);

    const users = getUsersService.execute();

    return users;
  }
}
