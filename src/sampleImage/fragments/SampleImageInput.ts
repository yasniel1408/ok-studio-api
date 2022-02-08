import { gql } from 'graphql-tag';

export const SampleImageInput = gql`
  input SampleImageInput {
    objectId: ID!
    url: String!
  }
`;
