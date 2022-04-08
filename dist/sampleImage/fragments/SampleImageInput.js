"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleImageInput = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.SampleImageInput = (0, graphql_tag_1.gql) `
  input SampleImageInput {
    typeId: ID!
    url: String!
  }
`;
//# sourceMappingURL=SampleImageInput.js.map