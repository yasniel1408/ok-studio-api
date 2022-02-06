import type { Client } from '@prisma/client';
import { ResolverContext } from '../@types/ResolverContext';
import { ResolverParent } from '../@types/ResolverParent';
import verifyIfItIsAdmin from '../common/middlewares/verifyIfItIsAdmin';

export const findAllClient = (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Client[]> => {
  return (
    verifyIfItIsAdmin({ context }) &&
    context.orm.client.findMany({
      include: { appointments: true }
    })
  );
};

export const createClient = async (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Client> => {
  const data = args.input;
  const client =
    verifyIfItIsAdmin({ context }) &&
    (await context.orm.client.create({
      data
    }));
  return client;
};

export const clientResolver: Record<keyof Client, (parent: Client) => unknown> = {
  id: ({ id }) => id,
  name: ({ name }) => name,
  age: ({ age }) => age,
  mobile: ({ mobile }) => mobile,
  homePhone: ({ homePhone }) => homePhone,
  notes: ({ notes }) => notes,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
};

export default {
  Query: {
    findAllClient
  },
  Mutation: {
    createClient
  },
  Client: clientResolver
};
