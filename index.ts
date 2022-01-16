import { ApolloServer } from 'apollo-server';

const typeDefs = `
  type Query{
      info: String
  }
`;

const resolvers = {
  Query: {
    info: () => 'This is the API whit GraphQL'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
