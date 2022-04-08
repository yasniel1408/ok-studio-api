'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.userTypeDefs = void 0;
const graphql_tag_1 = require('graphql-tag');
const schema_1 = require('../common/schema');
const UserCredentials_1 = require('./fragments/UserCredentials');
const UserInput_1 = require('./fragments/UserInput');
const UserWhereInput_1 = require('./fragments/UserWhereInput');
exports.userTypeDefs = (0, graphql_tag_1.gql)`
  ${schema_1.schema}
  ${UserWhereInput_1.UserWhereInput}
  ${UserInput_1.UserInput}
  ${UserCredentials_1.UserCredentials}

  type Mutation {
    signup(input: UserInput): User!
    login(input: UserCredentials): String!
  }

  type Query {
    findAllUsers(skip: Int, take: Int, where: UserWhereInput): [User]
  }
`;
//# sourceMappingURL=userTypeDefs.js.map
