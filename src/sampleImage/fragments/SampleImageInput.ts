import { gql } from 'graphql-tag';

export const SampleImageInput = gql`
  input SampleImageInput {
    typeId: ID!
    url: String!
  }
`;
