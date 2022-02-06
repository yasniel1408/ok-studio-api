import { gql } from 'graphql-tag';

export const UserInput = gql`
  input UserInput {
    name: String!
    email: String!
    password: String!
  }
`;
