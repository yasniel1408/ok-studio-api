import { gql } from 'apollo-server';

const typeTypeDefs = gql`
  type Type {
    id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  input TypeInput {
    name: String!
  }

  type Mutation {
    createType(input: TypeInput): Type!
  }

  type Query {
    findAllTypes: [Type]
  }
`;

export default typeTypeDefs;
