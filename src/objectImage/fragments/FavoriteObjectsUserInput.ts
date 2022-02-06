import { gql } from 'graphql-tag';

export const FavoriteObjectsUserInput = gql`
  input FavoriteObjectsUserInput {
    userId: ID!
    objectId: ID!
  }
`;
