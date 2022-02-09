import { ApolloServer } from 'apollo-server-express';
import { PrismaClient, User } from '@prisma/client';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import dotenv from 'dotenv';
import getUser from './common/jwt/getUser';
import { userResolver, userTypeDefs } from './user';
import { typeResolver, typeTypeDefs } from './type';
import { favoriteObjectsUserResolver, favoriteObjectsUserTypeDefs } from './favoriteObjectsUser';
import { objectResolver, objectTypeDefs } from './object';
import { objectImageResolver, objectImageTypeDefs } from './objectImage';
import { clientResolver, clientTypeDefs } from './client';
import { contractResolver, contractTypeDefs } from './contract';
import { sampleImageResolver, sampleImageTypeDefs } from './sampleImage';
import { appointmentResolver, appointmentTypeDefs } from './appointment';

dotenv.config();
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
  res.sendFile(path.join(__dirname, '../public/index.html'));
  res.json({ api: 'OK STUDIO' });
});

(async () => {
  const apolloServer = new ApolloServer({
    typeDefs: [
      userTypeDefs,
      typeTypeDefs,
      favoriteObjectsUserTypeDefs,
      objectTypeDefs,
      objectImageTypeDefs,
      clientTypeDefs,
      contractTypeDefs,
      sampleImageTypeDefs,
      appointmentTypeDefs
    ],
    resolvers: [
      userResolver,
      typeResolver,
      favoriteObjectsUserResolver,
      objectResolver,
      objectImageResolver,
      clientResolver,
      contractResolver,
      sampleImageResolver,
      appointmentResolver
    ],
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

  await httpServer.listen({ port });
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
})();
