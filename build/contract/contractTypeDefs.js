"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../common/schema");
const ContractInput_1 = require("./fragments/ContractInput");
exports.contractTypeDefs = (0, apollo_server_1.gql) `
  ${schema_1.schema}
  ${ContractInput_1.ContractInput}

  type Mutation {
    createContract(input: ContractInput): Contract!
  }

  type Query {
    findAllContract: [Contract]
  }
`;
//# sourceMappingURL=contractTypeDefs.js.map