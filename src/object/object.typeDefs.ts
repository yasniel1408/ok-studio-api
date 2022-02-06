import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
    role: String!
  }

  type FavoriteObjectsUser {
    id: ID!
    user: User!
    userId: ID!
    object: Object!
    objectId: ID!
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

  type Type {
    id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
    objects: [Object]!
  }

  input ObjectInput {
    name: String!
    price: Float!
    description: String!
    typeId: ID!
    category: String!
    subcategory: String!
  }

  type Mutation {
    createObject(input: ObjectInput): Object!
  }

  type Query {
    findAllObject: [Object]
  }
`;
