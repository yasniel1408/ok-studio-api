"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.schema = (0, graphql_tag_1.gql) `
  type Type {
    id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
    objects: [Object]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    role: String!
    createdAt: String!
    updatedAt: String!
    objects: [Object]!
  }

  type FavoriteObjectsUser {
    id: ID!
    user: User!
    userId: ID!
    objectId: ID!
    object: Object!
    createdAt: String!
    updatedAt: String!
  }

  type Object {
    id: ID!
    name: String!
    price: Float!
    description: String!
    typeId: ID!
    type: Type!
    category: String!
    subcategory: String!
    images: [ObjectImage]!
    users: [FavoriteObjectsUser]!
    createdAt: String!
    updatedAt: String!
  }

  type ObjectImage {
    id: ID!
    url: String!
    object: Object!
    objectId: ID!
    createdAt: String!
    updatedAt: String!
  }

  type Client {
    id: ID!
    name: String!
    age: Int!
    mobile: String!
    homePhone: String!
    notes: String!
    createdAt: String!
    updatedAt: String!
  }

  type Contract {
    id: ID!
    name: String!
    typeId: ID!
    createdAt: String!
    updatedAt: String!
  }

  type SampleImage {
    id: ID!
    typeId: ID!
    type: Type!
    url: String!
    createdAt: String!
    updatedAt: String!
  }

  type Appointment {
    id: ID!
    clientId: ID!
    client: Client!
    contractId: ID!
    contract: Client!
    accepted: String!
    notes: String!
    createdAt: String!
    updatedAt: String!
  }
`;
//# sourceMappingURL=schema.js.map