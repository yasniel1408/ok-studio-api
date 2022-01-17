import { PrismaClient, User } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import gql from 'graphql-tag';
import EasyGraphQLTester from 'easygraphql-tester';

import { userTypeDefs } from '../user';
import { typeTypeDefs } from '../type';
import { typeResolver } from '../type/type.resolver';
import { userResolver } from '../user/user.resolver';

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
