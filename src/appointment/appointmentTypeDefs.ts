import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';
import { schema } from '../common/schema';
import { AppointmentInput } from './fragments/AppointmentInput';

export const appointmentTypeDefs: DocumentNode = gql`
  ${schema}
  ${AppointmentInput}

  type Mutation {
    createAppointment(input: AppointmentInput): Appointment!
  }

  type Query {
    findAllAppointment: [Appointment]
  }
`;
