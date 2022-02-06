import { DocumentNode } from 'graphql';
import { gql } from 'graphql-tag';
import { schema } from '../common/schema';
import { UserCredentials } from './fragments/UserCredentials';
import { UserInput } from './fragments/UserInput';
import { UserWhereInput } from './fragments/UserWhereInput';

export const userTypeDefs: DocumentNode = gql`
  ${schema}
  ${UserWhereInput}
  ${UserInput}
  ${UserCredentials}

  type Mutation {
    signup(input: UserInput): User!
    login(input: UserCredentials): String!
  }

  type Query {
    findAllUsers(skip: Int, take: Int, where: UserWhereInput): [User]
  }
`;
