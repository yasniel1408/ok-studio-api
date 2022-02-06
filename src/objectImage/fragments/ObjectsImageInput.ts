import { gql } from 'graphql-tag';

export const ObjectsImageInput = gql`
  input ObjectsImageInput {
    objectId: ID!
    url: String!
  }
`;
