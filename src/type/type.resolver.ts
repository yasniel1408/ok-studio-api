import type { Type } from '@prisma/client';
import { ResolverContext } from '../@types/ResolverContext';
import verifyIfItIsAdmin from '../common/middlewares/verifyIfItIsAdmin';

export const findAllTypes = (parent: any, args: any, context: ResolverContext): Promise<Type[]> => {
  return (
    verifyIfItIsAdmin({ context }) &&
    context.orm.type.findMany({
      include: { objects: true, contracts: true, sample_images: true }
    })
  );
};

export const createType = async (
  parent: any,
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
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  createdAt: (parent) => parent.createdAt,
  updatedAt: (parent) => parent.updatedAt
};

export default {
  Query: {
    findAllTypes
  },
  Mutation: {
    createType
  },
  User: typeResolver
};
