import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { userResolver, userTypeDefs } from './src/user';

process.env.JWT_SECRET = process.env.JWT_SECRET || 'okstudiosupersecretkey';

const orm = new PrismaClient();

const server = new ApolloServer({
  typeDefs: [userTypeDefs],
  resolvers: [userResolver],
  context: { orm }
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
