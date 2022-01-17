import { PrismaClient, User } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import gql from 'graphql-tag';
import EasyGraphQLTester from 'easygraphql-tester';

import { userTypeDefs } from '..';
import { typeTypeDefs } from '../../type';
import { typeResolver } from '../../type/type.resolver';
import { userResolver } from '../user.resolver';

const typeDefs = [userTypeDefs, typeTypeDefs];
const resolvers = [userResolver, typeResolver];

const tester = new EasyGraphQLTester(typeDefs, resolvers);

export type MockResolverContext = {
  orm: DeepMockProxy<PrismaClient>;
  user: User | undefined;
};

export type ResolverContext = {
  orm: PrismaClient;
  user: User | undefined;
};

export const createMockContext = (): MockResolverContext => {
  return {
    orm: mockDeep<PrismaClient>(),
    user: undefined
  };
};

let mockContext: MockResolverContext;
let context: ResolverContext;

beforeEach(() => {
  mockContext = createMockContext();
  context = mockContext as unknown as ResolverContext;
});

test('should return a list users', async () => {
  const query = gql`
    query Query($where: UserWhereInput) {
      findAllUsers(where: $where) {
        id
        name
        email
        password
        createdAt
        updatedAt
        role
      }
    }
  `;
  const result = await tester.test(query, {}, context);
  console.log(result);
});
