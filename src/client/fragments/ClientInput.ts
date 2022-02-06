import { gql } from 'graphql-tag';

export const ClientInput = gql`
  input ClientInput {
    name: String!
    age: Int!
    mobile: String!
    homePhone: String!
    notes: String!
  }
`;
