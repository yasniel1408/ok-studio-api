import { gql } from 'graphql-tag';

export const ContractInput = gql`
  input ContractInput {
    name: String!
    typeId: ID!
  }
`;
