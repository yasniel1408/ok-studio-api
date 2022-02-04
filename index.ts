/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server-express';
import { PrismaClient, User } from '@prisma/client';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { userResolver, userTypeDefs } from './src/user';
import getUser from './src/common/jwt/getUser';
import { typeResolver, typeTypeDefs } from './src/type';

process.env.JWT_SECRET = process.env.JWT_SECRET || 'okstudiosupersecretkey';
const port = process.env.PORT || 4000;
const orm: PrismaClient = new PrismaClient();

const app: express.Application = express();
const httpServer: http.Server = http.createServer(app);

app.use('/static', express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

(async () => {
  const apolloServer = new ApolloServer({
    typeDefs: [userTypeDefs, typeTypeDefs],
    resolvers: [userResolver, typeResolver],
    context: ({ req }) => {
      const authorization = req.headers.authorization || '';
      const user: User = getUser({ authorization });
      return { orm, user };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: '/graphql'
  });

  // Modified server startup
  await httpServer.listen({ port });
  console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
})();
