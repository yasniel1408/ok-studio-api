"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../common/schema");
const ClientInput_1 = require("./fragments/ClientInput");
exports.clientTypeDefs = (0, apollo_server_1.gql) `
  ${schema_1.schema}
  ${ClientInput_1.ClientInput}

  type Mutation {
    createClient(input: ClientInput): Client!
  }

  type Query {
    findAllClient: [Client]
  }
`;
//# sourceMappingURL=clientTypeDefs.js.map