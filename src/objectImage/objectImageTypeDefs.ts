import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';
import { schema } from '../common/schema';
import { FavoriteObjectsUserInput } from './fragments/FavoriteObjectsUserInput';

export const objectImageTypeDefs: DocumentNode = gql`
  ${schema}
  ${FavoriteObjectsUserInput}

  type Mutation {
    createFavoriteObjectsUser(input: FavoriteObjectsUserInput): FavoriteObjectsUser!
  }

  type Query {
    findAllFavoriteObjectsUser: [FavoriteObjectsUser]
  }
`;
