// import { gql } from 'graphql-tag';
// import { GraphQLSchema } from 'graphql';
// import { SchemaLink } from '@apollo/client/link/schema';
// import {
//   ApolloClient,
//   ApolloQueryResult,
//   FetchResult,
//   InMemoryCache,
//   MutationOptions,
//   NormalizedCacheObject,
//   OperationVariables,
//   QueryOptions
// } from '@apollo/client/core';

// class MyTestClient {
//   private readonly apolloClient: ApolloClient<NormalizedCacheObject>;

//   public constructor(context?: {}, schema?: GraphQLSchema) {
//     this.apolloClient = new ApolloClient({
//       cache: new InMemoryCache(),
//       link: new SchemaLink({
//         schema,
//         context,
//       })
//     });
//   }

//   public async query<T = any>(queryOptions: QueryOptions): Promise<ApolloQueryResult<T>> {
//     return this.apolloClient.query<T>({
//       fetchPolicy: 'no-cache',
//       ...queryOptions
//     });
//   }

//   public async mutate(
//     mutationOptions: MutationOptions<AdminMutation, OperationVariables>
//   ): Promise<FetchResult<AdminMutation>> {
//     return this.apolloClient.mutate<AdminMutation>({
//       fetchPolicy: 'no-cache',
//       ...mutationOptions
//     });
//   }
// }

// /// para usarlo

// const tuCliente = new MyTestClient(....);

// const mutation = gql`
//       mutation Xxx($input: TuTipo!) {
//         xxx(input: $input) {
//           ...
//         }
//       }
//     `;

// const variables = {
//       input: {
//         //...
//       }
//     };

// test('algo', async () => {
//     await expect(tuCliente.mutate({ mutation, variables }))
// });
