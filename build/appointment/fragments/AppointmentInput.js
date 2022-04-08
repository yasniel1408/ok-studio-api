'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AppointmentInput = void 0;
const graphql_tag_1 = require('graphql-tag');
exports.AppointmentInput = (0, graphql_tag_1.gql)`
  input AppointmentInput {
    clientId: ID!
    contractId: ID!
    accepted: String!
    notes: String!
  }
`;
//# sourceMappingURL=AppointmentInput.js.map
