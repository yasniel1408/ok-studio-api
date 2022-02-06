import { gql } from 'graphql-tag';

export const UserWhereInput = gql`
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

export default UserWhereInput;
