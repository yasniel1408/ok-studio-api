import { gql } from 'graphql-tag';

export const AppointmentInput = gql`
  input AppointmentInput {
    name: String!
    typeId: ID!
  }
`;
