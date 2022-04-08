'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserCredentials = void 0;
const graphql_tag_1 = require('graphql-tag');
exports.UserCredentials = (0, graphql_tag_1.gql)`
  input UserCredentials {
    email: String!
    password: String!
  }
`;
//# sourceMappingURL=UserCredentials.js.map
