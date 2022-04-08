"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.UserWhereInput = (0, graphql_tag_1.gql) `
  input UserWhereInput {
    name: StringFilterInput
    email: StringFilterInput
  }

  input StringFilterInput {
    equals: String
    in: [String]
    notIn: [String]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: String
  }
`;
exports.default = exports.UserWhereInput;
//# sourceMappingURL=UserWhereInput.js.map