"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteObjectsUserInput = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.FavoriteObjectsUserInput = (0, graphql_tag_1.gql) `
  input FavoriteObjectsUserInput {
    userId: ID!
    objectId: ID!
  }
`;
//# sourceMappingURL=FavoriteObjectsUserInput.js.map