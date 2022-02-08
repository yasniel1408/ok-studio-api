// import { PrismaClient, User } from '@prisma/client';
// import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
// import gql from 'graphql-tag';
// import EasyGraphQLTester from 'easygraphql-tester';

// import { userTypeDefs } from '..';
// import { userResolver } from '../userResolver';

// const tester = new EasyGraphQLTester(userTypeDefs, userResolver);

// export type MockResolverContext = {
//   orm: DeepMockProxy<PrismaClient>;
//   user: User | undefined;
// };

// export type ResolverContext = {
//   orm: PrismaClient;
//   user: User | undefined;
// };

// export const createMockContext = (): MockResolverContext => {
//   return {
//     orm: mockDeep<PrismaClient>(),
//     user: undefined
//   };
// };

// let mockContext: MockResolverContext;
// let context: ResolverContext;

// beforeEach(() => {
//   mockContext = createMockContext();
//   context = mockContext as unknown as ResolverContext;
// });

// test('should return a list users', async () => {
//   const query = gql`
//     query Query($where: UserWhereInput) {
//       findAllUsers(where: $where) {
//         id
//         name
//         email
//         password
//         createdAt
//         updatedAt
//         role
//       }
//     }
//   `;
//   const result = await tester.test(query, {}, context);
//   console.log(result);
// });
