import { gql } from 'graphql-tag';

export const ObjectInput = gql`
  input ObjectInput {
    name: String!
    price: Float!
    description: String!
    typeId: ID!
    category: String!
    subcategory: String!
  }
`;
