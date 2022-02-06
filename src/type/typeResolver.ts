import type { Type } from '@prisma/client';
import { ResolverParent } from '../common/@types/ResolverParent';
import { ResolverContext } from '../common/@types/ResolverContext';
import verifyIfItIsAdmin from '../common/middlewares/verifyIfItIsAdmin';

export const findAllTypes = (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Type[]> => {
  return (
    verifyIfItIsAdmin({ context }) &&
    context.orm.type.findMany({
      include: { objects: true, contracts: true, sample_images: true }
    })
  );
};

export const createType = async (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Type> => {
  const data = args.input;
  const user =
    verifyIfItIsAdmin({ context }) &&
    (await context.orm.type.create({
      data
    }));
  return user;
};

export const typeResolver: Record<keyof Type, (parent: Type) => unknown> = {
  id: ({ id }) => id,
  name: ({ name }) => name,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
};

export default {
  Query: {
    findAllTypes
  },
  Mutation: {
    createType
  },
  Type: typeResolver
};
