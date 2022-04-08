"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectImageTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../common/schema");
const ObjectsImageInput_1 = require("./fragments/ObjectsImageInput");
exports.objectImageTypeDefs = (0, apollo_server_1.gql) `
  ${schema_1.schema}
  ${ObjectsImageInput_1.ObjectsImageInput}

  type Mutation {
    createObjectImage(input: ObjectsImageInput): ObjectImage!
  }

  type Query {
    findAllObjectImage: [ObjectImage]
  }
`;
//# sourceMappingURL=objectImageTypeDefs.js.map