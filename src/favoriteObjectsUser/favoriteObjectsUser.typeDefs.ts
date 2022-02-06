import { gql } from 'apollo-server';

export default gql`
  type FavoriteObjectsUser {
    id: ID!
    user: User!
    userId: ID!
    object: Object!
    objectId: ID!
    createdAt: String!
    updatedAt: String!
  }

  input FavoriteObjectsUserInput {
    userId: ID!
    objectId: ID!
  }

  type Mutation {
    createFavoriteObjectsUser(input: FavoriteObjectsUserInput): FavoriteObjectsUser!
  }

  type Query {
    findAllFavoriteObjectsUser: [FavoriteObjectsUser]
  }
`;
