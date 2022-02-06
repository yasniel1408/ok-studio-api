import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';
import { schema } from '../common/schema';
import { ObjectsImageInput } from './fragments/ObjectsImageInput';

export const objectImageTypeDefs: DocumentNode = gql`
  ${schema}
  ${ObjectsImageInput}

  type Mutation {
    createObjectImage(input: ObjectsImageInput): ObjectImage!
  }

  type Query {
    findAllObjectImage: [ObjectImage]
  }
`;
