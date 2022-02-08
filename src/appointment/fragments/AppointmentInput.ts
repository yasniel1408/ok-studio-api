import { gql } from 'graphql-tag';

export const AppointmentInput = gql`
  input AppointmentInput {
    clientId: ID!
    contractId: ID!
    accepted: String!
    notes: String!
  }
`;
