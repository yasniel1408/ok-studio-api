'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.appointmentTypeDefs = void 0;
const apollo_server_1 = require('apollo-server');
const schema_1 = require('../common/schema');
const AppointmentInput_1 = require('./fragments/AppointmentInput');
exports.appointmentTypeDefs = (0, apollo_server_1.gql)`
  ${schema_1.schema}
  ${AppointmentInput_1.AppointmentInput}

  type Mutation {
    createAppointment(input: AppointmentInput): Appointment!
  }

  type Query {
    findAllAppointment: [Appointment]
  }
`;
//# sourceMappingURL=appointmentTypeDefs.js.map
