"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../common/schema");
const TypeInput_1 = require("./fragments/TypeInput");
exports.typeTypeDefs = (0, apollo_server_1.gql) `
  ${schema_1.schema}
  ${TypeInput_1.TypeInput}

  type Mutation {
    createType(input: TypeInput): Type!
  }

  type Query {
    findAllTypes: [Type]
  }
`;
//# sourceMappingURL=typeTypeDefs.js.map