"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteObjectsUserTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../common/schema");
const FavoriteObjectsUserInput_1 = require("./fragments/FavoriteObjectsUserInput");
exports.favoriteObjectsUserTypeDefs = (0, apollo_server_1.gql) `
  ${schema_1.schema}
  ${FavoriteObjectsUserInput_1.FavoriteObjectsUserInput}

  type Mutation {
    createFavoriteObjectsUser(input: FavoriteObjectsUserInput): FavoriteObjectsUser!
  }

  type Query {
    findAllFavoriteObjectsUser: [FavoriteObjectsUser]
  }
`;
//# sourceMappingURL=favoriteObjectsUserTypeDefs.js.map