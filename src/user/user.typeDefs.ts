import { gql } from 'apollo-server';

const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
    role: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  input UserCredentials {
    email: String!
    password: String!
  }

  type Mutation {
    signup(input: UserInput): User!
    login(input: UserCredentials): String!
  }

  type Query {
    findAllUsers: [User]
  }
`;

export default userTypeDefs;
