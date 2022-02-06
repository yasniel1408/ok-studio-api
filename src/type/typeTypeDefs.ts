import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';
import { schema } from '../common/schema';
import { TypeInput } from './fragments/TypeInput';

export const typeTypeDefs: DocumentNode = gql`
  ${schema}
  ${TypeInput}

  type Mutation {
    createType(input: TypeInput): Type!
  }

  type Query {
    findAllTypes: [Type]
  }
`;
