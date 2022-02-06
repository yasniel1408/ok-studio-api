import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
    role: String!
  }

  input UserWhereInput {
    name: StringFilterInput
    email: StringFilterInput
  }

  input StringFilterInput {
    equals: String
    in: [String]
    notIn: [String]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: String
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
    findAllUsers(skip: Int, take: Int, where: UserWhereInput): [User]
  }
`;
