import { gql } from 'graphql-tag';

export const schema = gql`
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
`;