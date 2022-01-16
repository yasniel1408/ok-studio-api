import { gql } from 'apollo-server';

const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
    roleId: String!
  }
  type Query {
    findAllUsers: [User]
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }
  type Mutation {
    createUser(input: UserInput): User
  }
`;

export default userTypeDefs;
