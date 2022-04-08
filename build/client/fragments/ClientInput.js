"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientInput = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.ClientInput = (0, graphql_tag_1.gql) `
  input ClientInput {
    name: String!
    age: Int!
    mobile: String!
    homePhone: String!
    notes: String!
  }
`;
//# sourceMappingURL=ClientInput.js.map