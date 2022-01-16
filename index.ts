import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { userResolver, userTypeDefs } from './src/user';
import getUser from './src/common/jwt/getUser';
import { typeResolver, typeTypeDefs } from './src/type';

process.env.JWT_SECRET = process.env.JWT_SECRET || 'okstudiosupersecretkey';
const port = process.env.PORT || 4000;
const orm = new PrismaClient();

const server = new ApolloServer({
  typeDefs: [userTypeDefs, typeTypeDefs],
  resolvers: [userResolver, typeResolver],
  context: ({ req }) => {
    const authorization = req.headers.authorization || '';
    const user = getUser({ authorization });
    return { orm, user };
  }
});

server.listen({ port }).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
