"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInput = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.UserInput = (0, graphql_tag_1.gql) `
  input UserInput {
    name: String!
    email: String!
    password: String!
  }
`;
//# sourceMappingURL=UserInput.js.map