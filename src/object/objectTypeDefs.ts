import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';
import { schema } from '../common/schema';
import { ObjectInput } from './fragments/ObjectInput';

export const objectTypeDefs: DocumentNode = gql`
  ${schema}
  ${ObjectInput}

  type Mutation {
    createObject(input: ObjectInput): Object!
  }

  type Query {
    findAllObject: [Object]
  }
`;
