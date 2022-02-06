import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';
import { schema } from '../common/schema';
import { ContractInput } from './fragments/ContractInput';

export const contractTypeDefs: DocumentNode = gql`
  ${schema}
  ${ContractInput}

  type Mutation {
    createContract(input: ContractInput): Contract!
  }

  type Query {
    findAllContract: [Contract]
  }
`;
