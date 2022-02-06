import { gql } from 'graphql-tag';

export const UserCredentials = gql`
  input UserCredentials {
    email: String!
    password: String!
  }
`;
