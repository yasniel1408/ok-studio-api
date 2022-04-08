'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ObjectInput = void 0;
const graphql_tag_1 = require('graphql-tag');
exports.ObjectInput = (0, graphql_tag_1.gql)`
  input ObjectInput {
    name: String!
    price: Float!
    description: String!
    typeId: ID!
    category: String!
    subcategory: String!
  }
`;
//# sourceMappingURL=ObjectInput.js.map
