import { buildSchemaSync } from 'type-graphql';
import { UserResolver } from './modules/users/graphql/users.resolvers';

export const schema = buildSchemaSync({
  resolvers: [UserResolver],
});
