import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { userResolver, userTypeDefs } from './src/user';
import getUser from './src/common/jwt/getUser';

process.env.JWT_SECRET = process.env.JWT_SECRET || 'okstudiosupersecretkey';

const orm = new PrismaClient();

const server = new ApolloServer({
  typeDefs: [userTypeDefs],
  resolvers: [userResolver],
  context: ({ req }) => {
    const authorization = req.headers.authorization || '';
    const user = getUser({ authorization });
    console.log(user);
    return { orm, user };
  }
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
