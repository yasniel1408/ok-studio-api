"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../common/schema");
const ObjectInput_1 = require("./fragments/ObjectInput");
exports.objectTypeDefs = (0, apollo_server_1.gql) `
  ${schema_1.schema}
  ${ObjectInput_1.ObjectInput}

  type Mutation {
    createObject(input: ObjectInput): Object!
  }

  type Query {
    findAllObject: [Object]
  }
`;
//# sourceMappingURL=objectTypeDefs.js.map