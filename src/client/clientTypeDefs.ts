import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';
import { schema } from '../common/schema';
import { ClientInput } from './fragments/ClientInput';

export const clientTypeDefs: DocumentNode = gql`
  ${schema}
  ${ClientInput}

  type Mutation {
    createClient(input: ClientInput): Client!
  }

  type Query {
    findAllClient: [Client]
  }
`;
